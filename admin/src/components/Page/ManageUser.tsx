import React, { useState } from "react";
import styles from "@/styles/pages/User.module.scss";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiUser } from "react-icons/hi2";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill, RiProfileLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Text,
	TableContainer,
	TableCaption,
	Table,
	Tbody,
	Td,
	Tr,
	Th,
	Thead,
	Tfoot,
	Flex,
	Stack,
	WrapItem,
	Avatar,
	Spacer,
	Divider,
} from "@chakra-ui/react";

type Props = {};

const ManageUser = (props: Props) => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		username: "",
		email: "",
		phone: "",
		password: "",
	});
	const [balanceFormData, setBalanceFormData] = useState({
		availableBalance: "",
		totalProfit: "",
		totalDeposit: "",
		pendingDeposit: "",
		totalBonus: "",
		totalWithdrawal: "",
		pendingWithdrawal: "",
	});
	const [notifFormData, setNotifFormData] = useState({
		message: "",
		title: "",
	});

	const handleInputChange = (e: any) => {
		setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
		setNotifFormData((prev: any) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		setBalanceFormData((prev: any) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<div className={`${styles.manage_user_block}`}>
			<section className={`${styles.manage_user_head}`}>
				<h1>Manage User</h1>
				<small>Dashboard</small>
			</section>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<HiUser />
						<p>User's Information</p>
					</div>
					<Flex p={4} gap={8} justify={"between"} align={"center"}>
						<WrapItem>
							<Avatar
								size="2xl"
								name="Kola Tioluwani"
								src="https://bit.ly/tioluwani-kolawole"
							/>
						</WrapItem>

						<Stack spacing={3}>
							<Text fontSize="sm">Available Balance:</Text>
							<Text fontSize="sm">Total Deposit: </Text>
							<Text fontSize="sm">Total Withdrawal: </Text>
							<Text fontSize="sm">Total Investment: </Text>
							<Button
								fontSize={14}
								type="submit"
								w="100%"
								colorScheme="messenger">
								Login Account
							</Button>
						</Stack>
					</Flex>
				</div>
			</section>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<MdAccountBalance />
						<p>Update Balance</p>
					</div>
					<Box p={2}>
						<form action="">
							<FormControl p={2}>
								<FormLabel fontSize={11}>Available Balance</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="availableBalance"
									value={balanceFormData.availableBalance}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Total Deposit</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="totalProfit"
									value={balanceFormData.totalProfit}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Total Deposit</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="totalDeposit"
									value={balanceFormData.totalDeposit}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Pending Deposit</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="pendingDeposit"
									value={balanceFormData.pendingDeposit}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Total Bonus</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="totalBonus"
									value={balanceFormData.totalBonus}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Total Withdrawal</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="totalWithdrawal"
									value={balanceFormData.totalWithdrawal}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Pending Withdrawal</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="pendingWithdrawal"
									value={balanceFormData.pendingWithdrawal}
									onChange={handleInputChange}
								/>
							</FormControl>

							<FormControl p={2}>
								<Button
									fontSize={14}
									type="submit"
									w="100%"
									colorScheme="messenger">
									Update
								</Button>
							</FormControl>
						</form>
					</Box>
				</div>
			</section>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<RiProfileLine />
						<p>Profile</p>
					</div>
					<Flex p={4} gap={1} direction={"column"}>
						<Box>
							<Text fontSize="sm">Name:</Text>
							<Text fontSize={12}>been</Text>
						</Box>
						<Divider />
						<Box>
							<Text fontSize="sm">Email:</Text>
							<Text fontSize={12}>been</Text>
						</Box>
						<Divider colorScheme={"red"} variant={"solid"} />
						<Box>
							<Text fontSize="sm">Registered on:</Text>
							<Text fontSize={12}>been</Text>
						</Box>
						<Divider />
						<Box>
							<Text fontSize="sm">Referral link:</Text>
							<Text fontSize={12}>been</Text>
							<Button fontSize={12} colorScheme="messenger">
								VIEW REFERRALS
							</Button>
						</Box>
						<Divider colorScheme={"red"} variant={"solid"} />
						<Box>
							<Text fontSize="sm">Referral link:</Text>
							<Button fontSize={12} colorScheme="red">
								NOT VERIFIED
							</Button>
						</Box>
						<Divider colorScheme={"red"} variant={"solid"} />
						<Box>
							<Text fontSize="sm">Last Login Information:</Text>
							<Text fontSize={12}>been</Text>
						</Box>
						<Divider colorScheme={"red"} variant={"solid"} />
					</Flex>
				</div>
			</section>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<AiTwotoneEdit />
						<p>Edit Accounts</p>
					</div>
					<Box p={2}>
						<form action="">
							<FormControl p={2}>
								<FormLabel fontSize={11}>Firstname</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="firstname"
									value={formData.firstname}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Lastname</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="lastname"
									value={formData.lastname}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Username</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="username"
									value={formData.username}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Email</FormLabel>
								<Input
									type="email"
									fontSize={12}
									required
									name="email"
									value={formData.email}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Phone</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={12}>Password</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="password"
									value={formData.password}
									onChange={handleInputChange}
								/>
							</FormControl>

							<FormControl p={2}>
								<Button
									fontSize={14}
									type="submit"
									w="100%"
									colorScheme="messenger">
									Update
								</Button>
							</FormControl>
						</form>
					</Box>
				</div>
			</section>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<IoNotifications />
						<p>Notifications</p>
					</div>

					<Box p={2}>
						<form action="">
							<FormControl p={2}>
								<FormLabel fontSize={11}>Title</FormLabel>
								<Input
									type="text"
									fontSize={12}
									required
									name="title"
									placeholder="What's the title"
									value={notifFormData.title}
									onChange={handleInputChange}
								/>
							</FormControl>
							<FormControl p={2}>
								<Text mb="8px" fontSize={11}>
									Message:{" "}
								</Text>
								<Textarea
									fontSize={12}
									value={notifFormData.message}
									required
									name="message"
									placeholder="What's the message"
									onChange={handleInputChange}
									size="sm"
								/>
							</FormControl>
							<FormControl p={2}>
								<Button
									fontSize={14}
									type="submit"
									w="100%"
									colorScheme="messenger">
									Send
								</Button>
							</FormControl>
						</form>
					</Box>
				</div>
			</section>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<RiLuggageDepositFill />
						<p>Deposits</p>
					</div>
					<TableContainer gap={1}>
						<Table variant="simple">
							<TableCaption> entries</TableCaption>
							<Thead>
								<Tr>
									<Th fontSize={11} isNumeric>
										S/N
									</Th>
									<Th fontSize={11}>User </Th>
									<Th fontSize={11}>Method</Th>
									<Th fontSize={11}>Wallet</Th>
									<Th fontSize={11}>Status</Th>
									<Th fontSize={11}>Time</Th>
									<Th fontSize={11}>Created</Th>
									<Th fontSize={11}>Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								<Tr>
									<Td fontSize={11} isNumeric>
										No Data!
									</Td>
								</Tr>
							</Tbody>
							<Tfoot>
								<Tr>
									<Th fontSize={11} isNumeric>
										S/N
									</Th>
									<Th fontSize={11}>User </Th>
									<Th fontSize={11}>Method</Th>
									<Th fontSize={11}>Wallet</Th>
									<Th fontSize={11}>Status</Th>
									<Th fontSize={11}>Time</Th>
									<Th fontSize={11}>Created</Th>
									<Th fontSize={11}>Action</Th>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
				</div>
			</section>
		</div>
	);
};

export default ManageUser;
