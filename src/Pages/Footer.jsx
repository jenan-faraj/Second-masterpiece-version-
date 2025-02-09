function Footer () {
    return (
      <footer className="flex flex-col align-center justify-center bg-gray-900 text-white text-sm font-serif">
        <div className="container mx-auto py-10 px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-orange-400">GlamBook</h2>
              <ul className="mt-4 space-y-2">
                <li><a href="/" className="hover:text-orange-400">Home</a></li>
                <li><a href="/about" className="hover:text-orange-400">About us</a></li>
                <li><a href="/contact" className="hover:text-orange-400">Contact us</a></li>
                <li><a href="/categories" className="hover:text-orange-400">Categories</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold">Social Media</h5>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-orange-400">Facebook</a></li>
                <li><a href="#" className="hover:text-orange-400">Instagram</a></li>
                <li><a href="#" className="hover:text-orange-400">Twitter</a></li>
                <li><a href="#" className="hover:text-orange-400">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold">Policy Links</h5>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-orange-400">Terms of Use</a></li>
                <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400">Cancellation Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold">Additional</h5>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-orange-400">Blog</a></li>
                <li><a href="#" className="hover:text-orange-400">Reviews & Ratings</a></li>
                <li><a href="#" className="hover:text-orange-400">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 text-center py-3 text-gray-400">
          &copy; 2025 - All Rights Reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;
  