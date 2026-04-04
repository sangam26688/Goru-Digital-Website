import React, { Suspense, lazy } from 'react';
import Heroimg from './Heroimg'; // Isse normal rakho taaki Hero turant dikhe

// Heavy components ko lazy load karo
const FeaturedWork = lazy(() => import('./FeaturedWork'));
const Experience = lazy(() => import('./Experience'));

const Home = () => {
  return (
    <div className="bg-[#0d0b08]">
      {/* 1. Hero Section (Immediate Load) */}
      <Heroimg />

      {/* 2. Heavy Sections (Loaded on Scroll/Need) */}
      <Suspense fallback={
        <div className="py-20 text-center text-gray-500 uppercase tracking-widest text-[10px]">
          Loading Masterpieces...
        </div>
      }>
        <FeaturedWork />
        <Experience />
      </Suspense>
    </div>
  );
};

export default Home;