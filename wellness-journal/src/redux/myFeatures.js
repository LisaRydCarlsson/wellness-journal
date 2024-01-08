// redux/myFeatures.js

import { configureStore } from "@reduxjs/toolkit";

// Action Types
export const ADD_ACTIVITY_TO_JOURNAL = "ADD_ACTIVITY_TO_JOURNAL";
export const EDIT_ACTIVITY_IN_JOURNAL = "EDIT_ACTIVITY_IN_JOURNAL";
export const DELETE_ACTIVITY_FROM_JOURNAL = "DELETE_ACTIVITY_FROM_JOURNAL";

// Action Creators
export const addActivityToJournal = (activity, minutesSpent, date) => ({
	type: ADD_ACTIVITY_TO_JOURNAL,
	payload: { activity, minutesSpent, date },
});

export const editActivityInJournal = (id, newMinutes) => ({
	type: EDIT_ACTIVITY_IN_JOURNAL,
	payload: { id, newMinutes },
});

export const deleteActivityFromJournal = (activity) => ({
	type: DELETE_ACTIVITY_FROM_JOURNAL,
	payload: activity,
});

// Reducer
export const myFeaturesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ACTIVITY_TO_JOURNAL:
			const newActivity = {
				...action.payload.activity,
				minutesSpent: action.payload.minutesSpent,
				date: action.payload.date,
				iconURL: action.payload.activity.iconURL,
				activity: action.payload.activity.activity,
			};
			const newJournal = [newActivity, ...state.journal];
			localStorage.setItem("myJournal", JSON.stringify(newJournal));
			return {
				...state,
				journal: newJournal,
			};

		case EDIT_ACTIVITY_IN_JOURNAL:
			const updatedJournal = state.journal.map((activity) => {
				if (activity.id === action.payload.id) {
					return {
						...activity,
						minutesSpent: action.payload.newMinutes,
					};
				}
				return activity;
			});
			localStorage.setItem("myJournal", JSON.stringify(updatedJournal));
			return {
				...state,
				journal: updatedJournal,
			};

		case DELETE_ACTIVITY_FROM_JOURNAL:
			const filteredJournal = state.journal.filter(
				(activity) => activity !== action.payload
			);
			localStorage.setItem("myJournal", JSON.stringify(filteredJournal));
			return {
				...state,
				journal: filteredJournal,
			};
		default:
			return state;
	}
};

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

const store = configureStore({
	reducer: myFeaturesReducer,
});

export default store;
