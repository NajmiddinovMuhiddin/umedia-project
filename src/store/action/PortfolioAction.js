import request from "../../request/request";
export const portfolioItems = (params) => (dispatch) => {
    dispatch({ type: "portfolio_start", payload: params });
    request
        .portfolioReq(params)
        .then(({ data }) => {
            dispatch({ type: "portfolio_start_success", payload: data });
        })
        .catch(({ response }) => {
            let message = (response && response.data.message) || "Login error";
            dispatch({ type: "portfolio_start_error", payload: message });
        });
};