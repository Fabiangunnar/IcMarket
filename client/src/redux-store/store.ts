import HomeNavSlice from "@/redux-actions/homeNavSlice";
import navReducer from "@/redux-actions/navSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		nav: navReducer,
		homenav: HomeNavSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
