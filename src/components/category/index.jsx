"use client"
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './_style.scss'
import { RevalAboutContent } from '@/ui/motion'

const Category = () => {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto h-[690px] flex flex-col items-center">
      <div className="top text-center mb-[80px]">
        <p className="text-[#5E6282] text-[15px] font-semibold dark:text-[#A6A8B3]">
          {t("categoryTop")}
        </p>
        <h2 className="text-[#14183E] text-[60px] font-bold dark:text-white">
          {t("categoryTitle")}
        </h2>
      </div>
      <RevalAboutContent>
        <div className="grid grid-cols-4 gap-10">
          <div className="card bg-white dark:bg-[#2C2C2E] dark:text-white">
            <div className="ms-5 mb-6  flex flex-col gap-2 justify-center">
              <Image src={'/img/sputnik.png'} alt='category icon' width={70} height={70}/>
              <h4 className="text-black dark:text-white">{t("cardTop1")}</h4>
            </div>
            <p className="dark:text-[#ffffff]">{t("cardP1")}</p>
          </div>
          <div className="card dark:bg-[#2C2C2E] dark:text-white">
            <div className="ms-5 mb-6 flex flex-col gap-2 justify-center">
              <Image src={"/img/plane1.png"} alt='category icon' width={70} height={70}/>
              <h4 className="text-black dark:text-white">{t("cardTop2")}</h4>
            </div>
            <p className="dark:text-[#ffffff]">{t("cardP2")}</p>
          </div>
          <div className="card dark:bg-[#2C2C2E] dark:text-white">
            <div className="ms-5 mb-6 flex flex-col gap-2 justify-center">
              <Image src={"/img/record.png"} alt='category icon' width={70} height={70}/>
              <h4 className="dark:text-white">{t("cardTop3")}</h4>
            </div>
            <p className="dark:text-[#ffffff]">{t("cardP3")}</p>
          </div>
          <div className="card dark:bg-[#2C2C2E] dark:text-white">
            <div className="ms-5 mb-6 flex flex-col gap-2 justify-center">
              <Image src={"/img/setting.png"} alt='category icon' width={70} height={70}/>
              <h4 className="dark:text-white">{t("cardTop4")}</h4>
            </div>
            <p className="dark:text-[#ffffff]">{t("cardP4")}</p>
          </div>
        </div>
      </RevalAboutContent>
    </div>
  )
}

export default Category
