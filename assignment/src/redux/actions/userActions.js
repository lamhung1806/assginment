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
  console.log(dataList);
  dataList.sort((a, b) =>
    a.name.title.toLowerCase() > b.name.title.toLowerCase() ? 1 : -1
  );
  dataList.sort((a, b) =>
    a.login.username.toLowerCase() > b.login.username.toLowerCase() ? 1 : -1
  );
  dispatch(getAllUserAction(dataList));
};
