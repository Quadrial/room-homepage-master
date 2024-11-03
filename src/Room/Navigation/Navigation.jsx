import { useState } from "react";

const Navigation = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  const getCurrentImage = () => {
    const width = window.innerWidth;
    return width >= 768
      ? slides[index].images.dimage
      : slides[index].images.mimage;
  };

  return (
    <div className="flex absolute right-0 md:right-0 lg:right-[42vw] text-white top-[287px] md:top-[455px] lg:bottom-[310px] justify-center md:justify-start text-2xl">
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
  );
};

export default Navigation;
