import { Outlet } from "react-router";

export default function Header() {
  return (
    <>
      <div
        className="bg-transparent h-[60px] px-16 flex items-center justify-between
        fixed w-full z-40"
      >
        <p className="text-xl font-bold text-green-500">씨네월드</p>
        <div>
          <ul className="flex gap-4 text-white">
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
