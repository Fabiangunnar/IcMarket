import React from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import styles from "@/styles/Header.module.scss";
import { useDispatch } from "react-redux";
import { setOpenNav } from "@/redux-actions/navSlice";
type Props = {};

const Header = (props: Props) => {
	const dispatch = useDispatch();
	const handleOpenNav = () => {
		dispatch(setOpenNav());
	};
	return (
		<div className={`${styles.top_nav}`}>
			<span
				className={`${styles.menu_bar} ${styles.mobile}`}
				onClick={handleOpenNav}>
				<HiOutlineBars3BottomRight />
			</span>
		</div>
	);
};

export default Header;
