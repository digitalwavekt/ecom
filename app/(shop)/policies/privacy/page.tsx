export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl text-maroon-900 mb-8">Privacy Policy</h1>

        <div className="bg-white p-8 rounded-2xl border border-royal-100 space-y-8 text-royal-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">1. Our Commitment to Privacy</h2>
            <p>At Trading Deals, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website or make a purchase.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, shipping/billing address</li>
              <li><strong>Payment Information:</strong> Processed securely through PayU; we do not store card details</li>
              <li><strong>Account Information:</strong> Login credentials, order history, wishlist items</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, products viewed</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate order updates and shipping notifications</li>
              <li>Provide customer support</li>
              <li>Send promotional offers and newsletters (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">4. Data Security</h2>
            <p>We implement industry-standard security measures including SSL encryption, secure payment gateways, and regular security audits. Your data is stored on secure servers managed by Supabase, which maintains SOC 2 compliance.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">5. Cookies & Tracking</h2>
            <p>We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can manage cookie preferences through your browser settings. Disabling cookies may affect website functionality.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">6. Third-Party Services</h2>
            <p>We use trusted third-party services for:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Payments:</strong> PayU Payment Gateway</li>
              <li><strong>Database:</strong> Supabase</li>
              <li><strong>Analytics:</strong> Google Analytics</li>
              <li><strong>Email:</strong> SendGrid/Resend</li>
            </ul>
            <p className="mt-2">These services have their own privacy policies and are bound by data protection regulations.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">8. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Order-related data is retained for 7 years for accounting and tax purposes.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. We encourage you to review this policy regularly.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-maroon-800 mb-3">10. Contact Us</h2>
            <p>For privacy-related concerns, contact our Data Protection Officer at privacy@tradingdeals.com.</p>
          </section>

          <p className="text-sm text-royal-500 pt-4 border-t border-royal-100">Last updated: May 2024</p>
        </div>
      </div>
    </div>
  );
}
