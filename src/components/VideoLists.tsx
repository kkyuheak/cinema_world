import { getMovieList } from "../utils/api/getMovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../css/swiper.css";
import { useQuery } from "@tanstack/react-query";
import { getTvList } from "../utils/api/getTvList";
import { getTrendingList } from "../utils/api/getTrendingList";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Common/Modal";

interface VideoListsType {
  title: string;
  name: string;
  type: "movie" | "trending" | "tv";
}

export default function VideoLists({ title, name, type }: VideoListsType) {
  const [optionValue, setOptionValue] = useState("day");
  const [showModal, setShowModal] = useState(false);

  const [modalData, setModalData] = useState<{
    title: string;
    desc: string;
    image: string;
    genre: number[];
    vote_average: number;
  }>({
    title: "",
    desc: "",
    image: "",
    genre: [],
    vote_average: 0,
  });

  const handleImgClick = (
    title: string,
    desc: string,
    image: string,
    genre: number[],
    vote_average: number
  ) => {
    setModalData({ title, desc, image, genre, vote_average });
    setShowModal(true);
  };

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

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  return (
    <div className="px-20 relative">
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
                onClick={() =>
                  handleImgClick(
                    item.title,
                    item.overview,
                    item.backdrop_path,
                    item.genre_ids,
                    item.vote_average
                  )
                }
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt="포스터 이미지"
                className="w-[200px] h-[300px] rounded-[10px] cursor-pointer shadow-sm shadow-black 
                hover:scale-105 transition"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {showModal &&
        createPortal(
          <div
            className="bg-[#000000a7] w-screen h-screen fixed top-0 left-0 z-50
            flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <Modal onClose={() => setShowModal(false)} modalData={modalData} />
          </div>,
          document.body
        )}
    </div>
  );
}
