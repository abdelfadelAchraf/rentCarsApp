import { BsGooglePlay } from 'react-icons/bs';
import { IoLogoApple } from 'react-icons/io';
import car from "../assets/car.png";
import SearchHome from '../components/SearchHome';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen py-12 md:py-0">
          {/* Text Content */}
          <div className="flex flex-col gap-6 mt-8 md:mt-0 text-center md:text-left max-w-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Find, book and <br className="hidden sm:block" />
              rent a car <span className="text-blue-500">Easily</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-700">
              Get a car wherever and whenever you need it with your iOS and Android device
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
              {/* Google Play Button */}
              <a href="#" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                <BsGooglePlay className="text-2xl sm:text-3xl" />
                <div className="flex flex-col">
                  <span className="text-xs font-light">Get it on</span>
                  <span className="text-base font-medium">Google Play</span>
                </div>
              </a>

              {/* App Store Button */}
              <a href="#" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
                <IoLogoApple className="text-2xl sm:text-3xl" />
                <div className="flex flex-col">
                  <span className="text-xs font-light">Download on</span>
                  <span className="text-base font-medium">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Car Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={car} 
              alt="Car rental illustration" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 lg:-mt-24 mb-12 relative z-10">
        <SearchHome />
      </div>
    </div>
  );
};

export default HomePage;