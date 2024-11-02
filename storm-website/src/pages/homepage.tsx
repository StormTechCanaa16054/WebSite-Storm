import pantera from './assets/kira-roxa.png';
import './global.css';
import videostorm from './assets/storm-thumb.mp4';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

export default function App() {
  const [slidesPerView, setSlidePerView] = useState(4);

  const data = [
    { id: '1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
    { id: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
    { id: '3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
    { id: '4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
    { id: '5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
    { id: '6', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
    { id: '7', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
    { id: '8', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk1l1uDCe9rcI3bbwOCKEHSL_ynTY3mdpUQ&s' },
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
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="kira-item ml-7 mt-5" src={pantera} alt="Kira" />
        </div>
        <ul className="text-4xl flex gap-10 text-roxo font-black mr-32">
          <li className="border-dashed border-purple-600 hover:border-b-2 hover:border-solid hover:border-purple-800">HOME</li>
          <li className="border-dashed border-purple-600 hover:border-b-2 hover:border-solid hover:border-purple-800">FIRST</li>
          <li className="border-dashed border-purple-600 hover:border-b-2 hover:border-solid hover:border-purple-800">ABOUT US</li>
          <li className="border-dashed border-purple-600 hover:border-b-2 hover:border-solid hover:border-purple-800">CONTACT</li>
          <li className="border-dashed border-purple-600 hover:border-b-2 hover:border-solid hover:border-purple-800">MENTORSHIP</li>
        </ul>
      </div>
      <div className='relative flex items-center justify-center h-screen overflow-hidden'>
        <video autoPlay loop className='absolute z-10 w-auto min-w-full max-w-none opacity-100'>
          <source src={videostorm} />
        </video>
      </div>
      <span className='flex items-center justify-center gap-8 font-bold'>
        <h1 className='text-9xl'>IN THE</h1>
        <h1 className='text-9xl text-roxo'>NEWS!</h1>
      </span>
      <div className='flex items-center justify-center overflow-hidden gap-28 mt-20'>
        <YouTube videoId='https://youtu.be/zSTSgdeaSRM' />
        <YouTube videoId='https://youtu.be/_uZAr-cmpdo' />
      </div>
      <div className="bg-roxo absolute max-w-full h-96 mt-24">
        <h1 className='flex justify-center items-center text-8xl font-black text-white'>PARCEIROS:</h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
          pagination={{ clickable: true }} 
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt='Slider' className='slide-item mx-auto mt-6 rounded-md' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </nav>
  );
}
