import axios from "axios";
import { GET_SEARCH, POST_CARS } from "@redux/types";
import Swal from "sweetalert2";

export const getSearch = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_SEARCH}_LOADING` });

    axios({
      method: "GET",
      url: "https://rent-car-appx.herokuapp.com/admin/car",
    })
      .then((response) => {
        dispatch({
          type: `${GET_SEARCH}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_SEARCH}_ERROR`,
          error: error.massage,
        });
      });
  };
};

export const getPost = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_SEARCH}_LOADING` });

    axios({
      method: "GET",
      url: "https://rent-car-appx.herokuapp.com/admin/order",
    })
      .then((response) => {
        dispatch({
          type: `${GET_SEARCH}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_SEARCH}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const postCars = (data) => {
  return (dispatch) => {
    dispatch({ type: `${POST_CARS}_LOADING` });

    axios({
      method: "POST",
      url: "https://rent-car-appx.herokuapp.com/admin/car",
      data,
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then(() => {
        dispatch({
          type: `${POST_CARS}_FULFILLED`,
        });
        dispatch(getPost());
        Swal.fire("Berhasil Menambahkan", "", "success");
      })
      .catch((error) => {
        dispatch({
          type: `${POST_CARS}_ERROR`,
          error: error.message,
        });
      });
  };
};
