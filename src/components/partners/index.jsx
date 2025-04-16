"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import './_style.scss';

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-[70px] mb-[130px]">
      <div className="list bg-[#DFD7F9] dark:bg-[#1E1E1E] dark:text-white w-full grid place-content-center h-[500px] relative">
        <div>
          <h2 className="text-[38px] font-semibold text-center mb-4 dark:text-white">
            {t("input")}
          </h2>
          <div className="flex  items-center justify-center gap-8">
            <input type="text" placeholder="Your Email" className="dark:bg-[#3A3A3C] dark:text-white"/>
            <button className="dark:bg-[#FF7D68] dark:text-white">Subscribe</button>
          </div>
          <div className="leftImg top-[0px] right-[450px]">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="leftImg top-[170px] left-[470px]">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
