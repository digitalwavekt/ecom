export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-8">Shipping & Delivery Policy</h1>

        <div className="bg-white p-8 rounded-2xl border border-royal-100 space-y-8 text-royal-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Shipping Coverage</h2>
            <p>We deliver across all states and union territories in India. We currently do not offer international shipping. All orders are shipped through our trusted logistics partners: Delhivery, Blue Dart, and India Post.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Shipping Charges</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Free Shipping:</strong> On all prepaid orders above ₹1999</li>
              <li><strong>Standard Shipping:</strong> ₹99 for orders below ₹1999</li>
              <li><strong>Cash on Delivery:</strong> Additional ₹50 COD charges apply</li>
              <li><strong>Express Delivery:</strong> Available for select pin codes at ₹149 extra</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Delivery Timeframes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-royal-200 rounded-lg">
                <thead className="bg-royal-50">
                  <tr>
                    <th className="text-left p-3 border-b border-royal-200">Region</th>
                    <th className="text-left p-3 border-b border-royal-200">Estimated Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border-b border-royal-100">Metro Cities (Delhi, Mumbai, Bangalore, Kolkata, Chennai)</td><td className="p-3 border-b border-royal-100">3-5 business days</td></tr>
                  <tr><td className="p-3 border-b border-royal-100">Tier 2 Cities (Jaipur, Pune, Ahmedabad, etc.)</td><td className="p-3 border-b border-royal-100">4-6 business days</td></tr>
                  <tr><td className="p-3 border-b border-royal-100">Other Cities & Towns</td><td className="p-3 border-b border-royal-100">5-7 business days</td></tr>
                  <tr><td className="p-3 border-b border-royal-100">Remote Areas & North East</td><td className="p-3 border-b border-royal-100">7-10 business days</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-royal-500 mt-2">* Business days exclude Sundays and public holidays.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Order Processing</h2>
            <p>Orders are processed within 24-48 hours (excluding weekends and holidays). You will receive a shipping confirmation email with tracking details once your order is dispatched. Orders placed after 4 PM will be processed the next business day.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Tracking Your Order</h2>
            <p>You can track your order in real-time through:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Your account dashboard under &quot;My Orders&quot;</li>
              <li>The tracking link sent via email and SMS</li>
              <li>Contacting our customer support with your order ID</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Delivery Attempts</h2>
            <p>Our delivery partners will attempt delivery up to 3 times. After 3 failed attempts, the package will be returned to us. Additional shipping charges may apply for re-delivery. Please ensure someone is available to receive the package or provide an alternate delivery address.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Lost or Damaged Packages</h2>
            <p>In the rare event that your package is lost or damaged in transit, please contact us within 48 hours of the expected delivery date. We will investigate with our logistics partner and provide a replacement or full refund.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">Contact</h2>
            <p>For shipping queries, email shipping@tradingdeals.com or WhatsApp +91 90012 34567.</p>
          </section>

          <p className="text-sm text-royal-500 pt-4 border-t border-royal-100">Last updated: May 2024</p>
        </div>
      </div>
    </div>
  );
}
