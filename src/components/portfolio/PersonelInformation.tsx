import React from "react";

const PersonelInformation: React.FC = () => {
  type PersonalInfo = {
    title: string;
    value: string;
  };
  const personalInfo: PersonalInfo[] = [
    {
      title: "ÇALIŞMA DURUMU",
      value: "Çalışıyorum",
    },
    {
      title: "UYRUĞU",
      value: "Türkiye",
    },
    {
      title: "TC KİMLİK NO",
      value: "40772040026",
    },
    {
      title: "DOĞUM TARİHİ",
      value: "10 Mart 1996",
    },
    {
      title: "EĞİTİM DURUMU",
      value: "Lisans Mezunu",
    },
    {
      title: "BULUNDUĞU YER",
      value: "Buca, İzmir",
    },
    {
      title: "DOĞUM YERİ",
      value: "Of, Trabzon",
    },
    {
      title: "EHLİYET",
      value: "B",
    },
    {
      title: "CİNSİYET",
      value: "Erkek",
    },
    {
      title: "YAŞ",
      value: "26",
    },
    {
      title: "BOY (cm)",
      value: "172",
    },

    {
      title: "KİLO (kg)",
      value: "78",
    },
    {
      title: "ASKERLİK",
      value: "Yapıyor",
    },
    {
      title: "ADRES",
      value: "İnönü Mahallesi Osman Serden Geçti Caddesi No: 46 Buca / İzmir ",
    },
  ];
  return (
    <div className="w-full">
      <h5 className="text-xl font-bold text-secondary bg-primary px-4 py-2 my-2 border-l-[10px] border-primary border border-y-[10px] border-y-white">
        KİŞİSEL BİLGİLER
      </h5>
      <div className="pt-3 px-4 grid md:grid-cols-2 gap-4">
        {personalInfo.map((info: PersonalInfo, idx: number) => (
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

export default PersonelInformation;
