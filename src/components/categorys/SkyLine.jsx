import React from "react";
import PageSection from "@/components/PageSection";

import product1 from "@/assets/categorys/skyLine/product1.jpg";
import product2 from "@/assets/categorys/skyLine/product2.jpg";
import product3 from "@/assets/categorys/skyLine/product3.jpg";
import product4 from "@/assets/categorys/skyLine/product4.jpg";
import product5 from "@/assets/categorys/skyLine/product5.jpg";
import product6 from "@/assets/categorys/skyLine/product6.jpg";
import product7 from "@/assets/categorys/skyLine/product7.jpg";
import blackLineVideo from "@/assets/categorys/skyLine/skyLine.mp4";

import Navigate from "@/components/categorys/Navigate";

const SkyLine = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      code: "",
      brand: "@jmario_couture",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      code: "",
      brand: "@jmario_couture",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      code: "",
      brand: "@jmario_couture",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      code: "",
      brand: "@jmario_couture",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      code: "",
      brand: "@jmario_couture",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      code: "",
      brand: "@jmario_couture",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      code: "",
      brand: "@jmario_couture",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="Titulo Producto 1"
      subtitle={`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Dignissimos sunt enim eum possimus, culpa veritatis hic aspernatur
    numquam ducimus exercitationem fuga nemo consequatur odit
    laudantium voluptate facilis veniam perferendis pariatur?`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            <div className="rounded-lg shadow-lg shadow-[#8fbbeb] duration-200 hover:scale-105">
              <a href="" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={blackLineVideo}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @jmario_couture
                  </p>
                </div>
              </a>
            </div>
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-[#8fbbeb] duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default SkyLine;
