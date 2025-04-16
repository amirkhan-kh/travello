"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import "./_style.scss";
import { RevalAboutContent, RevalAboutImg } from "@/ui/motion";

const EasyFast = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between w-[100%]">
        <RevalAboutContent>
          <div className="w-[70%]">
            <h4 className="text-[#5E6282] text-[18px] font-bold]">
              {t("eTop")}
            </h4>
            <h2 className="text-[#14183E] text-[60px] leading-[70px] font-bold mb-4">
              {t("eTitle")}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6 items-center h-[80px] w-[450px]">
                <Image
                  src={"/img/ei1.png"}
                  alt="Easy and fast img"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#5E6282] text-[16px] font-bold">
                    Choose Destination
                  </h3>
                  <p className="text-[16px]">{t("ecard1")}</p>
                </div>
              </div>
              <div className="flex gap-6 items-center h-[80px] w-[450px]">
                <Image
                  src={"/img/ei2.png"}
                  alt="Easy and fast img"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#5E6282] text-[16px] font-bold">
                    Make Payment
                  </h3>
                  <p className="text-[16px]">{t("eCard2")}</p>
                </div>
              </div>
              <div className="flex gap-6 items-center h-[80px] w-[450px]">
                <Image
                  src={"/img/ei3.png"}
                  alt="Easy and fast img"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#5E6282] text-[16px] font-bold">
                    Reach Airport on Selected Date
                  </h3>
                  <p className="text-[16px]">{t("eCard3")}</p>
                </div>
              </div>
            </div>
          </div>
        </RevalAboutContent>
        <div className="">
          <RevalAboutImg>
            <div className="relative">
              <div className="eCard bg-white dark:bg-black dark:text-white">
                <Image
                  src={"/img/eimg.png"}
                  alt="img"
                  width={390}
                  height={60}
                />
                <div className="p-4">
                  <p className="text-[#080809] text-[16px] font-bold mb-3 dark:text-white">
                    {t("eRightT")}
                  </p>
                  <p className="text-[#080809] text-[14px] mb-3 dark:text-white">
                    14-29 June. by Robbin joseph
                  </p>
                  <Image
                    src={"/img/OPTIONS.png"}
                    alt="img"
                    width={140}
                    height={60}
                    className="mb-6"
                  />
                  <p className="text-[#080809] text-[14px] dark:text-white">
                    {t("sellingMap3")}
                  </p>
                </div>
              </div>

              <div className="miniCard flex gap-3 items-start dark:text-white">
                <Image
                  src={"/img/eminiimg.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                />
                <div className="">
                  <p className="text-[10px] dark:text-white">Onping</p>
                  <p className="text-[12px] font-semibold">{t("top")}</p>
                  <p className="text-[10px] mb-5">40% completed</p>
                  <input type="range" className="rangeSlider" />
                </div>
              </div>
            </div>
          </RevalAboutImg>
        </div>
      </div>
    </div>
  );
};

export default EasyFast;
