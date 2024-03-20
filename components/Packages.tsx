import { PACKAGES } from "@/constants";
import Image from "next/image";
import React from "react";
import { RiSearchLine, RiTimeLine } from "react-icons/ri";
import Button from "./Button";
import Link from "next/link";

const Packages = () => {
  return (
    <section className="max-container padding-container pt-16 bg-slate-10">
      <h3 className="bold-32 text-center">Nuestros viajes</h3>
      <p className="text-center max-w-lg m-auto text-gray-30 py-6">
        Estos son los viajes concluidos que hemos hecho.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {PACKAGES.map((elem) => (
          <PackageItem
            key={elem.URL}
            URL={elem.URL}
            title={elem.title}
            price={elem.price}
            des={elem.des}
            duration={elem.duration}
          />
        ))}
      </div>
    </section>
  );
};

type PackageItem = {
  URL: string;
  title: string;
  price: string;
  des: string;
  duration: string;
};
const PackageItem = ({ URL, title, price, des, duration }: PackageItem) => {
  return (
    <div className="overflow-hidden rounded-tl-xl rounded-tr-xl border border-slate-200 group">
      <div className="overflow-hidden relative">
        <Image
          src={URL}
          alt="img"
          height={400}
          width={500}
          className="group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
          style={{height: '300px'}}
        />
        <Link href="/" className="absolute top-1/2 left-1/2 h-14 w-14 bg-white flexCenter rounded-full  -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500"><RiSearchLine /></Link>
      </div>
      <div className="p-4 bg-white">
        <div className="capitalize medium-18 flexBetween">
          {title} <span className="text-green-50">{price}</span>
        </div>
        <p className="text-gray-50 my-3 regular-14 border-b border-gray-200 pb-3">
          {des}
        </p>
        <div className="flexBetween">
          <p className="flexStart gap-2 text-gray-50">
            <RiTimeLine />
            <span className="medium-14">{duration}</span>
          </p>
          <Link href='/' className="medium-14 px-4 py-2 rounded-md border bg-black text-white">
            <span>Ir al viaje</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
