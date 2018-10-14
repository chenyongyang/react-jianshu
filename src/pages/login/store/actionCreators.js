import axios from "axios";
import * as actionTypes from "./actionTypes.js";

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
});

export const login = (accout, password) => {
  return dispatch => {
    console.log('登录验证');
    dispatch(changeLogin());
    // axios
    //   .get("/api/login.json?account=" + accout + "&password=" + password)
    //   .then(res => {
    //     const result = res.data.data;
    //     if (result) {
    //       dispatch(changeLogin());
    //     } else {
    //       alert("登陆失败");
    //     }
    //   });
  };
};
