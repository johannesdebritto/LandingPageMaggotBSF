// Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-20 py-10 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* MAP */}
        <div>
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
          <h2 className="text-xl font-semibold mb-3">Kontak & Info</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><strong>Alamat:</strong> Jl. Contoh No. 123, Kota Maggot</li>
            <li><strong>No HP:</strong> 0812-3456-7890</li>
            <li><strong>Email:</strong> <a href="mailto:maggotbsf@email.com" className="text-blue-300">maggotbsf@email.com</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/maggotbsf" className="text-blue-300" target="_blank" rel="noopener noreferrer">@maggotbsf</a></li>
            <li><strong>Facebook:</strong> <a href="https://facebook.com/maggotbsf" className="text-blue-300" target="_blank" rel="noopener noreferrer">Maggot BSF Official</a></li>
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
