import Head from "next/head"; // Import Head untuk menambahkan meta tags
import Navbar from "./components/Navbar"; // Import komponen Navbar
import Hero from "./components/Hero"; // Import komponen Hero
import Product from "./components/Product"; // Import komponen Product
import Manfaat from "./components/Manfaat"; // Import komponen Manfaat
import Footer from "./components/Footer"; // Import komponen Footer

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Landing Page Maggot BSF</title>
        <meta
          name="description"
          content="Selamat datang di Maggot BSF, penyedia maggot berkualitas tinggi untuk kebutuhan BSF."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Landing Page Maggot BSF" />
        <meta
          property="og:description"
          content="Kami menyediakan produk maggot berkualitas tinggi untuk kebutuhan BSF."
        />
        <meta property="og:image" content="URL_to_image" />
        <meta property="og:url" content="URL_to_page" />
        <link rel="canonical" href="URL_to_page" />
      </Head>

      <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* Product Section */}
          <Product />

          {/* Manfaat Section */}
          <Manfaat />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
