import { getMovieList } from "../utils/api/getMovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../css/swiper.css";
import { useQuery } from "@tanstack/react-query";

interface VideoListsType {
  title: string;
  name: string;
}

export default function VideoLists({ title, name }: VideoListsType) {
  const { data, isLoading } = useQuery<listDataType>({
    queryKey: [`${title} Lists`],
    queryFn: () => getMovieList(name),
  });
  // console.log("query", data, isLoading);

  return (
    <div className="px-20">
      <h1 className="font-bold text-4xl mb-5">{title}</h1>
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
