import { Link } from "react-router-dom";

const Profile = () => {
  const reservations = [
    {
      id: 1,
      salon: "Khaled Nofal Salon",
      day: "Friday",
      date: "9 / 2 / 2025",
      service: "Gel Nail Polish",
      img: "https://i.pinimg.com/236x/38/f5/ee/38f5ee9ce2c40727afa0ba3e8e63c86b.jpg",
    },
    {
      id: 2,
      salon: "LA SPA",
      day: "Tuesday",
      date: "20 / 4 / 2025",
      service: "Hair Style",
      img: "https://i.pinimg.com/236x/e5/bb/0a/e5bb0a0d17a1503e0083b3eafa5c8307.jpg",
    },
    {
      id: 3,
      salon: "Basmat Nadira Salon",
      day: "Monday",
      date: "11 / 4 / 2025",
      service: "Nail Installation",
      img: "https://i.pinimg.com/236x/25/97/ad/2597ad2133d1a412754e11ff2c10fc59.jpg",
    },
    {
      id: 4,
      salon: "Maison de Joelle",
      day: "Sunday",
      date: "5 / 3 / 2025",
      service: "Hand Paraffine",
      img: "https://i.pinimg.com/236x/00/47/8b/00478bfbefaf4427192167f541103344.jpg",
    },
  ];

  return (
    <div className="profileContainer">
      <div>
        <img
          src="../src/images/background.png"
          className="w-full h-80 object-cover -mb-24"
          alt="Background"
        />
        <div className="flex m-4">
          <img
            src="../src/images/profile.png"
            className="rounded-full w-36 h-36 border-4 border-white mr-5"
            alt="Profile"
          />
          <div className="profile-info flex mt-20">
            <h4 className="text-3xl">Jenan Faraj</h4>
            <Link to={"/userProfileEdit"}>
              <i className="fa-solid mt-2 fa-user-pen text-2xl ml-3 text-gray-700 hover:text-[#B58152]"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 mt-5 text-center">
        <h2 className="text-3xl mb-6 font-bold text-[#9a6b42]">
          Reservations:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="col-md-6 mb-6">
              <div className="bg-white border text-2xl border-[#d7b59d] rounded-lg p-4 shadow-md flex flex-col items-center">
                <img
                  src={reservation.img}
                  alt="Profile"
                  className="rounded-full w-30 h-30 border-4 border-[#d7b59d] mb-4"
                />
                <h5>{reservation.salon}</h5>
                <p>DAY: {reservation.day}</p>
                <p>DATE: {reservation.date}</p>
                <p>Service type: {reservation.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
