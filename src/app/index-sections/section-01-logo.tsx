import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  text: string;
  target: string;
}

export default function SectionLogo() {
  const sectionData: LinkItem[] = [
    {
      text: "Story",
      target: "story",
    },
    {
      text: "World",
      target: "world",
    },
    {
      text: "Content",
      target: "content",
    },
    {
      text: "Battle",
      target: "battle",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-top bg-cover h-auto w-full pt-48 pb-96"
      style={{ backgroundImage: "url(./img/bg-secion-logo.jpg)" }}
    >
      {/* Link */}
      <div className="absolute top-0 w-full h-20 flex flex-row items-center text-center">
        <a
          className="text-2xl text-slate-500 ml-4"
          href="https://store.steampowered.com/app/1957380/Princess_of_Seas/"
        >
          <Image
            className="transition-transform duration-500 transform hover:scale-125 drop-shadow-xl"
            src="/img/logo-steam.png"
            alt="Steam"
            width={48}
            height={48}
          />
        </a>
      </div>

      {/* Logo */}
      <div className="flex flex-col justify-center items-center text-center select-none">
        <Image src="/img/logo.png" alt="logo" width={600} height={300} />
        <p className="text-3xl text-slate-700 drop-shadow-dark mx-12 mt-8">
          Embark on an epic seafaring adventure in a thrilling sailing game!
        </p>
      </div>

      {/* Navigation */}
      {/* <div className="absolute bottom-20 w-full h-40 flex flex-col sm:flex-row justify-evenly items-center ">
        {sectionData.map((item) => {
          return (
            <div key={"Link " + item.text}>
              <Link
                className="text-4xl font-bold text-slate-100 ml-4 border-b-4 border-transparent transition-colors duration-500 hover:border-slate-100"
                href={item.target}
              >
                {item.text}
              </Link>
            </div>
          );
        })}
      </div> */}

      {/* Trans */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-sky-100 to-transparent"></div>
    </div>
  );
}
