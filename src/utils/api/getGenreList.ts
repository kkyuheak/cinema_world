import { instance } from "../../api/api";

export const getGenreList = async (type: string) => {
  try {
    const { data } = await instance.get(`/genre/${type}/list`, {
      params: {
        language: "ko",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
