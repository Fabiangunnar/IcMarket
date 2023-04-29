import React from "react";
import styles from "@/styles/pages/User.module.scss";
import {
	Box,
	Button,
	Flex,
	Input,
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
import { TfiTicket } from "react-icons/tfi";
type Props = {};

const Support = (props: Props) => {
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
					<TfiTicket />
					<p>Support</p>
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
									<Th fontSize={12}>Ref ID</Th>
									<Th fontSize={12}>Username</Th>
									<Th fontSize={12}>Subject</Th>
									<Th fontSize={12}>Message</Th>
									<Th fontSize={12}>Time Created</Th>
									<Th fontSize={12} isNumeric>
										Action
									</Th>
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
									<Td fontSize={11} isNumeric>
										<Flex align="end">
											<Button
												fontSize={11}
												// maxW={16}
												colorScheme="messenger">
												Send Notification
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
									<Th fontSize={12}>Ref ID</Th>
									<Th fontSize={12}>Username</Th>
									<Th fontSize={12}>Subject</Th>
									<Th fontSize={12}>Message</Th>
									<Th fontSize={12}>Time Created</Th>
									<Th fontSize={12} isNumeric>
										Action
									</Th>
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

export default Support;
