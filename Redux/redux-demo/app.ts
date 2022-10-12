// /*
// reducer state and action in redux = buying a cake from a cake shop

// state =  cake store
// action =  buying a cake 
// reducer =  shopkeeper

// reducer = (prevState, action) => newState

// Redux store subscribed to JS application dispatches an action 
// for state change and the reducer updates the state in the store depending on the action

// an action is an object with type property
// */

// const redux = require("redux");
// const createStore = redux.createStore();

// const BUY_CAKE: string = "Buy Cake"; //type

// interface IAction {
//   type: string;
//   info: string;
// }

// const buyCake = () => {
//   //here buyCake is an action reader which return an action
//   return {
//     //this object is an action
//     type: BUY_CAKE,
//     info: "First Redux Action",
//   };
// };

// interface IInitialState {
//   numOfCakes: number;
// }

// const initialState: IInitialState = {
//   numOfCakes: 10,
// };

// const reducer = (state = initialState, action: IAction) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...initialState,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default:
//       return initialState;
//   }
// };

// const store = createStore(reducer);
// console.log("Initial State", store.getState());
// store.subscribe(() => console.log("Updated State", store.getState()));

// /*
// Redux Store 

// Holds application state
// allow access to state via getState()
// allow state to be updated via dispatch(action)
// registers listeners via subscribe(listener)
// handles  unregistering of the listeners via the function returned by subscribe(listener)
// */
