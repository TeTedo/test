import axios from "axios";

const getAllUserData = (user_id) => {
  return async (dispatch, getState) => {
    const allUser = await axios.post(
      "http://ec2-15-165-160-2.ap-northeast-2.compute.amazonaws.com:8000/user/getAllUserData",
      { user_id }
    );

    dispatch({ type: "ALL USER DATA", payload: [...allUser.data] });
  };
};
const changeUserType = (data) => {
  return async (dispatch, getState) => {
    await axios.post(
      "http://ec2-15-165-160-2.ap-northeast-2.compute.amazonaws.com:8000/user/changeUserType",
      {
        ...data,
      }
    );
    alert("변경되었습니다");
  };
};
export const userAction = { getAllUserData, changeUserType };
