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
	Flex,
	Button,
} from "@chakra-ui/react";
import { CiLink } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentPage, setNavLink } from "@/redux-actions/navSlice";

type Props = {};

const TransactionLogs = (props: Props) => {
	const handleClick = (link: string, id: object) => {
		dispatch(setNavLink(id));
		dispatch(setCurrentPage(link));
	};
	const dispatch = useDispatch();
	return (
		<div className={`${styles.manage_user_block}`}>
			<Flex gap={4} p={0} w="100%">
				<Button
					onClick={() => handleClick("deposit-funds", { id: "YHB84Z" })}
					fontSize={14}
					type="submit"
					w="100%"
					_hover={{
						background: "#64d2b1",
					}}
					color={"#fff"}
					background="#55b598">
					Deposits
				</Button>
				<Button
					onClick={() => handleClick("withdrawals", { id: "RST48H" })}
					fontSize={14}
					type="submit"
					w="100%"
					_hover={{
						background: "#64d2b1",
					}}
					color={"#fff"}
					background="#759c49">
					Withdrawals
				</Button>
			</Flex>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<CiLink />
						<p>Referrals</p>
					</div>

					<TableContainer gap={1} background={"#759c4930"}>
						<Table variant="simple">
							<TableCaption color={"#fff"} fontSize={10}>
								Showing 71 to 73 of 73 entries
							</TableCaption>
							<Thead>
								<Tr>
									<Th fontSize={12} color={"#fff"}>
										Type
									</Th>
									<Th fontSize={12} color={"#fff"}>
										Amount
									</Th>
									<Th fontSize={12} color={"#fff"}>
										Date
									</Th>
									<Th fontSize={12} color={"#fff"} isNumeric>
										Status
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td fontSize={11}>25.4</Td>
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
										Type
									</Th>
									<Th fontSize={12} color={"#fff"}>
										Amount
									</Th>
									<Th fontSize={12} color={"#fff"}>
										Date
									</Th>
									<Th fontSize={12} color={"#fff"} isNumeric>
										Status
									</Th>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
				</div>
			</section>
		</div>
	);
};

export default TransactionLogs;
