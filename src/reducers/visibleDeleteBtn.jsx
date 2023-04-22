const initialState = {
    visible: true,
    color: false,
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
                color: action.payload
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