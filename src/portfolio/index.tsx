import React, { useRef } from "react";
// import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
// import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
// import { MdLocationPin, MdMail } from "react-icons/md";
import ReactToPrint from "react-to-print";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import Languages from "./Languages";
import PersonelInformation from "./PersonelInformation";
import References from "./References";
import Skills from "./Skills";
import WorkInformation from "./WorkInformation";

export const ComponentToPrint = React.forwardRef(() => {
  const componentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ReactToPrint
        trigger={() => (
          <button className="border border-red-600">DOWNLOAD RESUME</button>
        )}
        content={() => componentRef.current}
      />
      <div className="w-full flex flex-col xl:px-40 px-4" ref={componentRef}>
        <div className="w-full flex flex-col gap-y-4 items-center justify-center bg-secondary text-white">
          <div className="w-full flex flex-row items-center justify-center">
            <img
              src="https://i.hizliresim.com/ljek652.jpg"
              alt="avatar"
              className="h-[250px]"
            />
            <div className="w-full bg-primary text-center py-4 my-16">
              <h3 className="text-secondary text-4xl  py-4">
                <b>YUSUF</b> OZTEL
              </h3>
              <p className="text-xl italic">Elektrik ve Elektronik Mühendisi</p>
            </div>
          </div>
          <PersonelInformation />

          <References />
          <Contact />
        </div>
        <div className="w-full bg-white">
          <Education />
          <Experiences />
          <Languages />
          <Skills />
          <WorkInformation />
        </div>
      </div>
    </>
  );
});
