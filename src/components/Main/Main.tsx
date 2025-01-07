// import mainBg from "../assets/img/main-bg.jpg";

import VideoLists from "../VideoLists";
import MainRandomMovie from "./MainRandomMovie";

export default function Main() {
  return (
    <div>
      <div
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

      <div className="bg-slate-500 pt-[150px] flex flex-col gap-10">
        <VideoLists title="인기작 TOP 20" name="popular" />

        <VideoLists title="현재 상영중인 영화" name="now_playing" />
      </div>
    </div>
  );
}
