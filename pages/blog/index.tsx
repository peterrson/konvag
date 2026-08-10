import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: '5 Tips for Hiring the Right Home Cleaner',
    excerpt: 'Finding a trustworthy cleaner can be tough. Here’s how to spot the best professionals for your home.',
    date: 'March 15, 2026',
    category: 'Home & Domestic',
    slug: 'tips-for-hiring-home-cleaner',
    image: '/images/services/home-domestic.jpg',
  },
  {
    id: 2,
    title: 'Why Verified Providers Matter for Your Safety',
    excerpt: 'Learn how Konvag’s vetting process keeps you safe and ensures quality service every time.',
    date: 'March 10, 2026',
    category: 'Safety',
    slug: 'why-verified-providers-matter',
    image: '/images/services/security.jpg',
  },
  {
    id: 3,
    title: 'How to Save Money on Home Repairs',
    excerpt: 'Smart budgeting tips for maintaining your home without breaking the bank.',
    date: 'March 5, 2026',
    category: 'Finance',
    slug: 'save-money-home-repairs',
    image: '/images/services/construction.jpg',
  },
  {
    id: 4,
    title: 'The Rise of On-Demand Tech Support',
    excerpt: 'Why more people are choosing freelance tech experts over traditional IT companies.',
    date: 'February 28, 2026',
    category: 'Technology',
    slug: 'rise-of-on-demand-tech-support',
    image: '/images/services/technology.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog — Konvag</title>
        <meta name="description" content="Read the latest tips, guides, and news from Konvag." />
      </Head>
      
      <main className="min-h-screen relative pt-20 pb-16">
        
        {/* Background */}
        <div className="fixed inset-0 z-0 w-full h-screen">
          <Image src="/images/service-collage.jpg" alt="Blog background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#ff8c00]">Blog</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Tips, guides, and stories to help you get the most out of Konvag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`} 
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-[#ff8c00]/40 transition-all duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-[#ff8c00] text-xs font-medium bg-black/60 px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-white/50 text-xs mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff8c00] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-block mt-3 text-[#ff8c00] text-sm group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}