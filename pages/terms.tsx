import Head from 'next/head';
import Image from 'next/image';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Use — Konvag</title>
        <meta name="description" content="Konvag's terms of use outline the rules and guidelines for using our platform." />
      </Head>
      <main className="min-h-screen relative pt-20 pb-16">
        <div className="fixed inset-0 z-0 w-full h-screen">
          <Image src="/images/service-collage.jpg" alt="Terms background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of <span className="text-[#ff8c00]">Use</span></h1>
            <p className="text-white/70 text-lg">Last updated: April 2026</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 space-y-6 text-white/80 leading-relaxed">
            <p>Welcome to <strong className="text-white">Konvag</strong>. By using our platform, you agree to the following terms and conditions.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">1. Acceptance of Terms</h2>
            <p>By creating an account, booking a service, or using any part of Konvag, you agree to be bound by these Terms of Use.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">2. User Accounts</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least 18 years old to use Konvag.</li>
              <li>You are responsible for maintaining the confidentiality of your account and password.</li>
              <li>You are fully responsible for all activities that occur under your account.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">3. Service Bookings & Payments</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All bookings are subject to provider availability and confirmation.</li>
              <li>Payments are held in escrow until the service is completed to your satisfaction.</li>
              <li>Cancellation policies are set by individual providers and must be reviewed before booking.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">4. Provider Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Providers must accurately represent their skills, experience, and qualifications.</li>
              <li>Providers are expected to deliver services professionally and on time.</li>
              <li>Failure to deliver quality service may result in account suspension or removal.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">5. User Conduct</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Users must not engage in abusive, fraudulent, or harmful behavior.</li>
              <li>Users must not attempt to circumvent our payment system or engage in off-platform transactions.</li>
              <li>Users must respect the privacy and rights of other users.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">6. Intellectual Property</h2>
            <p>All content on Konvag, including logos, text, and graphics, is the property of Konvag and is protected by copyright laws.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">7. Limitation of Liability</h2>
            <p>Konvag is a platform that connects users and providers. We are not responsible for the quality, safety, or legality of any services provided.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">8. Termination</h2>
            <p>We reserve the right to suspend or terminate your account at our sole discretion if we believe you have violated these terms.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">9. Changes to Terms</h2>
            <p>We may update these terms from time to time. We will notify you of any significant changes via email or through our platform.</p>

            <div className="mt-8 pt-6 border-t border-white/10 text-white/60 text-sm">
              <p>If you have any questions about these terms, please contact us at:</p>
              <p className="mt-2"><strong className="text-white">Konvag Support</strong><br />Email: <a href="mailto:support@konvag.com" className="text-[#ff8c00]">support@konvag.com</a><br />Address: 79, Ogba Road, Off Oba Akran Avenue, Ikeja, Lagos</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}