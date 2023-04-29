import React from "react";
import styles from "@/styles/pages/User.module.scss";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
} from "@chakra-ui/react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { GiTrade } from "react-icons/gi";
import { SiCoinmarketcap } from "react-icons/si";

type Props = {};

const Trade = (props: Props) => {
	return (
		<div className={`${styles.manage_user_block} ${styles.manage_user_grid}`}>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<SiCoinmarketcap />
						<p>Market</p>
					</div>
					<Box p={2} background={"#759c4930"}>
						<Box></Box>
					</Box>
				</div>
			</section>

			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<GiTrade />
						<p>Place Trade</p>
					</div>
					<Box p={2} background={"#759c4930"}>
						<form action="" className={`${styles.form}`}>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Enter Trade Amount *</FormLabel>
								<NumberInput defaultValue={15} min={10} max={20}>
									<NumberInputField
										fontSize={14}
										className={`${styles.input}`}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper color={"#fff"} />
										<NumberDecrementStepper color={"#fff"} />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Select Asset *</FormLabel>
								<Select
									className={`${styles.input}`}
									fontSize={14}
									icon={<MdArrowDropDown />}>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option1">
										EUR/USD
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option2">
										GBP/JPY
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option3">
										AUD/USD
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option1">
										USD/CAD
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option2">
										USD/JPY
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option3">
										EUR/GBP
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option3">
										EUR/JPY
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option3">
										USD/NZD
									</option>
								</Select>
							</FormControl>

							<Flex gap={4} p={2} w="100%">
								<Button
									fontSize={14}
									type="submit"
									w="100%"
									_hover={{
										background: "#64d2b1",
									}}
									color={"#fff"}
									background="tomato">
									SELL
								</Button>
								<Button
									fontSize={14}
									type="submit"
									w="100%"
									_hover={{
										background: "#64d2b1",
									}}
									color={"#fff"}
									colorScheme="messenger">
									BUY
								</Button>
							</Flex>
						</form>
					</Box>
				</div>
			</section>
			<section className={`${styles.user_block}`}>
				<div className={`${styles.management_block}`}>
					<div className={`${styles.management_head}`}>
						<BiMoneyWithdraw />
						<p>Withdrawals Funds</p>
					</div>
					<Box p={2} background={"#759c4930"}>
						<form action="" className={`${styles.form}`}>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Amount *</FormLabel>
								<NumberInput defaultValue={15} min={10} max={20}>
									<NumberInputField
										fontSize={14}
										className={`${styles.input}`}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper color={"#fff"} />
										<NumberDecrementStepper color={"#fff"} />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Select Method *</FormLabel>
								<Select
									className={`${styles.input}`}
									fontSize={12}
									icon={<MdArrowDropDown />}>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option1">
										USDT
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option2">
										Bitcoin
									</option>
									<option
										style={{ background: "rgba(32, 80, 79, 1)" }}
										value="option3">
										Ethereum
									</option>
								</Select>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Wallet Code *</FormLabel>
								<Input
									className={`${styles.input}`}
									type="text"
									fontSize={12}
									required
									name="username"
								/>
							</FormControl>
							<FormControl p={2}>
								<FormLabel fontSize={11}>Wallet Address * </FormLabel>
								<Input
									className={`${styles.input}`}
									type="email"
									fontSize={12}
									required
									name="email"
								/>
							</FormControl>

							<FormControl p={2}>
								<Button
									fontSize={14}
									type="submit"
									w="100%"
									_hover={{
										background: "#64d2b1",
									}}
									color={"#fff"}
									background="#55b598">
									Request Withdrawals
								</Button>
							</FormControl>
						</form>
					</Box>
				</div>
			</section>
		</div>
	);
};

export default Trade;
