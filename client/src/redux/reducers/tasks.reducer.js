import { GET_TASKS_SUCCESS } from "../types"

const initialState = {
    tasks: [],
    message: ''

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: payload
        }

    default:
        return state
    }
}
