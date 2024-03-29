import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

const Experiences: React.FC = () => {
  /**
   * Lisans / Teknoloji Fakültesi

   */
  type Experiences = {
    status: string;
    title: string;
    subtitle: string;
    type: string;
    start: string;
    end: string;
    location: string;
    language: string;
    description?: string;
    note: string;
    school: string;
    color: string;
  };
  const content: Experiences[] = [
    {
      status: "Yedek Subay",
      school: "Türk Silahlı Kuvvetleri",
      title: "Yedek Subay",
      subtitle: "",
      type: "Tam Zamanlı",
      language: "",
      note: "",
      location: "İzmir",
      start: "2021",
      end: "Devam ediyor",
      color: "#9C27B0",
    },
    {
      status: "Stajyer Mühendis",
      school: "Çelikler Holding",
      title: "Elektrik Elektronik Mühendisi",
      subtitle: "Dönem Stajı",
      type: "Dönemsel",
      location: "Aydın",
      description: "Jeotermal Enerji Santralinde Elektrik üretimi",
      language: "Türkçe",
      note: "",
      start: "17.02.2020",
      end: "22.05.2020",
      color: "#9C27B0",
    },
    {
      status: "Stajyer Mühendis",
      school: "İntek Yazılım ve Otomasyon",
      title: "Elektrik Elektronik Mühendisi",
      location: "Elazığ",
      subtitle: "Bilişim Teknolojileri",
      type: "Tam Zamanlı",
      description: "Otomasyon Sistemleri Tasarımı Bakımı Onarımı",
      language: "Türkçe",
      note: "",
      start: "2018",
      end: "2018",
      color: "#9C27B0",
    },
    {
      status: "Stajyer Mühendis",
      school: "Mertler Enerji",
      title: "Elektrik Elektronik Mühendisi",
      location: "Trabzon",
      subtitle: "Bilişim Teknolojileri",
      type: "Tam Zamanlı",
      description: " Elektrik Enerjisi Üretimi",
      language: "Türkçe",
      note: "",
      start: "04.06.2018",
      end: "04.07.2018",
      color: "#9C27B0",
    },
  ];

  const customizedMarker = () => {
    return (
      <span className="custom-marker shadow-1 p-4 rounded-lg text-primary bg-secondary">
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
          <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zM22.1 6.84c.01-.11.02-.22.02-.34 0-.12-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93A.182.182 0 0020.2 3h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58a1.953 1.953 0 000 .68l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22l-.73-.58zm-2.6.91a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM19.92 11.68l-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25c-.13-.1-.27-.18-.42-.24l-.09-.66A.15.15 0 0018 10h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24 0 .08.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25c.13.1.27.18.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24 0-.08-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17zm-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83zM4.74 9h8.53c.27 0 .49-.22.49-.49v-.02a.49.49 0 00-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26a.49.49 0 00-.49.49v.03c0 .26.22.48.49.48zM9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3z"></path>
        </svg>
      </span>
    );
  };

  const customizedContent = (item: Experiences) => {
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
          {item.language && (
            <p>
              <b> Öğrenim Dili :</b>{" "}
              <span className="text-primary">{item.language}</span>
            </p>
          )}
          {item.type && (
            <p>
              <b> Öğretim Tipi : </b>{" "}
              <span className="text-primary">{item.type}</span>
            </p>
          )}
          {item.location && (
            <p>
              <b> Çalışma Yeri : </b>{" "}
              <span className="text-primary">{item.location}</span>
            </p>
          )}
          {item.description && (
            <p>
              <b> İş Tanımı : </b>{" "}
              <span className="text-primary">{item.description}</span>
            </p>
          )}
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
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white ">
        İŞ DENEYİMLERİ
      </h5>
      {/* <h5 className="text-xl font-bold text-primary bg-secondary px-4 py-2 my-2 border-l-[10px] border-primary"></h5> */}
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

export default Experiences;
