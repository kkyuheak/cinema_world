import { getMovieList } from "../utils/api/getMovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../css/swiper.css";
import { useQuery } from "@tanstack/react-query";
import { getTvList } from "../utils/api/getTvList";
import { getTrendingList } from "../utils/api/getTrendingList";
import { useState } from "react";

interface VideoListsType {
  title: string;
  name: string;
  type: "movie" | "trending" | "tv";
}

export default function VideoLists({ title, name, type }: VideoListsType) {
  const [optionValue, setOptionValue] = useState("day");

  const { data, isLoading } = useQuery<listDataType>({
    queryKey: [`${title} Lists`, type === "trending" ? optionValue : ""],
    queryFn: () => {
      if (type === "movie") {
        return getMovieList(name);
      } else if (type === "trending") {
        return getTrendingList(`${name}/${optionValue}`);
      } else {
        return getTvList(name);
      }
    },
  });
  // console.log("query", data, isLoading);

  return (
    <div className="px-20">
      <div className=" flex items-center gap-4 mb-5">
        <h1 className="font-bold text-4xl text-white">{title}</h1>
        {type === "trending" && (
          <select
            onChange={(e) => setOptionValue(e.target.value)}
            value={optionValue}
            className="bg-[#202020] text-white px-2 py-1 rounded-md outline-none w-[80px] h-[35px]"
          >
            <option value="day">오늘</option>
            <option value="week">이번주</option>
          </select>
        )}
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1024: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
          1400: {
            slidesPerView: 10,
            slidesPerGroup: 10,
          },
        }}
        navigation
      >
        {data?.results?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="포스터 이미지"
                className="w-[200px] h-[300px] rounded-[10px] cursor-pointer shadow-sm shadow-black 
                hover:scale-105 transition"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
