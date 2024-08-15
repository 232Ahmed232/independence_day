"use client";
import React from "react";
import { ImagesSliderDemo } from "@/components/imageslider";
import Heros from "@/components/Heros";
import Landmarks from "@/components/landmarks";

export default function Home() {
  return (
    <>
    <ImagesSliderDemo/>
    <Heros />
    <Landmarks/>
    </>
  );
}
