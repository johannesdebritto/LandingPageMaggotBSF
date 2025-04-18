// Footer.tsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'; // Menggunakan ikon untuk setiap poin

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-20 py-10 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MAP */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-3">Lokasi Kami</h2>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..." // Ganti dengan link map kamu
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Usaha Maggot BSF"
            ></iframe>
          </div>
        </div>

        {/* INFO KONTAK */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Kontak & Info</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-white-600 text-2xl" />
              <span><strong>Alamat:</strong> Jl. Contoh No. 123, Kota Maggot</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-white-600 text-2xl" />
              <span><strong>No HP:</strong> 0812-3456-7890</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-white-600 text-2xl" />
              <span><strong>Email:</strong> <a href="mailto:maggotbsf@email.com" className="text-blue-300">maggotbsf@email.com</a></span>
            </li>
            <li className="flex items-center space-x-3">
              <FaInstagram className="text-white-600 text-2xl" />
              <span><strong>Instagram:</strong> <a href="https://instagram.com/maggotbsf" className="text-blue-300" target="_blank" rel="noopener noreferrer">@maggotbsf</a></span>
            </li>
            <li className="flex items-center space-x-3">
              <FaFacebook className="text-white-600 text-2xl" />
              <span><strong>Facebook:</strong> <a href="https://facebook.com/maggotbsf" className="text-blue-300" target="_blank" rel="noopener noreferrer">Maggot BSF Official</a></span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Maggot BSF. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
