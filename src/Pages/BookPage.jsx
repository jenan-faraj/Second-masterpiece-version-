import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomerComments from "../components/CustomerComments";

function PartnerProfile() {
  const dates = [
    { day: "Mon", date: "10" },
    { day: "Tue", date: "11" },
    { day: "Wed", date: "12" },
    { day: "Thu", date: "13" },
    { day: "Fri", date: "14" },
    { day: "Sat", date: "15" },
    { day: "Sun", date: "16" },
    { day: "Mon", date: "17" },
  ];

  const morningSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];
  const afternoonSlots = [
    "12:00 - 1:00 PM",
    "2:00 - 3:00 PM",
    "4:00 - 5:00 PM",
    "6:00 - 7:00 PM",
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    "https://i.pinimg.com/474x/27/ab/5f/27ab5fcf5e71573ccb78b097ee9262a9.jpg",
    "https://i.pinimg.com/474x/b2/df/d1/b2dfd147a76b650b61f989f8bde3b475.jpg",
    "https://i.pinimg.com/474x/6c/c7/4a/6cc74aaf6264dfe9c8a79d945b663d0e.jpg",
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const hours = [
    { day: "Sunday", hours: "09:00 AM - 07:00 PM" },
    { day: "Monday", hours: "09:00 AM - 07:00 PM" },
    { day: "Tuesday", hours: "09:00 AM - 07:00 PM" },
    { day: "Wednesday", hours: "09:00 AM - 07:00 PM" },
    { day: "Thursday", hours: "09:00 AM - 07:00 PM" },
    { day: "Friday", hours: "09:00 AM - 07:00 PM" },
    { day: "Saturday", hours: "Closed" },
  ];

  const services = [
    {
      title: "Gel Nail Polish",
      description:
        "A stronger nail polish which lasts for about 3 weeks and gives the nails more gloss and shine.",
    },
    {
      title: "Nail Installation",
      description:
        "The installation of an artificial nail to reach the desired shape and length.",
    },
    {
      title: "Hand Paraffine",
      description:
        "Indulgence for your hand by exfoliating and moisturizing with a layer of wax.",
    },
    {
      title: "Gel Nail Polish",
      description:
        "A stronger nail polish which lasts for about 3 weeks and gives the nails more gloss and shine.",
    },
    {
      title: "Nail Installation",
      description:
        "The installation of an artificial nail to reach the desired shape and length.",
    },
    {
      title: "Hand Paraffine",
      description:
        "Indulgence for your hand by exfoliating and moisturizing with a layer of wax.",
    },
  ];

  return (
    <>
      <div className="container border  border-gray-200 rounded-lg mx-auto shadow-2xl m-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Section: Booking */}
          <div className="md:col-span-7">
            <h4 className="text-xl font-semibold">Book Your Appointment</h4>

            <div className="flex items-center my-3">
              <img
                src="https://i.pinimg.com/236x/fa/a3/e4/faa3e4ad37f276d27fcc2584d4e647b2.jpg"
                className="w-20 h-20 rounded-full object-cover mr-3"
                alt="haircut"
              />
              <div>
                <h5 className="text-lg font-semibold mb-0">
                  Sohail & Body Salon
                </h5>
                <p className="text-gray-600 mb-0">
                  A premium salon for hair and makeup. Located in Abdoun.
                </p>
              </div>
            </div>

            
            <h5 className="text-lg font-bold">Monday, February 10</h5>
              <p className="text-sm">
                <i className="bi bi-clock"></i> 11:00 AM - 11:30 AM
                <a href="partnerProfile.html" className="text-primary">Change</a>
              </p>
              <h5 className="text-lg font-bold">Enter Details</h5>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control w-full p-2 border rounded"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control w-full p-2 border rounded"
                    placeholder="Phone Number *"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control w-full p-2 border rounded"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <select className="form-control w-full p-2 border rounded">
                    <option selected disabled>Service Type</option>
                    <option value="note1">Gel Nail Polish</option>
                    <option value="note2">Nail Installation</option>
                    <option value="note3">Hand Paraffine</option>
                    <option value="note3">Hair care</option>
                    <option value="note3">Hair Removal</option>
                    <option value="note3">Skin Care</option>
                    <option value="note3">Makeup</option>
                    <option value="note3">Brows & Lashes</option>
                  </select>
                </div>

                <h5 className="m-0 text-lg font-bold">Add Notes:</h5>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control w-full p-2 border rounded"
                    placeholder="Add note"
                  />
                </div>
                <button className="btn btn-primary mt-3 bg-blue-500 text-white p-2 rounded">
                  <a
                    className="text-light text-decoration-none"
                    href="partnerProfile.html"
                  >
                    Confirm Booking
                  </a>
                </button>
              </form>
          </div>

          {/* Right Section: Salon Info */}
          <div className="md:col-span-5">
            <div className="border  border-gray-400 rounded-lg p-4">
              <img
                src="https://static.elfsight.com/configurator/assets/appointment-booking/demo/business_cover.jpg"
                className="w-full rounded-lg mb-5 object-cover"
                alt="salon"
              />
              <h5 className=" font-semibold text-3xl">Sohail & Body Salon</h5>
              <p className="text-gray-600 py-4 text-2xl">
                Premium hair services tailored to your style. Experienced
                stylists provide top-notch haircuts, coloring, and more.
              </p>
              <p className="my-2">
                <span className="font-bold text-2xl">📞</span> 07 8180 3035
              </p>
              <p className="my-2">
                <span className="font-bold text-2xl">📍</span> Mrjalhmam, Amman, Jordan
              </p>
              <p className="my-2">
                <span className="font-bold text-2xl">📧</span> Sohail@gmail.com
              </p>
              <p className="text-red-600 text-2xl mb-4">
                🔴 Closed • Opens on Monday at 8:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Carousel Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <div className="relative h-[400px]">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="border-2 border-gray-800 rounded-lg p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Sohail & Body Salon
            </h1>
            <p className="text-gray-600 text-4xl">
              Hala Salon for Ladies is located in Shmeisani, under Mrs. Hala Al
              Shakhshir, hair and makeup expert. A salon that uses the finest
              natural products for your beauty.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Map Section */}
          <div className="rounded-lg shadow-lg overflow-hidden h-[400px]">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.0207460418785!2d35.87376331450986!3d31.95285078140784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c5a9c9f5f4a05%3A0x6b7f4d1b9cceec0c!2sAbdoun%20Bridge!5e0!3m2!1sen!2sjo!4v1637021835545!5m2!1sen!2sjo"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Opening Hours Section */}
          <div className="p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Opening Hours
            </h1>
            <div className="space-y-3 text-2xl">
              {hours.map(({ day, hours }) => (
                <p key={day} className="text-gray-600">
                  <span className="font-semibold">{day}:</span> {hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <h1 className="text-4xl text-gray-800 mb-10 text-center font-serif">
          Services
        </h1>

        <div className="space-y-5 mb-5 text-2xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-gray-500 p-5 shadow-md transition-transform duration-300 hover:translate-x-2"
            >
              <h2 className="text-2xl text-gray-800 font-bold mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <CustomerComments/>
    </>
  );
}
export default PartnerProfile;
