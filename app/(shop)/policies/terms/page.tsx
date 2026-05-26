export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-8">Terms & Conditions</h1>

        <div className="bg-white p-8 rounded-2xl border border-royal-100 space-y-8 text-royal-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">1. Introduction</h2>
            <p>Welcome to Trading Deals. These Terms and Conditions govern your use of our website and the purchase of products from our online store. By accessing or using our website, you agree to be bound by these terms.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">2. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>&quot;We&quot;, &quot;Us&quot;, &quot;Our&quot; refers to Trading Deals.</li>
              <li>&quot;You&quot;, &quot;Your&quot; refers to the user or customer.</li>
              <li>&quot;Products&quot; refers to sarees and related items available for purchase.</li>
              <li>&quot;Website&quot; refers to www.tradingdeals.com.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">3. Product Information</h2>
            <p>We make every effort to display our products as accurately as possible. However, actual colors may vary depending on your monitor and display settings. Product descriptions, pricing, and availability are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">4. Pricing & Payment</h2>
            <p>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes. We accept payments via PayU payment gateway, including credit/debit cards, UPI, net banking, and wallets. Orders are confirmed only after successful payment authorization.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">5. Order Processing</h2>
            <p>Orders are typically processed within 1-2 business days. You will receive an order confirmation email upon successful placement. We reserve the right to cancel orders in case of pricing errors, stock unavailability, or suspected fraudulent activity.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">6. Shipping & Delivery</h2>
            <p>We offer Pan India shipping. Delivery times vary by location, typically 5-7 business days for metro cities and 7-10 business days for remote areas. Free shipping is available on prepaid orders above ₹1999.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">7. Intellectual Property</h2>
            <p>All content on this website, including images, text, logos, and designs, is the property of Trading Deals and is protected by copyright and trademark laws. Unauthorized use is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">8. Limitation of Liability</h2>
            <p>Trading Deals shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our maximum liability is limited to the purchase price of the product in question.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">9. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">10. Contact</h2>
            <p>For any queries regarding these terms, please contact us at support@tradingdeals.com or call +91 90012 34567.</p>
          </section>

          <p className="text-sm text-royal-500 pt-4 border-t border-royal-100">Last updated: May 2024</p>
        </div>
      </div>
    </div>
  );
}
