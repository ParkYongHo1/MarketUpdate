import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  { src: process.env.PUBLIC_URL + "/banner1.png", bgColor: "#f8f6e0" },
  { src: process.env.PUBLIC_URL + "/banner2.png", bgColor: "#dbdbdb" },
  { src: process.env.PUBLIC_URL + "/banner3.png", bgColor: "#ffffff" },
  { src: process.env.PUBLIC_URL + "/banner4.png", bgColor: "#ffffff" },
];

function ProductImgSwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      style={{ width: "100%", height: "100vh" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} style={{ backgroundColor: image.bgColor }}>
          <img
            src={image.src}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt={`slide-${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductImgSwiper;
