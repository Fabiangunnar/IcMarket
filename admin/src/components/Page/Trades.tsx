import React from "react";
import styles from "@/styles/pages/User.module.scss";
import { GiTrade } from "react-icons/gi";

type Props = {};

const Trades = (props: Props) => {
	return (
		<section className={`${styles.user_block}`}>
			<div className={`${styles.management_block}`}>
				<div className={`${styles.management_head}`}>
					<GiTrade />
					<p>Trades</p>
				</div>
				<div></div>
			</div>
		</section>
	);
};

export default Trades;
