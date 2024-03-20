'use client'
import { PACKAGES } from "@/constants";
import React, { useState } from "react";
import { CATEGORIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { AlbumArtwork, listenNowAlbums, madeForYouAlbums } from "@/components/AlbumArt";
import { ScrollBar } from "@/components/ui/scroll-area";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";


const viajeDetails = ({ params }: { params: { lugar: string } }) => {
  const { lugar } = params;
  const lugarData = PACKAGES.find((p) => p.title.toLocaleLowerCase() === lugar.toLocaleLowerCase());

  return (
    <>
    <section className={`relative  bg-cover bg-center bg-no-repeat h-[100vh] w-full z-10 pb-12`}>
      {/* <span className="absolute top-0 left-0 h-full w-full bg-black z-0 opacity-25"></span> */}
      <div className="max-container padding-container relative top-28 sm:top-1/3 z-10">
        <h1 className="bold-44 sm:bold-64 text-black capitalize max-w-[36rem]">
         {lugarData?.title}
        </h1>
        <p className="regular-16 mt-6 text-white lg:w-1/2">
        Este será nuestro proximo viaje, el cual haremos del 1 al 6 de abril.
        </p>
        <div className="btn mt-8">
          <Button
            type="button"
            title="Ver el viaje"
            icon="/svg/send-plane.svg"
            variant="btn_white_rounded"
          />
        </div>
        <h4 className="text-white my-4 bold-22">Lugares que veremos.</h4>
        <ul className="flex flex-wrap gap-4">
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
     <section>
     <div className="md:hidden">
             <Image
               src="/examples/music-light.png"
               width={1280}
               height={1114}
               alt="Music"
               className="block dark:hidden"
             />
             <Image
               src="/examples/music-dark.png"
               width={1280}
               height={1114}
               alt="Music"
               className="hidden dark:block"
             />
           </div>
           <div className="hidden md:block">
             <div className="border-t">
               <div className="bg-background">
                 <div className="grid lg:grid-cols-5">
                   <div className="col-span-3 lg:col-span-4 lg:border-l">
                     <div className="h-full px-4 py-6 lg:px-8">
                       <Tabs defaultValue="music" className="h-full space-y-6">
                         <div className="space-between flex items-center">
                           <TabsList>
                             <TabsTrigger value="music" className="relative">
                               Music
                             </TabsTrigger>
                             <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                             <TabsTrigger value="live" disabled>
                               Live
                             </TabsTrigger>
                           </TabsList>
                         </div>
                         <TabsContent
                           value="music"
                           className="border-none p-0 outline-none"
                         >
                           <div className="flex items-center justify-between">
                             <div className="space-y-1">
                               <h2 className="text-2xl font-semibold tracking-tight">
                                 Listen Now
                               </h2>
                               <p className="text-sm text-muted-foreground">
                                 Top picks for you. Updated daily.
                               </p>
                             </div>
                           </div>
                           <Separator className="my-4" />
                           <div className="relative">
                             <ScrollArea>
                               <div className="flex space-x-4 pb-4">
                                 {listenNowAlbums.map((album) => (
                                   <AlbumArtwork
                                     key={album.name}
                                     album={album}
                                     className="w-[250px]"
                                     aspectRatio="portrait"
                                     width={250}
                                     height={330}
                                   />
                                 ))}
                               </div>
                               <ScrollBar orientation="horizontal" />
                             </ScrollArea>
                           </div>
                           <div className="mt-6 space-y-1">
                             <h2 className="text-2xl font-semibold tracking-tight">
                               Made for You
                             </h2>
                             <p className="text-sm text-muted-foreground">
                               Your personal playlists. Updated daily.
                             </p>
                           </div>
                           <Separator className="my-4" />
                           <div className="relative">
                             <ScrollArea>
                               <div className="flex space-x-4 pb-4">
                                 {madeForYouAlbums.map((album) => (
                                   <AlbumArtwork
                                     key={album.name}
                                     album={album}
                                     className="w-[150px]"
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
                         <TabsContent
                           value="podcasts"
                           className="h-full flex-col border-none p-0 data-[state=active]:flex"
                         >
                           <div className="flex items-center justify-between">
                             <div className="space-y-1">
                               <h2 className="text-2xl font-semibold tracking-tight">
                                 New Episodes
                               </h2>
                               <p className="text-sm text-muted-foreground">
                                 Your favorite podcasts. Updated daily.
                               </p>
                             </div>
                           </div>
                           <Separator className="my-4" />
                         </TabsContent>
                       </Tabs>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
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
