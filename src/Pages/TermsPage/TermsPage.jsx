const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-yellow-100">
            Contact Form Data Collection & Privacy Policy
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Last Updated */}
        <div className="mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> January 6, 2026
          </p>
        </div>

        {/* Section 1: Data Collection */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you submit our contact form, we collect the following personal
            information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              <strong>Full Name:</strong> To identify and address your inquiry
            </li>
            <li>
              <strong>Email Address:</strong> For communication and follow-up
              purposes
            </li>
            <li>
              <strong>Phone Number:</strong> To contact you directly regarding
              your inquiry
            </li>
            <li>
              <strong>Project Name:</strong> To understand which project you are
              interested in
            </li>
          </ul>
        </section>

        {/* Section 2: Data Usage */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the information you provide for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              To respond to your inquiry and provide relevant project
              information
            </li>
            <li>To keep you updated about new properties and offers</li>
            <li>
              To send promotional materials related to our real estate projects
            </li>
            <li>To improve our customer service and user experience</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>
        </section>

        {/* Section 3: Data Storage */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Data Storage & Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your information is securely stored in our database systems:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>Data is encrypted and stored in Firebase Cloud Firestore</li>
            <li>
              We implement industry-standard security measures to protect your
              data
            </li>
            <li>
              Only authorized personnel have access to customer information
            </li>
            <li>Data is backed up regularly to prevent loss</li>
          </ul>
        </section>

        {/* Section 4: Data Sharing */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Data Sharing & Third Parties
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your personal information may be shared with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>Our sales and marketing team to follow up on your inquiry</li>
            <li>
              Our integrated third-party platforms (if you have consented)
            </li>
            <li>Legal authorities if required by law</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We do not sell your personal information to any third parties
            without your explicit consent.
          </p>
        </section>

        {/* Section 5: Consent */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Your Consent
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By submitting the contact form, you explicitly consent to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>Collection and storage of your personal information</li>
            <li>
              Use of your information for marketing and promotional purposes
            </li>
            <li>
              Sending email and SMS communications about our projects and offers
            </li>
            <li>Storage of your data in our database systems</li>
          </ul>
        </section>

        {/* Section 6: Data Retention */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Data Retention Period
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this policy. Typically, we maintain
            customer data for:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              <strong>Active Leads:</strong> Up to 5 years or until conversion
            </li>
            <li>
              <strong>Customers:</strong> Throughout the business relationship
              and beyond for legal compliance
            </li>
            <li>
              <strong>Marketing Lists:</strong> Until you request removal or
              opt-out
            </li>
          </ul>
        </section>

        {/* Section 7: Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. Your Data Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>
              <strong>Right to Access:</strong> You can request a copy of your
              data
            </li>
            <li>
              <strong>Right to Correction:</strong> You can update or correct
              your information
            </li>
            <li>
              <strong>Right to Deletion:</strong> You can request deletion of
              your data
            </li>
            <li>
              <strong>Right to Opt-Out:</strong> You can unsubscribe from
              marketing communications
            </li>
          </ul>
        </section>

        {/* Section 8: Cookies & Tracking */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            8. Cookies & Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use cookies and tracking technologies to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>Remember your preferences and form data</li>
            <li>Analyze website usage and traffic</li>
            <li>Improve user experience and website functionality</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            You can disable cookies in your browser settings, but this may
            affect website functionality.
          </p>
        </section>

        {/* Section 9: Communication Preferences */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            9. Communication Preferences
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You can manage your communication preferences by:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
            <li>Clicking the "Unsubscribe" link in our emails</li>
            <li>Contacting us directly to update your preferences</li>
            <li>Requesting to be removed from our mailing list</li>
          </ul>
        </section>

        {/* Section 10: Contact & Grievance */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            10. Contact & Grievance Redressal
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions about this Terms & Conditions, privacy
            concerns, or wish to exercise your data rights, please contact us:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-800 mb-3">
              <strong>Ashwasurya Realities</strong>
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Email:</strong> geethanjali@ashwasuryarealities.com
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Phone:</strong> +918339963996
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Address:</strong> Ashwasurya Realities India Private
              Limited, 2nd Floor, No. 836, 60 Feet Rd, BEML 2nd Stage,
              Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
            </p>
          </div>
        </section>

        {/* Section 11: Policy Changes */}
        <section className="">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            11. Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Terms & Conditions policy from time to time.
            Changes will be effective immediately upon posting to this page. We
            encourage you to review this policy periodically for any updates.
          </p>
        </section>
      </div>

      {/* Footer Spacing */}
      <div className="bg-gray-100 py-8 mt-12"></div>
    </div>
  );
};

export default TermsPage;
