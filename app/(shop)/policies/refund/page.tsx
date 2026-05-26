export default function RefundPage() {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-8">Return & Refund Policy</h1>

        <div className="bg-white p-8 rounded-2xl border border-royal-100 space-y-8 text-royal-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Return Eligibility</h2>
            <p>We want you to love your purchase! If you are not completely satisfied, you may return most items within 7 days of delivery for a full refund or exchange. Items must be unused, unwashed, and in their original packaging with all tags attached.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Non-Returnable Items</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Items marked as &quot;Final Sale&quot; or &quot;Non-Returnable&quot;</li>
              <li>Customized or personalized orders</li>
              <li>Items damaged due to customer misuse or negligence</li>
              <li>Intimate wear and accessories for hygiene reasons</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">How to Initiate a Return</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Log in to your account and go to &quot;My Orders&quot;</li>
              <li>Select the order and click &quot;Request Return&quot;</li>
              <li>Choose the reason for return and preferred resolution (refund/exchange)</li>
              <li>Pack the item securely in original packaging</li>
              <li>Our courier partner will pick up the item within 2-3 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Refund Process</h2>
            <p>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. Approved refunds are processed within 5-7 business days:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Prepaid Orders:</strong> Refund to original payment method</li>
              <li><strong>UPI/Wallet:</strong> Refund within 2-5 business days</li>
              <li><strong>Credit/Debit Card:</strong> Refund within 5-7 business days</li>
              <li><strong>Net Banking:</strong> Refund within 5-7 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Exchange Policy</h2>
            <p>Exchanges are subject to product availability. If the requested exchange item is unavailable, we will issue a refund instead. Exchange shipping is free for defective or incorrect items; otherwise, standard shipping charges apply.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Damaged or Defective Items</h2>
            <p>If you receive a damaged, defective, or incorrect item, please contact us within 48 hours of delivery with photos of the issue. We will arrange a free replacement or full refund at no additional cost.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Cancellation</h2>
            <p>Orders can be cancelled before they are shipped. Once shipped, cancellations are treated as returns. To cancel, go to &quot;My Orders&quot; or contact customer support immediately.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Contact Us</h2>
            <p>For return-related queries, email returns@tradingdeals.com or call +91 90012 34567 (Mon-Sat, 10 AM - 7 PM).</p>
          </section>

          <p className="text-sm text-royal-500 pt-4 border-t border-royal-100">Last updated: May 2024</p>
        </div>
      </div>
    </div>
  );
}
