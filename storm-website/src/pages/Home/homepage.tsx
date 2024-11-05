import videostorm from "../../assets/storm-thumb.mp4";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import Navbar from "../../components/Navbar";

import logoFanta from '../../assets/fantaIcon.svg';
import logoJohndeere from '../../assets/johndeereIcon.svg';
import logoEbepos from '../../assets/ebeposIcon.svg';
import logoAerofiber from '../../assets/aeroIcon.svg';
import logoSenai from '../../assets/senaiIcon.svg';
import logoMarceneiro from '../../assets/marceneiroIcon.svg';
import logoDiesel from '../../assets/dieselIcon.svg';
import logoRockwell from '../../assets/rockwellIcon.svg';
import logoSesi from '../../assets/sesiIcon.svg';



export default function Homepage() {
  const [slidesPerView, setSlidePerView] = useState(4);

  const data = [
    {
      id: "1",
      image: logoSesi,
    },
    {
      id: "2",
      image: logoJohndeere,
    },
    {
      id: "3",
      image: logoFanta,
    },
    {
      id: "4",
      image: logoSenai,
    },
    {
      id: "5",
      image: logoAerofiber,
    },
    {
      id: "6",
      image: logoMarceneiro,
    },
    {
      id: "7",
      image: logoDiesel,
    },
    {
      id: "8",
      image: logoRockwell, 
    },
    {
      id: "9",
      image: logoEbepos,
    }
  ];
  

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(4);
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
      <Navbar />
      <section className="h-screen overflow-hidden">
        <video autoPlay muted className="object-cover w-full h-full">
          <source src={videostorm} type="video/mp4" />
        </video>
      </section>
      <div>
        <h1 className="text-9xl w-full text-center font-bold bg-white">
          IN THE <span className="text-roxo">NEWS!</span>
        </h1>
        <div className="flex items-center justify-center gap-28 my-10">
          <YouTube videoId="zSTSgdeaSRM" />
          <YouTube videoId="_uZAr-cmpdo" />
        </div>
      </div>
      <div className="bg-roxo">
        <h1 className="flex justify-center items-center text-8xl font-black text-white">
          PARCEIROS:
        </h1>
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
                alt="Slider"
                className="slide-item mx-auto mt-6 rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
