import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/60 backdrop-blur-sm text-white pt-16 pb-8 border-t border-white/10 relative z-20">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div>
            <h3 className="text-[#ff8c00] font-bold text-lg mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-white/80 hover:text-[#ff8c00] transition-colors duration-200">Blog</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-[#ff8c00] transition-colors duration-200">About Us</Link></li>
              <li><Link href="/faqs" className="text-white/80 hover:text-[#ff8c00] transition-colors duration-200">FAQs</Link></li>
              <li><Link href="/privacy" className="text-white/80 hover:text-[#ff8c00] transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-[#ff8c00] transition-colors duration-200">Terms of Use</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-[#ff8c00] transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#ff8c00] font-bold text-lg mb-5 uppercase tracking-wider">Popular Services</h3>
            <ul className="space-y-3 columns-1 sm:columns-2">
              <li><Link href="/services/tailors" className="text-white/80 hover:text-[#ff8c00]">Tailors</Link></li>
              <li><Link href="/services/cleaners" className="text-white/80 hover:text-[#ff8c00]">Cleaners</Link></li>
              <li><Link href="/services/painters" className="text-white/80 hover:text-[#ff8c00]">Painters</Link></li>
              <li><Link href="/services/barber" className="text-white/80 hover:text-[#ff8c00]">Barber</Link></li>
              <li><Link href="/services/electricians" className="text-white/80 hover:text-[#ff8c00]">Electricians</Link></li>
              <li><Link href="/services/plumbers" className="text-white/80 hover:text-[#ff8c00]">Plumbers</Link></li>
              <li><Link href="/services/drivers" className="text-white/80 hover:text-[#ff8c00]">Drivers</Link></li>
              <li><Link href="/services/teachers" className="text-white/80 hover:text-[#ff8c00]">Teachers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[#ff8c00] font-bold text-lg mb-5 uppercase tracking-wider">Quick Contact</h3>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff8c00] shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Head Office: 79, Ogba Road, Off Oba Akran Avenue, Ikeja, Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#ff8c00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+2347033228698" className="hover:text-[#ff8c00] transition-colors duration-200">+2347033228698</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#ff8c00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <a href="https://www.konvag.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8c00] transition-colors duration-200">www.konvag.com</a>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff8c00] hover:text-[#003d2e] transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff8c00] hover:text-[#003d2e] transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ff8c00] hover:text-[#003d2e] transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">&copy; {currentYear} Konvag. All rights reserved.</p>
          <div className="flex gap-6 text-white/60 text-sm">
            <Link href="/privacy" className="hover:text-[#ff8c00] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#ff8c00] transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-[#ff8c00] transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}