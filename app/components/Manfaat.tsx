'use client';

import Head from 'next/head';
import { FaRegCheckCircle } from 'react-icons/fa';

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

      <section
        id="manfaat"
        className=" bg-white text-gray-800 min-h-screen px-4 md:px-20 py-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 font-montserrat text-green-800 ">
          Manfaat Maggot BSF
        </h1>
        <p className="text-center text-lg mb-10 max-w-2xl mx-auto font-lato">
          Maggot BSF (Black Soldier Fly) adalah pakan alami bergizi tinggi yang cocok untuk unggas, ikan, dan hewan eksotik. Berikut manfaatnya:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* UNGGAS */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full mb-6 shadow-[0_4px_30px_rgba(34,197,94,1)] flex items-center justify-center w-[100px] h-[100px]">
              <img src="/images/unggas.svg" alt="Unggas Icon" className="w-[50px] h-[50px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-montserrat">Untuk Unggas</h3>
            <ul className="text-base md:text-lg space-y-3 text-gray-700 text-left">
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Meningkatkan pertumbuhan ayam & itik.
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Protein tinggi bantu pembentukan otot.
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Alternatif pakan hemat dan alami.
              </li>
            </ul>
          </div>

          {/* IKAN */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full mb-6 shadow-[0_4px_30px_rgba(34,197,94,1)] flex items-center justify-center w-[100px] h-[100px]">
              <img src="/images/ikan.svg" alt="Ikan Icon" className="w-[50px] h-[50px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-montserrat">Untuk Ikan</h3>
            <ul className="text-base md:text-lg space-y-3 text-gray-700 text-left">
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Mempercepat pertumbuhan ikan.
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Asam amino lengkap & mudah dicerna.
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Ramah lingkungan & tidak mencemari air.
              </li>
            </ul>
          </div>

          {/* EXOTIC */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full mb-6 shadow-[0_4px_30px_rgba(34,197,94,1)] flex items-center justify-center w-[100px] h-[100px]">
              <img src="/images/camel.svg" alt="Camel Icon" className="w-[50px] h-[50px]" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-montserrat">Untuk Hewan Eksotik</h3>
            <ul className="text-base md:text-lg space-y-3 text-gray-700 text-left">
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Cocok untuk reptil & hewan kecil lainnya.
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Nutrisi lengkap untuk pertumbuhan.
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-green-600 mr-3 mt-1 text-lg font-lato" />
                Bisa disimpan hidup atau dikeringkan.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manfaat;
