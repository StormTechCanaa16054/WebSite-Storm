import videostorm from "../assets/storm-thumb.mp4";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";

import logoFanta from '../assets/Sponsors/fantaIcon.svg';
import logoJohndeere from '../assets/Sponsors/johndeereIcon.svg';
import logoEbepos from '../assets/Sponsors/ebeposIcon.svg';
import logoAerofiber from '../assets/Sponsors/aeroIcon.svg';
import logoSenai from '../assets/Sponsors/senaiIcon.svg';
import logoMarceneiro from '../assets/Sponsors/marceneiroIcon.svg';
import logoRockwell from '../assets/Sponsors/rockwellIcon.svg';
import logoSesi from '../assets/Sponsors/sesiIcon.svg';

export default function Homepage() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  const data = [
    { id: "1", image: logoSesi },
    { id: "2", image: logoJohndeere },
    { id: "3", image: logoFanta },
    { id: "4", image: logoSenai },
    { id: "5", image: logoAerofiber },
    { id: "6", image: logoMarceneiro },
    { id: "8", image: logoRockwell },
    { id: "9", image: logoEbepos },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="h-[80vh] md:h-screen overflow-hidden">
        <video autoPlay muted className="object-cover w-full h-full">
          <source src={videostorm} type="video/mp4" />
        </video>
      </section>

      <div className="text-center bg-white py-10">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold">
          IN THE <span className="text-roxo">NEWS!</span>x
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-10 mt-10">
          <YouTube videoId="zSTSgdeaSRM" className="w-4/5 md:w-1/2 max-w-sm" />
          <YouTube videoId="_uZAr-cmpdo" className="w-4/5 md:w-1/2 max-w-sm" />
        </div>
      </div>

      <div className="bg-roxo py-10">
        <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-black text-white">
          PARCEIROS:
        </h1>
        <div className="max-w-7xl mx-auto mt-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt="Parceiro"
                  className="w-32 mx-auto rounded-md mb-5"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
