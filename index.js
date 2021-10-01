const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
	return {
		type: BUY_CAKE,
		info: 'buy cake',
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: 'Ice cream',
	};
}

const initialCakeState = {
	numOfCakes: 10,
};

const initialIceCreamState = {
	numberOfIceCreams: 20,
};

// const initialState = {
// 	numOfCakes: 10,
// 	numberOfIceCreams: 20,
// };

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case BUY_CAKE:
// 			return {
// 				...state,
// 				numOfCakes: state.numOfCakes - 1,
// 			};

// 		case BUY_ICECREAM:
// 			return {
// 				...state,
// 				numberOfIceCreams: state.numberOfIceCreams - 1,
// 			};
// 		default:
// 			return state;
// 	}
// };

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};
		default:
			return state;
	}
};

const icecreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams - 1,
			};
		default:
			return state;
	}
};

const store = createStore(combineReducers({ cake: cakeReducer, iceCream: icecreamReducer }));

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
