"use client";

import React, { useState, useEffect } from 'react';
import './intro.css';

const Intro = () => {
  const images = [
    "assets/ev1.png",
    "assets/ev2.png",
    "assets/ev3.png",
    "assets/ev4.png",
    "assets/ev5.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000);

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
    <div className='intro'>
      <div className='left'>
        <div className='lefty'>
          <h1 className='plan'>Planning Schedule</h1>
          <p className="font-semibold text-xl mt-5">
            Imagine, create, and celebrate unforgettable experiences with ease. Eventify is your ultimate event companion, designed to simplify every step whether you're planning an intimate gathering or a grand celebration. We provide the tools to bring your vision to life effortlessly, ensuring that every detail shines and every moment becomes a cherished memory. Step into a world where planning meets perfection and unforgettable memories are made.
          </p>
          <h1 className="bg-red-500 text-white text-2xl cursor-pointer font-semibold rounded-full w-48 p-7 h-20 mt-5 hover:bg-blue-600">
            Learn more
          </h1>
        </div>
      </div>
      <div className='right'>
        <img className='righty' src={images[currentImageIndex]} alt="Event" />
      </div>
    </div>
  );
};

export default Intro;
