"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TypeAnimation } from 'react-type-animation';



export function ImagesSliderDemo() {
  const images = [
    "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723381396/5fe5b7eca315b_cyzvvt.jpg",
    "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723382315/Allama-Muhammad-Iqbal_vohner.webp",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 4.0,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-green-400 pt-4">
        <TypeAnimation
      sequence={[
        'Think 100 times before you take a decision, But once that decision is taken, stand by it as one man',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'Nations are born in the hearts of poets, they prosper and die in the hands of politicians',
        4000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
        </motion.p>
       
      </motion.div>
    </ImagesSlider>
  );
}
