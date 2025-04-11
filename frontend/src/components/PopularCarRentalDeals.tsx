import { useState } from "react";
import { 
  FaStar, 
  FaUsers, 
  FaSnowflake, 
  FaCar, 
  FaDoorOpen, 
  FaArrowRight 
} from "react-icons/fa";

// Define TypeScript interfaces
interface CarDeal {
  id: number;
  model: string;
  brand: string;
  image: string;
  rating: number;
  reviews: number;
  passengers: number;
  airConditioning: boolean;
  doors: number;
  pricePerDay: number;
}

const PopularCarRentalDeals = () => {
  // Sample data for car rental deals
  const [carDeals] = useState<CarDeal[]>([
    {
      id: 1,
      brand: "Jaguar",
      model: "XE I-P250",
      image: "https://images.pexels.com/photos/29550422/pexels-photo-29550422/free-photo-of-vue-avant-droite-de-la-hyundai-initium-traversant-le-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.8,
      reviews: 2436,
      passengers: 4,
      airConditioning: true,
      doors: 4,
      pricePerDay: 1800
    },
    {
      id: 2,
      brand: "Audi",
      model: "R8",
      image: "/api/placeholder/200/120",
      rating: 4.6,
      reviews: 1938,
      passengers: 2,
      airConditioning: true,
      doors: 2,
      pricePerDay: 2100
    },
    {
      id: 3,
      brand: "BMW",
      model: "M3",
      image: "/api/placeholder/200/120",
      rating: 4.5,
      reviews: 2036,
      passengers: 4,
      airConditioning: true,
      doors: 4,
      pricePerDay: 1600
    },
    {
      id: 4,
      brand: "Lamborghini",
      model: "Huracan",
      image: "/api/placeholder/200/120",
      rating: 4.3,
      reviews: 2236,
      passengers: 2,
      airConditioning: true,
      doors: 2,
      pricePerDay: 2300
    }
  ]);

  // Format price to include comma for thousands
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-center mb-4">
        <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium uppercase">
          Popular Rental Deals
        </span>
      </div>
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Most popular cars rental deals
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {carDeals.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
            <div className="mb-4 flex justify-center">
              <img 
                src={car.image} 
                alt={`${car.brand} ${car.model}`} 
                className="h-32 object-contain"
              />
            </div>
            
            <h3 className="font-bold text-lg">{car.brand} {car.model}</h3>
            
            <div className="flex items-center mt-1 mb-3">
              <FaStar className="text-yellow-400" />
              <span className="ml-1 font-bold">{car.rating}</span>
              <span className="text-gray-500 text-sm ml-1">
                ({car.reviews.toLocaleString()} reviews)
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center text-gray-600">
                <FaUsers className="mr-2 text-sm" />
                <span className="text-sm">{car.passengers} Passengers</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaCar className="mr-2 text-sm" />
                <span className="text-sm">Auto</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaSnowflake className="mr-2 text-sm" />
                <span className="text-sm">Air Conditioning</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaDoorOpen className="mr-2 text-sm" />
                <span className="text-sm">{car.doors} Doors</span>
              </div>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 text-sm">Price</span>
                <div>
                  <span className="font-bold text-lg">${formatPrice(car.pricePerDay / 100)}</span>
                  <span className="text-gray-500 text-sm">/day</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition flex items-center justify-center">
                Rent Now
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCarRentalDeals;