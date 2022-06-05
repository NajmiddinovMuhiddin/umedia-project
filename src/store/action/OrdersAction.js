import request from "../../request/request";
export const image = (params) => (dispatch) => {
    dispatch({ type: "images_start", payload: params });
    request
        .image(params)
        .then(({ data }) => {
            dispatch({ type: "images_start_success", payload: data });
        })
        .catch(({ response }) => {
            let message = (response && response.data.message) || "Login error";
            dispatch({ type: "images_start_error", payload: message });
        });
};