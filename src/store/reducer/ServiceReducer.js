
const INITIAL_STATE = {
    loading: false,
    message: null,
    services: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case "service_start":
            return {
                ...state,
                message: "",
                loading: true,
            };
        case "service_start_error":
            return {
                ...state,
                message: payload,
                loading: false,
            };
        case "service_start_success":
            return {
                ...state,
                message: payload.message,
                loading: false,
                services: payload
            };
        default:
            return state;
    }
};