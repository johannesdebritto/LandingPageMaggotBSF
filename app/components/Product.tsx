"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Head from "next/head";
import { FaSeedling, FaFish, FaShoppingCart, FaPaw, FaBoxOpen } from "react-icons/fa";

const Produk = () => {
  return (
    <>
      <Head>
        <title>Produk Kami - Makanan Ternak dan Hewan</title>
        <meta name="description" content="Kami menyediakan berbagai produk berkualitas untuk ternak unggas, ikan, dan hewan eksotik. Temukan produk terbaik untuk kebutuhan hewan peliharaan Anda." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Produk Kami - Makanan Ternak dan Hewan" />
        <meta property="og:description" content="Produk makanan ternak unggas, umpan pancing, makanan ikan, dan makanan hewan eksotik berkualitas." />
        <meta property="og:image" content="/makanan-ternak-unggas.jpg" />
        <meta property="og:url" content="https://www.yoursite.com/produk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section id="product" className="min-h-[80vh] sm:min-h-screen bg-gray-100 py-12 sm:py-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20">
          <div className="flex flex-wrap items-start justify-center gap-2 text-center sm:text-left px-4 sm:px-0 mb-10">
            <FaBoxOpen className="text-green-800 text-2xl sm:text-3xl flex-shrink-0 mt-1" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 font-montserrat leading-snug">Jelajahi Produk Kami</h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              disableOnInteraction: false,
            }}
            speed={800}
            className="pb-10"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              {
                icon: <FaSeedling className="text-green-600 text-xl" />,
                title: "Makanan Ternak Unggas",
                desc: "Nutrisi terbaik untuk unggas, mendukung pertumbuhan dan kesehatan ternak.",
                img: "/images/unggasfood.svg",
                color: "green",
              },
              {
                icon: <FaFish className="text-blue-600 text-xl" />,
                title: "Umpan Pancing",
                desc: "Umpan pancing berkualitas tinggi untuk menarik perhatian ikan dengan efektif.",
                img: "/images/tambak.svg",
                color: "blue",
              },
              {
                icon: <FaShoppingCart className="text-indigo-600 text-xl" />,
                title: "Makanan Ikan",
                desc: "Makanan ikan yang bergizi untuk meningkatkan kualitas hidup ikan Anda.",
                img: "/images/fishfeed.svg",
                color: "indigo",
              },
              {
                icon: <FaPaw className="text-purple-600 text-xl" />,
                title: "Makanan Hewan Exotic",
                desc: "Pakan khusus untuk hewan eksotik, mendukung kesehatan dan keaktifan mereka.",
                img: "/images/iguanaicon.svg",
                color: "purple",
              },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white rounded-2xl p-6 overflow-hidden border border-gray-200 transition-transform duration-500 h-full">
                  <div className="flex flex-col items-center">
                    <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]">
                      <Image src={item.img} alt={item.title} layout="fill" objectFit="contain" className="transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex items-center gap-2 mt-6 text-center">
                      {item.icon}
                      <h3 className={`text-lg font-semibold text-gray-800 group-hover:text-${item.color}-600 transition-colors duration-300 font-montserrat`}>{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center font-lato">{item.desc}</p>
                  </div>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-${item.color}-500 rounded-full mt-6 group-hover:w-24 transition-all duration-300`}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Produk;
