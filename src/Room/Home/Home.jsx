import React, { useState } from "react";
import Header from "../Header/Header";

const Home = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      text: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      images: {
        dimage: "images/desktop-image-hero-1.jpg",
        mimage: "images/mobile-image-hero-1.jpg",
      },
      shop: "Shop now",
    },
    {
      text: "We are available all across the globe",
      description:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      images: {
        dimage: "images/desktop-image-hero-2.jpg",
        mimage: "images/mobile-image-hero-2.jpg",
      },
      shop: "Shop now",
    },
    {
      text: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      images: {
        dimage: "images/desktop-image-hero-3.jpg",
        mimage: "images/mobile-image-hero-3.jpg",
      },
      shop: "Shop now",
    },
  ];

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  const getCurrentImage = () => {
    const width = window.innerWidth;
    return width >= 768
      ? slides[index].images.dimage
      : slides[index].images.mimage;
  };

  return (
    <section className="relative bg-slate-300 min-h-screen">
      <div className="absolute top-0 w-full z-10">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex flex-col md:flex-col lg:flex-row text-black">
        {/* Image Section */}
        <div className="w-full md:w-full lg:w-1/2">
          <img
            src={getCurrentImage()}
            alt="Slide"
            className="w-full h-full object-cover"
          />
          {/* Navigation tablet and mobile Buttons */}
          <div className="flex md:flex lg:hidden absolute  right-0 -mt-[89px] text-white text-2xl">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-7 bg-black hover:bg-slate-600"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-7 bg-black hover:bg-slate-600 "
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-white flex flex-col gap-6 justify-center md:w-full lg:w-1/2">
          <div className=" md:h-[310px] lg:h-[310px] p-10 md:p-10 lg:p-0 md:px-[32px] lg:px-[100px] md:text-left">
            <h1 className="text-3xl font-bold mb-4">{slides[index].text}</h1>
            <p className="text-gray-600 mb-6">{slides[index].description}</p>
            <button className="flex items-center gap-4 text-lg text-gray-400 uppercase">
              <span>{slides[index].shop}</span>{" "}
              <div className="flex items-center text-gray-700">
                {" "}
                <hr className="border-gray-700 w-[100px]" />
                &gt;
              </div>{" "}
            </button>
          </div>
          {/* Navigation destop Buttons */}
          <div className="hidden md:hidden lg:flex absolute right-0 md:right-0 lg:right-[42vw] text-white top-[287px] md:top-[455px] lg:bottom-[310px] justify-center md:justify-start text-2xl">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-7 bg-black hover:bg-slate-600"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-7 bg-black hover:bg-slate-600 "
            >
              &gt;
            </button>
          </div>
        </div>
      </main>

      {/* Down Section */}
      <main className="flex flex-col md:flex-col lg:flex-row">
        <div>
          <img
            src="images/image-about-dark.jpg"
            alt=""
            className="w-full h-[310px]"
          />
        </div>

        <div className="bg-white  lg:w-[50vw] md:h-[350px] lg:h-[310px] flex flex-col gap-5 justify-center p-8 lg:px-[140px]">
          <h1 className="text-black font-bold text-[20px] md:text-[30px] lg:text-[30px] uppercase">About our furniture</h1>
          <h2 className="text-gray-500">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </h2>
        </div>
        <div>
          <img
            src="images/image-about-light.jpg"
            alt=""
            className="w-full h-[310px]"
          />
        </div>
      </main>
    </section>
  );
};

export default Home;
