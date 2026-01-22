import React, { useState } from 'react';
import { FiArrowRight, FiShield } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-neutral-950 px-8 py-20 md:px-20 md:py-32">
          
          {/* Architectural Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-neutral-800/30 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-neutral-800/20 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="text-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-neutral-700" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">
                  Private Correspondence
                </span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-8">
                The Royal <br />
                <span className="text-neutral-500 italic font-light tracking-normal">Intelligence.</span>
              </h2>
              
              <p className="max-w-md text-lg text-neutral-400 font-light leading-relaxed">
                Receive curated market analytics, off-market investment alerts, and architectural showcases before they reach the public domain.
              </p>

              <div className="mt-12 flex items-center gap-4 text-neutral-500">
                <FiShield size={18} className="text-neutral-700" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Secure & Confidential Advisory
                </span>
              </div>
            </div>

            {/* Right: Modern Seamless Form */}
            <div className="relative">
              <form 
                onSubmit={handleSubmit} 
                className="relative group"
              >
                <div className="relative flex flex-col gap-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent border-b border-neutral-800 py-6 text-xl text-white placeholder-neutral-700 outline-none transition-all focus:border-white group-hover:border-neutral-600 font-light"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-0 bottom-6 flex items-center gap-3 text-white group/btn"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500">
                        Request Access
                      </span>
                      <div className="h-12 w-12 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-950 group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-500">
                        <FiArrowRight size={20} />
                      </div>
                    </button>
                  </div>
                </div>
              </form>
              
              <p className="mt-12 text-[9px] text-neutral-600 uppercase tracking-[0.3em] font-medium italic">
                By invitation only. Join the 4,500+ private investors already subscribed.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;