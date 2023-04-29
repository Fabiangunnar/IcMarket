import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/SideNav.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { NavTypes, getIconComponent } from "@/data/sidenav";
import { Divider } from "@chakra-ui/react";
import {
	closeNav,
	setCurrentPage,
	setNavLink,
	setNavDropLink,
} from "@/redux-actions/navSlice";
import { IoMdArrowDropdown } from "react-icons/io";
type Props = {};

const SideNav = (props: Props) => {
	const { navData } = useSelector((state: any) => state.nav);
	const dispatch = useDispatch();
	const handleChangeNav = (link: NavTypes) => {
		dispatch(setCurrentPage(link.link));
		dispatch(setNavLink(link));
		dispatch(closeNav());
	};
	const handleChangeSubNav = (link: NavTypes) => {
		dispatch(setCurrentPage(link.link));
		dispatch(closeNav());
	};
	const handleNavDrop = (link: NavTypes) => {
		dispatch(setNavDropLink(link));
	};

	return (
		<div className={`${styles.sidenav_block}`}>
			<h1>Premium Investments</h1>
			<div className={`${styles.sidenav_items}`}>
				<ul className={`${styles.nav_links}`}>
					<Divider />

					{navData.slice(0, 1).map((item: NavTypes) => {
						const icon = getIconComponent(item.icon);
						return (
							<li
								className={`${styles.nav_link} ${
									item?.state ? styles.active : ""
								}
                            `}
								key={item?.id}
								onClick={() => handleChangeNav(item)}>
								<span>{icon}</span>
								<span>{item?.desc} </span>
							</li>
						);
					})}
					<Divider />
					{navData.slice(1, 6).map((item: NavTypes) => {
						const icon = getIconComponent(item.icon);

						return (
							<li
								className={`${styles.nav_link} ${
									item?.state ? styles.active : ""
								}
                            `}
								key={item?.id}
								onClick={() => handleChangeNav(item)}>
								<span>{icon}</span>
								<span>{item?.desc} </span>
							</li>
						);
					})}
					<Divider />

					{navData.slice(6).map((item: NavTypes) => {
						const icon = getIconComponent(item.icon);
						if (item?.submenu) {
							return (
								<Fragment key={item?.id}>
									<li
										className={`${styles.nav_link_sub} ${
											item?.state ? styles.active : ""
										}
									 `}
										key={item?.id}
										onClick={() => handleNavDrop(item)}>
										<span>
											<span>{icon}</span>
											<span>{item?.desc} </span>
										</span>
										<span>
											<IoMdArrowDropdown />
										</span>
									</li>
									<ul
										className={`${styles.nav_link_sub_menu} 
										${item?.state ? styles.sub_active : ""}
									 `}>
										{item.submenu.map((subitem: any) => (
											<li
												className={`${styles.nav_link}`}
												onClick={() => handleChangeSubNav(subitem)}
												key={subitem?.id}>
												<span>{icon}</span>
												<span>{subitem?.desc} </span>
											</li>
										))}
										<Divider />
									</ul>
								</Fragment>
							);
						} else {
							return (
								<li
									className={`${styles.nav_link} ${
										item?.state ? styles.active : ""
									}
								         `}
									key={item?.id}
									onClick={() => handleChangeNav(item)}>
									<span>{icon}</span>
									<span>{item?.desc} </span>
								</li>
							);
						}
						// 	item?.submenu ? (
						// 		<h1>Hello</h1>
						// 	) : (
						// 		<li
						// 			className={`${styles.nav_link} ${
						// 				item?.state ? styles.active : ""
						// 			}
						//         `}
						// 			key={item?.id}
						// 			onClick={() => handleChangeNav(item)}>
						// 			<span>{icon}</span>
						// 			<span>{item?.desc} </span>
						// 		</li>
						// 	);
					})}
					<Divider />
				</ul>
			</div>
		</div>
	);
};

export default SideNav;
