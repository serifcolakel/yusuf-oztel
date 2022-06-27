import React from "react";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationPin, MdMail } from "react-icons/md";
const References: React.FC = () => {
  type RefsType = {
    name: string;
    position: string;
    company: string;
    phone: string;
    email: string;
    address: string;
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  const refs: RefsType[] = [
    {
      name: "Hakan Duman",
      position: "Öğretmen Albay (TSK)",
      company: "Türk Silahli Kuvvetleri",
      phone: "+905327769095",
      email: "hakanduman@gmail.com",
      address: "Buca, İzmir",
      website: "www.test.com",
      linkedin: "www.linkedin.com",
      github: "www.github.com",
      twitter: "www.twitter.com",
    },
  ];
  return (
    <div className="w-full pb-4">
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white">
        REFERANSLAR
      </h5>
      <div className="w-full pt-2 px-4">
        {refs.map((ref: RefsType) => (
          <div className="w-full flex flex-col gap-y-4">
            <div className="flex flex-row items-center text-primary gap-x-4 bg-secondary border-r-white border-l-white border-l-8">
              <p className="text-xl font-bold text-secondary w-1/2 text-center py-4 bg-primary rounded-r-full border-white border-r-8">
                {ref.name}
              </p>
              <span className="w-1/2 font-bold">{ref.position}</span>
            </div>
            <a
              key={ref.name}
              className="flex flex-row gap-x-4 items-center hover:text-primary px-4"
              href={"mailto:" + ref.email}
            >
              <MdMail size={30} className="text-primary" />{" "}
              <span>{ref.email}</span>
            </a>
            <a
              key={ref.name}
              className="flex flex-row gap-x-4 items-center hover:text-primary px-4"
              href={"tel:" + ref.phone}
            >
              <BsFillTelephoneFill size={30} className="text-primary" />{" "}
              <span>{ref.phone}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
