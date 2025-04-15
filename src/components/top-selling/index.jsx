"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import "./_style.scss"

const TopSelling = () => {
  const { t } = useTranslation()

  const cards = [
    {
      img: "/img/d1.png",
      price: "$5.4k",
      days: "10 Days Trip",
      title: t("sellingMap1")
    },
    {
      img: "/img/d2.png",
      price: "$4.2k",
      days: "12 Days Trip",
      title: t("sellingMap2")
    },
    {
      img: "/img/d3.png",
      price: "$15k",
      days: "28 Days Trip",
      title: t("sellingMap3")
    },
  ]

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col">
        <div className=" text-center mb-[100px]">
          <h3 className="className='text-[#5E6282] text-[15px] font-semibold'">{t("top")}</h3>
          <h2 className='text-[#14183E] text-[60px] font-bold'>{t("title")}</h2>
        </div>

        <div className="flex justify-around">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden w-[300px] h-[470px]">
              <Image 
                src={card.img} 
                alt="img" 
                width={400} 
                height={350} 
                className="overflow" 
              />
              <div className="p-4 ">
                <div className="flex justify-between text-sm text-gray-500">
                  <p>{card.price}</p>
                  <p>{card.days}</p>
                </div>
                <p className="font-semibold text-lg">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopSelling
