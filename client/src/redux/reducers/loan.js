import { FILTER_LOAN, LOAN_FETCH_FAIL, LOAN_FETCH_SUCCESS } from '../actions/Const';
const initialState = {
	filteredLoans:[],
	loans: [],
	loading: true
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case LOAN_FETCH_SUCCESS:
			return {
				...state,
				loans: payload,
				filteredLoans:payload,
				loading: false
			};
		case LOAN_FETCH_FAIL:
			return {
				...state,
				loading: false,
				loans: [],
				filteredLoans:[]
			};
			case FILTER_LOAN:
				return {
					...state,
					filteredLoans:payload
				}
		default:
			return { ...state };
	}
}
