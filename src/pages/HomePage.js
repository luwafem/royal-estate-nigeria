// src/pages/HomePage.js
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = ({ properties }) => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProperties properties={properties.slice(0, 6)} />
      <StatsSection />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;