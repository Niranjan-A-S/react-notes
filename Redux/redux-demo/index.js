/*
reducer state and action in redux = buying a cake from a cake shop

state =  cake store
action =  buying a cake 
reducer =  shopkeeper

reducer = (prevState, action) => newState

Redux store subscribed to JS application dispatches an action 
for state change and the reducer updates the state in the store depending on the action

an action is an object with type property
*/

import { } from "reduxjs";
const createStoreCake = createStore()

const BUY_CAKE = "Buy Cake"; //type


const buyCake = () => {
    //here buyCake is an action reader which return an action
    return {
        //this object is an action
        type: BUY_CAKE,
        info: "First Redux Action",
    };
};



const initialState = {
    numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        };

        default: return state;
    }
};

const store = createStoreCake(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

/*
Redux Store 

Holds application state
allow access to state via getState()
allow state to be updated via dispatch(action)
registers listeners via subscribe(listener)
handles  unregistering of the listeners via the function returned by subscribe(listener)
*/
