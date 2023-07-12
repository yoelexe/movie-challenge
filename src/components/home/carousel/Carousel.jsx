import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Carousel = () => {

  const slides = [
    {
      url: 'https://www.pixground.com/wp-content/uploads/2023/06/Spider-Man-Across-the-Spider-Verse-Miles-Morales-4k-Wallpaper.jpg'
    },
    {
      url: 'https://images.hdqwalls.com/wallpapers/fast-x-movie-8k-t5.jpg'
    },
    {
      url: 'https://i0.wp.com/plexmx.info/wp-content/uploads/2023/04/Transformers-Rise-of-the-Beasts-Banner.jpg?ssl=1'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlider = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    //max-w-[1400px] py-16
    <div className=" h-[720px] w-full m-auto py-0 px-0 relative">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-700"></div>
    {/* Left Arrow */}
    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
      <FiChevronLeft onClick={prevSlider} size={30} />
    </div>
    {/* Right Arrow */}
    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
      <FiChevronRight onClick={nextSlider} size={30} />
    </div>
    </div>
  )
}
