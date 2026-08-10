import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How It Works — Konvag</title>
        <meta name="description" content="Learn how to book trusted services or become a provider on Konvag in 3 easy steps." />
      </Head>
      
      <main className="min-h-screen relative pt-20 pb-16">
        <div className="fixed inset-0 z-0 w-full h-screen">
          <Image src="/images/service-collage.jpg" alt="Service collage background" fill className="object-cover object-center md:object-top" priority />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-4">
              <span className="w-2 h-2 bg-[#ff8c00] rounded-full animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">Simple & Transparent</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How <span className="text-[#ff8c00]">Konvag</span> Works</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Whether you're looking for a service or offering one, we've made it effortless.</p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">For <span className="text-[#ff8c00]">Clients</span></h2>
              <p className="text-white/60">Get your tasks done in 3 simple steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-[#ff8c00]/40 transition-all duration-300 group">
                <div className="w-20 h-20 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff8c00]/30 transition-colors">
                  <span className="text-3xl font-bold text-[#ff8c00]">1</span>
                </div>
                <div className="w-14 h-14 bg-[#003d2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Find & Book</h3>
                <p className="text-white/70 text-sm leading-relaxed">Browse over 20 categories of vetted professionals. Read reviews, compare prices, and book the right expert for your task.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-[#ff8c00]/40 transition-all duration-300 group">
                <div className="w-20 h-20 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff8c00]/30 transition-colors">
                  <span className="text-3xl font-bold text-[#ff8c00]">2</span>
                </div>
                <div className="w-14 h-14 bg-[#003d2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Track & Communicate</h3>
                <p className="text-white/70 text-sm leading-relaxed">Get real-time updates on your service. Chat directly with your provider, confirm arrival times, and share special instructions.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-[#ff8c00]/40 transition-all duration-300 group">
                <div className="w-20 h-20 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff8c00]/30 transition-colors">
                  <span className="text-3xl font-bold text-[#ff8c00]">3</span>
                </div>
                <div className="w-14 h-14 bg-[#003d2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pay & Review</h3>
                <p className="text-white/70 text-sm leading-relaxed">Pay securely through our platform. Your payment is held in escrow until the job is complete. Leave a review to help others.</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">For <span className="text-[#ff8c00]">Providers</span></h2>
              <p className="text-white/60">Turn your skills into income in 3 simple steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-[#ff8c00]/40 transition-all duration-300 group">
                <div className="w-20 h-20 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff8c00]/30 transition-colors">
                  <span className="text-3xl font-bold text-[#ff8c00]">1</span>
                </div>
                <div className="w-14 h-14 bg-[#003d2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Create Your Profile</h3>
                <p className="text-white/70 text-sm leading-relaxed">Sign up, list your services, set your prices, and upload your portfolio. Show clients why you're the best choice.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-[#ff8c00]/40 transition-all duration-300 group">
                <div className="w-20 h-20 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff8c00]/30 transition-colors">
                  <span className="text-3xl font-bold text-[#ff8c00]">2</span>
                </div>
                <div className="w-14 h-14 bg-[#003d2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Receive Jobs & Quote</h3>
                <p className="text-white/70 text-sm leading-relaxed">Get notified when clients book your service. Review the job details, communicate with the client, and confirm or adjust your quote.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:border-[#ff8c00]/40 transition-all duration-300 group">
                <div className="w-20 h-20 bg-[#ff8c00]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff8c00]/30 transition-colors">
                  <span className="text-3xl font-bold text-[#ff8c00]">3</span>
                </div>
                <div className="w-14 h-14 bg-[#003d2e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Get Paid & Grow</h3>
                <p className="text-white/70 text-sm leading-relaxed">Get paid securely via Konvag's escrow system. Build your reputation with 5-star reviews and attract more clients.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-white/70 mb-6">Join thousands of users who trust Konvag for their service needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="bg-[#ff8c00] text-[#003d2e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e67a00] transition transform hover:scale-105 shadow-lg w-full sm:w-auto">Find Services</button>
              </Link>
              <Link href="/become-provider">
                <button className="border-2 border-[#ff8c00] text-[#ff8c00] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ff8c00]/10 transition transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto">Become a Provider</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}