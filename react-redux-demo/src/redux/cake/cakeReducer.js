import { BUY_CAKE } from './cakeTypes';

const initial_state = {
	numOfCakes: 10,
};

const cakeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - action.payload,
			};
		default:
			return state;
	}
};

export default cakeReducer;
