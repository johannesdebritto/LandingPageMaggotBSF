import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="alamat" className="bg-black text-white px-4 md:px-20 py-10 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MAP */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-3 font-montserrat">Lokasi Kami</h2>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63285.71958370394!2d110.69239497184758!3d-7.53593470169744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a150014a26a65%3A0x7b6d3dc85c6c338!2sMitra%20maggot%2C%20Jual%20Maggot%20BSF%20Colomadu!5e0!3m2!1sid!2sid!4v1744985007288!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Usaha Maggot BSF"
            />
          </div>
        </div>

        {/* INFO KONTAK */}
        <div>
          <h2 className="text-xl font-semibold mb-6 font-montserrat">Kontak & Info</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center space-x-3 font-lato">
              <FaMapMarkerAlt className="text-white-800 text-2xl" />
              <span>
                <strong>Alamat:</strong> Maduasri Blok B No.30, Krobyongan, Tohudan, Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57173
              </span>
            </li>
            <li className="flex items-center space-x-3 font-lato">
              <FaPhoneAlt className="text-white-800 text-2xl" />
              <span>
                <strong>No HP:</strong>{" "}
                <a href="https://wa.me/6283170416820" className="text-blue-300" target="_blank" rel="noopener noreferrer">
                  0831-7041-6820
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-3 font-lato">
              <FaInstagram className="text-white-800 text-2xl" />
              <span>
                <strong>Instagram:</strong>{" "}
                <a href="https://www.instagram.com/mitragot?igsh=MTNuMnZpZWg3ODdtOQ==" className="text-blue-300" target="_blank" rel="noopener noreferrer">
                  @mitragot
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-3 font-lato">
              <FaFacebook className="text-white-800 text-2xl" />
              <span>
                <strong>Facebook:</strong>{" "}
                <a href="https://www.facebook.com/share/19HXEnqJqR/" className="text-blue-300" target="_blank" rel="noopener noreferrer">
                  Mitragot FB Page
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-xs text-gray-200 font-montserrat">&copy; {new Date().getFullYear()} Maggot BSF. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
