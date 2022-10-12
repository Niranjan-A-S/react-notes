import configureStore from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { ...state, value: state.value + 1 }
        case 'counter/decremented':
            return { ...state, value: state.value - 1 }
        default:
            return state
    }
}

const store = configureStore({ reducer: counterReducer })

console.log(store.getState());


