import React from "react";
import styles from "@/styles/pages/User.module.scss";
import { AiOutlineBarChart } from "react-icons/ai";

type Props = {};

const Investments = (props: Props) => {
	return (
		<section className={`${styles.user_block}`}>
			<div className={`${styles.management_block}`}>
				<div className={`${styles.management_head}`}>
					<AiOutlineBarChart />
					<p>Investments</p>
				</div>
				<div></div>
			</div>
		</section>
	);
};

export default Investments;
