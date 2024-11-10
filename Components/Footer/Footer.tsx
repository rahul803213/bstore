// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-950 text-white px-3 py-8 text-sm">
      <div className="flex flex-col sm:flex-row justify-around gap-2">
        {/* About Us Section */}
        <div >
          <h2 className="text-blue-300 font-semibold">About Us</h2>
          <ul className="my-2 space-y-1">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-blue-300 font-semibold">Help</h2>
          <ul className=" my-2 space-y-1">
            <li>Account</li>
            <li>My Order</li>
            <li>WishList</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h2 className="text-blue-300 font-semibold">Legal</h2>
          <ul className="my-2 space-y-1">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        <section>
          {/* Contact Section */}
          <div>
            <h2 className="text-blue-300 font-semibold">Contact</h2>
            <div className="my-2 space-y-1">
              <p>📱 +965 123 555 67</p>
              <p>✉️ info@hsbookstore.com</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-blue-300 font-semibold">Follow Us</h2>
            <div className="flex items-center my-2 gap-1 h-8">
              <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Facebook */}
              <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Twitter */}
              <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Instagram */}
              <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Pinterest */}
              <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Custom */}
            </div>
          </div>
        </section>
      </div>

      <p className='text-center text-xs md:text-sm mt-4'>HSbookstore.com Copyright c  2024 All rights reserved</p>
    </div>
  );
};

export default Footer;
