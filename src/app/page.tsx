"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function Home() {
  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1675367607146-7b1afa58dc1c?q=80&w=1823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen pt-8">
     <div className="grid grid-cols-1 h-full lg:grid-cols-3 gap-4 max-w-7xl mx-auto   w-screen " >
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-green-700 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          𝗧𝗿𝗶𝗯𝘂𝘁𝗲 𝘁𝗼 𝘁𝗵𝗲 𝗙𝗼𝘂𝗻𝗱𝗲𝗿𝘀
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Their quotes reflect their vision, determination, and philosophical insight that contributed to the foundation of Pakistan.
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/dpviaxj2y/image/upload/v1723261188/HD-wallpaper-quaid-e-azam-muhammad-ali-jinnah_cbsjpv.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-16 object-contain grayscale filter -bottom-[70%] object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-green-500 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Pakistani Tech & StartUps
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
        
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Pakistani Tech & Start-Ups
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Pakistani startups have been gaining momentum in recent years, with a growing ecosystem of entrepreneurs, investors, and accelerators supporting innovation across various sectors. 
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/dpviaxj2y/image/upload/c_thumb,w_200,g_face/v1723262482/Six-most-Inspiring-Entrepreneurial-Journeys-of-2019-2-min-min_c71lmy.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-4 object-contain grayscale filter -bottom-[10%] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </div>
  );
}
