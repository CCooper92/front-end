

const initialState = {
    potlucks: {
        potluck_id: null,
        potluck_name: "",
        date: "",
        location: "",
        time: "",
        error: ""
    }
};

export const potluckReducer = (state = initialState , action) => {
    switch(action.type) {
        case("FETCH_POTLUCKS"):
        return ({
            ...state,
            potluck_id: action.payload,
            potluck_name: action.payload,
            date: action.payload,
            location: action.payload,
            time: action.payload
        })
        case("FETCH_ERROR"):
        return ({
            ...state,
            error: action.payload,
        })
        default:
            return state
    }
};