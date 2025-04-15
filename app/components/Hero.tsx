import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="min-h-screen flex items-start bg-white px-8 py-4 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto w-full gap-8">
        {/* Kolom Kiri: Teks */}
        <div className="flex flex-col justify-center space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Selamat Datang di Hero Section
          </h1>
          <p className="text-lg text-gray-600">
            Ini adalah bagian pembuka halamanmu. Tambahkan ajakan, penjelasan produk, atau lainnya di sini.
          </p>
          <div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Mulai Sekarang
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Gambar mepet pojok kanan */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex justify-end pr-0">
          <Image
            src="/images/hero.svg"
            alt="Hero Image"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
