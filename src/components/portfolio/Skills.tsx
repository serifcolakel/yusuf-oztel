import React from "react";
import { GiCursedStar } from "react-icons/gi";
const Skills: React.FC = () => {
  type Value = {
    value: number;
  };
  type IconProps = {
    title: string;
    values: Value[];
  };
  const links: IconProps[] = [
    {
      title: "AutoCAD",
      values: [
        {
          value: 3,
        },
      ],
    },
    {
      title: "MATLAB",
      values: [
        {
          value: 3,
        },
      ],
    },
    {
      title: "MS Office PerformancePoint Server",
      values: [
        {
          value: 5,
        },
      ],
    },
    {
      title: "MS Word",
      values: [
        {
          value: 5,
        },
      ],
    },
    {
      title: "C++",
      values: [
        {
          value: 2,
        },
      ],
    },
    {
      title: "Dev-C++",
      values: [
        {
          value: 3,
        },
      ],
    },
    {
      title: "Proteus",
      values: [
        {
          value: 3,
        },
      ],
    },
    {
      title: "MS Excel",
      values: [
        {
          value: 4,
        },
      ],
    },
    {
      title: "Simatic S7 200 PLC",
      values: [
        {
          value: 4,
        },
      ],
    },
  ];
  return (
    <div className="w-full">
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white">
        BİLGİSAYAR YETKİNLİKLERİ
      </h5>
      <div className="pt-3 px-4 grid grid-cols-1 gap-y-4 w-full pb-4">
        {links.map((link: IconProps, idx: number) => (
          <div key={idx} className="flex flex-row gap-x-4 items-center w-full">
            <b className="w-full md:w-[50%]">{link.title}</b>
            <div className="w-full flex flex-row items-center text-primary gap-x-4  border-r-white border-l-white border-l-8">
              {link.values.map((value: Value, idx: number) => (
                <div
                  key={idx}
                  className="w-full flex flex-row items-center gap-x-4"
                >
                  {/* <p className="text-sm font-bold text-secondary text-center py-2 my-2 bg-primary rounded-r-full border-white border-r-8 w-1/2">
                    {value.title}
                  </p> */}
                  <div className="flex flex-row gap-x-2 items-center text-xl md:text-5xl w-full">
                    {Array.from({ length: Math.ceil(value.value) }).map(
                      (_, i) => (
                        <GiCursedStar key={i} />
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
