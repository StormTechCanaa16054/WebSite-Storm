import videostorm from "../assets/storm-thumb.mp4";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import Navbar from "../components/Navbar";

export default function Homepage() {
  const [slidesPerView, setSlidePerView] = useState(4);

  const data = [
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
    {
      id: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
    {
      id: "5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
    {
      id: "6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
    {
      id: "7",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
    {
      id: "8",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s",
    },
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
      <div className="my-10 bg-white w-full z-10">
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
