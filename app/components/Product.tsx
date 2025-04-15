"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Head from "next/head";

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

      <section className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-semibold text-center text-black mb-10">
            Produk Kami
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              disableOnInteraction: false,
            }}
            speed={800} // Menurunkan kecepatan transisi untuk membuatnya lebih smooth
            effect="slide" // Menambahkan efek geser yang lebih halus
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="text-center" role="article">
                <Image
                  src="/makanan-ternak-unggas.jpg"
                  alt="Makanan Ternak Unggas untuk pertumbuhan unggas yang sehat dan cepat"
                  width={300}
                  height={300}
                  className="mx-auto mb-4 rounded-lg shadow-lg"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-black mb-2">Makanan Ternak Unggas</h3>
                <p className="text-gray-700">
                  Nutrisi terbaik untuk unggas, mendukung pertumbuhan dan kesehatan ternak.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="text-center" role="article">
                <Image
                  src="/umpan-pancing.jpg"
                  alt="Umpan Pancing berkualitas tinggi untuk menarik ikan"
                  width={300}
                  height={300}
                  className="mx-auto mb-4 rounded-lg shadow-lg"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-black mb-2">Umpan Pancing</h3>
                <p className="text-gray-700">
                  Umpan pancing berkualitas tinggi untuk menarik perhatian ikan dengan efektif.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="text-center" role="article">
                <Image
                  src="/makanan-ikan.jpg"
                  alt="Makanan Ikan berkualitas untuk meningkatkan kualitas hidup ikan"
                  width={300}
                  height={300}
                  className="mx-auto mb-4 rounded-lg shadow-lg"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-black mb-2">Makanan Ikan</h3>
                <p className="text-gray-700">
                  Makanan ikan yang bergizi untuk meningkatkan kualitas hidup ikan Anda.
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="text-center" role="article">
                <Image
                  src="/makanan-hewan-exotic.jpg"
                  alt="Makanan Hewan Exotic untuk mendukung kesehatan hewan eksotik"
                  width={300}
                  height={300}
                  className="mx-auto mb-4 rounded-lg shadow-lg"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-black mb-2">Makanan Hewan Exotic</h3>
                <p className="text-gray-700">
                  Pakan khusus untuk hewan eksotik, mendukung kesehatan dan keaktifan mereka.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Produk;
