import { Phone, MessageCircle } from 'lucide-react';
import HeroSection from "../components/HeroSection";
import Filters from "../components/Filters";
import { FaWhatsapp } from "react-icons/fa";
 

function Categories () {
    
  const salons = [
    {
      name: "Sohail & Body Salon",
      description: "A premium salon for hair and makeup. Located in Abdoun.",
      image: "https://i.pinimg.com/236x/fa/a3/e4/faa3e4ad37f276d27fcc2584d4e647b2.jpg"
    },
    {
      name: "LA SPA",
      description: "A luxury salon for makeup, hairstyling, and skincare. Located in Sweifieh.",
      image: "https://i.pinimg.com/236x/e5/bb/0a/e5bb0a0d17a1503e0083b3eafa5c8307.jpg"
    },
    { 
      name: "Basmat Nadira Salon",
      description: "Specializes in hair treatments, coloring, and skincare. Located in Jubaiha.",
      image: "https://i.pinimg.com/236x/25/97/ad/2597ad2133d1a412754e11ff2c10fc59.jpg"
    },
    {
      name: "Maison de Joelle",
      description: "High-end beauty services including hair coloring, makeup, and nails. Located in Abdali",
      image: "https://i.pinimg.com/236x/00/47/8b/00478bfbefaf4427192167f541103344.jpg"
    },
    {
      name: "Tariq Mashrabsh Ladies Salon",
      description: "Offers haircuts, coloring, and bridal makeup. Located in Dabouq.",
      image: "../src/images/sallon.png"
    }
  ];

  const timeSlots = [
    { time: "11:00 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "01:00 PM", available: false }
  ];

  return (
    <>
    <HeroSection />

    <Filters />

    <div className="container mx-auto px-4 py-8">
      {salons.map((salon, index) => (
        <div key={index} className="w-full border border-[#e0a96d] rounded-lg p-5 shadow-md mb-5">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Salon Info Section */}
            <div className="flex items-center space-x-5 text-2xl flex-1">
              <img 
                src={salon.image}
                alt={salon.name} 
                className="rounded-full w-30 h-30 object-cover"
              />
              <div className="flex-1">
                <h5 className="text-2xl font-bold text-[#a36d3d]">{salon.name}</h5>
                <p className="text-gray-600 mt-1">{salon.description}</p>
                <div className="mt-2">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm">4.8</span>
                  <span className="text-yellow-400 ml-2">★★★★☆</span>
                  <span className="text-blue-600 ml-2">From 1025 visitors</span>
                </div>
                <div className="flex gap-6 mt-4">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366] hover:text-[#128C7E] cursor-pointer" />
                  <MessageCircle className="w-6 h-6 text-[#70350b] hover:text-[#9b4f19] cursor-pointer" />
                  <Phone className="w-6 h-6 text-[#70350b] hover:text-[#9b4f19] cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Booking Section */}
            <div className="flex-1 text-center">
              <h6 className="font-semibold text-lg">Choose Inclinic Appointment Time</h6>
              <p className="text-gray-500 mt-1">Book online using your mobile, without registering!</p>
              
              <div className="mt-4 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <td className="p-2 bg-[#e0ad2d] text-white rounded">Today</td>
                      <td className="p-2 bg-[#e0ad2d] text-white rounded">Tom.</td>
                      <td className="p-2 bg-[#e0ad2d] text-white rounded">Fri 1/3</td>
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((slot, idx) => (
                      <tr key={idx}>
                        <td className="p-2 bg-gray-100 rounded m-2">
                          <button className={`w-full ${!slot.available && 'line-through text-gray-400'}`}>
                            {slot.time}
                          </button>
                        </td>
                        <td className="p-2 bg-gray-100 rounded m-2">
                          <button className={`w-full ${!slot.available && 'line-through text-gray-400'}`}>
                            {slot.time}
                          </button>
                        </td>
                        <td className="p-2 bg-gray-100 rounded m-2">
                          <button className={`w-full ${!slot.available && 'line-through text-gray-400'}`}>
                            {slot.time}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <p className="text-[#d2a240] cursor-pointer mt-2">More ▼</p>
              <button className="mt-4 bg-[#8B4513] hover:bg-[#70350b] text-white font-bold py-2 px-6 rounded">
                Book
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Categories;
