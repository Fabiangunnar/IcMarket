import navReducer from "@/redux-actions/navSlice";
import mgmtReducer from "@/redux-actions/mgmtSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		nav: navReducer,
		mgmt: mgmtReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
