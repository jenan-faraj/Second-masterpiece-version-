import CustomerCommentsSection from "../components/CustomerComments";

function AboutUs() {
  return (
    <main>
      <section className="service-section flex justify-between items-center h-[60vh] p-[60px] bg-[#f5f2ec]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* النص */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#70350b] mb-4">
                Where Beauty Meets Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                At GlamBook, we believe in enhancing your natural beauty with
                expert care. Our team of skilled professionals provides
                top-quality hair, skincare, and makeup services tailored to your
                unique needs. Step into a world of elegance and relaxation,
                where every client is treated like a VIP.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="text-center bg-[#e0ad2d] text-white px-4 py-2 rounded-lg shadow-md">
                  <strong className="block text-xl">283+</strong>
                  <p className="text-sm">HAPPY CLIENTS</p>
                </div>
                <div className="text-center bg-[#e0ad2d] text-white px-4 py-2 rounded-lg shadow-md">
                  <strong className="block text-xl">432+</strong>
                  <p className="text-sm">WIN AWARDS</p>
                </div>
                <div className="text-center bg-[#e0ad2d] text-white px-4 py-2 rounded-lg shadow-md">
                  <strong className="block text-xl">545+</strong>
                  <p className="text-sm">OUR TRAINER</p>
                </div>
              </div>
            </div>
            {/* الصورة */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src="../src/images/section.png"
                alt="Service Image"
                className="rounded-lg max-w-xs md:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 flex justify-center mb-5 items-center">
        <div className="container flex justify-center items-center px-5">
          <div className="lg:mx-[100px] grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
            <div>
              <img
                src="https://i.pinimg.com/474x/c8/99/e6/c899e6283850118f9fcb6b1ed7c49ec4.jpg"
                alt="Treatment Image"
                className="rounded-lg w-[400px] h-[300px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#8c5b34] mb-4">
                Who We Are?
              </h2>
              <p className="font-medium leading-relaxed">
                GlamBook is your smart platform for booking appointments at the
                best salons and beauty centers with ease! Instead of spending
                time searching and calling, we bring you one place that gathers
                all salons in your area with details about services and prices,
                so you can book your perfect appointment with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CustomerCommentsSection />
      
    </main>
  );
}

export default AboutUs;
