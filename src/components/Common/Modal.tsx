import { useQuery } from "@tanstack/react-query";
import { imageUrl } from "../../constants/imageUrl";
import MoreBtn from "./MoreBtn";
import { getGenreList } from "../../utils/api/getGenreList";
import { MouseEvent } from "react";
import Genre from "./Genre";
import closeIcon from "../../assets/icon/closeIcon.svg";

interface ModalProps {
  onClose: () => void;
  modalData: {
    title: string;
    desc: string;
    image: string;
    genre: number[];
    vote_average: number;
  };
}

interface GenreListType {
  id: number;
  name: string;
}

export default function Modal({ onClose, modalData }: ModalProps) {
  const { data } = useQuery({
    queryKey: ["genreList"],
    queryFn: async () => {
      const { genres }: { genres: GenreListType[] } = await getGenreList(
        "movie"
      );
      console.log(genres);
      const genreName = genres.filter((genre) => {
        return modalData.genre.includes(genre.id);
      });
      // console.log(genres);
      return genreName;
    },
  });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="text-white w-[1000px] bg-[#202020] 
    rounded-[15px] relative pb-5"
      onClick={(e) => handleClick(e)}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-20"
      >
        <img src={closeIcon} alt="닫기 아이콘" className="w-[40px]" />
      </button>
      <div className="relative">
        <img
          src={`${imageUrl}/${modalData.image}`}
          alt="배경 이미지"
          className="rounded-t-[15px] h-[400px] w-full object-cover"
        />
        <div className="rounded-t-[12px] absolute inset-0 bg-gradient-to-t from-[#000000] via-[#00000033] to-transparent"></div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1">
          <span className="text-[#f39c12]">★</span>
          <span>{modalData.vote_average.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-5">
          <h1 className="text-[50px] font-bold">{modalData.title}</h1>
          <div className="flex gap-2">
            {data &&
              data.map((genre) => {
                return <Genre name={genre.name} key={genre.id} />;
              })}
          </div>
        </div>
        <p className="px-4 mt-4">{modalData.desc}</p>
      </div>

      <MoreBtn text="자세히 보러가기" style="w-[200px]" />
    </div>
  );
}
