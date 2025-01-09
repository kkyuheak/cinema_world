// import mainBg from "../assets/img/main-bg.jpg";

import { useOutletContext } from "react-router";
import VideoLists from "../VideoLists";
import MainRandomMovie from "./MainRandomMovie";
import { RefObject } from "react";
import PeopleLists from "../People/PeopleLists";

type ContextType = RefObject<HTMLDivElement>;

export default function Main() {
  const mainRef = useOutletContext<ContextType>();

  return (
    <div>
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

      <div>
        <MainRandomMovie />
      </div>

      <div className="bg-[#2d2d2d] pt-[150px] flex flex-col gap-20">
        <VideoLists title="인기작 TOP 20" name="popular" />

        <VideoLists title="현재 상영중인 영화" name="now_playing" />
      </div>

      <PeopleLists />
    </div>
  );
}
