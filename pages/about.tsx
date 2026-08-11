import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const slides = [
    {
      id: 1,
      title: 'We make everyday life easier',
      text: `KONVAG is a premium services marketplace built to connect people with trusted, vetted providers across home repairs, beauty, tech support, and logistics.

      Our platform removes the stress of finding reliable help by doing the vetting for you. Every provider is thoroughly screened, so you can focus on what matters most — getting the job done right.`,
      image: '/images/about/man-tools.jpg',
    },
    {
      id: 2,
      title: 'Safety & professionalism, guaranteed',
      text: `Our mission is to make everyday tasks easier by offering fast, reliable, and secure solutions — all in one place. With transparent pricing, service tracking, and secure payments, KONVAG ensures peace of mind.

      We believe in building long-term relationships between clients and professionals. That’s why we prioritize communication and accountability at every stage of the service journey.`,
      image: '/images/about/woman-electrician.jpg',
    },
    {
      id: 3,
      title: 'Quality you can count on',
      text: `At KONVAG, we make everyday life easier by connecting you with trusted service providers. Our platform is built for speed, security, and peace of mind, so you can book with confidence and focus on what matters most.

      Whether you need a quick fix or a major home upgrade, Konvag brings you the best talent in the industry. We don't just connect you — we ensure the quality matches your expectations every single time.`,
      image: '/images/about/man-plumber.jpg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Head>
        <title>About Us — Konvag</title>
        <meta name="description" content="Learn about Konvag - your trusted service marketplace" />
      </Head>
      
      <main className="min-h-screen relative pt-20 pb-16">
        <div className="fixed inset-0 z-0 w-full h-screen">
          <Image src="/images/service-collage.jpg" alt="Service collage background" fill className="object-cover object-center md:object-top" priority />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            {/* ✅ BIG CURVED LOGO ONLY */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 relative rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/logos/konvag-logo.png"
                  alt="Konvag"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-[#ff8c00]">Konvag</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Connecting you with trusted professionals — fast, secure, and reliable.
            </p>
          </div>

          {/* Animated Carousel */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl mb-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto min-h-[550px] overflow-hidden">
                {slides.map((slide, index) => (
                  <div key={slide.id} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <Image src={slide.image} alt={slide.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
                  </div>
                ))}
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
                {slides.map((slide, index) => (
                  <div key={slide.id} className={`transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 absolute inset-0 p-10 md:p-14'}`}>
                    {index === currentSlide && (
                      <>
                        <div className="inline-flex items-center gap-2 bg-[#ff8c00]/20 px-3 py-1 rounded-full mb-4 w-fit">
                          <span className="w-2 h-2 bg-[#ff8c00] rounded-full"></span>
                          <span className="text-[#ff8c00] text-xs font-bold uppercase tracking-wider">About Us</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{slide.title}</h2>
                        <div className="space-y-4 text-white/80 leading-relaxed text-base md:text-lg">
                          {slide.text.split('\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph.trim()}</p>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#ff8c00] w-10' : 'bg-white/40 hover:bg-white/80'}`} />
              ))}
            </div>
          </div>

          {/* More About Section */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl mb-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                More About <span className="text-[#ff8c00]">Konvag</span>
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">
                We're not just a platform — we're a movement to make quality service accessible to everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                <div className="w-14 h-14 bg-[#ff8c00]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Story</h3>
                <p className="text-sm leading-relaxed">Founded with a simple belief — that every home deserves quality service and every skilled professional deserves a platform to shine. Konvag was built to bridge the gap between trust and convenience in Nigeria and beyond.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                <div className="w-14 h-14 bg-[#ff8c00]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Core Values</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#ff8c00]">◆</span> <span><strong className="text-white">Trust:</strong> Every provider is vetted and verified.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#ff8c00]">◆</span> <span><strong className="text-white">Transparency:</strong> Clear pricing with zero hidden fees.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#ff8c00]">◆</span> <span><strong className="text-white">Excellence:</strong> We hold every job to the highest standard.</span></li>
                  <li className="flex items-start gap-2"><span className="text-[#ff8c00]">◆</span> <span><strong className="text-white">Inclusivity:</strong> Opportunity for everyone, everywhere.</span></li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#ff8c00]/30 transition-all duration-300">
                <div className="w-14 h-14 bg-[#ff8c00]/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#ff8c00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Commitment</h3>
                <p className="text-sm leading-relaxed">To bridge the gap between service providers and users through technology that enables convenience, trust, and opportunity — empowering people to turn skills into income and access quality service effortlessly from anywhere.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-white/60 text-sm">
            <p>
              Ready to get started?{' '}
              <Link href="/services" className="text-[#ff8c00] hover:text-[#e67a00] transition-colors">
                Browse services
              </Link>
              {' '}or{' '}
              <Link href="/become-provider" className="text-[#ff8c00] hover:text-[#e67a00] transition-colors">
                become a provider
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}