import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isVisible ? "bg-[#2a2a2a] border-b border-[#000]" : "bg-transparent"
        } h-[60px] px-16 flex items-center justify-between
        fixed w-full z-40`}
      >
        <p className="text-xl font-bold text-green-500">씨네월드</p>
        <div>
          <ul className="flex gap-4 text-white">
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
      </div>
      <Outlet context={mainRef} />
    </>
  );
}
