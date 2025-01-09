import { instance } from "../../api/api";

export const getPeopleList = async () => {
  try {
    const { data } = await instance.get("person/popular", {
      params: {
        language: "ko-KR",
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
