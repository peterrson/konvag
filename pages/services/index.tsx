import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { serviceCategories } from '@/data/serviceCategories';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services — Konvag</title>
        <meta name="description" content="Browse all services available on Konvag" />
      </Head>
      
      <main className="min-h-screen relative pt-20 pb-16">
        
        {/* BACKGROUND - VERY DARK GREEN */}
        <div className="fixed inset-0 z-0 w-full h-screen bg-[#021410]"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore All <span className="text-[#ff8c00]">Services</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Choose from over 20 categories and connect with trusted professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  href={`/services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative overflow-hidden rounded-xl h-64 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ff8c00]/50 transition-all duration-300 text-left w-full"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/75"></div>
                  </div>

                  <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-[#003d2e]/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-[#ff8c00]" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#ff8c00] transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm">{category.description}</p>
                    <div className="mt-2 text-[#ff8c00] text-xs font-medium">{category.count}</div>
                    <div className="mt-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white/80 text-sm">Explore Services →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/60 text-sm">
              Can't find what you're looking for?{' '}
              <Link href="/contact" className="text-[#ff8c00] hover:text-[#e67a00] transition-colors">
                Contact us
              </Link>
              {' '}and we'll help you find the right service.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}