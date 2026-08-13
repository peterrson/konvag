import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { serviceCategories } from '@/data/serviceCategories';
import ServiceChoiceModal from '@/components/services/ServiceChoiceModal';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (category: any) => {
    setSelectedService(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <Head>
        <title>Services — Konvag</title>
        <meta name="description" content="Browse all services available on Konvag" />
      </Head>
      
      <main className="min-h-screen bg-green pt-20 pb-16">
        
        {/* ✅ CLEAN WHITE PAGE HEADER */}
        <div className="container mx-auto px-4 pt-8 pb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#f9fcfb] mb-4">
              Explore All <span className="text-[#ff8c00]">Services</span>
            </h1>
            <p className="text-white-100 text-lg">
              Choose from over 20 categories and connect with trusted professionals.
            </p>
          </div>

          {/* ✅ CLEAN 4-COLUMN GRID (Fiverr Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                /* ✅ CHANGED: Button → Link, onClick → href */
                <Link
                  key={category.id}
                  href={`/services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {/* ✅ IMAGE - CLEAN, NO HEAVY OVERLAY */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>

                  {/* ✅ CLEAN TEXT CONTENT */}
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-[#ff8c00]" />
                    <h3 className="text-lg font-bold text-[#ffffff] group-hover:text-[#ff8c00] transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-white-100 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="mt-2 text-[#ff8c00] text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {category.count} <span className="opacity-50">•</span> Learn more →
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ✅ BOTTOM CTA */}
          <div className="text-center mt-16 text-gray-500 text-sm">
            <p>
              Can't find what you're looking for?{' '}
              <Link href="/contact" className="text-[#ff8c00] hover:text-[#e67a00] transition-colors">
                Contact us
              </Link>
              {' '}and we'll help you find the right service.
            </p>
          </div>
        </div>
      </main>

      {/* ✅ MODAL REMAINS EXACTLY THE SAME */}
      {selectedService && (
        <ServiceChoiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          serviceName={selectedService.name}
          serviceDescription={selectedService.description}
          serviceImage={selectedService.image}
          subCount={selectedService.subCategories?.length || 0}
        />
      )}
    </>
  )
}