import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://backend-potlucks.herokuapp.com/api",
    headers: {
      authorization: token,
    },
  });
};
