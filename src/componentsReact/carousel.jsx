


import iCarousel01 from '../img/carousel/imageCarousel2.png'
import iCarousel02 from '../img/carousel/imageCarousel1.png'
import iCarousel03 from '../img/carousel/imageCarousel3.png'
import iCarousel04 from '../img/carousel/imageCarousel4.png'
 
import { Carousel } from "@material-tailwind/react";
 
export default function CarouselCustomNavigation() {
  return (
    <Carousel
      autoplay={true}
      autoplayDelay={4000}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={iCarousel01.src}
        alt="image 1"
        className=" h-fit w-full object-cover"
      />
      <img
        src={iCarousel02.src}
        alt="image 2"
        className=" h-fit w-full object-cover"
      />
      <img
        src={iCarousel04.src}
        alt="image 3"
        className=" h-fit w-full object-cover"
      />
    </Carousel>
  );
}