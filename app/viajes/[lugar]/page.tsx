'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlbumArtwork } from "@/components/AlbumArt";
import { ScrollBar, ScrollArea} from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-context-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { LUGARVIAJE } from "@/constants/Albums";


const viajeDetails = ({ params }: { params: { lugar: string } }) => {
  const { lugar } = params;
  const esPortAventura = (location: string) => {
    return location === "portAventura" ?  'port aventura':location.toLocaleLowerCase() ;
  }
  const lugarData = LUGARVIAJE.find((p) => p.title.toLocaleLowerCase() === esPortAventura(lugar));

  const [background, setBackground] = useState('')
    useEffect(() => {
      setBackground(`bg-${lugarData?.background}`)
    }, [lugarData])
    
  
  return ( 
    <>
    {background!==''?<section className={`relative bg-cover bg-center bg-no-repeat h-[50vh] w-full z-10 pb-5`} style={{backgroundImage:`url(${lugarData?.background})`}}>
      {/* <span className="absolute top-0 left-0 h-full w-full bg-black z-0 opacity-25"></span> */}
      <div className="max-container padding-container relative top-28 sm:top-1/3 z-10">
        <h1 className="bold-44 sm:bold-64 text-white capitalize max-w-[36rem]">
         {lugarData?.title}
        </h1>
        <p className="regular-16 mt-6 text-white lg:w-1/2">
        Este será nuestro proximo viaje, el cual haremos del 1 al 6 de abril.
        </p>
        <div className="btn mt-8">
        </div>
        
      </div>
      
    </section>:'Loading'}
              
    <div className="col-span-3 lg:col-span-4 lg:border-l max-container padding-container ">
    <h4 className="text-black my-4 lg:mx-10 mx-6 bold-22">Imagenes.</h4>
      <div className="h-full px-4 lg:px-8">
        <Tabs defaultValue="lugares" className="h-full space-y-6">
        <TabsList>
              <TabsTrigger value="lugares" className="bg-black text-white my-2 mx-2 gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
                Lugares
              </TabsTrigger>
              <TabsTrigger value="restaurantes" className="bg-black text-white my-2 mx-3 gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
                Restaurantes/Comida
                </TabsTrigger>
              <TabsTrigger value="hotel" className="bg-black text-white my-2 mx-2 gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
                Hotel
              </TabsTrigger>
              <TabsTrigger value="nosotros" className="bg-black text-white my-2 mx-2 gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
                Nosotros
              </TabsTrigger>
              <TabsTrigger value="tickets" className="bg-black text-white my-2 mx-2 gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
                Tickets
              </TabsTrigger>
          </TabsList>
            
          <TabsContent id="lugares" value="lugares" className="h-full flex-col border-none p-0 data-[state=active]:flex">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Imagenes de los lugares
              </h2>
            </div>
            <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {lugarData?.lugares.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[200px]"
                      aspectRatio="portrait"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </TabsContent>

          <TabsContent id="restaurantes" value="restaurantes" className="h-full flex-col border-none p-0 data-[state=active]:flex">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Imagenes del restaurante o la comida
                </h2>
              </div>
              <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {lugarData?.restaurantes.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[200px]"
                      aspectRatio="portrait"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          
          </TabsContent>

          <TabsContent value="hotel" className="h-full flex-col border-none p-0 data-[state=active]:flex">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Imagenes del hotel
                </h2>
              </div>
              <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {lugarData?.hoteles.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[200px]"
                      aspectRatio="portrait"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            
          </TabsContent>

          <TabsContent value="nosotros" className="h-full flex-col border-none p-0 data-[state=active]:flex">
            
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Nuestras imagenes
                </h2>
              </div>
              <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {lugarData?.nosotros.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[200px]"
                      aspectRatio="portrait"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            
          </TabsContent>

          <TabsContent value="tickets" className="h-full flex-col border-none p-0 data-[state=active]:flex">
            
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Tickets
                </h2>
              </div>
              <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {lugarData?.tickets.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[200px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

          </TabsContent>

        </Tabs>
      </div>
    </div>
    </>
  );
};


type CategoryItem = {
  title: string;
  icon: string;
}

const CategoryItem = ({ icon, title }: CategoryItem) => {
  return (
    <Link href="/" className="bg-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
      <Image src={icon} alt="icon" height={22} width={22} className="regular-28"/>
      <span className="capitalize regular-16">{title}</span>
    </Link>
  );
};


export default viajeDetails;
