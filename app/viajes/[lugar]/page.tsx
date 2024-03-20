'use client'
import { PACKAGES } from "@/constants";
import React, { useState } from "react";
import { CATEGORIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import ButtonMe from "@/components/Button";
import { AlbumArtwork } from "@/components/AlbumArt";
import { ScrollBar } from "@/components/ui/scroll-area";
import { listenNowAlbums, madeForYouAlbums } from "@/constants/Albums";
import { Separator } from "@radix-ui/react-context-menu";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";


const viajeDetails = ({ params }: { params: { lugar: string } }) => {
  const { lugar } = params;
  const lugarData = PACKAGES.find((p) => p.title.toLocaleLowerCase() === lugar.toLocaleLowerCase());

  return (
    <>
    <section className={`relative  bg-cover bg-center bg-no-repeat h-[50vh] w-full z-10 pb-5`}>
      {/* <span className="absolute top-0 left-0 h-full w-full bg-black z-0 opacity-25"></span> */}
      <div className="max-container padding-container relative top-28 sm:top-1/3 z-10">
        <h1 className="bold-44 sm:bold-64 text-black capitalize max-w-[36rem]">
         {lugarData?.title}
        </h1>
        <p className="regular-16 mt-6 text-black lg:w-1/2">
        Este será nuestro proximo viaje, el cual haremos del 1 al 6 de abril.
        </p>
        <div className="btn mt-8">
        </div>
        <h4 className="text-black my-4 bold-22">Lugares que veremos.</h4>
      </div>
      
    </section>
              
    <div className="col-span-3 lg:col-span-4 lg:border-l max-container padding-container ">
      <div className="h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue="music" className="h-full space-y-6">
          <div className="space-between flex items-center ">
          <ul className="flex flex-wrap gap-4">
          <TabsList>
              <TabsTrigger value="music" className="bg-black text-white flexCenter gap-2 px-4 py-2 cursor-pointer hover:-translate-y-[2px] transition-all duration-500 rounded-md">
                Music
              </TabsTrigger>
              <TabsTrigger value="podcasts" className="relative bg-slate-700">Podcasts</TabsTrigger>
              <TabsTrigger value="live" className="relative bg-slate-700">
                Live
              </TabsTrigger>
            </TabsList>
        </ul>
            
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
