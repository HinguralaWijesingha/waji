import React from 'react';
import Image from 'next/image';

export default function Home() {
  
  // ---------------------------------------------------------
  // WEBSITE LINKS & SETTINGS
  // Paste your friend's real Facebook page link here:
  // ---------------------------------------------------------
  const facebookLink = "https://www.facebook.com/share/1E8zZY8dtY/"; 

  // ---------------------------------------------------------
  // GALLERY IMAGES LIST
  // Add as many images as you want to this list from your public/recent folder.
  // ---------------------------------------------------------
  const galleryImages = [
    "/recent/image1.jpeg", 
    "/recent/image2.jpeg", 
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* --- Navigation Bar --- */}
      <nav className="sticky top-0 z-50 flex justify-between items-center p-4 lg:px-12 bg-white/80 backdrop-blur-xl shadow-sm border-b border-stone-200/50 transition-all duration-300">
        <h1 className="cursor-pointer">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-emerald-100 group-hover:border-emerald-300 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-500">
              <Image 
                src="/Gemini_Generated_Image_ac2ei7ac2ei7ac2e.png" 
                alt="Waji Flora Logo" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            {/* BRAND NAME - 3D STYLE */}
            <span className="text-2xl md:text-3xl font-serif text-emerald-950 tracking-[0.15em] uppercase flex items-center transition-all duration-500 group-hover:-translate-y-1 [text-shadow:1px_1px_0_#a7f3d0,_2px_2px_0_#34d399,_3px_3px_5px_rgba(0,0,0,0.1)] group-hover:[text-shadow:2px_2px_0_#a7f3d0,_4px_4px_0_#34d399,_6px_6px_10px_rgba(4,120,87,0.3)]">
              <span className="font-light mr-2 text-emerald-800 group-hover:text-emerald-700 transition-colors duration-500">Waji</span>
              <span className="font-bold">Flora</span>
            </span>
          </a>
        </h1>

        <ul className="hidden md:flex space-x-10 text-stone-600 font-medium text-sm tracking-wide">
          <li><a href="#home" className="hover:text-emerald-700 transition-colors duration-200">Home</a></li>
          <li><a href="#services" className="hover:text-emerald-700 transition-colors duration-200">Services</a></li>
          <li><a href="#gallery" className="hover:text-emerald-700 transition-colors duration-200">Gallery</a></li>
          <li><a href="#contact" className="hover:text-emerald-700 transition-colors duration-200">Contact</a></li>
        </ul>
        <a href="#contact" className="hidden md:inline-block bg-emerald-800 text-white px-7 py-2.5 rounded-full hover:bg-emerald-900 hover:shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide">
          Order Now
        </a>
      </nav>

      {/* --- Hero Section --- */}
      <header id="home" className="relative w-full h-[85vh] flex items-center justify-center text-center scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80 z-10" />
        
        <Image 
          src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=2000&auto=format&fit=crop" 
          alt="Beautiful floral arrangement" 
          fill
          className="object-cover z-0"
          unoptimized
          priority
        />
        <div className="relative z-20 text-white px-6 max-w-4xl mt-12 flex flex-col items-center">
          <span className="text-emerald-300 uppercase tracking-[0.3em] text-sm font-medium mb-4 drop-shadow-md">Welcome to Waji Flora</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight drop-shadow-lg">
            Exquisite Floral Designs for Every Occasion
          </h2>
          <p className="text-lg md:text-xl mb-12 font-light text-stone-200 max-w-2xl leading-relaxed">
            Premium event styling and custom flower distribution, tailored exactly to your unique request.
          </p>
          <a href="#services" className="inline-block bg-white text-emerald-950 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 hover:scale-105 transition-all duration-300 shadow-xl">
            Explore Our Services
          </a>
        </div>
      </header>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-serif text-emerald-950 mb-6">What We Offer</h3>
          <div className="w-20 h-1 bg-emerald-800 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="group relative bg-white p-12 rounded-[2.5rem] border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-8px_0_0_#ecfdf5] hover:shadow-[0_20px_50px_rgba(4,120,87,0.15),inset_0_-8px_0_0_#6ee7b7] hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl group-hover:shadow-emerald-900/20 group-hover:from-emerald-700 group-hover:to-emerald-900 group-hover:text-white group-hover:-translate-y-3 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
            </div>
            <h4 className="text-2xl font-serif text-emerald-950 mb-4 group-hover:text-emerald-800 transition-colors duration-300">Event Floral Design</h4>
            <p className="text-stone-600 leading-relaxed text-lg font-light relative z-10">
              From weddings to corporate galas, we create breathtaking floral atmospheres. Our team works closely with you to bring your unique vision to life with fresh, vibrant blooms that set the perfect mood.
            </p>
          </div>

          <div className="group relative bg-white p-12 rounded-[2.5rem] border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_-8px_0_0_#ecfdf5] hover:shadow-[0_20px_50px_rgba(4,120,87,0.15),inset_0_-8px_0_0_#6ee7b7] hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500">
             <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-xl group-hover:shadow-emerald-900/20 group-hover:from-emerald-700 group-hover:to-emerald-900 group-hover:text-white group-hover:-translate-y-3 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h4 className="text-2xl font-serif text-emerald-950 mb-4 group-hover:text-emerald-800 transition-colors duration-300">Custom Distribution</h4>
            <p className="text-stone-600 leading-relaxed text-lg font-light relative z-10">
              Need specific flowers for your home, business, or a special gift? We source and distribute high-quality, rare, and seasonal flowers based exactly on our customers&apos; specific requests and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 px-6 lg:px-12 bg-stone-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif text-emerald-950 mb-6">Our Recent Work</h3>
            <div className="w-20 h-1 bg-emerald-800 mx-auto rounded-full"></div>
            <p className="mt-8 text-stone-600 text-lg max-w-2xl mx-auto font-light">A glimpse into the stunning arrangements and event designs we have curated for our clients.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative h-80 rounded-3xl overflow-hidden shadow-sm group">
                <Image src={src} alt={`Waji Flora Recent Work ${index + 1}`} fill className="object-cover group-hover:scale-110 transition duration-700 ease-in-out" unoptimized />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Details Section --- */}
      <section id="contact" className="py-24 px-6 lg:px-12 max-w-6xl mx-auto scroll-mt-20">
        <div className="bg-white rounded-[3rem] shadow-xl shadow-stone-200/50 border border-stone-100 p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h3 className="text-4xl font-serif text-emerald-950 mb-6">Get in Touch</h3>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light">We would love to hear from you. Reach out to us directly to discuss your event or place an order.</p>
          </div>

          {/* Changed grid from md:grid-cols-3 to md:grid-cols-2 so the two cards fit perfectly centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-4xl mx-auto relative z-10">
            
            <a href="tel:+94719730141" className="group bg-stone-50 p-10 rounded-[2rem] text-center border border-transparent hover:bg-white hover:border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.87l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              </div>
              <h4 className="text-xl font-serif text-emerald-950 mb-2">Call Us</h4>
              <p className="text-stone-600 font-medium">+94 71 973 0141</p>
            </a>

            <a href="https://www.google.com/maps?q=6.9333,80.1411" target="_blank" rel="noopener noreferrer" className="group bg-stone-50 p-10 rounded-[2rem] text-center border border-transparent hover:bg-white hover:border-emerald-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <h4 className="text-xl font-serif text-emerald-950 mb-2">Location</h4>
              <p className="text-stone-600 font-medium">Kosgama, Avissawella</p>
              <p className="text-sm text-stone-500 mt-2 font-light">Mon - Sat: 9am - 6pm</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <a href="https://wa.me/94719730141" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#1ebd5a] hover:shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>

            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto bg-[#1877F2] text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#166fe5] hover:shadow-[0_8px_30px_rgb(24,119,242,0.3)] hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow Our Page
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-emerald-950 text-emerald-50 py-16 px-6 text-center">
        
        {/* BRAND NAME IN FOOTER - 3D STYLE */}
        <h2 className="group text-3xl md:text-4xl font-serif mb-6 tracking-[0.2em] uppercase text-white flex justify-center items-center transition-all duration-500 hover:-translate-y-2 cursor-pointer [text-shadow:1px_1px_0_#6ee7b7,_2px_2px_0_#047857,_3px_3px_10px_rgba(0,0,0,0.5)] hover:[text-shadow:2px_2px_0_#6ee7b7,_4px_4px_0_#047857,_6px_6px_0_#064e3b,_0_15px_20px_rgba(0,0,0,0.4)]">
          <span className="font-light text-emerald-100 mr-2 group-hover:text-white transition-colors duration-500">Waji</span>
          <span className="font-bold">Flora</span>
        </h2>
        
        <p className="text-emerald-200/80 mb-8 max-w-md mx-auto font-light leading-relaxed">
          Providing exceptional floral designs and custom flower distribution to make your moments truly memorable.
        </p>

        <div className="flex justify-center mb-10">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-emerald-200 hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        <div className="pt-8 border-t border-emerald-900/50 text-emerald-400/60 text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Waji Flora Flower Design. All rights reserved.
        </div>
      </footer>

    </div>
  );
}