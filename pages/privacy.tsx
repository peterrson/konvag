import Head from 'next/head';
import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Konvag</title>
        <meta name="description" content="Konvag's privacy policy outlines how we collect, use, and protect your personal information." />
      </Head>
      <main className="min-h-screen relative pt-20 pb-16">
        <div className="fixed inset-0 z-0 w-full h-screen">
          <Image src="/images/service-collage.jpg" alt="Privacy Policy background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy <span className="text-[#ff8c00]">Policy</span></h1>
            <p className="text-white/70 text-lg">Last updated: April 2026</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10 space-y-6 text-white/80 leading-relaxed">
            <p>At <strong className="text-white">Konvag</strong>, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our platform.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
              <li><strong>Service Information:</strong> Details about the services you request or provide.</li>
              <li><strong>Usage Data:</strong> How you interact with our platform, including pages visited and time spent.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To facilitate bookings and connect you with providers.</li>
              <li>To process payments and manage escrow transactions.</li>
              <li>To communicate with you about your bookings, updates, and promotions.</li>
              <li>To improve our platform and user experience.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">3. How We Protect Your Data</h2>
            <p>We use industry-standard encryption (SSL) to protect your data during transmission. We do not store your payment card details — all payments are processed securely through our payment partners.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">4. Sharing Your Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your data only with service providers who assist us in operating our platform (e.g., payment processors), and they are bound by strict confidentiality agreements.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time. Contact us at <a href="mailto:support@konvag.com" className="text-[#ff8c00]">support@konvag.com</a> to exercise these rights.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">6. Cookies</h2>
            <p>We use cookies to enhance your experience on our platform. You can manage your cookie preferences in your browser settings.</p>

            <h2 className="text-xl font-bold text-white mt-6 mb-2">7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. We will notify you of any significant changes via email or through our platform.</p>

            <div className="mt-8 pt-6 border-t border-white/10 text-white/60 text-sm">
              <p>If you have any questions about this policy, please contact us at:</p>
              <p className="mt-2"><strong className="text-white">Konvag Support</strong><br />Email: <a href="mailto:support@konvag.com" className="text-[#ff8c00]">support@konvag.com</a><br />Address: 79, Ogba Road, Off Oba Akran Avenue, Ikeja, Lagos</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}