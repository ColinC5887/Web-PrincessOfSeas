import React from "react";
import Image from "next/image";

interface SectionItem {
  imgFile: string;
  imgAlt: string;
  title: string;
  description: string;
}

export default function SectionElements() {
  const sectionData: SectionItem[] = [
    {
      imgFile: "/img/elementIcon/Icon-Explore.png",
      imgAlt: "Explore",
      title: "Explore Uncharted",
      description:
        "Embark on limitless adventures across the open seas, discovering uncharted territories and hidden treasures as you chart your own course in this immersive world.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Trade.png",
      imgAlt: "Trade",
      title: "Cargo Commerce",
      description:
        "Travel the bustling trade routes, barter for rare goods, and discover your exclusive trade route, known only to you.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Pirate.png",
      imgAlt: "Pirate",
      title: "Confronting Piracy",
      description:
        "Prepare for thrilling naval skirmishes and strategic combat encounters as you defend your ship from the scourge of sea pirates.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Ship.png",
      imgAlt: "Ship",
      title: "Ship Upgrade",
      description:
        "Hone your nautical skills by customizing your ship, upgrading its capabilities, and transforming it into the ultimate marvel of the sea.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Quest.png",
      imgAlt: "Quest",
      title: "Quest for Glory",
      description:
        "Embark on diverse missions, unravel mysteries, and reap generous rewards as you immerse yourself in a world filled with exciting quests and compelling stories.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Sailor.png",
      imgAlt: "Sailor",
      title: "Sailor Recruitment",
      description:
        "Build your crew by recruiting skilled sailors, each with unique talents, to strengthen your ranks and navigate the high seas with expertise.",
    },

    {
      imgFile: "/img/elementIcon/Icon-Fish.png",
      imgAlt: "Fish",
      title: "Art of Fishing",
      description:
        "Dive into the depths and discover the serene yet exciting world of fishing, where patience meets excitement as you reel in your catch of the day.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Skill.png",
      imgAlt: "Skill",
      title: "Skill Upgrade",
      description:
        "Immerse yourself in a dynamic system designed for progression, where each upgrade charts a course for enhanced abilities and unrivaled prowess on the high seas.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Dungeons.png",
      imgAlt: "Dungeons",
      title: "Conquer the Dungeons",
      description:
        "Embark on daring expeditions into treacherous dungeons filled with challenges, treasures, and encounters that will test your seafaring skills to the limit.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Country.png",
      imgAlt: "Country",
      title: "Choose Your Allegiance",
      description:
        "Navigate diplomatic waters as you decide alliances and rivalries, shaping your destiny amidst a tapestry of diverse nations vying for supremacy on the open seas.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Octopus.png",
      imgAlt: "Octopus",
      title: "Against Evil",
      description:
        "Sail boldly into battles against malevolent forces that threaten the seas.",
    },
    {
      imgFile: "/img/elementIcon/Icon-Religion.png",
      imgAlt: "Religion",
      title: "Path of Faith",
      description:
        "Discover and adapt to different religions, each offering unique benefits that will shape your voyage on the high seas.",
    },
  ];

  return (
    <div className="relative text-slate-100">
      <div
        className="absolute bg-cover bg-top bg-cover h-full w-full blur-sm brightness-75"
        style={{ backgroundImage: "url(./img/bg-secion-etb.jpg)" }}
      ></div>
      <div className="absolute -top-4 w-full h-8 bg-gradient-to-t from-transparent to-sky-100"></div>
      <div className="absolute -bottom-4 w-full h-8 bg-gradient-to-t from-sky-100 to-transparent"></div>

      <div className="mt-20 flex flex-col justify-center items-center text-center">
        <p className="text-5xl font-bold mb-8 drop-shadow-xl">GAME ELEMENTS</p>
      </div>

      <div className="h-auto w-full py-12 my-2 px-24 2xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 blur-none">
        {sectionData.map((item) => {
          return (
            <div
              key={"Elements " + item.title}
              className="flex flex-col items-center drop-shadow-dark"
            >
              <div className="flex flex-col justify-center mb-4">
                <Image
                  src={item.imgFile}
                  alt={item.imgAlt}
                  width={140}
                  height={140}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xl font-bold drop-shadow-xl mb-8">
                  {item.title}
                </p>
                <p className="text-lg text-slate-200 drop-shadow-xl">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
