import request from "../../request/request";
export const service = (params) => (dispatch) => {
    dispatch({ type: "service_start", payload: params });
    request
        .service(params)
        .then(({ data }) => {
            dispatch({ type: "service_start_success", payload: data });
        })
        .catch(({ response }) => {
            let message = (response && response.data.message) || "Login error";
            dispatch({ type: "service_start_error", payload: message });
        });
};