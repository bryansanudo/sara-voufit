import React from "react";
import PageSection from "@/components/PageSection";

import product1 from "@/assets/categorys/saraHome/product1.jpg";
import product2 from "@/assets/categorys/saraHome/product2.jpg";
import product3 from "@/assets/categorys/saraHome/product3.jpg";
import product4 from "@/assets/categorys/saraHome/product4.jpg";
import product5 from "@/assets/categorys/saraHome/product5.jpg";
import product6 from "@/assets/categorys/saraHome/product6.jpg";
import product7 from "@/assets/categorys/saraHome/product7.jpg";
import product8 from "@/assets/categorys/saraHome/product8.jpg";
import product9 from "@/assets/categorys/saraHome/product9.jpg";
import product10 from "@/assets/categorys/saraHome/product10.jpg";
import product11 from "@/assets/categorys/saraHome/product11.jpg";
import product12 from "@/assets/categorys/saraHome/product12.jpg";
import product13 from "@/assets/categorys/saraHome/product13.jpg";
import product14 from "@/assets/categorys/saraHome/product14.jpg";

import video1 from "@/assets/categorys/saraHome/video1.mp4";
import video2 from "@/assets/categorys/saraHome/video2.mp4";

import Navigate from "@/components/categorys/Navigate";

const Home = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 9,
      src: product9,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 10,
      src: product10,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 11,
      src: product11,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 12,
      src: product12,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 13,
      src: product13,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
    },
    {
      id: 14,
      src: product14,
      category: "Titulo",
      code: "",
      brand: "@sarazapata144",
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
            <div className="rounded-lg shadow-lg shadow-thSecondary duration-200 hover:scale-105">
              <a href="" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={video1}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @sarazapata144
                  </p>
                </div>
              </a>
            </div>
            <div className="rounded-lg shadow-lg shadow-thSecondary duration-200 hover:scale-105">
              <a href="" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={video2}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @sarazapata144
                  </p>
                </div>
              </a>
            </div>
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thSecondary duration-200 hover:scale-105"
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

export default Home;
