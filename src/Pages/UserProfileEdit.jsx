import { useState } from 'react';


const ProfileEdit = () => {
    const [showEditEmail, setShowEditEmail] = useState(false);
    const [showEditName, setShowEditName] = useState(false);
    const [showEditPassword, setShowEditPassword] = useState(false);
  
  return (
    <>
    <main className="font-sans  py-[50px]">
      <div className="max-w-5xl mx-auto bg-[#F9F3F1] shadow-lg rounded-lg p-6">
        <div className="text-center mb-5">
          <div className="w-35 h-35 rounded-full mx-auto mb-3">
            <img
              src="../src/images/profile.png"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-600">
            Hello, <span className="text-[#B58152]">Jenan Faraj</span>
          </h1>
        </div>

        <div className="mb-6">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Name</th>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Email</th>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-[#fff] px-4 py-2 border border-gray-300">
                  <div className="flex justify-between">
                    <span>Jenan Faraj</span>
                    <button
                      onClick={() => setShowEditName(!showEditName)}
                      className="text-blue-500"
                    >
                      [Edit]
                    </button>
                  </div>
                </td>
                <td className="bg-[#fff] border border-gray-300 px-4 py-2">
                  <div className="flex justify-between">
                    <span>jenan@gmail.com</span>
                    <button
                      onClick={() => setShowEditEmail(!showEditEmail)}
                      className="text-blue-500"
                    >
                      [Edit]
                    </button>
                  </div>
                </td>
                <td className="bg-[#fff] px-4 py-2 border border-gray-300">
                  <div className="flex justify-between">
                    <span>********</span>
                    <button
                      onClick={() => setShowEditPassword(!showEditPassword)}
                      className="text-blue-500"
                    >
                      [Edit]
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Edit Email Form */}
        {showEditEmail && (
          <div className="bg-[#fff] p-5 rounded-md mb-6">
            <h3 className="text-center text-lg mb-4 text-[#B58152]">Edit Email</h3>
            <form>
              <label className="block mb-2 text-sm  text-[#B58152]">New Email</label>
              <input
                type="email"
                placeholder="Enter new email"
                className="w-full p-2 mb-4 border border-[#B58152] placeholder:text-[#B58152] rounded-md"
              />

              <label className="block mb-2 text-sm  text-[#B58152]">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-2 mb-4 border border-[#B58152] placeholder:text-[#B58152] rounded-md"
              />

              <p className="text-red-500 text-sm mb-4" style={{ display: 'none' }}>
                Passwords do not match!
              </p>

              <button
                type="submit"
                className="w-full bg-[#B58152] hover:bg-[#8c684a] text-white py-2 rounded-md"
              >
                Edit
              </button>
            </form>
          </div>
        )}

        {/* Edit Name Form */}
        {showEditName && (
          <div className="bg-[#fff] p-5 rounded-md mb-6">
            <h3 className="text-center text-[#B58152] text-lg mb-4">Edit Name</h3>
            <form>
              <label className="block mb-2 text-sm text-[#B58152]">New Name</label>
              <input
                type="text"
                placeholder="Enter new name"
                className="w-full p-2 mb-4 border border-[#B58152] placeholder:text-[#B58152] rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-[#B58152] hover:bg-[#8c684a] text-white py-2 rounded-md"
              >
                Edit
              </button>
            </form>
          </div>
        )}

        {/* Edit Password Form */}
        {showEditPassword && (
          <div className="bg-[#fff] p-5 rounded-md">
            <h3 className="text-center text-lg mb-4 text-[#B58152]">Edit Password</h3>
            <form>
              <label className="block mb-2 text-sm text-[#B58152]">Old Password</label>
              <input
                type="password"
                placeholder="Enter old password"
                className="w-full p-2 mb-4 border border-[#B58152] placeholder:text-[#B58152] rounded-md"
              />

              <label className="block mb-2 text-sm text-[#B58152]">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-2 mb-4 border border-[#B58152] placeholder:text-[#B58152] rounded-md"
              />

              <label className="block mb-2 text-sm text-[#B58152]">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full p-2 mb-4 border border-[#B58152] placeholder:text-[#B58152] rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-[#B58152] hover:bg-[#8c684a] text-white py-2 rounded-md"
              >
                Edit
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
    </>
  );
};

export default ProfileEdit;
