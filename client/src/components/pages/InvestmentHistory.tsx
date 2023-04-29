import React from "react";
import styles from "@/styles/pages/User.module.scss";
import {
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
	TableContainer,
	Table,
	TableCaption,
} from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";
type Props = {};

const InvestmentHistory = (props: Props) => {
	return (
		<section className={`${styles.user_block}`}>
			<div className={`${styles.management_block}`}>
				<div className={`${styles.management_head}`}>
					<IoNotifications />
					<p>Notifications</p>
				</div>

				<TableContainer gap={1} background={"#759c4930"}>
					<Table variant="simple">
						<Thead>
							<Tr>
								<Th fontSize={12} color={"#fff"}>
									ID
								</Th>
								<Th fontSize={12} color={"#fff"}>
									Amount
								</Th>
								<Th fontSize={12} color={"#fff"}>
									Plan
								</Th>
								<Th fontSize={12} color={"#fff"}>
									Status
								</Th>
								<Th fontSize={12} color={"#fff"} isNumeric>
									Date
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td fontSize={11}>25.4</Td>
								<Td fontSize={11}>inches</Td>
								<Td fontSize={11}>inches</Td>
								<Td fontSize={11}>inches</Td>
								<Td fontSize={11} isNumeric>
									millimetres (mm)
								</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Th fontSize={12} color={"#fff"}>
									ID
								</Th>
								<Th fontSize={12} color={"#fff"}>
									Amount
								</Th>
								<Th fontSize={12} color={"#fff"}>
									Plan
								</Th>
								<Th fontSize={12} color={"#fff"}>
									Status
								</Th>
								<Th fontSize={12} color={"#fff"} isNumeric>
									Date
								</Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>
			</div>
		</section>
	);
};

export default InvestmentHistory;
