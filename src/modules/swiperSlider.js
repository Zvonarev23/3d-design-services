import Swiper, {Autoplay} from "swiper"

export const swiperSlider = () => {
  const swiper = new Swiper('#slider1', {
      slidesPerView: 1,
      loop: true,
      modules: [Autoplay],
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
  })
}

