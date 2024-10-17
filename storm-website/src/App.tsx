import pantera from './assets/kira-roxa.png';
import './App.css'; // Import the CSS file
import videostorm from './assets/storm-thumb.mp4';

export default function App() {
  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-32 h-28 ml-7 mt-5" src={pantera} alt="Logotipo da empresa" />
        </div>
        <ul className="text-4xl flex gap-10 text-purple-600 font-black mr-32">
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
    </nav>
  );
}