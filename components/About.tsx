'use client'
import Image from "next/image";
import React from "react";
import { ABOUT } from "@/constants";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const lugar = (location: string) => {
    router.push(`/viajes/${location}`);
  };
  return (
    <section className="max-container padding-container py-24">
      <div className="flex flex-col gap-8 lg:flex-row pb-24 cursor-pointer" onClick={()=>lugar('Italia')}>
               {/* LEFT */}
        <div className="flex flex-1 flex-col items-start justify-center ">
          <h1 className="bold-52 capitalize pb-4">
             Italia
          </h1>
          <p className="text-gray-50">
            Este será nuestro proximo viaje.
          </p>
          <br />
          <div className="flex flex-wrap">
            {ABOUT.map((about) => (
              <AboutItem
                key={about.icon}
                icon={about.icon}
                title={about.title}
              />
            ))}
          </div>
        </div>
               {/* RIGHT */}
        <div className="flex flex-1 gap-4 lg:gap-8">
          <div>
            <Image
              src="/italia/coliseo.webp"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mb-12 "
            />
          </div>
          <div>
            <Image
              src="/italia/pisa.webp"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mt-12 "
            />
          </div>
        </div>
      </div>
          {/* SECOND CONTAINER */}
          <div className="flex flex-col gap-8 lg:flex-row cursor-pointer" onClick={()=>lugar('Japon')}>
        {/* LEFT */}
        <div className="flex flex-1 gap-4 lg:gap-8">
          <div>
            <Image
              src="/japon/monte-fuji.webp"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mb-8 "
            />
          </div>
          <div>
            <Image
              src="/japon/tokyo-tower.webp"
              alt="about"
              height={444}
              width={333}
              className="w-auto rounded-lg border border-gray-10 mt-8 "
            />
          </div>
        </div>
            {/* RIGHT */}
        <div className="flex flex-1 flex-col items-start justify-center ">
          <h1 className="bold-52 capitalize pb-4">
          Japón
          </h1>
          <p className="text-gray-50">
            El viaje mas esperado, mas elaborado y donde mas tiempo estaremos
          </p>
          <div className="flex flex-wrap">
            {ABOUT.map((about) => (
              <AboutItem
                key={about.icon}
                icon={about.icon}
                title={about.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type aboutItem = {
  title: string;
  icon: string;
};

const AboutItem = ({ icon, title }: aboutItem) => {
  return (
    <div className="w-1/2 flex gap-2 mb-4">
      <Image src={icon} alt="icon" height={20} width={20} />
      <p className="regular-14">{title}</p>
    </div>
  );
};

export default About;
