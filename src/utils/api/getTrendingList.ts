import { instance } from "../../api/api";

export const getTrendingList = async (name: string) => {
  try {
    const { data } = await instance.get(`trending/${name}`, {
      params: {
        language: "ko-KR",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
