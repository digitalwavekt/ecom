import { NextRequest, NextResponse } from 'next/server';
import { generatePayUHash, generateTransactionId, PAYU_BASE_URL } from '@/lib/payu';
import { getDb } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, productinfo, firstname, email, phone, udf1 } = body;

    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const merchantSalt = process.env.PAYU_MERCHANT_SALT;

    if (!merchantKey || !merchantSalt) {
      return NextResponse.json(
        { success: false, error: 'PayU credentials not configured' },
        { status: 500 }
      );
    }

    const txnid = generateTransactionId();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const payuParams = {
      key: merchantKey,
      txnid,
      amount: amount.toString(),
      productinfo,
      firstname,
      email,
      phone,
      surl: `${siteUrl}/api/payu/verify?status=success`,
      furl: `${siteUrl}/api/payu/verify?status=failure`,
      udf1: udf1 || '',
      udf2: '',
      udf3: '',
      udf4: '',
      udf5: '',
    };

    const hash = generatePayUHash(payuParams, merchantSalt);

    try {
      const db = await getDb();
      const orderData = udf1 ? JSON.parse(udf1) : {};
      const shippingAddress = orderData.address || {};
      const items = orderData.items || [];

      await db.collection('orders').insertOne({
        id: crypto.randomUUID(),
        txn_id: txnid,
        status: 'pending',
        payment_status: 'pending',
        payment_method: 'payu',
        total_amount: Number(amount),
        shipping_address: shippingAddress,
        billing_address: shippingAddress,
        items,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    } catch (error) {
      console.warn('Unable to save order to MongoDB:', error);
    }

    return NextResponse.json({
      success: true,
      paymentUrl: `${PAYU_BASE_URL}/_payment`,
      params: {
        ...payuParams,
        hash,
        service_provider: 'payu_paisa',
      },
    });
  } catch (error) {
    console.error('PayU initiate error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to initiate payment' },
      { status: 500 }
    );
  }
}
