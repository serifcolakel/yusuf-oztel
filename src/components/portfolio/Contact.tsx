import React from "react";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationPin, MdMail } from "react-icons/md";
const Contact: React.FC = () => {
  type IconProps = {
    icon: React.ReactElement;
    text: string;
    url: string;
  };
  const links: IconProps[] = [
    {
      icon: <BsFillTelephoneFill size={30} className="text-primary" />,
      text: "+90 532 654 1234",
      url: "tel:+905326541234",
    },
    {
      icon: <FaTwitter size={30} className="text-primary" />,
      text: "61oztel.yusuf",
      url: "https://twitter.com/61oztel.yusuf",
    },
    {
      icon: <MdMail size={30} className="text-primary" />,
      text: "61oztel.yusuf@gmail.com",
      url: "mailto:61oztel.yusuf@gmail.com",
    },
    {
      icon: <FaFacebook size={30} className="text-primary" />,
      text: "61oztel.yusuf",
      url: "https://www.facebook.com/61oztel.yusuf",
    },
    {
      icon: <MdLocationPin size={30} className="text-primary" />,
      text: "Buca, İzmir",
      url: "/",
    },
    {
      icon: <FaInstagram size={30} className="text-primary" />,
      text: "61oztel.yusuf",
      url: "https://www.instagram.com/61oztel.yusuf/",
    },
  ];
  return (
    <div className="w-full">
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white">
        İLETİŞİM
      </h5>
      <div className="pt-3 px-4 grid md:grid-cols-2 gap-4">
        {links.map((link: IconProps) => (
          <a
            key={link.url}
            className="flex flex-row gap-x-4 items-center hover:text-primary"
            href={link.url}
          >
            {link.icon} <span>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
