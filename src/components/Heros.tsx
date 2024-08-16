"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from 'next/image'


const heroes = [
  {
    name: "Fatima Jinnah",
    description:`Known as the "Mother of the Nation," Fatima Jinnah was a close adviser and sister to Muhammad Ali Jinnah. She played an essential role in the Pakistan Movement and later became a symbol of democracy and women's rights.`,
    achieve: "Politician, Dental Surgeon",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723460422/Fatima-Jinnah_okztit.jpg"
  },
  {
    name: "Dr. Abdul Qadeer Khan",
    description:"Known as the father of Pakistan's nuclear program, Dr. Abdul Qadeer Khan played a crucial role in making Pakistan the first Islamic nuclear power by leading the country's atomic program.",
    achieve: "Nuclear Scientist",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723460423/20811719271696907418-1280x720_kvuvs8.webp"
  },
  {
    name: "Muhammad Ali Jinnah",
    description:" Jinnah, also known as Quaid-e-Azam (Great Leader), was the leader of the All India Muslim League and played a pivotal role in the creation of Pakistan in 1947 as a separate nation for Muslims of the Indian subcontinent.",
    achieve: "Founder of Pakistan",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723440611/qaid-e1703252891153_nkq67i.jpg"
  },
  {
    name: "Allama Muhammad Iqbal ",
    description:"  Iqbal is regarded as the ideological father of Pakistan. His poetry and philosophy inspired the Muslim community in India to seek an independent state, and he was one of the first to propose the idea of a separate Muslim nation.",
    achieve: "Poet, Philosopher, Politician",
    pic: "https://res.cloudinary.com/dpviaxj2y/image/upload/v1723440710/5fa90ac64d24f_ribabx.jpg"
  },
  
  
]

function Heros() {
  return (
    <div>
      <h1 className='text-center my-8  text-green-800 font-bold  text-xl lg:text-3xl'>Heroes That Make Us Proud</h1>
      <div className=" w-full block flex flex-wrap gap-6 items-center   justify-center ">
        {heroes.map(ele => {
          return (
            
              <PinContainer
              key={ele.achieve}
              title={ele.description}
              className=""
              >
                <div className="flex   basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-gradient-to-r from-green-500 to-green-800 ">
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