// Footer.tsx
import React from 'react';
import { Facebook, WhatsApp, Twitter, Instagram, Pinterest, Github, Email } from '@/assets/muIcons';

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-950 text-white px-3 py-8 text-sm ">
      <div className="w-full lg:w-[80%] xl:w-[1024px] lg:mx-auto flex flex-col sm:flex-row justify-around gap-2 ">
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
              <p><WhatsApp />&nbsp; +965 123 555 67</p>
              <p><Email />&nbsp; info@hsbookstore.com</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-blue-300 font-semibold">Follow Us</h2>
            <div className="flex items-center my-2 gap-2 h-8">
              <a href="javascript:void(0);" className="text-white hover:text-blue-300"><Facebook /></a> {/* Icon for Facebook */}
              <a href="javascript:void(0);" className="text-white hover:text-blue-300"><Twitter /></a> {/* Icon for Instagram */}
              <a href="javascript:void(0);" className="text-white hover:text-blue-300"><Instagram /></a> {/* Icon for Twitter */}
              <a href="javascript:void(0);" className="text-white hover:text-blue-300"><Pinterest /></a> {/* Icon for Pinterest */}
              <a href="javascript:void(0);" className="text-white hover:text-blue-300"><Github /> </a> {/* Icon for Custom */}
            </div>
          </div>
        </section>
      </div>

      <p className='text-center text-xs md:text-base mt-4'>HSbookstore.com Copyright c  2024 All rights reserved</p>
    </div>
  );
};

export default Footer;
