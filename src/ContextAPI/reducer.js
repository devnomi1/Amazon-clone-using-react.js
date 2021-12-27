export const initialState = {
    basket: [],
    user: null
};
const reducer = (state, action) => {
    console.log(state);
    console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			// login for adding item to basket
			return {
                ...state,
                basket:[...state.basket, action.item]
			};

		case "REMOVE_FROM_BASKET":
			// logic for removing items from basket
			const newBasket = [...state.basket]
			const index = state.basket.findIndex(basketItem => basketItem !== action.id)
			if (index >= 0) {
				newBasket.splice(index, 1)
			} else {
				console.warn(action.id)
			}
			return {
				...state,
				basket:newBasket
			};

		default:
			return state;
	}
};
export default reducer;
