
const INITIAL_STATE = {
    loading: false,
    message: null,
    portfolios: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case "portfolio_start":
            return {
                ...state,
                message: "",
                loading: true,
            };
        case "portfolio_start_error":
            return {
                ...state,
                message: payload,
                loading: false,
            };
        case "portfolio_start_success":
            return {
                ...state,
                message: payload.message,
                loading: false,
                portfolios: payload
            };
        default:
            return state;
    }
};