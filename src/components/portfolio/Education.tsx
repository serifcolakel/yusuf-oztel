import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

const Education: React.FC = () => {
  /**
   * Lisans / Teknoloji Fakültesi

   */
  type Education = {
    status: string;
    title: string;
    subtitle: string;
    type: string;
    start: string;
    end: string;
    language: string;
    note: string;
    school: string;
    color: string;
  };
  const content: Education[] = [
    {
      status: "Mezun",
      school: "Of HMB ULUSOY Meslek Lisesi",
      title: "Anadolu Meslek Lisesi",
      subtitle: "Bilişim Teknolojileri",
      type: "Örgün Öğretim",
      language: "Türkçe",
      note: "Diploma Notu : 70.71/100",
      start: "Eylül 2009",
      end: "Temmuz 2013",
      color: "#9C27B0",
    },
    {
      status: "Mezun",
      school: "Fırat Üniversitesi",
      title: "Lisans / Teknoloji Fakültesi",
      subtitle: "Elektrik-Elektronik Mühendisliği",
      type: "Örgün Öğretim",
      language: "Türkçe",
      note: "Diploma Notu : 84/100",
      start: "Eylül 2015",
      end: "Temmuz 2020",
      color: "#9C27B0",
    },
  ];

  const customizedMarker = () => {
    return (
      <span className="p-4 rounded-lg text-primary bg-secondary">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
        </svg>
      </span>
    );
  };

  const customizedContent = (item: Education) => {
    return (
      <Card
        title={item.title}
        subTitle={item.subtitle}
        footer={
          <span className="px-4 py-2 bg-secondary text-primary rounded-lg">
            {item.status}
          </span>
        }
        header={
          <div className="p-4 flex flex-row items-center justify-between">
            <p>{item.school}</p>
            <p className="text-primary font-bold ">{item.note}</p>{" "}
          </div>
        }
      >
        <div className="flex flex-col gap-y-2">
          <p>
            <b> Öğrenim Dili :</b>{" "}
            <span className="text-primary">{item.language}</span>
          </p>
          <p>
            <b> Öğretim Tipi : </b>{" "}
            <span className="text-primary">{item.type}</span>
          </p>
          <p>
            <b> Başlangıç Tarihi : </b>{" "}
            <span className="text-primary">{item.start}</span>
          </p>
          <p>
            <b> Bitiş Tarihi : </b>{" "}
            <span className="text-primary">{item.end}</span>
          </p>
        </div>
      </Card>
    );
  };
  return (
    <div>
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white">
        EĞİTİM BİLGİLERİ
      </h5>
      <Timeline
        value={content}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
};

export default Education;
