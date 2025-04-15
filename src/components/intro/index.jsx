"use client"
import Image from 'next/image'
import { IoPlayOutline } from "react-icons/io5"
import React from 'react'
import { useTranslation } from 'react-i18next'
import './_style.scss'
import { Reval } from '@/ui/motion'

const Intro = () => {
  const { t } = useTranslation()

  return (
    <div className='container mx-auto px-4' id='intro'>
      <div className='flex flex-col md:flex-row items-end justify-between w-full gap-10 '>

        <div className='w-full mt-[140px] md:w-[40%] max-w-[600px] min-w-[350px] '>
          <Reval>
          <h3 className='text-[#DF6951] text-[20px] font-bold mb-[30px] tracking-wide uppercase'>
            {t("intrH3")}
          </h3>

          <h2 className='text-[#181E4B] text-[42px] md:text-[60px] leading-[50px] md:leading-[70px] font-extrabold mb-8 break-words'>
            {t("introH2")}
          </h2>

          <p className='text-[#5E6282] font-medium text-[16px] md:text-[17px] leading-[30px] md:leading-[36px] mb-10 break-words'>
            {t("introP")}
          </p>
          </Reval>
          <div className="flex items-center pt-5 gap-8 flex-wrap">
            <button className="bg-[#DF6951] text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition">
              {t("introBtn1")}
            </button>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#df6951f2] w-[50px] h-[50px] grid place-content-center text-white text-xl shadow-md">
                <IoPlayOutline />
              </div>
              <button className="text-[#181E4B] font-semibold text-sm hover:underline">
                {t("introBtn2")}
              </button>
            </div>
           
          </div>
        </div>

        <div className='w-full md:w-[50%] relative h-[500px] md:h-[600px]'>
          <Image 
            src="/img/Decore.png" 
            alt="Decore" 
            width={1200} 
            height={100} 
            className="absolute top-[-100px] left-0 w-full h-auto object-contain z-0"
          />
          <Image 
            src="/img/girlintro.png" 
            alt="Girl Intro" 
            width={500} 
            height={100} 
            className="absolute top-[170px] left-0 z-10 object-contain"
          />
          <Image 
            src="/img/plane.png" 
            alt="Plane 1" 
            width={130} 
            height={100} 
            className="absolute top-[140px]  z-20 object-contain"
          />
          <Image 
            src="/img/plane.png" 
            alt="Plane 2" 
            width={130} 
            height={100} 
            className="absolute top-[200px] right-10 z-30 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
