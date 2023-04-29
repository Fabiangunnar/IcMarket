import React from "react";
import styles from "@/styles/pages/User.module.scss";
import { BiMoneyWithdraw } from "react-icons/bi";

type Props = {};

const Withdrawals = (props: Props) => {
	return (
		<section className={`${styles.user_block}`}>
			<div className={`${styles.management_block}`}>
				<div className={`${styles.management_head}`}>
					<BiMoneyWithdraw />
					<p>Withdrawals</p>
				</div>
				<div></div>
			</div>
		</section>
	);
};

export default Withdrawals;
