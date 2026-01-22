// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ 
  children, 
  title = "AK-AD Real Estate services", 
  description = "Curated luxury residences and commercial investments in Nigeria.", 
  image = "/og-image.jpg", 
  url = "https://royalestatesnigeria.com" 
}) => {
  return (
    <>
      <SEO title={title} description={description} image={image} url={url} />
      
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        {/* 'w-full' allows children like HeroSection to be edge-to-edge.
            We removed mx-auto and max-w from here. */}
        <main className="flex-grow w-full">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;