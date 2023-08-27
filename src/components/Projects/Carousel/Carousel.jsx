import { CarouselContainer } from "./styled.jsx"

import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

function Carousel() {
    return (
        <CarouselContainer>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop
                autoplay={{ delay: 8000 }}
                className="h-100">
                <SwiperSlide>
                    <h1>penis total 1</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>penis total 2</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>penis total 3</h1>
                </SwiperSlide>
            </Swiper>
        </CarouselContainer>
    )
}

export default Carousel;