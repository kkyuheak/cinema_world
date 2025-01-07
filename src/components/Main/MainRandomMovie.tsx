import { useEffect, useState } from "react";
import { getRandomMovie } from "../../utils/getRandomMovie";
import { imageUrl } from "../../constants/imageUrl";

export default function MainRandomMovie() {
  const [randomMovie, setRandomMovie] = useState<ResultsType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomMovie = async () => {
      try {
        const response = await getRandomMovie();
        console.log(response);
        setRandomMovie(response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    randomMovie();
  }, []);

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
        backgroundImage: `url("${imageUrl}${randomMovie?.backdrop_path}")`,
      }}
      className={`w-full h-screen bg-no-repeat bg-center bg-cover relative flex items-center`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-#00000078 to-transparent"></div>
      <div className="z-20 relative ml-[100px]">
        <h1 className="text-[100px] text-white font-bold">
          {randomMovie?.title}
        </h1>
        <p className="text-[30px] text-white w-[800px]">
          {randomMovie?.overview}
        </p>
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
