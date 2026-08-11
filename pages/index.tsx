import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Konvag — Book Trusted Services</title>
        <meta name="description" content="Book trusted services - fast, clean, and secure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen relative pt-20 pb-16">
        
        {/* BACKGROUND */}
        <div className="fixed inset-0 z-0 w-full h-screen">
          <Image
            src="/images/service-collage.jpg"
            alt="Service collage background"
            fill
            className="object-cover object-center md:object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-4">
          
          {/* HERO SECTION - NO LOGO HERE AT ALL */}
          <div className="py-24 md:py-32 text-center">
            <div className="max-w-4xl mx-auto">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 mb-8">
                <span className="w-2.5 h-2.5 bg-[#ff8c00] rounded-full animate-pulse"></span>
                <span className="text-white/90 text-base font-medium">Trusted by 10,000+ clients</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white drop-shadow-lg">
                Book <span className="text-[#ff8c00]">trusted services</span> - fast, clean, and secure
              </h1>
              
              <p className="text-xl md:text-3xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Konvag connects you to vetted service providers for home repairs, beauty, tech fixes, and logistics — with tracking and secure payments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/services">
                  <button className="bg-[#ff8c00] text-[#003d2e] px-10 py-5 rounded-xl font-bold text-xl hover:bg-[#e67a00] transition transform hover:scale-105 shadow-lg">
                    Find Services
                  </button>
                </Link>
                <button className="border-2 border-[#ff8c00] text-[#ff8c00] px-10 py-5 rounded-xl font-bold text-xl hover:bg-[#ff8c00]/10 transition transform hover:scale-105 backdrop-blur-sm">
                  Become a Provider
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                  <div className="text-[#ff8c00] text-4xl mb-2">✅</div>
                  <div className="text-white font-bold text-lg">Verified Providers</div>
                  <div className="text-white/50 text-sm">All vetted & trusted</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                  <div className="text-[#ff8c00] text-4xl mb-2">🔒</div>
                  <div className="text-white font-bold text-lg">Secure Payments</div>
                  <div className="text-white/50 text-sm">100% protected</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                  <div className="text-[#ff8c00] text-4xl mb-2">⭐</div>
                  <div className="text-white font-bold text-lg">Rated 4.9/5</div>
                  <div className="text-white/50 text-sm">By 2,000+ clients</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                  <div className="text-[#ff8c00] text-4xl mb-2">🕒</div>
                  <div className="text-white font-bold text-lg">24/7 Support</div>
                  <div className="text-white/50 text-sm">We're here to help</div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= TRUSTED PARTNERS (HIDDEN) ================= */}
          {/*
          <div className="py-16 border-t border-white/10">
            <div className="text-center mb-10">
              <p className="text-white/50 text-sm uppercase tracking-widest font-medium">
                Trusted by businesses and professionals worldwide
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl max-w-5xl mx-auto border border-gray-200">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
                <div className="flex items-center justify-center p-2 group hover:scale-110 transition-transform duration-300">
                  <Image src="/images/partners/airbnb.png" alt="Airbnb" width={120} height={40} className="object-contain w-full h-full opacity-70 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-center p-2 group hover:scale-110 transition-transform duration-300">
                  <Image src="/images/partners/uber.png" alt="Uber" width={120} height={40} className="object-contain w-full h-full opacity-70 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-center p-2 group hover:scale-110 transition-transform duration-300">
                  <Image src="/images/partners/samsung.png" alt="Samsung" width={120} height={40} className="object-contain w-full h-full opacity-70 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-center p-2 group hover:scale-110 transition-transform duration-300">
                  <Image src="/images/partners/shopify.png" alt="Shopify" width={120} height={40} className="object-contain w-full h-full opacity-70 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-center p-2 group hover:scale-110 transition-transform duration-300">
                  <Image src="/images/partners/paypal.png" alt="PayPal" width={120} height={40} className="object-contain w-full h-full opacity-70 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-center p-2 group hover:scale-110 transition-transform duration-300">
                  <Image src="/images/partners/nivea.png" alt="Nivea" width={120} height={40} className="object-contain w-full h-full opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </div>
          */}

          {/* ================= WHY CHOOSE KONVAG ================= */}
          <div className="py-16 border-t border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="text-[#ff8c00]">Konvag?</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                We make it easier, safer, and faster to get things done.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#ff8c00]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vetted & Trusted Pros</h3>
                <p className="text-white/60 text-sm leading-relaxed">Every provider is thoroughly verified before joining. You get quality service, guaranteed.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#ff8c00]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Fast & Easy Booking</h3>
                <p className="text-white/60 text-sm leading-relaxed">Find, compare, and book the right professional for your needs in under 2 minutes.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#ff8c00]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure Payments</h3>
                <p className="text-white/60 text-sm leading-relaxed">Pay with confidence. Your money is held in escrow until your service is successfully completed.</p>
              </div>
            </div>
          </div>

          {/* ================= TESTIMONIALS ================= */}
          <div className="py-16 border-t border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our <span className="text-[#ff8c00]">Clients Say</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">Real stories from real people who found their perfect service provider.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex text-[#ff8c00] mb-3">★★★★★</div>
                <p className="text-white/80 text-sm italic leading-relaxed">"Konvag saved me hours! I found a reliable plumber in less than 5 minutes. The tracking feature made me feel so safe."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff8c00]/20 rounded-full flex items-center justify-center text-white font-bold">SK</div>
                  <div>
                    <p className="text-white font-bold text-sm">Sarah K.</p>
                    <p className="text-white/40 text-xs">Homeowner, Lagos</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex text-[#ff8c00] mb-3">★★★★★</div>
                <p className="text-white/80 text-sm italic leading-relaxed">"I was nervous about hiring online, but Konvag's vetting process gave me peace of mind. The electrician was professional and punctual."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff8c00]/20 rounded-full flex items-center justify-center text-white font-bold">MC</div>
                  <div>
                    <p className="text-white font-bold text-sm">Michael C.</p>
                    <p className="text-white/40 text-xs">Business Owner, Abuja</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex text-[#ff8c00] mb-3">★★★★★</div>
                <p className="text-white/80 text-sm italic leading-relaxed">"As a busy mom, Konvag is a lifesaver. I booked a cleaner and a tech support agent in the same day. Everything was seamless."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#ff8c00]/20 rounded-full flex items-center justify-center text-white font-bold">ED</div>
                  <div>
                    <p className="text-white font-bold text-sm">Emma D.</p>
                    <p className="text-white/40 text-xs">Freelancer, Port Harcourt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM CTA ================= */}
          <div className="py-16 border-t border-white/10">
            <div className="bg-gradient-to-br from-[#003d2e] to-[#00251d] rounded-3xl p-10 md:p-16 text-center border border-[#ff8c00]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8c00]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff8c00]/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Ready to Get <span className="text-[#ff8c00]">Started?</span>
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                  Join over 10,000 users who trust Konvag for their daily service needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/services">
                    <button className="bg-[#ff8c00] text-[#003d2e] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e67a00] transition transform hover:scale-105 shadow-lg w-full sm:w-auto">
                      Find Services
                    </button>
                  </Link>
                  <Link href="/become-provider">
                    <button className="border-2 border-[#ff8c00] text-[#ff8c00] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ff8c00]/10 transition transform hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
                      Become a Provider
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}