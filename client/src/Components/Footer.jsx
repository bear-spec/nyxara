import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div style={{ backgroundColor: '#222831' }} className="mt-30 w-full border border-black">
      <div className="text-white flex flex-col gap-10 sm:flex sm:flex-row justify-evenly mt-[80px]">
        
        <div className="text-center">
          <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className="pb-3 text-white text-3xl">
            Contact US
          </h1>
          <p><FontAwesomeIcon icon={faLocationDot} /> Location</p>
          <p><FontAwesomeIcon icon={faPhone} /> Call +91 1234567890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> nyxara@gmail.com</p>
        </div>

        <div className="text-center sm:w-[300px]">
          <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className="pb-3 text-white text-4xl">
            Nyxara
          </h1>

          <p className="text-gray-300 text-sm">
            Nyxara is a trusted automobile platform offering premium cars,
            reliable service, and a smooth buying experience for every customer.
          </p>

          <div className="flex justify-center gap-4 mt-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-amber-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-amber-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-amber-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-amber-400" />
            </a>
          </div>
        </div>

        <div className="text-center">
          <h1 style={{ fontFamily: "'Dancing Script', cursive" }} className="pb-3 text-white text-3xl">
            Opening Hours
          </h1>
          <p className="text-gray-300">Monday – Sunday</p>
          <p className="text-gray-300">10:00 AM – 10:00 PM</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#222831" }} className="text-white mt-[50px] mb-[50px] text-center text-sm">
        <p>© 2025 All Rights Reserved by Nyxara</p>
        <p>Designed & Distributed by Nyxara</p>
      </div>
    </div>
  );
}

export default Footer;
