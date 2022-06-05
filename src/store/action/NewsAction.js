import request from "../../request/request";
export const Newsitem = (params) => (dispatch) => {
    dispatch({ type: "news_start", payload: params });
    request
        .newsItem(params)
        .then(({ data }) => {
            dispatch({ type: "news_start_success", payload: data });
        })
        .catch(({ response }) => {
            let message = (response && response.data.message) || "Login error";
            dispatch({ type: "news_start_error", payload: message });
        });
};