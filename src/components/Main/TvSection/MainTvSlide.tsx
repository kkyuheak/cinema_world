import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTvList } from "../../../utils/api/getTvList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { imageUrl } from "../../../constants/imageUrl";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function MainTvSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { data, isLoading } = useQuery<ResultsType[]>({
    queryKey: ["MainTvSlides"],
    queryFn: async () => {
      const { results }: { results: ResultsType[] } = await getTvList(
        "popular"
      );

      const resultsData = results.filter((result) => {
        if (
          result.original_language === "ko" ||
          result.original_language === "en" ||
          result.original_language === "ja"
        ) {
          return result;
        }
      });
      console.log(resultsData);
      return resultsData;
    },
  });

  if (isLoading)
    return (
      <div
        className={`animate-pulse 2xl:w-[1100px] xl:w-[900px] md:w-[740px] w-[400px] sm:w-[600px] h-[650px] mx-2 bg-center bg-cover rounded-[12px] bg-gray-500`}
      >
        <div
          className="2xl:w-[300px]  h-[80px] w-[260px] text-[50px] text-white 
          font-bold ml-[20px] mt-2 bg-gray-400 rounded-[12px]"
        ></div>
      </div>
    );

  return (
    <div className="w-[70%]">
      <Swiper
        slidesPerView={1.5}
        modules={[Navigation, Autoplay]}
        navigation
        // loop swiper버그
        autoplay={{ delay: 4000 }}
        spaceBetween={50}
        centeredSlides={true}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {data?.map((tv, index) => {
          return (
            <SwiperSlide key={tv.id}>
              <div
                className={`relative w-[1100px] h-[650px] bg-center bg-cover rounded-[12px]
                transition-all duration-500 ${
                  activeIndex === index
                    ? "opacity-100 scale-[1] cursor-pointer"
                    : "opacity-50 scale-[0.8]"
                }`}
                style={{
                  backgroundImage: `url(${imageUrl}${tv.backdrop_path})`,
                }}
              >
                <div className="rounded-t-[12px] absolute inset-0 bg-gradient-to-b from-[#00000059] via-transparent to-transparent"></div>
                <p className="text-[50px] text-white font-bold ml-[20px] mt-2 relative z-10">
                  {tv.name}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
