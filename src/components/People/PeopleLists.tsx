import { useQuery } from "@tanstack/react-query";
import PeopleCard from "./PeopleCard";
import { getPeopleList } from "../../utils/api/getPeopleList";
import { useEffect, useRef, useState } from "react";
import MoreBtn from "../Common/MoreBtn";

export default function PeopleLists() {
  const { data, isLoading } = useQuery<PeopleListType>({
    queryKey: ["PeopleLists"],
    queryFn: getPeopleList,
  });

  const peopleListRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (peopleListRef.current) {
      observer.observe(peopleListRef.current);
    }

    return () => {
      if (peopleListRef.current) {
        observer.unobserve(peopleListRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-[200px] flex justify-center" ref={peopleListRef}>
      <div
        className={`flex gap-6 max-w-[1650px] flex-wrap justify-center ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[50px]"
        } transition duration-[1000ms] ease-in-out`}
      >
        {data?.results.map((people) => {
          return (
            <PeopleCard
              key={people.id}
              name={people.name}
              profile_path={people.profile_path}
              known_for_department={people.known_for_department}
            />
          );
        })}
        <MoreBtn text="더 많은 인물 보러가기" />
      </div>
    </div>
  );
}
