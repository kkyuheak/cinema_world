import { instance } from "../../api/api";

export const getMovieList = async (name: string) => {
  try {
    const { data } = await instance.get(`movie/${name}`, {
      params: {
        language: "ko-KR",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
