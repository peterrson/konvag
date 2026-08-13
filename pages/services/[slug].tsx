import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { serviceCategories } from '@/data/serviceCategories';
import SignUpChoiceModal from '@/components/services/SignUpChoiceModal';

export default function SubCategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [selectedSub, setSelectedSub] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = serviceCategories.find(
    (cat) => cat.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!category) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#003d2e]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Category not found</h1>
          <Link href="/services" className="text-[#ff8c00] hover:text-[#e67a00] mt-4 inline-block">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  const handleSubClick = (sub: any) => {
    setSelectedSub(sub);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSub(null);
  };

  return (
    <>
      <Head>
        <title>{category.name} — Konvag</title>
        <meta name="description" content={`Browse all ${category.name} services on Konvag`} />
      </Head>
      
      <main className="min-h-screen relative pt-20 pb-16 bg-[#003d2e]">
        
        <div className="container mx-auto px-4 mb-12">
          <Link href="/services" className="text-white/60 hover:text-[#ff8c00] mb-4 inline-block">
            ← Back to All Services
          </Link>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 bg-[#003d2e]/80 rounded-xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-[#ff8c00]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{category.name}</h1>
              <p className="text-white/60">{category.count} available</p>
            </div>
          </div>
          <p className="text-white/70 text-lg mt-2">{category.description}</p>
        </div>

        {/* Sub-Categories Grid */}
        <div className="container mx-auto px-4">
          {category.subCategories && category.subCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.subCategories.map((sub, index) => (
                <button
                  key={index}
                  onClick={() => handleSubClick(sub)}
                  className="group relative overflow-hidden rounded-xl h-48 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ff8c00]/50 transition-all duration-300 text-left w-full"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={sub.image || '/images/services/placeholder.jpg'}
                      alt={sub.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/75"></div>
                  </div>
                  <div className="relative z-10 h-full p-6 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff8c00] transition-colors text-center">
                      {sub.name}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-white/60 text-center py-12">
              No sub-categories available for this category yet.
            </p>
          )}
        </div>
      </main>

      {/* ✅ THIS IS WHERE THE SIGN UP MODAL BELONGS */}
      {selectedSub && (
        <SignUpChoiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          serviceName={selectedSub.name}
          serviceImage={selectedSub.image || '/images/service-collage.jpg'}
          returnUrl={router.asPath}
        />
      )}
    </>
  )
}