import { getMovieList } from "./api/getMovieList";

export const getRandomMovie = async () => {
  try {
    const { results: popularMovieList }: { results: ResultsType[] } =
      await getMovieList("popular");

    const randomIndex = Math.floor(Math.random() * popularMovieList.length);
    return popularMovieList[randomIndex];
  } catch (err) {
    console.log(err);
    throw err;
  }
};
