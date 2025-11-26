"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
  return (
    <section className="w-full h-[60vh] text-white relative">
      <h2 className="absolute top-6 w-full text-center text-3xl font-bold z-20">
        Special Offers
      </h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        loop={true}
        // navigation={true} // enable arrows
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center bg-cyan-600">
            <div className="text-center px-4">
              <h3 className="text-3xl font-bold mb-3">
                Exclusive 50% Discount
              </h3>
              <p className="text-lg">
                Save BIG on our top-selling products today!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center bg-emerald-600">
            <div className="text-center px-4">
              <h3 className="text-3xl font-bold mb-3">
                Free Shipping Over $50
              </h3>
              <p className="text-lg">
                Shop more, save more — delivered to your doorstep.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center bg-lime-600">
            <div className="text-center px-4">
              <h3 className="text-3xl font-bold mb-3">
                Flash Sale — Limited Time
              </h3>
              <p className="text-lg">Hurry! Deals end soon. Don't miss out!</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
