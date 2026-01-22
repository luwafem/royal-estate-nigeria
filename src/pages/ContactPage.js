import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiArrowRight } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Concierge Inquiry:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout 
      title="Contact Concierge | Royal Estates"
      description="Connect with our private wealth real estate advisors for exclusive property acquisitions in Nigeria."
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        
        {/* HEADER: Minimalist & Dramatic */}
        <section className="py-20 md:py-32 border-b border-gray-50 mb-20">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
              Private Advisory
            </span>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-12">
              Let's Start a <br />
              <span className="text-gray-300 italic">Conversation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl">
              Whether seeking a primary residence or a strategic investment, our concierge 
              team is ready to curate your experience.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-32">
          
          {/* LEFT: Contact Information (4 Units) */}
          <div className="lg:col-span-4 space-y-16">
            
            <ContactDetail 
              icon={<FiMapPin />}
              title="The Gallery"
              lines={['123 Adeola Odeku Street', 'Victoria Island, Lagos']}
            />

            <ContactDetail 
              icon={<FiPhone />}
              title="Direct Line"
              lines={['+234 (0) 800 123 4567', '+234 (0) 901 234 5678']}
            />

            <ContactDetail 
              icon={<FiMail />}
              title="Digital Correspondence"
              lines={['concierge@akadrealestate.com', 'private@akadrealestate.com']}
            />

            <div className="pt-10 border-t border-gray-100">
               <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Social Discovery</h3>
               <div className="flex gap-8 text-sm font-bold text-gray-900 uppercase tracking-widest">
                  <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Twitter</a>
               </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (8 Units) */}
          <div className="lg:col-span-8">
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16">
              <h2 className="text-3xl font-semibold text-gray-900 mb-10">Private Inquiry</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-gray-900/5 transition-all"
                      placeholder="e.g. Aliko Dangote"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-gray-900/5 transition-all"
                      placeholder="email@address.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Phone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-gray-900/5 transition-all"
                      placeholder="+234 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-gray-900/5 transition-all appearance-none"
                    >
                      <option>Property Acquisition</option>
                      <option>Property Listing</option>
                      <option>Private Advisory</option>
                      <option>Media Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Your Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full bg-white border-none rounded-2xl px-6 py-5 text-sm outline-none focus:ring-2 focus:ring-gray-900/5 transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center mr-3 group-hover:border-gray-900 transition-colors">
                        <div className="w-2 h-2 bg-gray-900 scale-0 group-hover:scale-100 transition-transform" />
                    </div>
                    <span className="text-[11px] text-gray-500 font-medium">I agree to the Private Data Policy</span>
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center gap-4 px-12 py-5 bg-gray-900 text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-gray-200"
                  >
                    Send Request
                    <FiArrowRight className="transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* MAP SECTION: Stylized */}
        <section className="mb-32">
           <div className="relative h-[500px] w-full bg-gray-100 rounded-[4rem] overflow-hidden grayscale">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-md p-10 rounded-[2rem] text-center shadow-2xl border border-white/20">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lagos Headquarters</h3>
                    <p className="text-sm text-gray-500 mb-6 font-light">Available for walk-in consultations <br /> Mon — Fri: 9am - 6pm</p>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
                       Get Directions
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </Layout>
  );
};

/* --- Helper Component --- */
const ContactDetail = ({ icon, title, lines }) => (
  <div className="flex gap-6">
    <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">{title}</h4>
      {lines.map((line, i) => (
        <p key={i} className="text-lg text-gray-900 font-medium leading-tight mb-1">{line}</p>
      ))}
    </div>
  </div>
);

export default ContactPage;