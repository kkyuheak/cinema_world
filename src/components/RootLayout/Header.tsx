import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";

import Logo from "../../assets/img/header_logo.svg";
export default function Header() {
  const navigate = useNavigate();

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
        <img
          src={Logo}
          alt="헤더 로고"
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div>
          <ul className="flex gap-4 text-white">
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/register">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet context={mainRef} />
    </>
  );
}
