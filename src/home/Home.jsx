import React from 'react';
import Heroimg from './Heroimg';
import FeaturedWork from './FeaturedWork'; // Naya component
import Experience from './Experience';     // Naya component

const Home = () => {
  return (
    <div className="bg-[#0d0b08]">
      <Heroimg />
      <FeaturedWork />
      <Experience />
    </div>
  );
};

export default Home;