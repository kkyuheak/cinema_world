import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

interface MoreBtnProps {
  text: string;
  style?: string;
}

export default function MoreBtn({ text, style }: MoreBtnProps) {
  return (
    <Link
      to="/tv"
      className={twMerge(`border rounded-[15px] text-white 
      flex items-center justify-center m-auto w-[300px] h-[50px] ${style} `)}
    >
      {text}
    </Link>
  );
}
