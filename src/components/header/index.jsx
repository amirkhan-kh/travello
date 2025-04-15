"use client";

import Image from "next/image";
import Link from "next/link";
import { Select } from "antd";
import { usePathname } from "next/navigation";
import "./_style.scss";
import "../../lang/i18n";
import { useTranslation } from "react-i18next";
import ThemeToggle from "@/ui/toggle-button";
const Header = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <header className="">
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between  ">
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
                {t("destinations")}
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
            <button>{t("login")}</button>
            <button>{t("signup")}</button>
            <ThemeToggle />
            <Select
              defaultValue={i18n.language}
              style={{ width: 60,}}
              onChange={(value) => i18n.changeLanguage(value)}
              options={[
                { value: "uz", label: "Uz" },
                { value: "en", label: "En" },
                { value: "ru", label: "Ru" },
              ]}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
