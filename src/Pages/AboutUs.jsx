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

      <section className="py-5">
        <div>
          <h2 className="text-center text-2xl font-bold text-[#8c5b34] mb-10">
            Customer comments
          </h2>
          <div className="flex justify-center space-x-4">
            {/* First Comment */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
              <div className="bg-white p-4 shadow-sm rounded-lg border border-[#ddd]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="../src/images/revieu.png"
                      alt="User"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <span className="font-bold">Rubina Alfa</span>
                  </div>
                  <div>
                    <span className="bg-light py-1 px-3 text-sm text-gray-700">
                      <i className="bi bi-calendar"></i> 12 Oct 2024
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-base text-gray-600">
                  I had a wonderful experience at this salon! The staff was very
                  friendly, and the service was excellent. I highly recommend it
                  to anyone looking for a professional and relaxing beauty
                  treatment.
                </p>
                <div className="flex justify-between items-center mt-3">
                  <a href="#" className="text-red-500 text-sm">
                    Read More
                  </a>
                  <div className="text-[#8c5b34] text-xl">★★★☆☆</div>
                  <i className="bi bi-heart text-[#8c5b34] text-xl cursor-pointer"></i>
                </div>
              </div>
            </div>

            {/* Second Comment */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
              <div className="bg-white p-4 shadow-sm rounded-lg border border-[#ddd]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://i.pinimg.com/236x/45/4b/f5/454bf5721357bb898d3a455d89d8035f.jpg"
                      alt="User"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <span className="font-bold">Malak Khalid</span>
                  </div>
                  <div>
                    <span className="bg-light py-1 px-3 text-sm text-gray-700">
                      <i className="bi bi-calendar"></i> 1 Oct 2024
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-base text-gray-600">
                  I had a wonderful experience at this salon! The staff was
                  friendly, and the service was excellent. The ambiance was
                  relaxing, and I loved the high-quality products they used. I
                  left feeling pampered.
                </p>
                <div className="flex justify-between items-center mt-3">
                  <a href="#" className="text-red-500 text-sm">
                    Read More
                  </a>
                  <div className="text-[#8c5b34] text-xl">★★★☆☆</div>
                  <i className="bi bi-heart text-[#8c5b34] text-xl cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
