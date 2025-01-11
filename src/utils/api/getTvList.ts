import { instance } from "../../api/api";

export const getTvList = async (name: string) => {
  try {
    const { data } = await instance.get(`tv/${name}`, {
      params: {
        language: "ko-KR",
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
