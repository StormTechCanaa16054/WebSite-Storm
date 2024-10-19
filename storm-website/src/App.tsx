import pantera from './assets/kira-roxa.png';
import './App.css'; // Import the CSS file
import videostorm from './assets/storm-thumb.mp4';
import YouTube from 'react-youtube';

export default function App() {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-32 h-28 ml-7 mt-5" src={pantera} alt="Kira" />
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
      <div className='relative flex items-center justify-center overflow-hidden gap-28 mt-20 '>
        <YouTube videoId='https://youtu.be/zSTSgdeaSRM' />
        <YouTube videoId='https://www.youtube.com/watch?v' />
      </div>
      <div className="bg-roxo absolute w-full h-96 mt-24"></div>
    </nav>
  );  
}