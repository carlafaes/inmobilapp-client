import {
	LOAD_ALL_PROPERTIES,
	FILTER_PROPERTIES,
} from '../actions/types-propierties';

const initiaState = [];

const propertys = (state = initiaState, action) => {
	switch (action.type) {
		case LOAD_ALL_PROPERTIES:
			return action.payload;

		case FILTER_PROPERTIES:
			if (action.filter?.maximum_budget) {
				action.payload = action.payload.filter(
					(p) => Number(p.rentalPrice) <= Number(action.filter.maximum_budget)
				);
			}
			if (action.filter?.location) {
				action.payload = action.payload.filter((p) =>
					p.location?.city
						?.toUpperCase()
						.includes(action.filter.location.toUpperCase())
				);
			}
			if (
				action.filter?.typeProperty &&
				action.filter?.typeProperty != 'Todo'
			) {
				action.payload = action.payload.filter(
					(p) =>
						p.typeProperty.toUpperCase() ===
						action.filter.typeProperty.toUpperCase()
				);
			}
			if (action.filter?.rooms) {
				action.payload = action.payload.filter(
					(p) => Number(p.details.rooms) === Number(action.filter.rooms)
				);
			}

			return [...action.payload];

		default:
			return state;
	}
};

export default propertys;
