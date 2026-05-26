import { NextRequest, NextResponse } from 'next/server';
import { verifyPayUHash } from '@/lib/payu';
import { getDb } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const status = formData.get('status') as string;
    const txnid = formData.get('txnid') as string;
    const amount = formData.get('amount') as string;
    const productinfo = formData.get('productinfo') as string;
    const firstname = formData.get('firstname') as string;
    const email = formData.get('email') as string;
    const hash = formData.get('hash') as string;
    const udf1 = formData.get('udf1') as string;
    const udf2 = formData.get('udf2') as string;
    const udf3 = formData.get('udf3') as string;
    const udf4 = formData.get('udf4') as string;
    const udf5 = formData.get('udf5') as string;
    const key = formData.get('key') as string;
    const payuMoneyId = formData.get('mihpayid') as string;

    const merchantSalt = process.env.PAYU_MERCHANT_SALT;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    if (!merchantSalt) {
      return NextResponse.redirect(`${siteUrl}/checkout?error=server_error`);
    }

    // Verify hash
    const calculatedHash = verifyPayUHash(
      key, txnid, amount, productinfo, firstname, email,
      status, udf1, udf2, udf3, udf4, udf5, merchantSalt
    );

    const isValid = calculatedHash.toLowerCase() === (hash || '').toLowerCase();

    if (isValid && status === 'success') {
      // Parse order data from udf1
      let orderData = {};
      try {
        orderData = JSON.parse(udf1);
      } catch {
        orderData = {};
      }

      // Update order in MongoDB
      try {
        const db = await getDb();
        await db.collection('orders').updateOne(
          { txn_id: txnid },
          {
            $set: {
              payment_status: status === 'success' ? 'completed' : 'failed',
              status: status === 'success' ? 'processing' : 'cancelled',
              payment_id: payuMoneyId,
              updated_at: new Date().toISOString(),
            },
          },
          { upsert: true }
        );
      } catch (error) {
        console.warn('Unable to update order status in MongoDB:', error);
      }

      return NextResponse.redirect(`${siteUrl}/order-success?txnid=${txnid}&status=success`);
    } else {
      return NextResponse.redirect(`${siteUrl}/checkout?error=payment_failed&txnid=${txnid}`);
    }
  } catch (error) {
    console.error('PayU verify error:', error);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    return NextResponse.redirect(`${siteUrl}/checkout?error=verification_failed`);
  }
}

// Also handle GET for redirect-based verification
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get('status');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  if (status === 'success') {
    return NextResponse.redirect(`${siteUrl}/order-success`);
  } else {
    return NextResponse.redirect(`${siteUrl}/checkout?error=payment_failed`);
  }
}
