// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white p-6 text-sm">
      <div className="space-y-6">
        {/* About Us Section */}
        <div>
          <h2 className="text-blue-300 font-semibold">About Us</h2>
          <ul className="mt-2 space-y-1">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-blue-300 font-semibold">Help</h2>
          <ul className="mt-2 space-y-1">
            <li>Account</li>
            <li>My Order</li>
            <li>WishList</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h2 className="text-blue-300 font-semibold">Legal</h2>
          <ul className="mt-2 space-y-1">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-blue-300 font-semibold">Contact</h2>
          <div className="mt-2 space-y-1">
            <p>📱 +965 123 555 67</p>
            <p>✉️ info@hsbookstore.com</p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-blue-300 font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Facebook */}
            <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Twitter */}
            <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Instagram */}
            <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Pinterest */}
            <a href="#" className="text-white hover:text-blue-300">🌐</a> {/* Icon for Custom */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
