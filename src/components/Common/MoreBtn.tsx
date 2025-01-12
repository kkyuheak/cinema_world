import { Link } from "react-router";

interface MoreBtnProps {
  text: string;
}

export default function MoreBtn({ text }: MoreBtnProps) {
  return (
    <Link
      to="/tv"
      className="border w-[300px] rounded-[15px] h-[50px] text-white 
      flex items-center justify-center m-auto"
    >
      {text}
    </Link>
  );
}
