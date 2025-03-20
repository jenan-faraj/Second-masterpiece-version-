
function ContactUs () {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main>
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('../src/images/contactBg.png')"}}>
        <div className="w-full">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Make An Appointment</h2>
            <p className="text-base max-w-xl mx-auto mb-8">
              For any inquiries or assistance with booking your salon appointments, 
              feel free to contact us via email or phone, and we will be happy to assist you!
            </p>
            
            <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-[#ffffffb9]">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 border-b border-black focus:border-[#B58152] focus:outline-none transition-colors duration-300 bg-transparent focus:text-[#B58152] placeholder-black focus:placeholder-[#B58152]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border-b border-black focus:border-[#B58152] focus:outline-none transition-colors duration-300 bg-transparent focus:text-[#B58152] placeholder-black focus:placeholder-[#B58152]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Number"
                      className="w-full px-4 py-3 border-b border-black focus:border-[#B58152] focus:outline-none transition-colors duration-300 bg-transparent focus:text-[#B58152] placeholder-black focus:placeholder-[#B58152]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Message"
                      className="w-full px-4 py-3 border-b border-black focus:border-[#B58152] focus:outline-none transition-colors duration-300 bg-transparent focus:text-[#B58152] placeholder-black focus:placeholder-[#B58152]"
                    />
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <button
                    type="submit"
                    className="bg-[#B58152] hover:bg-[#987252] text-white px-10 py-3 text-lg rounded-full transition-colors duration-300"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;