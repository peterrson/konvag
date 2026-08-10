import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is Konvag?',
    answer: 'Konvag is a premium services marketplace that connects you with trusted, vetted professionals for home repairs, beauty, tech support, logistics, and more.'
  },
  {
    question: 'How do I book a service?',
    answer: 'Simply browse our service categories, select a provider that fits your needs, and book directly through our platform. You will receive confirmation and tracking updates instantly.'
  },
  {
    question: 'Are all providers verified?',
    answer: 'Yes! Every provider on Konvag goes through a strict vetting process. We verify their credentials, experience, and background to ensure you receive quality service.'
  },
  {
    question: 'How are payments handled?',
    answer: 'Payments are held in escrow. You pay securely through our platform, and the provider only receives the funds after you confirm the job is complete to your satisfaction.'
  },
  {
    question: 'Can I cancel a booking?',
    answer: 'Yes. You can cancel a booking within 24 hours of the scheduled time for a full refund. Cancellations after that may incur a small fee depending on the provider\'s policy.'
  },
  {
    question: 'How do I become a provider?',
    answer: 'Visit our "Become a Provider" page, fill out the application form, and our team will review your credentials. Once approved, you can start receiving job offers.'
  },
  {
    question: 'Is my personal information safe?',
    answer: 'Absolutely. We use industry-standard encryption to protect your data. We do not share your personal information with third parties without your consent.'
  },
  {
    question: 'What if I have a problem with a service?',
    answer: 'Contact our 24/7 support team immediately. We will review the issue, mediate between you and the provider, and ensure a fair resolution.'
  },
];

export default function FAQsPage() {
  return (
    <>
      <Head>
        <title>FAQs — Konvag</title>
        <meta name="description" content="Frequently asked questions about Konvag services, bookings, payments, and support." />
      </Head>
      
      <main className="min-h-screen relative pt-20 pb-16">
        <div className="fixed inset-0 z-0 w-full h-screen">
          <Image src="/images/service-collage.jpg" alt="FAQ background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-[#ff8c00]">Questions</span>
            </h1>
            <p className="text-white/70 text-lg">
              Find answers to the most common questions about Konvag.
            </p>
          </div>

          {/* ✅ GRID LAYOUT - 2 Columns on Desktop, 1 on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-[#ff8c00]/40 transition-all duration-300"
              >
                <h3 className="text-white font-bold text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 text-white/60 text-sm">
            <p>
              Still have questions?{' '}
              <Link href="/contact" className="text-[#ff8c00] hover:text-[#e67a00]">
                Contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}