import { NavTypes, getIconComponent } from "@/data/maindata";
import { setNavLink, setOpenNav } from "@/redux-actions/homeNavSlice";
import { RootState } from "@/redux-store/store";
import styles from "@/styles/home/Header.module.scss";
import { Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const Header = (props: Props) => {
	const { openNav, navData } = useSelector((state: RootState) => state.homenav);
	const dispatch = useDispatch();
	const router = useRouter();
	const handleOpenNav = () => {
		dispatch(setOpenNav());
	};
	const handleChangeNav = (item: string, itemId: NavTypes) => {
		dispatch(setNavLink(itemId));

		router.push(item);
	};
	return (
		<nav className={`${styles.nav} `}>
			<div className={`${styles.header}  ${styles.not_mobile}`}>
				<ul className={`${styles.header_links} `}>
					{navData.slice(0, 5).map((item: NavTypes) => {
						const icon = getIconComponent(item.icon);
						return (
							<li
								className={item.state ? styles.active : ""}
								key={item.id}
								onClick={() => handleChangeNav(`${item.link}`, item)}>
								<span>{icon}</span>
								<span>{item.head}</span>
							</li>
						);
					})}
				</ul>
				<div></div>
				<ul className={`${styles.header_links}`}>
					{navData.slice(5).map((item: NavTypes) => (
						<li
							className={item.state ? styles.active : ""}
							key={item.id}
							onClick={() => handleChangeNav(`${item.link}`, item)}>
							{item.head}
						</li>
					))}
				</ul>
			</div>
			<div className={`${styles.header} ${styles.mobile}`}>
				<div className={`${styles.nav_icon_head} `}>
					<RxHamburgerMenu
						className={`${styles.nav_icon} `}
						onClick={handleOpenNav}
					/>
				</div>
				<div className={`${styles.sidenav} ${openNav ? styles.active : ""} `}>
					<h1>Premium Investments</h1>
					<ul className={`${styles.header_links} `}>
						<Divider />
						{navData.map((item: NavTypes) => {
							const icon = getIconComponent(item.icon);
							if (item.head === "Signin") {
								return (
									<>
										<Divider />
										<li
											className={item.state ? styles.active : ""}
											key={item.id}
											onClick={() => handleChangeNav(`${item.link}`, item)}>
											<span>{icon}</span>
											<span>{item.head}</span>
										</li>
										<Divider />
									</>
								);
							} else {
								return (
									<>
										<li
											className={item.state ? styles.active : ""}
											key={item.id}
											onClick={() => handleChangeNav(`${item.link}`, item)}>
											<span>{icon}</span>
											<span>{item.head}</span>
										</li>
									</>
								);
							}
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
