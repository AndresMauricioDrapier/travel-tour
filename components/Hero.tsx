import React from "react";
import ButtonMe from "./Button";
import { CATEGORIES } from "@/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[50vh] w-full z-10 pb-5" style={{backgroundImage:`url(/italia/coliseo.webp)`}}>
      {/* <span className="absolute top-0 left-0 h-full w-full bg-black z-0 opacity-25"></span> */}
      <div className="max-container padding-container relative top-28 sm:top-1/3 z-10">
        <h1 className="bold-44 sm:bold-64 text-white capitalize max-w-[36rem]">
         Italia
        </h1>
        <p className="regular-16 mt-6 text-white lg:w-1/2">
        Este será nuestro proximo viaje, el cual haremos del 1 al 6 de abril.
        </p>
        <div className="btn mt-8">
          <ButtonMe
            type="button"
            title="Ver el viaje"
            icon="/svg/send-plane.svg"
            variant="btn_white_rounded"
            
          />
        </div>
        <h4 className="text-white my-4 bold-22">Imagenes.</h4>
        <ul className="flex flex-wrap gap-4" >
          {CATEGORIES.map((category) => (
            <CategoryItem 
            key={category.title}
            title={category.title} 
            icon={category.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

type CategoryItem = {
  title: string;
  icon: string;
}

const CategoryItem = ({ icon, title }: CategoryItem) => {
  return (
    
    <div className="bg-white flexCenter gap-2 px-4 py-2 hover:-translate-y-[2px] transition-all duration-500 rounded-md">
      <Image src={icon} alt="icon" height={22} width={22} className="regular-28" />
      <span className="capitalize regular-16">{title}</span>
    </div>
  );
};

export default Hero;
