'use client';

import Head from 'next/head';
import { FaKiwiBird, FaFish } from 'react-icons/fa';
import { GiSnake } from 'react-icons/gi';

const Manfaat = () => {
  return (
    <>
      <Head>
        <title>Manfaat Maggot BSF untuk Unggas, Ikan, dan Hewan Eksotik</title>
        <meta
          name="description"
          content="Pelajari manfaat maggot BSF sebagai pakan unggas, ikan, dan hewan eksotik yang kaya protein dan ramah lingkungan."
        />
      </Head>

      <main className="bg-yellow-50 text-gray-800 min-h-screen px-4 md:px-20 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Manfaat Maggot BSF
        </h1>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
          Maggot BSF (Black Soldier Fly) adalah pakan alami bergizi tinggi yang cocok untuk unggas, ikan, dan hewan eksotik. Berikut manfaatnya:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <FaKiwiBird className="text-purple-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Untuk Unggas</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>Meningkatkan pertumbuhan ayam & itik.</li>
              <li>Protein tinggi bantu pembentukan otot.</li>
              <li>Alternatif pakan hemat dan alami.</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaFish className="text-blue-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Untuk Ikan</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>Mempercepat pertumbuhan ikan.</li>
              <li>Asam amino lengkap & mudah dicerna.</li>
              <li>Ramah lingkungan & tidak mencemari air.</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <GiSnake className="text-green-700 text-3xl" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Untuk Hewan Eksotik</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>Cocok untuk reptil & hewan kecil lainnya.</li>
              <li>Nutrisi lengkap untuk pertumbuhan optimal.</li>
              <li>Bisa disimpan hidup atau dikeringkan.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Manfaat;
