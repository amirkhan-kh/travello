"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useTransition } from "react";
import "./_style.scss";
import { useTranslation } from "react-i18next";
const Header = () => {
  const {t} = useTranslation()
  const pathname = usePathname();
  return (
    <header className="py-4 ">
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between">
          <div className="logo">
            <Image
              src={"/icon/smalltop.svg"}
              alt="logo icon1"
              width={20}
              height={12}
              className="flex absolute top-0 end-0"
            />
            <h1>Travello</h1>
            <div className="flex gap-10">
              <Image
                src={"/icon/smallbootom.svg"}
                alt="logo icon2"
                width={20}
                height={12}
              />
              <Image
                src={"/icon/longbottom.svg"}
                alt="logo icon3"
                width={80}
                height={12}
              />
            </div>
          </div>

          <ul className="flex items-center gap-16">
            <li>
              <Link className={`${pathname === "/" ? "active" : ""}`} href="/">
              {t('destinations')}
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/hotels" ? "active" : ""}`}
                href="/hotels"
              >
                {t("hotels")}
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/flights" ? "active" : ""}`}
                href="/flights"
              >
                {t("flights")}
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/bookings" ? "active" : ""}`}
                href="/bookings"
              >
                {t("bookings")}
              </Link>
            </li>
          </ul>
          {/* <div className="box"></div> */}
          <div className="flex items-center gap-3" id="navBtns">
            <button>Login</button>
            <button>Sign up</button>
            <select name="" id="">
              <option value="">Uz</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
