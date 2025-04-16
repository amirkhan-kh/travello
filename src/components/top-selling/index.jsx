"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './_style.scss'
import { Reval, RevalAboutContent, RevalAboutImg } from '@/ui/motion'

const TopSelling = () => {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto">
      <h3 className="text-center mb-2  text-[20px]">
        {t("top")}
      </h3>
      <h2 className="text-center mb-20 text-[#14183E] text-[50px] font-semibold dark:text-white">
        {t("title")}
      </h2>

      <div className="flex items-center">
        <RevalAboutContent>
          <div className="kart ">
            <Image src={"/img/d1.svg"} alt='Top selling img' width={380} height={550} />
            <div className="bio dark:bg-[#3A3A3C]">
              <div className="flex items-center justify-between">
                <h4 className="dark:text-white">Rome, Italy</h4>
                <p className="dark:text-white">$5.42k</p>
              </div>
              <p className="dark:text-[#A6A8B3]">{t("sellingMap1")}</p>
            </div>
          </div>
        </RevalAboutContent>

        <Reval>
          <div className="kart ">
            <Image src={"/img/d2.svg"} alt='Top selling img' width={380} height={550} />
            <div className="bio dark:bg-[#3A3A3C]">
              <div className="flex items-center justify-between">
                <h4 className="dark:text-white">London, UK</h4>
                <p className="dark:text-white">$4.2k</p>
              </div>
              <p className="dark:text-[#A6A8B3]">{t("sellingMap2")}</p>
            </div>
          </div>
        </Reval>

        <RevalAboutImg>
          <div className="kart ">
            <Image src={"/img/d3.svg"} alt='Top selling img' width={380} height={550} />
            <div className="bio dark:bg-[#3A3A3C]">
              <div className="flex items-center justify-between">
                <h4 className="dark:text-white">Full Europe</h4>
                <p className="dark:text-white">$15k</p>
              </div>
              <p className="dark:text-[#A6A8B3]">{t("sellingMap3")}</p>
            </div>
          </div>
        </RevalAboutImg>
      </div>
    </div>
  )
}

export default TopSelling
