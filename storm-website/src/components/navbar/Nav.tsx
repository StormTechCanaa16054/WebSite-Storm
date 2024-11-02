import pantera from './assets/kira-roxa.png';
import './global.css';
import 'swiper/css';
import 'swiper/css/pagination';

 export default function Nav() {
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
    </nav>
  );
}

