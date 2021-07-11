import axiosClient from "../constants/axiosClient";

const userAPI = {
  getAll: (params) => {
    const url = "/get";
    return axiosClient.get(url, {
      params,
    });
  },

  post: (body) => {
    const url = `/post`;
    return axiosClient.post(url, body);
  },

  put: (id, body) => {
    const url = `/put/${id}`;
    return axiosClient.put(url, body);
  },

  delete: (id) => {
    const url = `/delete/${id}`;
    return axiosClient.delete(url);
  },
};
export default userAPI;
