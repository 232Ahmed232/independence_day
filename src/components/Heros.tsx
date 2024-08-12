"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from 'next/image'


const heroes = [
  {
    name: "Imran Khan",
    achieve: "World Cup winner in 1992 Cricket",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723438205/58188af0bcec7_w866co.jpg"
  },
  {
    name: "Shabaz Ahmed",
    achieve: "World Cup winner in 1994 Hockey",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723438309/42174-shahbaz-ahmed-senior-pakistan-hockey_lo3wzs.webp"
  },
  {
    name: "Muhammad Ali Jinnah",
    achieve: "Founder of Pakistan",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723440611/qaid-e1703252891153_nkq67i.jpg"
  },
  {
    name: "Allama Muhammad Iqbal ",
    achieve: "Poet, Philosopher, Politician",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723440710/5fa90ac64d24f_ribabx.jpg"
  },
  
  
]

function Heros() {
  return (
    <div>
      <h1 className='text-center my-8  text-green-800 font-bold  text-xl lg:text-3xl'>Heroes That Make Us Proud</h1>
      <div className="h-[25rem] w-full flex flex-wrap gap-y-6 items-center  justify-center ">
        {heroes.map(ele => {
          return (
            
              <PinContainer
              key={ele.achieve}
              >
                <div className="flex  basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-gradient-to-r from-green-500 to-green-800 ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {ele.name}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-900 font-bold underline ">
                      {ele.achieve}
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg m-4 object-cover " />
                  <Image
                    src={ele.pic}
                    width={500}
                    height={500} 
                    className="rounded object-cover"
                    alt="Picture of the author"
                  />

                </div>
              </PinContainer>
            
          )
        })}

      </div>
    </div>
  )
}

export default Heros