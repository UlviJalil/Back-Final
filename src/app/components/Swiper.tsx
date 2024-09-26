"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { createContext } from 'react';
import '../../app/globals.css';


const MySwiper = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop={true}
            className="w-full  h-[550px]"
        >
            <SwiperSlide className="relative max-w-full">
                <img src="https://demo-alukas.myshopify.com/cdn/shop/files/save_web_slide1_resize.jpg?v=1711681053&width=1800" alt="Slide 1" className="w-full h-full object-cover" />
                <div className="absolute top-1/3 left-10 flex flex-col gap-5">
                    <h1 className="text-5xl text-[#222222] ">Introducing The <br /> Lost Day Collection</h1>
                    <p className="text-2xl mt-2 text-[#555555]">Ring, Occasion Pieces, Pandora & more collection</p>
                    <button className="mt-4 w-[170px] hover:bg-black hover:text-white py-[10px] border-black border-2 text-[#555555] font-medium transition">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative max-w-full">
                <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_s2.jpg?v=1710139621&width=1800" alt="Slide 2" className="w-full h-full object-cover" />
                <div className="absolute top-1/3 left-10 flex flex-col gap-5">
                    <h1 className="text-5xl text-[#222222] ">New S/S 2024 <br /> Amazing collections</h1>
                    <p className="text-2xl mt-2 text-[#555555]">A symbol of love and a modern take on gold</p>
                    <button className="mt-4 w-[170px] hover:bg-black hover:text-white py-[10px] border-black border-2 text-[#555555] font-medium transition">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide className="relative max-w-full">
                <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_s3.jpg?v=1710139620&width=1800" alt="Slide 1" className="w-full h-full object-cover" />
                <div className="absolute top-1/3 left-10 flex flex-col gap-5">
                    <h1 className="text-5xl text-[#222222]">A Minimalistic <br /> Design Masculine</h1>
                    <p className="text-2xl mt-2 text-[#555555]">Awsome products for the dynamic urban lifestyle</p>
                    <button className="mt-4 w-[170px] hover:bg-black hover:text-white py-[10px] border-black border-2 text-[#555555] font-medium transition">
                        Shop Now
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default MySwiper;