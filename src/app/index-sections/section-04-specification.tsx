import React from "react";

interface SpecifictionItem {
  title: string;
  content: string;
}

export default function SectionSpecification() {
  const sectionData: SpecifictionItem[] = [
    {
      title: "Game Name",
      content: "Princess of Seas",
    },
    {
      title: "Game Genre",
      content: "Open-world, Sea Sailing, RPG",
    },
    {
      title: "Supported platforms",
      content: "PC(Steam)",
    },
    {
      title: "Language Support",
      content: "English",
    },
    {
      title: "Number of Players",
      content: "1",
    },
    {
      title: "Developer",
      content: "Chensey Game",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-20">
      {/* Title */}
      <p className="text-5xl font-bold text-slate-800 mb-12 drop-shadow-xl">
        GAME SPECIFICATIONS
      </p>

      {/* Item */}
      {sectionData.map((item) => {
        return (
          <div
            key={"Specification " + item.title}
            className="h-auto w-full my-1 px-20 grid grid-cols-1 md:grid-cols-7 gap-x-10 gap-y-2"
          >
            <div className="text-left md:text-right col-span-3">
              <p className="text-xl xl:text-2xl text-slate-800 drop-shadow-xl my-1">
                {item.title + ":"}
              </p>
            </div>
            <div className="text-left col-span-4">
              <p className="text-xl xl:text-2xl text-slate-800 drop-shadow-xl my-1">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
