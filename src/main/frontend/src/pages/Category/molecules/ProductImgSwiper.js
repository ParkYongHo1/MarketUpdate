import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
      <SwiperSlide style={{ backgroundColor: "#f8f6e0" }}>
        <img
          src={process.env.PUBLIC_URL + "/banner1.png"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="logo"
        />
      </SwiperSlide>
      <SwiperSlide style={{ backgroundColor: "#dbdbdb" }}>
        <img
          src={process.env.PUBLIC_URL + "/banner2.png"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="logo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/banner3.png"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="logo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={process.env.PUBLIC_URL + "/banner4.png"}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          alt="logo"
        />
      </SwiperSlide>
    </Swiper>
  );
}
export default ProductImgSwiper;
