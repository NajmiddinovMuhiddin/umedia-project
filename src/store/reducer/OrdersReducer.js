
const INITIAL_STATE = {
    loading: false,
    message: null,
    images: []
};
export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case "images_start":
            return {
                ...state,
                message: "",
                loading: true,
            };
        case "images_start_error":
            return {
                ...state,
                message: payload,
                loading: false,
            };
        case "images_start_success":
            return {
                ...state,
                message: payload.message,
                loading: false,
                images: payload
            };
        default:
            return state;
    }
};