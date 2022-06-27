import React from "react";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationPin, MdMail } from "react-icons/md";
import { GiCursedStar } from "react-icons/gi";
const Languages: React.FC = () => {
  type Value = {
    title: string;
    value: number;
  };
  type IconProps = {
    title: string;
    values: Value[];
  };
  const links: IconProps[] = [
    {
      title: "İngilizce",
      values: [
        {
          title: "Okuma",
          value: 3,
        },
        {
          title: "Yazma",
          value: 3,
        },
        {
          title: "Konuşma",
          value: 3,
        },
      ],
    },
    {
      title: "Türkçe",
      values: [
        {
          title: "Okuma",
          value: 5,
        },
        {
          title: "Yazma",
          value: 5,
        },
        {
          title: "Konuşma",
          value: 5,
        },
      ],
    },
  ];
  return (
    <div className="w-full">
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white ">
        DİL BİLGİLERİ
      </h5>
      <div className="pt-3 px-4 grid grid-cols-1 gap-y-4 w-full">
        {links.map((link, idx) => (
          <div key={idx} className="flex flex-row gap-x-4 items-center w-full">
            <b className="w-[10%]">{link.title}</b>
            <div className="w-full flex flex-row items-center text-primary gap-x-4 bg-secondary border-r-white border-l-white border-l-8">
              {link.values.map((value: Value) => (
                <div
                  key={value.title}
                  className="w-full flex flex-row items-center gap-x-4"
                >
                  <p className="text-sm font-bold text-secondary text-center py-2 my-2 bg-primary rounded-r-full border-white border-r-8 w-1/2">
                    {value.title}
                  </p>
                  <div className="flex flex-row gap-x-2 items-center justify-center w-full">
                    {Array.from({ length: Math.ceil(value.value) }).map(
                      (_, i) => (
                        <GiCursedStar key={i} size={20} />
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

export default Languages;
