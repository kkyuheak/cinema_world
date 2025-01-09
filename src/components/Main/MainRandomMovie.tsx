import { getRandomMovie } from "../../utils/getRandomMovie";
import { imageUrl } from "../../constants/imageUrl";
import { useQuery } from "@tanstack/react-query";

export default function MainRandomMovie() {
  const { data, isLoading } = useQuery<ResultsType>({
    queryKey: ["MainRandomMovie"],
    queryFn: getRandomMovie,
  });
  // console.log("query", data);

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-gray-300 animate-pulse relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="z-20 relative ml-[100px]">
          <div className="bg-gray-400 h-[100px] w-[400px] rounded-md mb-4"></div>
          <div className="bg-gray-400 h-[120px] w-[800px] rounded-md mb-4"></div>
          <div className="bg-gray-400 h-[40px] w-[130px] rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url("${imageUrl}${data?.backdrop_path}")`,
      }}
      className={`w-full h-screen bg-no-repeat bg-center bg-cover relative flex items-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-#00000078 to-transparent"></div>
      <div className="z-20 relative ml-[100px]">
        <h1 className="text-[100px] text-white font-bold">{data?.title}</h1>
        <p className="text-[30px] text-white w-[800px]">{data?.overview}</p>
        <button
          type="button"
          className="border border-white rounded-[15px] mt-5
          text-white w-[130px] h-[40px] hover:bg-white hover:border-black
          hover:text-black transition
        "
        >
          자세히 알아보기
        </button>
      </div>
    </div>
  );
}
