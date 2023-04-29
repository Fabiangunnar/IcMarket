import React from "react";
import styles from "@/styles/pages/User.module.scss";
import {
	Box,
	Button,
	Flex,
	Input,
	Select,
	Spacer,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";
import { RiLuggageDepositFill } from "react-icons/ri";
type Props = {};

const Deposits = (props: Props) => {
	const { posts, currentPostsPage, postsPerPage } = useSelector(
		(state: any) => state.mgmt
	);
	const indexOfLastPost = currentPostsPage * postsPerPage;
	const indexofFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost);
	const paginate = (number: any) => {
		// setCurrentPage(number);
	};
	return (
		<section className={`${styles.user_block}`}>
			<div className={`${styles.management_block}`}>
				<div className={`${styles.management_head}`}>
					<RiLuggageDepositFill />
					<p>Deposits</p>
				</div>
				<div>
					<Flex p={2}>
						<Spacer />
						<Box>
							<Input p={2} placeholder="Search ..." fontSize={12} />
						</Box>
					</Flex>
					<TableContainer gap={1}>
						<Table variant="simple">
							<TableCaption>Showing 71 to 73 of 73 entries</TableCaption>
							<Thead>
								<Tr>
									<Th fontSize={12} isNumeric>
										S/N
									</Th>
									<Th fontSize={12}>Username</Th>
									<Th fontSize={12}>Amount</Th>
									<Th fontSize={12}>Method</Th>
									<Th fontSize={12}>Wallet</Th>
									<Th fontSize={12}>Status</Th>
									<Th fontSize={12}>Time Created</Th>
									<Th fontSize={12}>Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td fontSize={11} isNumeric>
										25.4
									</Td>
									<Td fontSize={11}>inches</Td>
									<Td fontSize={11}>millimetres (mm)</Td>
									<Td fontSize={11}>millimetres (mm)</Td>
									<Td fontSize={11}>millimetres (mm)</Td>
									<Td fontSize={11}>millimetres (mm)</Td>
									<Td fontSize={11}>millimetres (mm)</Td>
									<Td fontSize={11}>
										<Flex direction={"column"} gap={1} align={"end"}>
											<Select cursor={"pointer"} fontSize={11} px={0} size="sm">
												<option>Set Pending</option>
												<option>Set Approved</option>
												<option>Set Rejected</option>
											</Select>
											<Button fontSize={11} maxW={24} colorScheme="whatsapp">
												Update
											</Button>
										</Flex>
									</Td>
								</Tr>
							</Tbody>
							<Tfoot>
								<Tr>
									<Th fontSize={11} isNumeric>
										S/N
									</Th>
									<Th fontSize={11}>Username</Th>
									<Th fontSize={11}>Amount</Th>
									<Th fontSize={11}>Method</Th>
									<Th fontSize={11}>Wallet</Th>
									<Th fontSize={11}>Status</Th>
									<Th fontSize={11}>Time Created</Th>
									<Th fontSize={11}>Action</Th>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
					<Flex p={4}>
						<Pagination
							postsPerPage={postsPerPage}
							totalPosts={posts.length}
							paginate={paginate}
						/>
					</Flex>
				</div>
			</div>
		</section>
	);
};

export default Deposits;
