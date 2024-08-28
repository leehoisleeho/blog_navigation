import axiosInstance from "./axiosConfig";

export const getTitles = async () => {
  return axiosInstance.get("/navigation/findAll");
};

export const getWebsites = async () => {
  return axiosInstance.get("/website/findAll");
};
