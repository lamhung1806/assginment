import axios from "axios";
const getAllUserAction = (data) => {
  return {
    type: "GET_ALL_USER",
    payload: data,
  };
};
export const nextPageUserAction = (data) => {
  return {
    type: "NEXT_PAGE",
    payload: data,
  };
};
export const PreviosPageUserAction = (data) => {
  return {
    type: "PREVIOS_PAGE",
    payload: data,
  };
};

export const getAllUser = (data) => async (dispatch) => {
  const response = await axios.get(
    `https://randomuser.me/api/?page=${data}&results=10`
  );
  const dataList = response.data.results;
  dataList.sort((a, b) => {
    if (a.name.title.toLowerCase() < b.name.title.toLowerCase()) return -1;
    if (a.name.title.toLowerCase() < b.name.title.toLowerCase()) return 1;
    return 0;
  });
  dataList.sort((a, b) => {
    if (a.login.username.toLowerCase() < b.login.username.toLowerCase())
      return -1;
    if (a.login.username.toLowerCase() < b.login.username.toLowerCase())
      return 1;
    return 0;
  });
  dispatch(getAllUserAction(dataList));
};
