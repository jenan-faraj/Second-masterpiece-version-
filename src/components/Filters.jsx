import { useState } from "react";  

function Filters() {

    const [selectedFilters, setSelectedFilters] = useState({
        location: "",
        time: "",
        service: "",
      });
    
      const handleSelect = (category, value) => {
        setSelectedFilters({ ...selectedFilters, [category]: value });
      };
    


    return (
        <>
        <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
      <h3 className="text-xl font-semibold text-[#B58152]">Filter:</h3>
      {/* Location Dropdown */}
      <div className="relative">
        <select
          className="px-4 py-2 border-2 border-[#B58152] font-bold text-[#B58152] rounded-lg cursor-pointer"
          onChange={(e) => handleSelect("location", e.target.value)}
        >
          <option value="">Location</option>
          <option value="zarqa">Zarqa</option>
          <option value="amman">Amman</option>
          <option value="irbid">Irbid</option>
        </select>
      </div>
      {/* Time Dropdown */}
      <div className="relative">
        <select
          className="px-4 py-2 border-2 border-[#B58152] font-bold text-[#B58152] rounded-lg cursor-pointer"
          onChange={(e) => handleSelect("time", e.target.value)}
        >
          <option value="">Time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      {/* Services Dropdown */}
      <div className="relative">
        <select
          className="px-4 py-2 border-2 border-[#B58152] font-bold text-[#B58152] rounded-lg cursor-pointer"
          onChange={(e) => handleSelect("service", e.target.value)}
        >
          <option value="">Services</option>
          <option value="hair">Hair</option>
          <option value="nail">Nail</option>
          <option value="skin">Skin</option>
          <option value="makeup">Makeup</option>
        </select>
      </div>
      {/* Search Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border border-[#B58152] font-bold text-[#B58152]  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B58152]"
        />
        <button className="px-4 py-2 bg-[#B58152] text-white rounded-lg hover:bg-[#955e33]">
          Search
        </button>
      </div>
    </div>
        </>
    )
}
export default Filters