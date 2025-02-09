import React from 'react';

function LoginForm () {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <main className=" bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Info Section */}
              <div className="bg-[#e9c7b1] p-8 flex flex-col items-center justify-center text-center">
                <h4 className="text-2xl text-gray-800 font-semibold mb-4">
                  Welcome
                </h4>
                <p className="text-gray-700 mb-2">
                  Welcome back! Log in to connect with us.
                </p>
                <p className="text-gray-700 mb-4">
                  Don't have an account?
                </p>
                <button className="bg-white hover:bg-[#f4e7de] text-gray-800 px-6 py-2 rounded-lg transition-colors">
                  Sign Up
                </button>
              </div>

              {/* Form Section */}
              <div className="bg-white/65 p-8">
                <h2 className="text-3xl text-gray-800 font-bold mb-6">
                  Welcome back
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D6AC94] focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D6AC94] focus:border-transparent outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D6AC94] hover:bg-[#c79c83] text-white py-2 rounded-lg transition-colors"
                  >
                    Sign In
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">- or -</p>
                  <div className="space-x-4">
                    <button className="px-6 py-2 bg-[#f42727] hover:bg-[#da2121] text-white rounded-lg transition-colors">
                      Google
                    </button>
                    <button className="px-6 py-2 bg-[#2731f4] hover:bg-[#1d26d1] text-white rounded-lg transition-colors">
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;