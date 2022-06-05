
const INITIAL_STATE = {
    loading: false,
    message: null,
    news: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case "news_start":
            return {
                ...state,
                message: "",
                loading: true,
            };
        case "news_start_error":
            return {
                ...state,
                message: payload,
                loading: false,
            };
        case "news_start_success":
            return {
                ...state,
                message: payload.message,
                loading: false,
                news: payload
            };
        default:
            return state;
    }
};