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
let savedJournal = localStorage.getItem("myJournal");
if (savedJournal) {
	savedJournal = JSON.parse(savedJournal);
} else {
	savedJournal = [];
}
const initialState = {
	journal: savedJournal,
};

// Reducer
export const myFeaturesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ACTIVITY_TO_JOURNAL:
			const newJournal = [action.payload, ...state.journal];
			localStorage.setItem("myJournal", JSON.stringify(newJournal));
			return {
				...state,
				journal: newJournal,
			};
		default:
			return state;
	}
};

const store = configureStore({
	reducer: myFeaturesReducer,
});

export default store;
