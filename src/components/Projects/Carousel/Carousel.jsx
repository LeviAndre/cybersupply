import { CarouselContainer } from "./styled.jsx"

import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide/Slide.jsx"

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
                className="h-100"
                style={{ height: "100%" }}>
                <SwiperSlide>
                    <Slide 
                    title="The Wandering Village"
                    text="Imagina administrar uma cidade em um jogo TPS. Agora imagina fazer isso com uma cidade nas costas de um dinossauro em movimento. Se interessou?"
                    buttonText="Saiba Mais">
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide 
                    title="Sea of Stars"
                    text="Dos mesmos criadores do clássico indie The Messager, Sea of Stars é um jogo com campanha cooperativa imaginada para dois jogadores."
                    buttonText="Saiba Mais">
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide 
                    title="Kingdom two crowns"
                    text="Seguindo a sequencia dos jogos Kingdom de Tower Defense, agora a novidade é a possibilidade de governar um reino com um amigo."
                    buttonText="Saiba Mais">
                    </Slide>                </SwiperSlide>
            </Swiper>
        </CarouselContainer>
    )
}

export default Carousel;