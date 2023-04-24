const initialState = {
    visible: true,
    currDay: null,
    currTime: null,
    deleteId: ''
}

const deleteBtn = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_VISIBLE_BUTTON':
            return {
                ...state,
                visible: action.payload
            }
        case 'TOGGLE_CELL_COLOR':
            return {
                ...state,
                currDay: action.payload.day,
                currTime: action.payload.time
            }
        case 'GET_DELETE_ID':
            return {
                ...state,
                deleteId: action.payload
            }
        default: return state
    }
}

export default deleteBtn;