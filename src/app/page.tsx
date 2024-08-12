"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ImagesSliderDemo } from "@/components/imageslider";
import Heros from "@/components/Heros";

export default function Home() {
  return (
    <>
    <ImagesSliderDemo/>
    <Heros />
    </>
  );
}
