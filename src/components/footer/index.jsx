import Image from "next/image";
import React from "react";
import "./_style.scss";
const Footer = () => {
  return (
    <footer className="container mx-auto py-[100px]">
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
      <div className="flex items-center justify-between">
        <p>Book your trip in minute, get full <br />Control for much longer.</p>
        <ul>
          <span>Company</span>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Mobile</a>
          </li>
        </ul>
        <ul>
          <span>Contact</span>
          <li>
            <a href="#">Help/FAQ</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Affilates</a>
          </li>
        </ul>
        <ul>
          <span>More</span>
          <li>
            <a href="#">Airlinefees</a>
          </li>
          <li>
            <a href="#">Airline</a>
          </li>
          <li>
            <a href="#">Low fare tips</a>
          </li>
        </ul>
        <Image
          src={"/img/Outbound.png"}
          alt="footer messenger"
          width={200}
          height={200}
        />
      </div>
    </footer>
  );
};

export default Footer;
