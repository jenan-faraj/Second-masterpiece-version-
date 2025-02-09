function PartnerSignIn() {
  return (
    <>
      <main>
        <div className="py-8">
          <div className="flex justify-center">
            <div className="form-container bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-[100vh]">
              <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
              <form >
                <div className="form-group mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    id="firstName"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    id="lastName"
                    placeholder="Enter last name"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="mobile" className="block text-sm font-medium">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    id="mobile"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    id="businessName"
                    placeholder="Enter business name"
                  />
                </div>
                <div className="form-group mb-6">
                  <label
                    htmlFor="businessAddress"
                    className="block text-sm font-medium"
                  >
                    Business Address
                  </label>
                  <input
                    type="text"
                    className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    id="businessAddress"
                    placeholder="Enter business address"
                  />
                </div>
                <button className="btn btn-primary w-full py-2 bg-[#D6AC94] hover:bg-[#ba9078] text-white font-semibold rounded-md">
                  <a href="payPage.html" className="text-white no-underline">
                    Join us today
                  </a>
                </button>
              </form>
              <p className="mt-3 text-sm text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default PartnerSignIn;
