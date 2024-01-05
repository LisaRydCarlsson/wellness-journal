// redux/myFeatures.js

import { configureStore } from "@reduxjs/toolkit";

// Action Types
export const ADD_ACTIVITY_TO_JOURNAL = "ADD_ACTIVITY_TO_JOURNAL";

// Action Creators
export const addActivityToJournal = (activity, minutesSpent, date) => ({
	type: ADD_ACTIVITY_TO_JOURNAL,
	payload: { activity, minutesSpent, date },
});

// Initial State
const initialState = {
	journal: [],
};

// Reducer
export const myFeaturesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ACTIVITY_TO_JOURNAL:
			return {
				...state,
				journal: [...state.journal, action.payload],
			};
		default:
			return state;
	}
};

export const store = configureStore({
	reducer: myFeaturesReducer,
});
