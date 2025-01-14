interface GenreProps {
  name: string;
}

export default function Genre({ name }: GenreProps) {
  return (
    <div
      className="bg-[#444] text-white w-[80px] h-[30px]
                  rounded-[25px] flex items-center justify-center
                  font-bold"
    >
      {name}
    </div>
  );
}
