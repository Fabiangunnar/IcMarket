import { createSlice } from "@reduxjs/toolkit";
import { NavTypes, navData } from "../data/maindata";

interface initialTypes {
	navData: NavTypes[];
	currentPage: string;
	openNav: boolean;
}
const initialState: initialTypes = {
	navData,
	currentPage: "/",
	openNav: false,
};

export const HomeNavSlice = createSlice({
	name: "home-nav-slice",
	initialState,
	reducers: {
		setCurrentPage: (state, { payload }) => {
			state.currentPage = payload;
		},
		resetNav: (state) => {
			state.navData = navData;
		},
		setNavLink: (state, { payload }) => {
			const newNavData: any = state.navData.map((item) => {
				return item.id === payload.id
					? { ...item, state: true }
					: { ...item, state: false };
			});
			state.navData = newNavData;
			console.log(payload);
		},
		setNavDropLink: (state, { payload }) => {
			const newNavData: any = state.navData.map((item) => {
				return item.id === payload.id
					? { ...item, state: !item.state }
					: { ...item, state: false };
			});
			state.navData = newNavData;
		},
		setOpenNav: (state) => {
			state.openNav = !state.openNav;
		},
		closeNav: (state) => {
			state.openNav = false;
		},
	},
});
export const {
	setCurrentPage,
	setNavLink,
	setOpenNav,
	closeNav,
	resetNav,
	setNavDropLink,
} = HomeNavSlice.actions;
export default HomeNavSlice.reducer;
