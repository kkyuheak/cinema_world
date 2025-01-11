import { imageUrl } from "../../constants/imageUrl";

interface PeopleCardProps {
  name: string;
  profile_path: string;
  known_for_department: string;
}

export default function PeopleCard({
  name,
  profile_path,
  known_for_department,
}: PeopleCardProps) {
  return (
    <div
      className="bg-[#202020] w-[140px] h-[220px] rounded-[15px]
      flex flex-col items-center justify-center gap-[4px]
      hover:translate-y-[-15px]  transition duration-300
    "
    >
      <p
        className={`font-extrabold text-white text-center ${
          name.length > 11 ? "text-[16px]" : "text-[20px]"
        }`}
      >
        {name}
      </p>
      <img
        src={`${imageUrl}${profile_path}`}
        alt="Person Profile"
        className="w-[60px] h-[60px] rounded-full"
      />
      <p className="font-bold text-white text-[14px]">
        {known_for_department === "Acting" ? "배우" : "감독"}
      </p>
      <button className="border w-[90px] h-[35px] rounded-[15px] text-white mt-3">
        알아보기
      </button>
    </div>
  );
}
