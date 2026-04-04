// Footer.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Instagram, Youtube, MessageCircle,
  Phone, Mail, MapPin, Camera,
  ArrowUpRight, Send
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const instagramPreviews = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&q=80",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=200&q=80",
];

const Footer = () => {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef(null);
  const bottomRef = useRef(null);
  const glowRef = useRef(null);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSend = () => {
    if (email) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setEmail('');
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Glow pulse
      gsap.to(glowRef.current, {
        scale: 1.3,
        opacity: 0.08,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Brand section slide in
      gsap.fromTo(brandRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 90%" }
        }
      );

      // Links stagger
      gsap.fromTo(".footer-col",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: linksRef.current, start: "top 90%" }
        }
      );

      // Bottom bar
      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: bottomRef.current, start: "top 95%" }
        }
      );

      // Line expand
      gsap.fromTo(".footer-divider",
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1, duration: 1.2, ease: "power3.inOut",
          scrollTrigger: { trigger: footerRef.current, start: "top 85%" }
        }
      );

      // Stats count up - FIXED
      gsap.utils.toArray(".stat-num").forEach((el) => {
        const target = parseInt(el.dataset.target);
        const obj = { val: 0 };
        gsap.fromTo(obj,
          { val: 0 },
          {
            val: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
            onUpdate: function () {
              el.innerText = Math.round(obj.val) + "+";
            }
          }
        );
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#0a0805] text-white overflow-hidden">

      {/* Animated Glow */}
      <div ref={glowRef} className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c] opacity-5 blur-[160px] rounded-full -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c9a84c] opacity-3 blur-[120px] rounded-full pointer-events-none" />

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-10 relative z-10">

        {/* Top - Brand + Newsletter */}
        <div ref={brandRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-[#c9a84c]/30 flex items-center justify-center hover:border-[#c9a84c] transition-all duration-500 hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                <Camera className="w-7 h-7 text-[#c9a84c] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div>
                <h2 className="text-2xl font-serif tracking-tight uppercase leading-none">
                  Goru <span className="text-[#c9a84c] italic">Digital</span>
                </h2>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mt-1 font-bold">
                  Studio Loft • Yamuna Nagar
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Hum sirf moments capture nahi karte — hum unhe cinematic legacy mein convert karte hain.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-2">
              {[
                { num: 500, label: "Weddings" },
                { num: 12, label: "Years" },
                { num: 50, label: "Awards" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="stat-num text-[#c9a84c] font-serif text-2xl font-bold" data-target={stat.num}>0+</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#c9a84c] font-bold">Quick Inquiry</p>
            <p className="text-gray-400 text-sm">Drop your email — we'll get back within 24 hours.</p>
            <div className="flex bg-[#161410] border border-white/10 p-1 focus-within:border-[#c9a84c] transition-all max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-transparent outline-none px-4 py-2 text-sm flex-1 text-gray-300"
              />
              <button
                onClick={handleSend}
                className={`px-4 py-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300
                  ${sent ? 'bg-green-500 text-white' : 'bg-[#c9a84c] text-black hover:bg-white'}`}
              >
                <Send size={14} />
                {sent ? 'Sent!' : 'Send'}
              </button>
            </div>
            <p className="text-gray-600 text-xs">We never spam. Ever.</p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider h-[1px] bg-white/5 mb-16" />

        {/* Main Links */}
        <div ref={linksRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Social Wall */}
          <div className="footer-col space-y-5">
            <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-bold">Social Wall</h4>
            <div className="grid grid-cols-4 gap-1.5">
              {instagramPreviews.map((img, i) => (
                <div key={i} className="aspect-square rounded-sm overflow-hidden cursor-pointer group">
                  <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-500" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-1">
              {[
                { icon: <Instagram size={16} /> },
                { icon: <Youtube size={16} /> },
                { icon: <MessageCircle size={16} /> },
              ].map((item, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#c9a84c] hover:border-[#c9a84c] hover:shadow-[0_0_10px_rgba(201,168,76,0.2)] transition-all duration-300">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="footer-col">
  <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-bold mb-8">Sitemap</h4>
  <ul className="space-y-4">
    {['Home', 'Service', 'Portfolio', 'Product', 'About', 'Contact'].map((item) => (
      <li key={item}>
        {/* Link Logic Fix: Agar 'Home' hai toh '/', baaki sab ke liye unka naam */}
        <Link 
          to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          className="text-gray-500 text-sm hover:text-white flex items-center gap-2 group transition-all duration-300"
        >
          <span className="w-0 group-hover:w-4 h-[1px] bg-[#c9a84c] transition-all duration-300 inline-block" />
          {item}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Expertise */}
          <div className="footer-col">
            <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-bold mb-8">Expertise</h4>
            <ul className="space-y-4">
              {['Luxury Weddings', 'Cinematic Films', 'Baby Shoots', 'Fashion Portfolios', 'Drone Mastery', 'Product Art'].map((item) => (
                <li key={item}
                  className="text-gray-500 text-sm flex items-center justify-between group cursor-default hover:text-white transition-colors duration-300">
                  {item}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-[#c9a84c] transition-all duration-300" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-bold mb-8">Studio Loft</h4>
            <div className="space-y-5">
              {[
                { icon: <MapPin size={15} />, text: "Near Main Market, Yamuna Nagar, Haryana - 135001", href: "#" },
                { icon: <Phone size={15} />, text: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: <Mail size={15} />, text: "hello@gorudigital.com", href: "mailto:hello@gorudigital.com" },
              ].map((item, i) => (
                <a key={i} href={item.href}
                  className="flex items-start gap-3 group hover:text-white transition-colors duration-300">
                  <span className="text-[#c9a84c] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider h-[1px] bg-white/5 mt-16 mb-8" />

        {/* Bottom Bar */}
        <div ref={bottomRef} className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            <p>© 2026 Goru Digital Studio</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</p>
            <p className="hover:text-white cursor-pointer transition-colors duration-300">Terms of Service</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
              Crafted with ❤️ by <span className="text-[#c9a84c] hover:underline cursor-pointer">SANGAM</span>
            </p>
            <button onClick={scrollToTop}
              className="w-10 h-10 bg-[#161410] border border-white/10 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-500 group">
              <Send size={14} className="-rotate-90 text-gray-400 group-hover:text-black transition-colors duration-300" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;