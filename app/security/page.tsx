"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, Server, Eye, FileCheck, AlertTriangle, CheckCircle2, Cloud } from "lucide-react";

export default function SecurityPage() {
  const lastUpdated = "November 2025";

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
      <section className="bg-gradient-to-b from-brand-primary to-brand-primary/90 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="h-20 w-20 mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">Security & Trust Center</h1>
          <p className="text-xl opacity-90 mb-8">
            Your data security is our top priority. Learn how we protect your information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5" />
                <span className="font-semibold">AES-256 Encryption</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Privacy First</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <Server className="h-5 w-5" />
                <span className="font-semibold">99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <SecurityCard
            icon={<Lock className="h-8 w-8 text-brand-primary" />}
            title="Data Encryption"
            description="All data encrypted at rest with AES-256 and in transit with TLS 1.3"
            status="Implemented"
          />
          <SecurityCard
            icon={<Server className="h-8 w-8 text-brand-primary" />}
            title="Secure Infrastructure"
            description="Hosted on AWS with security headers, rate limiting, and audit logging"
            status="Implemented"
          />
          <SecurityCard
            icon={<Eye className="h-8 w-8 text-brand-primary" />}
            title="Privacy by Design"
            description="Built with privacy-first principles aligned with GDPR and CCPA requirements"
            status="Implemented"
          />
          <SecurityCard
            icon={<FileCheck className="h-8 w-8 text-brand-primary" />}
            title="Access Controls"
            description="Role-based access control (RBAC) definitions with granular permissions"
            status="Implemented"
          />
          <SecurityCard
            icon={<AlertTriangle className="h-8 w-8 text-brand-primary" />}
            title="Incident Response"
            description="24/7 monitoring with 72-hour breach notification commitment"
            status="Implemented"
          />
          <SecurityCard
            icon={<Cloud className="h-8 w-8 text-brand-primary" />}
            title="Regular Backups"
            description="Automated encrypted backups with 30-day retention"
            status="Implemented"
          />
        </div>
      </section>

      {/* Detailed Security Practices */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Security Practices</h2>

          <div className="space-y-8">
            {/* Data Encryption */}
            <div className="border-l-4 border-brand-primary pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Data Encryption</h3>
              <p className="text-gray-700 mb-3">
                We use industry-standard encryption to protect your data at every stage:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>At Rest:</strong> AES-256 encryption for all data stored in our databases (DynamoDB) and file storage (S3)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>In Transit:</strong> TLS 1.3 encryption for all data transmitted between your device and our servers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Backups:</strong> All backup data is encrypted before storage</span>
                </li>
              </ul>
            </div>

            {/* Infrastructure Security */}
            <div className="border-l-4 border-brand-primary pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Infrastructure Security</h3>
              <p className="text-gray-700 mb-3">
                ContactSolution is hosted on Amazon Web Services (AWS), a SOC 2 Type II certified cloud provider:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Data Location:</strong> US East (N. Virginia) region with geographic redundancy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Serverless Architecture:</strong> Lambda functions with automatic scaling and isolation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>DDoS Protection:</strong> AWS Shield and CloudFront for traffic filtering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Network Security:</strong> Private networks, security groups, and least-privilege access</span>
                </li>
              </ul>
            </div>

            {/* Access Controls */}
            <div className="border-l-4 border-brand-primary pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Access Controls</h3>
              <p className="text-gray-700 mb-3">
                We implement strict access controls to prevent unauthorized access:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Role-Based Access:</strong> Defined permissions structure based on user roles (Admin, EventCoordinator, Attendee)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Password Requirements:</strong> Minimum 12 characters with complexity requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Session Management:</strong> Automatic timeout after 24 hours of inactivity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Audit Logging:</strong> All administrative actions are logged and monitored</span>
                </li>
              </ul>
            </div>

            {/* API Security */}
            <div className="border-l-4 border-brand-primary pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">API Security</h3>
              <p className="text-gray-700 mb-3">
                Our APIs are designed with security best practices:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Rate Limiting:</strong> Protection against abuse with 100 requests/minute per user</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Input Validation:</strong> All inputs validated and sanitized to prevent injection attacks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Authentication:</strong> JWT tokens with short expiration times (15 minutes)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>CORS Protection:</strong> Restricted to authorized domains only</span>
                </li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="border-l-4 border-brand-primary pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Privacy & Compliance</h3>
              <p className="text-gray-700 mb-3">
                We are committed to protecting your privacy and meeting regulatory requirements:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>GDPR Practices:</strong> Privacy-by-design approach aligned with EU data protection principles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>CCPA Practices:</strong> Data handling aligned with California Consumer Privacy Act requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Data Processing Agreements:</strong> Available for enterprise customers upon request</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Data Export & Deletion:</strong> Self-service tools to export or delete your data anytime</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mt-0.5">Roadmap</div>
                  <span><strong>SOC 2 Type I:</strong> Security controls being implemented toward future certification</span>
                </li>
              </ul>
            </div>

            {/* Incident Response */}
            <div className="border-l-4 border-brand-primary pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Incident Response</h3>
              <p className="text-gray-700 mb-3">
                We have comprehensive procedures for handling security incidents:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 Monitoring:</strong> Continuous security monitoring and alerting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>72-Hour Notification:</strong> GDPR-compliant breach notification within 72 hours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Incident Response Team:</strong> Dedicated team for rapid response and containment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Post-Incident Review:</strong> Thorough analysis and process improvements after incidents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Processors */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Sub-Processors</h2>
        <p className="text-gray-700 mb-6">
          We work with trusted third-party service providers to deliver our service. All sub-processors are bound by strict data processing agreements:
        </p>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Provider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amazon Web Services</td>
                <td className="px-6 py-4 text-sm text-gray-700">Cloud hosting and infrastructure</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">United States</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stripe</td>
                <td className="px-6 py-4 text-sm text-gray-700">Payment processing</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">United States</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amazon SES</td>
                <td className="px-6 py-4 text-sm text-gray-700">Transactional email delivery</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">United States</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Apple</td>
                <td className="px-6 py-4 text-sm text-gray-700">Apple Wallet pass delivery</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">United States</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Google</td>
                <td className="px-6 py-4 text-sm text-gray-700">Google Pay pass delivery</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">United States</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Security Contact */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Report a Security Issue</h2>
          <p className="text-lg mb-6 opacity-90">
            If you discover a security vulnerability, please report it to us immediately.
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Security Contacts</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span>Security Issues:</span>
                <a href="mailto:security@contactsolution.io" className="text-brand-primary hover:underline font-semibold">
                  security@contactsolution.io
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <span>Privacy Questions:</span>
                <a href="mailto:privacy@contactsolution.io" className="text-brand-primary hover:underline font-semibold">
                  privacy@contactsolution.io
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>General Support:</span>
                <a href="mailto:support@contactsolution.io" className="text-brand-primary hover:underline font-semibold">
                  support@contactsolution.io
                </a>
              </div>
            </div>
          </div>
          <p className="text-sm opacity-75 mt-6">
            We are committed to working with security researchers to verify and address any potential vulnerabilities.
          </p>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="/privacy" className="hover:text-brand-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-primary transition">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-brand-primary transition">
              Home
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 ContactSolution by Base2ML. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Last updated: {lastUpdated}
          </p>
        </div>
      </footer>
    </div>
  );
}

function SecurityCard({
  icon,
  title,
  description,
  status
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        {icon}
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-semibold">
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
