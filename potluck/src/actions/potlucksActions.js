
export const getPotlucks = (potlucks) => {

    return (dispatch => {
        dispatch({ type: "FETCH_POTLUCKS" , payload: potlucks });
        dispatch({ type: "FETCH_ERROR" })
    })

}

export const fetchPotlucks = (potlucks) => {
    return({ type: "FETCH_POTLUCKS", payload: potlucks});
}

export const fetchFail = (err) => {
    return ({type: "FETCH_ERROR" , payload: err})
}