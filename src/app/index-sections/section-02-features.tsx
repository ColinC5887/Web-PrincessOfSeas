import React from "react";
import Image from "next/image";

interface SectionItem {
  imgFile: string;
  imgAlt: string;
  title: string;
  description: string;
}

export default function SectionFeatures() {
  const sectionData: SectionItem[] = [
    {
      imgFile: "/img/Feature-Openworld.jpg",
      imgAlt: "Open World",
      title: "Open-World",
      description:
        "Experience the wonders of procedural generation in our vast open-world. Explore uncharted areas that are uniquely shaped by each playthrough, ensuring that no two adventures are the same. Traverse dynamic landscapes, encounter diverse ecosystems, and experience the thrill of limitless exploration in this seamless, procedurally generated realm.",
    },
    {
      imgFile: "/img/Feature-Battle.jpg",
      imgAlt: "Battle",
      title: "Epic Sea Battle",
      description:
        "Prepare for epic sea battles! Command your ship through raging waters and wage strategic warfare against formidable enemies. Use a mix of tactical skill and daring maneuvers to control cannons and magic. Prepare for a thrilling battle.",
    },
    {
      imgFile: "/img/Feature-FreeWill.jpg",
      imgAlt: "FreeWill",
      title: "Decide Your Way",
      description:
        "Explore uncharted waters, discover hidden treasures, engage in lucrative trading ventures and when the call of battle beckons. Unleash your skills in thrilling naval skirmishes and forge your legacy as a master of the seas. The choice is yours to explore, to trade or to battle.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      {/* Title */}
      <p className="text-5xl font-bold text-slate-800 mb-12 drop-shadow-xl">
        GAME FEATURE
      </p>

      {sectionData.map((item, index) => {
        return (
          <div
            key={"Feature " + item.imgAlt}
            className="max-w-screen-2xl h-auto px-20 grid grid-cols-1 lg:grid-cols-2 gap-x-8"
          >
            {/* Image */}
            <div
              className={
                "flex flex-col justify-center items-center my-4 -mx-12 lg:mx-0" +
                (index % 2 !== 0 ? " order-0 lg:order-1" : "")
              }
            >
              <Image
                className="drop-shadow-xl"
                src={item.imgFile}
                alt={item.imgAlt}
                width={600}
                height={450}
              />
            </div>

            {/* Description */}
            <div
              className={
                "flex flex-col justify-center items-center" +
                (index < sectionData.length - 1 ? " mb-12 lg:mb-0" : "")
              }
            >
              <p className="text-2xl lg:text-xl xl:text-3xl font-bold text-slate-800 drop-shadow-xl mb-8">
                {item.title}
              </p>
              <p className="text-xl xl:text-2xl text-slate-500 text-justify drop-shadow-xl">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
