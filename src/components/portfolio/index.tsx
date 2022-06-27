import React, { useEffect, useRef } from "react";

import ReactToPrint from "react-to-print";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experiences from "./Experiences";
import Languages from "./Languages";
import PersonelInformation from "./PersonelInformation";
import References from "./References";
import Skills from "./Skills";
import WorkInformation from "./WorkInformation";

export const ComponentToPrint = React.forwardRef(() => {
  useEffect(() => {
    window.document.title = "Yusuf Öztel | Portfolio";
  }, []);
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <p className="border border-secondary hover:border-primary bg-secondary cursor-pointer hover:text-secondary hover:bg-primary text-primary font-bold rounded-lg flex justify-center items-center w-48 my-4 px-4 py-2 mx-auto">
            Özgeçmişi Yazdır
          </p>
        )}
        content={() => componentRef.current}
      />
      <div className="w-full flex flex-col xl:px-40 px-4" ref={componentRef}>
        <div className="w-full flex flex-col gap-y-4 items-center justify-center bg-secondary text-white">
          <div className="w-full flex flex-row items-center justify-center">
            <img
              src="https://i.hizliresim.com/ljek652.jpg"
              alt="avatar"
              className="md:h-[250px] h-[180px]"
            />
            <div className="w-full bg-primary text-center py-4 my-16">
              <h3 className="text-secondary md:text-4xl  py-4">
                <b>YUSUF</b> OZTEL
              </h3>
              <p className="md:text-xl italic">
                Elektrik ve Elektronik Mühendisi
              </p>
            </div>
          </div>
          <About />
          <Contact />
          <PersonelInformation />
          <WorkInformation />
          <References />
        </div>
        <div className="w-full bg-white">
          <Education />
          <Experiences />
          <Languages />
          <Skills />
        </div>
      </div>
    </>
  );
});
