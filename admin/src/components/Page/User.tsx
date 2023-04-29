import React, { useState } from "react";
import styles from "@/styles/pages/User.module.scss";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Box,
	Flex,
	Spacer,
	Select,
	Input,
	Grid,
	Button,
} from "@chakra-ui/react";
import {
	Previous,
	Paginator,
	PageGroup,
	Page,
	Next,
	generatePages,
} from "chakra-paginator";
import { useSelector, useDispatch } from "react-redux";
import { HiUsers } from "react-icons/hi2";
import { MdArrowDropDown } from "react-icons/md";
import Pagination from "../Pagination";
import { setCurrentPage } from "@/redux-actions/navSlice";
type Props = {};

const User = (props: Props) => {
	// const [posts, setPosts] = useState([]);
	const { posts, currentPostsPage, postsPerPage } = useSelector(
		(state: any) => state.mgmt
	);
	const dispatch = useDispatch();
	const indexOfLastPost = currentPostsPage * postsPerPage;
	const indexofFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost);
	const handlePostsPerPage = (page: number) => {
		console.log(page);
	};
	const paginate = (number: any) => {
		// setCurrentPage(number);
	};
	return (
		<section className={`${styles.user_block}`}>
			<div className={`${styles.balance_block}`}>
				<div className={`${styles.balance_box}`}>
					<h3>Total Deposits</h3>
					<span>$13212</span>
				</div>
				<div className={`${styles.balance_box}`}>
					<h3>Total Withdrawals</h3>
					<span>$13212</span>
				</div>
			</div>
			<div className={`${styles.management_block}`}>
				<div className={`${styles.management_head}`}>
					<HiUsers />
					<p>User Management</p>
				</div>
				<Flex p={2}>
					{/* <Box>
						<Select cursor={"pointer"} fontSize={14} icon={<MdArrowDropDown />}>
							<option selected onClick={() => console.log(5)}>
								5
							</option>
							<option onClick={() => console.log(10)}>10</option>
							<option onClick={() => console.log(15)}>15</option>
							<option onClick={() => handlePostsPerPage(20)}>20</option>
						</Select>
					</Box> */}
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
								<Th fontSize={14}>User ID</Th>
								<Th fontSize={14}>Name</Th>

								<Th fontSize={14} isNumeric>
									Action
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td fontSize={12}>inches</Td>
								<Td fontSize={12}>millimetres (mm)</Td>

								<Td fontSize={12} isNumeric>
									<Flex direction={"column"} gap={1} align={"end"}>
										<Button
											fontSize={12}
											maxW={16}
											colorScheme="messenger"
											onClick={() => dispatch(setCurrentPage("manage-user"))}>
											Manage
										</Button>
										<Button fontSize={12} maxW={16} colorScheme="red">
											Delete
										</Button>
									</Flex>
								</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Th>User ID</Th>
								<Th>Name</Th>
								<Th isNumeric>Action</Th>
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
		</section>
	);
};

export default User;
