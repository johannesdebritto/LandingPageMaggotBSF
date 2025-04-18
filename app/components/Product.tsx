"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Head from "next/head";
import { FaSeedling, FaFish, FaShoppingCart, FaPaw } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

const Produk = () => {
  return (
    <>
      <Head>
        <title>Produk Kami - Makanan Ternak dan Hewan</title>
        <meta
          name="description"
          content="Kami menyediakan berbagai produk berkualitas untuk ternak unggas, ikan, dan hewan eksotik. Temukan produk terbaik untuk kebutuhan hewan peliharaan Anda."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Produk Kami - Makanan Ternak dan Hewan" />
        <meta
          property="og:description"
          content="Produk makanan ternak unggas, umpan pancing, makanan ikan, dan makanan hewan eksotik berkualitas."
        />
        <meta property="og:image" content="/makanan-ternak-unggas.jpg" />
        <meta property="og:url" content="https://www.yoursite.com/produk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section className="min-h-screen bg-gray-100 py-20 pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-black mb-10 flex items-center justify-center gap-3">
  <FaBoxOpen className="text-black-600 text-2xl" />
  Jelajahi Produk Kami
</h2>


          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              disableOnInteraction: false,
            }}
            speed={800}
            effect="slide"
            className="pb-10"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-gray-200 transition-transform duration-500">
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/images/unggasfood.svg"
                      alt="Makanan Ternak Unggas"
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <FaSeedling className="text-green-600 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      Makanan Ternak Unggas
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Nutrisi terbaik untuk unggas, mendukung pertumbuhan dan kesehatan ternak.
                  </p>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-green-500 rounded-full mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-gray-200 transition-transform duration-500">
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/images/tambak.svg"
                      alt="Umpan Pancing"
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <FaFish className="text-blue-600 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      Umpan Pancing
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Umpan pancing berkualitas tinggi untuk menarik perhatian ikan dengan efektif.
                  </p>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-blue-500 rounded-full mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-gray-200 transition-transform duration-500">
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/images/fishfeed.svg"
                      alt="Makanan Ikan"
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <FaShoppingCart className="text-indigo-600 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      Makanan Ikan
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Makanan ikan yang bergizi untuk meningkatkan kualitas hidup ikan Anda.
                  </p>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-indigo-500 rounded-full mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-gray-200 transition-transform duration-500">
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/images/iguanaicon.svg"
                      alt="Makanan Hewan Exotic"
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <FaPaw className="text-purple-600 text-xl" />
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      Makanan Hewan Exotic
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Pakan khusus untuk hewan eksotik, mendukung kesehatan dan keaktifan mereka.
                  </p>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-purple-500 rounded-full mt-6 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Produk;
