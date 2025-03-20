import { Phone, MessageCircle } from "lucide-react";
import HeroSection from "../components/HeroSection";
import Filters from "../components/Filters";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Categories() {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselItems = [
    {
      image: "./src/images/Hair.jpg",
      title: "Book with Ease!",
      description: "Glow with Confidence.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9QuSWA0LxSz4xDVTsylvmcJ9uqVUqmM10w&s",
      title: "Beauty, Your Way",
      description: "Find & Book Your Perfect Salon!",
    },
    {
      image: "./src/images/contactBg.png",
      title: "Explore, Choose, Shine",
      description: "Your Beauty Journey Starts Here!",
    },
  ];

  const salons = [
    {
      name: "Sohail & Body Salon",
      description: "A premium salon for hair and makeup. Located in Abdoun.",
      image:
        "https://i.pinimg.com/236x/fa/a3/e4/faa3e4ad37f276d27fcc2584d4e647b2.jpg",
    },
    {
      name: "LA SPA",
      description:
        "A luxury salon for makeup, hairstyling, and skincare. Located in Sweifieh.",
      image:
        "https://i.pinimg.com/236x/e5/bb/0a/e5bb0a0d17a1503e0083b3eafa5c8307.jpg",
    },
    {
      name: "Basmat Nadira Salon",
      description:
        "Specializes in hair treatments, coloring, and skincare. Located in Jubaiha.",
      image:
        "https://i.pinimg.com/236x/25/97/ad/2597ad2133d1a412754e11ff2c10fc59.jpg",
    },
    {
      name: "Maison de Joelle",
      description:
        "High-end beauty services including hair coloring, makeup, and nails. Located in Abdali",
      image:
        "https://i.pinimg.com/236x/00/47/8b/00478bfbefaf4427192167f541103344.jpg",
    },
    {
      name: "Tariq Mashrabsh Ladies Salon",
      description:
        "Offers haircuts, coloring, and bridal makeup. Located in Dabouq.",
      image: "../src/images/sallon.png",
    },
  ];

  const timeSlots = [
    { time: "11:00 AM", available: true },
    { time: "11:30 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "01:00 PM", available: false },
  ];

  return (
    <>
      <div className="relative w-full">
        <div className="relative h-[500px] overflow-hidden">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute flex-col flex justify-center items-center bottom-0 left-0 right-0 p-8 text-white bg-[#00000030]">
                <h5 className="text-2xl font-bold">{item.title}</h5>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            setActiveSlide((prev) =>
              prev === 0 ? carouselItems.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#eeeeee3b] text-white p-2 rounded-full"
        >
          ←
        </button>
        <button
          onClick={() =>
            setActiveSlide((prev) =>
              prev === carouselItems.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#eeeeee3b] text-white p-2 rounded-full"
        >
          →
        </button>
      </div>

      <Filters />

      <div className="max-w-7xl mx-auto p-4">
        {/* تقسيم المصفوفة إلى أزواج من العناصر (كل اثنين معًا) */}
        {Array.from({ length: Math.ceil(salons.length / 2) }, (_, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {salons.slice(i * 2, i * 2 + 2).map((salon, index) => (
              <div
                key={index}
                className="border flex flex-col justify-between border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
              >
                <div className="p-4 flex items-start">
                  {/* الصورة المدورة */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={salon.image}
                      alt={salon.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* معلومات الصالون */}
                  <div className="flex-1">
                    <h2 className="text-amber-700 font-semibold text-xl">
                      {salon.name}
                    </h2>
                    <p className="text-gray-600 text-md mt-1">
                      {salon.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="bg-yellow-300 text-black font-bold text-sm px-2 py-0.5 rounded mr-2">
                        4.8
                      </span>
                      <span className="text-yellow-400 text-2xl mr-2">
                        ★★★★☆
                      </span>
                      <span className="text-blue-500 text-md">
                        From 1025 visitors
                      </span>
                    </div>
                  </div>
                </div>

                {/* قسم الحجز */}
                <div className="flex justify-between items-center p-4 bg-gray-50 border-t border-gray-100">
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">
                      Choose Inclinic Appointment Time
                    </h3>
                    <p className="text-gray-500 text-xs">
                      Book online using your mobile, without registering!
                    </p>
                  </div>
                  <Link to={"/book"}>
                    <button className="bg-[#B58152] hover:cursor-pointer hover:bg-[#987252] text-white px-4 py-2 rounded text-sm font-medium">
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
