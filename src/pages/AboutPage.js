import React from 'react';
import Layout from '../components/Layout';
import { FiArrowUpRight, FiAward, FiUsers, FiHome, FiShield } from 'react-icons/fi';
import { agents } from '../data/agents';

const AboutPage = () => {
  const stats = [
    { value: '500+', label: 'Properties Sold', icon: FiHome },
    { value: '15+', label: 'Years Experience', icon: FiAward },
    { value: '50+', label: 'Expert Agents', icon: FiUsers },
    { value: '98%', label: 'Trust Rating', icon: FiShield },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity in all our actions, ensuring transparency from first viewing to final deed.'
    },
    {
      title: 'Excellence',
      description: 'We strive for architectural and service excellence, curating only the most prestigious properties in the region.'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge property tech and virtual viewing experiences to serve our international clientele.'
    },
    {
      title: 'Client Focus',
      description: 'Our advisory goes beyond transactions; we build multi-generational relationships based on private wealth goals.'
    }
  ];

  return (
    <Layout 
      title="Our Heritage | Royal Estates"
      description="The standard-bearer for luxury real estate in Nigeria for over 15 years."
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        
        {/* HERO SECTION: Minimal & Authoritative */}
        <section className="py-20 md:py-32 border-b border-gray-50">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-6 block">
              Established 2008
            </span>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-12">
              Defining the <br />
              <span className="text-gray-300 italic">Standard of Luxury</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl">
              Royal Estates Nigeria is more than a brokerage. We are a boutique advisory 
              dedicated to the art of fine living and strategic property acquisition.
            </p>
          </div>
        </section>

        {/* STATS: Architectural Grid */}
        <section className="py-24 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-l border-gray-100 pl-8">
              <span className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </section>

        {/* OUR STORY: Asymmetrical Layout */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem]">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">The Narrative</h2>
            <h3 className="text-4xl font-semibold text-gray-900 leading-tight">
              A legacy built on <br /> trust and concrete.
            </h3>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                What started as a single office in Ikoyi has expanded into Nigeria's most 
                formidable network of high-net-worth real estate advisors.
              </p>
              <p>
                We specialize in the "off-market" sector, providing our clients with 
                access to estates that never touch the public listings—ensuring 
                privacy and exclusivity at every turn.
              </p>
            </div>
            <div className="pt-6">
               <button className="flex items-center gap-4 group">
                  <span className="h-14 w-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-500">
                    <FiArrowUpRight className="text-gray-900 group-hover:text-white transition-colors" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900">View Timeline</span>
               </button>
            </div>
          </div>
        </section>

        {/* VALUES: Editorial Cards */}
        <section className="py-24 bg-gray-50 rounded-[4rem] px-10 md:px-20">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Our Core</h2>
            <h3 className="text-4xl font-semibold text-gray-900">Guiding Principles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="group p-8 bg-white rounded-3xl border border-gray-100 transition-all hover:shadow-2xl hover:shadow-gray-200/50">
                <div className="h-12 w-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-8">
                  <FiShield size={20} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM: Modern Grid */}
        <section className="py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
               <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-4">Leadership</h2>
               <h3 className="text-4xl font-semibold text-gray-900">The Advisory Board</h3>
            </div>
            <p className="max-w-md text-gray-500 font-light">
              Our partners bring a combined 80 years of experience in urban planning, 
              property law, and interior design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {agents.map(agent => (
              <div key={agent.id} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-6">
                  {/* Real image would go here */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
                     <span className="text-gray-400 font-bold uppercase tracking-widest">Portrait</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{agent.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">{agent.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA: High-Impact */}
        <section className="pb-32">
          <div className="bg-gray-900 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight">
                Secure your piece of <br /> the future.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <a href="/contact" className="px-10 py-5 bg-white text-gray-900 font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-gray-100 transition-all active:scale-95">
                  Consult with us
                </a>
                <a href="/properties" className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white/5 transition-all">
                  Browse Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default AboutPage;