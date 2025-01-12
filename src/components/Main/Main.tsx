// import mainBg from "../assets/img/main-bg.jpg";

import { useOutletContext } from "react-router";
import VideoLists from "../VideoLists";
import MainRandomMovie from "./MainRandomMovie";
import { RefObject } from "react";
import PeopleLists from "../People/PeopleLists";
import MainTvSlide from "./TvSection/MainTvSlide";
import MoreBtn from "../Common/MoreBtn";

type ContextType = RefObject<HTMLDivElement>;

export default function Main() {
  const mainRef = useOutletContext<ContextType>();

  return (
    <div className="bg-[#2d2d2d] pb-20">
      <div
        ref={mainRef}
        className={`bg-[url("/src/assets/img/main-bg.jpg")] h-screen bg-no-repeat 
        bg-cover bg-center bg-fixed bg-[#000000] w-full before:mainbg_before`}
      >
        <div className="flex items-center z-10 relative w-full h-full px-20">
          <p className="text-white text-[50px]">
            씨네 월드에 오신 것을 환영합니다
          </p>
        </div>
      </div>

      <MainRandomMovie />

      <div className="pt-[150px] flex flex-col gap-20">
        <VideoLists title="인기작 영화 TOP 20" name="popular" type="movie" />
        <VideoLists
          title="현재 상영중인 영화"
          name="now_playing"
          type="movie"
        />

        <MoreBtn text="더 많은 영화 보러가기" />
      </div>

      {/* 인물 리스트 */}
      <PeopleLists />

      <h1 className="font-bold text-[80px] text-white ml-[70px] mt-[200px]">
        TV 프로그램
      </h1>
      <div className="pt-[100px] flex items-center justify-center">
        <MainTvSlide />
      </div>

      <div className="pt-[150px] flex flex-col gap-20">
        <VideoLists title="인기 급상승 TV프로그램" name="tv" type="trending" />

        <MoreBtn text="더 많은 TV프로그램 보러가기" />
      </div>
    </div>
  );
}
