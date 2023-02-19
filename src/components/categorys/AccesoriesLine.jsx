import React from "react";
import PageSection from "@/components/PageSection";

import product1 from "@/assets/categorys/accesoriesLine/product1.jpg";
import product2 from "@/assets/categorys/accesoriesLine/product2.jpg";
import product3 from "@/assets/categorys/accesoriesLine/product3.jpg";
import product4 from "@/assets/categorys/accesoriesLine/product4.jpg";
import product5 from "@/assets/categorys/accesoriesLine/product5.jpg";
import product6 from "@/assets/categorys/accesoriesLine/product6.jpg";
import product7 from "@/assets/categorys/accesoriesLine/product7.jpg";
import product8 from "@/assets/categorys/accesoriesLine/product8.jpg";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const AccesoriesLine = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CBfm826DVtG/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B_7P0h1BtM4/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CBMZZDZhquM/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CA7iKhgh_t-/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CAD6f7TBSUT/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B-23hWLBgfT/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B3MUkkVBUwH/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B9KjawYBC0r/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="¡Bienvenidos a VOU FIT!  "
      subtitle={`
      ¿Estás buscando el outfit perfecto para disfrutar de tu rutina de entreno? Nuestros outfits son muy cómodos y duraderos ¡No esperes más y compra tu ropa deportiva ahora! Mira nuestra amplia selección de estilos y tallas.`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            {portfolios.map(({ id, src, codeInstagram, category, codeWpp }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-gray-600 group"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={src}
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    {category}
                  </p>
                  <div className="flex gap-5">
                    <p>S-M-L-XL</p>
                    <p>$$$</p>
                  </div>
                  <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                    <article className="group-hover:scale-125 duration-300">
                      <a href={codeInstagram} target="_blank" rel="noreferrer">
                        <IconInstagram />
                      </a>
                    </article>
                    <article className="group-hover:scale-125 duration-300">
                      <a href={codeWpp} target="_blank" rel="noreferrer">
                        <IconWpp />
                      </a>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AccesoriesLine;
