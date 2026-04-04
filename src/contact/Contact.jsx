import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactContainer = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    // 1. Hero Text Animation
    const tl = gsap.timeline();
    tl.from(".contact-hero-h1", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
    .from(".contact-hero-p", {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.5");

    // 2. Floating Cards Animation on Scroll
    gsap.from(".info-card", {
      scrollTrigger: {
        trigger: ".info-grid",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // 3. Form Section Reveal
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 70%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out"
    });

    // 4. FAQ Stagger
    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });

  }, { scope: contactContainer });

  return (
    <div ref={contactContainer} className="bg-[#0d0b08] text-amber-50 overflow-hidden font-serif">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 border-b border-white/5">
        <h1 className="contact-hero-h1 text-6xl md:text-9xl font-light tracking-tighter uppercase mb-6">
          Start Your <br /> <span className="text-[#c9871a] italic font-serif">Legacy</span>
        </h1>
        <p className="contact-hero-p text-gray-400 font-sans tracking-[0.4em] uppercase text-[10px] md:text-xs">
          Available for Worldwide Bookings 2026-27
        </p>
      </section>

      {/* --- INFO GRID (Contact Details) --- */}
      <section className="py-24 px-5 md:px-20 info-grid max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="info-card p-12 bg-[#1a1712] border border-white/5 rounded-sm hover:border-[#c9871a]/50 transition-colors group">
            <i className="ri-phone-line text-4xl text-[#c9871a] mb-6 block group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xs font-sans tracking-widest text-gray-500 uppercase mb-4 font-bold">Quick Contact</h3>
            <p className="text-xl md:text-2xl mb-2">+91 98765 43210</p>
            <p className="text-gray-500 font-sans text-sm">Available 10:00 AM - 08:00 PM</p>
          </div>

          <div className="info-card p-12 bg-[#1a1712] border border-white/5 rounded-sm hover:border-[#c9871a]/50 transition-colors group">
            <i className="ri-mail-open-line text-4xl text-[#c9871a] mb-6 block group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xs font-sans tracking-widest text-gray-500 uppercase mb-4 font-bold">Email Inquiry</h3>
            <p className="text-xl md:text-2xl mb-2">hello@gorudigital.com</p>
            <p className="text-gray-500 font-sans text-sm">Response within 24 hours</p>
          </div>

          <div className="info-card p-12 bg-[#1a1712] border border-white/5 rounded-sm hover:border-[#c9871a]/50 transition-colors group">
            <i className="ri-map-pin-2-line text-4xl text-[#c9871a] mb-6 block group-hover:scale-110 transition-transform"></i>
            <h3 className="text-xs font-sans tracking-widest text-gray-500 uppercase mb-4 font-bold">Our Studio</h3>
            <p className="text-xl md:text-2xl mb-2">Yamuna Nagar, HR</p>
            <p className="text-gray-500 font-sans text-sm">India, 135001</p>
          </div>

        </div>
      </section>

      {/* --- MAIN BOOKING FORM SECTION --- */}
      <section className="py-20 px-5 md:px-20 bg-black/30">
        <div ref={formRef} className="max-w-5xl mx-auto bg-[#14120f] border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Form Left Side (Visual) */}
          <div className="md:w-1/3 bg-[#c9871a] p-12 text-black flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-light leading-tight mb-6 uppercase">Why Book <br /> With Us?</h2>
              <ul className="font-sans space-y-4 text-sm font-medium">
                <li>✓ Professional Lighting Setup</li>
                <li>✓ 4K Cinematic Output</li>
                <li>✓ Same-Day Teaser Delivery</li>
                <li>✓ Premium Album Printing</li>
              </ul>
            </div>
            <div className="pt-10">
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 italic">Goru Digital Studio © 2026</p>
            </div>
          </div>

          {/* Form Right Side (Inputs) */}
          <div className="md:w-2/3 p-10 md:p-16">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Full Name</label>
                <input type="text" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#c9871a] transition-all" placeholder="Enter name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Phone Number</label>
                <input type="tel" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#c9871a] transition-all" placeholder="+91 00000-00000" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Event Type</label>
                <select className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#c9871a] text-gray-400">
                  <option className="bg-[#0d0b08]">Wedding Photography</option>
                  <option className="bg-[#0d0b08]">Pre-Wedding Shoot</option>
                  <option className="bg-[#0d0b08]">Maternity / Baby Shoot</option>
                  <option className="bg-[#0d0b08]">Fashion / Portfolio</option>
                  <option className="bg-[#0d0b08]">Commercial Event</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Event Date</label>
                <input type="date" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#c9871a] text-gray-400" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Special Instructions</label>
                <textarea rows="3" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#c9871a] resize-none" placeholder="Tell us more about your dream shoot..."></textarea>
              </div>
              <button className="md:col-span-2 bg-[#c9871a] text-black font-bold py-5 rounded-sm uppercase text-xs tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-5 md:px-20 faq-section max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 uppercase tracking-widest">Common Questions</h2>
        <div className="space-y-8">
          {[
            { q: "Kitne din mein photos mil jayengi?", a: "Raw data hum 24 ghante mein de dete hain. Edited album aur cinematic video mein 3-4 weeks ka time lagta hai." },
            { q: "Kya aap outstation weddings karte ho?", a: "Haan! Humne poore India mein shoots kiye hain. Travel aur stay charges client ke hote hain." },
            { q: "Payment structure kya hai?", a: "40% booking ke waqt, 40% event wale din, aur bacha hua 20% delivery ke waqt." }
          ].map((item, index) => (
            <div key={index} className="faq-item border-b border-white/5 pb-6">
              <h4 className="text-[#c9871a] text-lg mb-2 italic">Q. {item.q}</h4>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SOCIAL BANNER --- */}
      <section className="py-20 bg-[#c9871a] text-black text-center">
        <p className="text-xs uppercase tracking-[0.5em] font-bold mb-4">Follow the magic</p>
        <div className="flex justify-center gap-10">
          <a href="#" className="text-4xl hover:scale-125 transition-transform"><i className="ri-instagram-fill"></i></a>
          <a href="#" className="text-4xl hover:scale-125 transition-transform"><i className="ri-facebook-box-fill"></i></a>
          <a href="#" className="text-4xl hover:scale-125 transition-transform"><i className="ri-youtube-fill"></i></a>
        </div>
      </section>

    </div>
  );
};

export default Contact;