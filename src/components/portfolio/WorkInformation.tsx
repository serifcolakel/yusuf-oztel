import React from "react";

const WorkInformation: React.FC = () => {
  type WorkInfo = {
    title: string;
    value: string;
  };
  const WorkInfo: WorkInfo[] = [
    {
      title: "ÜNVAN / MESLEK",
      value: "Elektrik Elektronik Mühendisi",
    },
    {
      title: "ÇALIŞMA ŞEKL",
      value: "Full Time",
    },
    {
      title: "ÜCRET BEKLENTİSİ",
      value: "Belirtmek İstemiyor",
    },
    {
      title: "ÇALIŞMAK İSTEDİĞİ POZİSYONLAR",
      value: "Elektrik Elektronik Mühendisi",
    },
    {
      title: "ÇALIŞMAK İSTEDİĞİ SEKTÖRLER",
      value:
        "Elektrik ve Elektronik, Elektrik Üretim ve Dağıtımı, Elektronik Kart Sistemleri, Elektrikli ve Elektronik Aletler, Elektronik Güvenlik Sistemleri",
    },
  ];
  return (
    <div className="w-full">
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white">
        ÇALIŞMA BİLGİLERİ
      </h5>
      <div className="pt-3 px-4 grid  gap-4">
        {WorkInfo.map((info: WorkInfo, idx: number) => (
          <div
            key={idx}
            className="flex flex-row items-center text-primary gap-x-4 bg-secondary border-r-white border-l-white border-l-8"
          >
            <p className="text-sm font-bold text-secondary w-1/2 text-center py-4 bg-primary rounded-r-full border-white border-r-8">
              {info.title}
            </p>
            <span className="w-1/2">{info.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkInformation;
