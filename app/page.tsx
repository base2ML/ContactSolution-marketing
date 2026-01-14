"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-700 hover:text-brand-primary">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-brand-primary">Pricing</a>
            <a href="#security" className="text-gray-700 hover:text-brand-primary">Security</a>
          </nav>
          <div className="flex space-x-4">
            <Link
              href={siteConfig.appUrl}
              className="px-4 py-2 text-brand-primary border border-brand-primary rounded hover:bg-brand-primary hover:text-white transition"
            >
              Sign In
            </Link>
            <Link
              href={siteConfig.appUrl}
              className="px-4 py-2 bg-brand-primary text-white rounded hover:bg-brand-secondary transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <Image
            src="/images/Contact_Solution_logo.png"
            alt="ContactSolution - Seeing People"
            width={280}
            height={280}
            className="mx-auto mb-8"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Business Cards.<br />
            <span className="text-brand-primary">Built for Modern Networking.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform how you share contact information with smart digital business cards,
            Apple & Google Wallet integration, and real-time analytics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={siteConfig.appUrl}
              className="px-8 py-4 bg-brand-primary text-white text-lg rounded-lg hover:bg-brand-secondary transition shadow-lg"
            >
              Start Free Trial
            </Link>
            <a
              href="#pricing"
              className="px-8 py-4 border-2 border-brand-primary text-brand-primary text-lg rounded-lg hover:bg-brand-primary hover:text-white transition"
            >
              View Pricing
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required · Free forever plan available</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-lg text-gray-600">Powerful features to transform your networking</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Digital Business Cards"
              description="Create beautiful, shareable digital business cards with your complete contact information, social links, and branding."
            />
            <FeatureCard
              title="Apple & Google Wallet"
              description="One-tap save to Apple Wallet and Google Pay. Your contacts can access your information anytime, even offline."
            />
            <FeatureCard
              title="Real-Time Analytics"
              description="Track who views your card, downloads your contact, and scans your QR code. Understand your networking impact."
            />
            <FeatureCard
              title="Event Management"
              description="Perfect for conferences, trade shows, and networking events. Issue cards to all attendees at once."
            />
            <FeatureCard
              title="QR Code Generation"
              description="Every card comes with a unique QR code for instant sharing. Perfect for business cards, badges, and signage."
            />
            <FeatureCard
              title="Enterprise Security"
              description="AES-256 encryption, security headers, rate limiting, and audit logging. Your data is always protected."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              tier="SeeMe"
              subtitle="Free Forever"
              price="$0"
              period="/month"
              description="Perfect for individuals just getting started with digital business cards"
              features={[
                "1 digital business card",
                "Basic QR code",
                "Apple & Google Wallet support",
                "Up to 100 views/month",
                "Basic analytics",
                "Email support"
              ]}
              cta="Sign Up Free"
              highlighted={false}
              logo="/images/SeeMe.png"
            />

            <PricingCard
              tier="Xray Specs"
              subtitle="For Professionals"
              price="$29"
              period="/month"
              description="Advanced features for professionals who network seriously"
              features={[
                "Unlimited digital cards",
                "Advanced QR codes with tracking",
                "Priority Apple & Google Wallet",
                "Unlimited views",
                "Advanced analytics & insights",
                "Contact export (vCard)",
                "Custom branding",
                "Priority support"
              ]}
              cta="Start Pro Trial"
              highlighted={true}
              logo="/images/XraySpecs.png"
            />

            <PricingCard
              tier="WideAngle"
              subtitle="For Event Coordinators"
              price="$149"
              period="/month"
              description="Complete event management solution with exhibitor upsell capabilities"
              features={[
                "Everything in Xray Specs",
                "Unlimited attendee cards",
                "Bulk card generation",
                "Event-level analytics",
                "Exhibitor package management",
                "Real-time scan counters",
                "Contact export for exhibitors",
                "White-label branding",
                "Dedicated account manager"
              ]}
              cta="Start WideAngle Trial"
              highlighted={false}
              logo="/images/WideAngle.png"
              href="https://wideangle.contactsolution.io"
            />
          </div>

          <p className="text-center text-gray-600 mt-8">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section id="security" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security & Privacy First</h2>
            <p className="text-lg text-gray-600">Your data security is our top priority</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SecurityCard
              title="AES-256 Encryption"
              description="All data encrypted at rest and in transit with bank-level security"
            />
            <SecurityCard
              title="GDPR & CCPA Compliant"
              description="Full compliance with EU and California privacy regulations"
            />
            <SecurityCard
              title="AWS Infrastructure"
              description="Hosted on AWS with security headers, rate limiting, and comprehensive audit logging"
            />
            <SecurityCard
              title="Never Sold"
              description="We will never sell your personal information to third parties"
            />
            <SecurityCard
              title="Data Export"
              description="Export or delete your data anytime with self-service tools"
            />
            <SecurityCard
              title="72-Hour Breach Notification"
              description="GDPR-compliant security incident response and notification"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/privacy"
              className="text-brand-primary hover:underline font-semibold mr-6"
            >
              Privacy Policy →
            </Link>
            <Link
              href="/security"
              className="text-brand-primary hover:underline font-semibold"
            >
              Security Details →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Networking?</h2>
          <p className="text-xl mb-8 opacity-90">
            Professionals trust ContactSolution to make meaningful connections
          </p>
          <Link
            href={siteConfig.appUrl}
            className="inline-block px-8 py-4 bg-white text-brand-primary text-lg rounded-lg hover:bg-gray-100 transition shadow-lg font-semibold"
          >
            Get Started Free
          </Link>
          <p className="text-sm mt-4 opacity-75">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/images/Contact_Solution_logo.png"
                alt="ContactSolution"
                width={140}
                height={140}
                className="mb-3 brightness-0 invert"
              />
              <p className="text-gray-400">
                Transform networking with smart digital business cards
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><Link href="/security" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@contactsolution.io" className="hover:text-white">Support</a></li>
                <li><a href="mailto:security@contactsolution.io" className="hover:text-white">Security</a></li>
                <li><a href="mailto:privacy@contactsolution.io" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 ContactSolution by Base2ML. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface PricingCardProps {
  tier: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  logo: string;
  href?: string;
}

function PricingCard({ tier, subtitle, price, period, description, features, cta, highlighted, logo, href }: PricingCardProps) {
  const ringClasses = highlighted ? 'ring-2 ring-brand-primary shadow-xl scale-105' : 'border border-gray-200';
  const buttonClasses = highlighted
    ? 'bg-brand-primary text-white hover:bg-brand-secondary'
    : 'bg-gray-100 text-gray-900 hover:bg-gray-200';

  return (
    <div className={`bg-white rounded-lg p-8 ${ringClasses}`}>
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <Image
            src={logo}
            alt={tier}
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier}</h3>
        <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-1">{period}</span>
        </div>
        <p className="text-sm text-gray-600 mt-4">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href || siteConfig.appUrl}
        className={`block w-full py-3 px-4 rounded-lg text-center font-semibold transition ${buttonClasses}`}
      >
        {cta}
      </Link>
    </div>
  );
}

function SecurityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
