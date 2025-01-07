import { useEffect, useState } from "react";
import { getMovieList } from "../utils/api/getMovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../css/swiper.css";

interface VideoListsType {
  title: string;
  name: string;
}

export default function VideoLists({ title, name }: VideoListsType) {
  const [listData, setListData] = useState<ResultsType[]>();

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const data: listDataType = await getMovieList(name);
        // console.log(data);
        setListData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieData();
  }, []);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

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
        {listData?.map((item, idx) => {
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
