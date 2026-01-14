"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "January 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Contact_solution_text.png"
              alt="ContactSolution"
              width={896}
              height={124}
              className="h-10 w-auto"
              style={{ filter: "brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1500%) hue-rotate(190deg)" }}
              priority
            />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-primary/10 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="h-16 w-16 text-brand-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy matters to us. Learn how we collect, use, and protect your data.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="container mx-auto px-4 max-w-4xl py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Summary</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <Lock className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Bank-Level Encryption</h3>
                <p className="text-sm text-gray-600">Your data is protected with AES-256 encryption</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Eye className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Never Sold</h3>
                <p className="text-sm text-gray-600">We will never sell your personal information</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="h-5 w-5 text-brand-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">You Control Your Data</h3>
                <p className="text-sm text-gray-600">Export or delete your data anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl pb-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">

          <h2>1. Information We Collect</h2>

          <h3>1.1 Information You Provide</h3>
          <p>When you use ContactSolution, we collect information that you provide directly to us:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, company name</li>
            <li><strong>Event Information:</strong> Event names, dates, descriptions, attendee data</li>
            <li><strong>Contact Information:</strong> Names, email addresses, phone numbers, company details, social media links for attendees and contacts</li>
            <li><strong>Payment Information:</strong> Processed securely through Stripe (we do not store full credit card numbers)</li>
          </ul>

          <h3>1.2 Information Collected Automatically</h3>
          <p>We automatically collect certain information when you use our service:</p>
          <ul>
            <li><strong>Usage Data:</strong> Pages viewed, features used, time spent, QR code scans</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
            <li><strong>Log Data:</strong> IP address, access times, referring URLs</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li><strong>Provide Our Service:</strong> Create and manage events, generate digital contact cards, deliver wallet passes</li>
            <li><strong>Improve Our Service:</strong> Analyze usage patterns, develop new features, fix bugs</li>
            <li><strong>Communicate With You:</strong> Send service updates, security alerts, respond to inquiries</li>
            <li><strong>Ensure Security:</strong> Detect and prevent fraud, abuse, and security incidents</li>
            <li><strong>Comply With Legal Obligations:</strong> Respond to legal requests, enforce our terms</li>
          </ul>

          <h2>3. Data Sharing and Disclosure</h2>

          <h3>3.1 Service Providers</h3>
          <p>We share your information with trusted third-party service providers who assist us in operating our service:</p>
          <ul>
            <li><strong>Amazon Web Services (AWS):</strong> Cloud hosting and infrastructure</li>
            <li><strong>Stripe:</strong> Payment processing</li>
            <li><strong>SendGrid/Amazon SES:</strong> Email delivery</li>
            <li><strong>Apple/Google:</strong> Wallet pass delivery</li>
          </ul>

          <h3>3.2 Data Controllers</h3>
          <p>For event data, the event organizer is the data controller and ContactSolution is the data processor. Event organizers are responsible for:</p>
          <ul>
            <li>Obtaining proper consent from attendees</li>
            <li>Complying with applicable privacy laws (GDPR, CCPA)</li>
            <li>Handling data subject requests for their attendees</li>
          </ul>

          <h3>3.3 We Will NEVER:</h3>
          <ul>
            <li>Sell your personal information to third parties</li>
            <li>Share your contact information with advertisers</li>
            <li>Use your data to train AI models without explicit consent</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your information:</p>
          <ul>
            <li><strong>Encryption:</strong> AES-256 encryption for data at rest, TLS 1.3 for data in transit</li>
            <li><strong>Access Controls:</strong> Role-based access, two-factor authentication, least-privilege principles</li>
            <li><strong>Infrastructure:</strong> Secure cloud hosting with AWS, regular security updates</li>
            <li><strong>Monitoring:</strong> Continuous security monitoring and incident response procedures</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>We retain your information for as long as your account is active or as needed to provide our services:</p>
          <ul>
            <li><strong>Active Data:</strong> Retained while your account is active</li>
            <li><strong>Event Data:</strong> Retained for 90 days after event end date (unless exported by organizer)</li>
            <li><strong>Backup Data:</strong> Retained for 30 days in encrypted backups</li>
            <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
          </ul>

          <h2>6. Your Rights (GDPR & CCPA)</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data (fulfilled within 30 days)</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
            <li><strong>Portability:</strong> Export your data in a structured, machine-readable format</li>
            <li><strong>Opt-Out:</strong> California residents can opt out of &quot;sale or sharing&quot; of personal information</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
          </ul>

          <p>To exercise these rights, contact us at <strong>privacy@contactsolution.io</strong> or use our self-service data export/deletion tools in your account settings.</p>

          <h2>7. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul>
            <li>Maintain your login session</li>
            <li>Remember your preferences</li>
            <li>Analyze site usage and performance</li>
            <li>Prevent fraud and abuse</li>
          </ul>
          <p>You can control cookies through your browser settings. Note that disabling cookies may affect service functionality.</p>

          <h2>8. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in the United States and other countries where our service providers operate. We ensure adequate protections through:</p>
          <ul>
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>Data Processing Agreements (DPAs) with all service providers</li>
            <li>Compliance with GDPR requirements for international transfers</li>
          </ul>

          <h2>9. Children&apos;s Privacy</h2>
          <p>ContactSolution is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>

          <h2>10. Data Breach Notification</h2>
          <p>In the event of a data breach that affects your personal information:</p>
          <ul>
            <li>We will notify you within <strong>72 hours</strong> of discovering the breach (GDPR requirement)</li>
            <li>Notification will include the nature of the breach, data affected, and steps being taken</li>
            <li>We will notify relevant supervisory authorities as required by law</li>
          </ul>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by:</p>
          <ul>
            <li>Posting the new policy on this page with an updated &quot;Last Updated&quot; date</li>
            <li>Sending an email notification to your registered email address</li>
            <li>Displaying a prominent notice in the application</li>
          </ul>
          <p>Your continued use of ContactSolution after changes become effective constitutes acceptance of the revised policy.</p>

          <h2>12. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy or our data practices:</p>
          <ul>
            <li><strong>Email:</strong> privacy@contactsolution.io</li>
            <li><strong>Security Issues:</strong> security@contactsolution.io</li>
            <li><strong>Data Subject Requests:</strong> privacy@contactsolution.io</li>
          </ul>

          <h2>13. Supervisory Authority</h2>
          <p>If you are located in the European Economic Area (EEA) or United Kingdom, you have the right to lodge a complaint with a supervisory authority if you believe we have processed your personal data unlawfully.</p>

          <div className="bg-gray-50 border-l-4 border-brand-primary p-4 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions or Concerns?</h3>
            <p className="text-gray-700 mb-2">
              We&apos;re committed to transparency and protecting your privacy. If you have any questions about this policy or how we handle your data, please don&apos;t hesitate to reach out.
            </p>
            <Link
              href="mailto:privacy@contactsolution.io"
              className="text-brand-primary hover:underline font-semibold"
            >
              Contact Our Privacy Team →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/terms" className="hover:text-brand-primary transition">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-brand-primary transition">
              Security
            </Link>
            <Link href="/" className="hover:text-brand-primary transition">
              Home
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 ContactSolution by Base2ML. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
