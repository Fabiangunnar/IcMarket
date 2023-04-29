import React, { useState } from "react";
import styles from "@/styles/pages/User.module.scss";
import { IoSettings } from "react-icons/io5";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	WrapItem,
} from "@chakra-ui/react";

type Props = {};

const Settings = (props: Props) => {
	const [input, setInput] = useState("");
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		phone: "",
		email: "",
		bitcoin: "",
		ethereum: "",
		usdt: "",
	});

	const handleInputChange = (e: any) =>
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const isError = input === "";
	return (
		<section className={`${styles.user_block}`}>
			<div className={`${styles.management_block}`}>
				<div className={`${styles.management_head}`}>
					<IoSettings />
					<p>Settings</p>
				</div>
				<Box p={2}>
					<form action="">
						<FormControl p={2}>
							<FormLabel fontSize={11}>Username</FormLabel>
							<Input
								type="text"
								fontSize={12}
								required
								name="username"
								value={formData.username}
								onChange={handleInputChange}
							/>
							{!isError ? (
								<FormHelperText>
									Enter the email you'd like to receive the newsletter on.
								</FormHelperText>
							) : (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl p={2}>
							<FormLabel fontSize={11}>Password</FormLabel>
							<Input
								type="password"
								fontSize={12}
								required
								name="password"
								value={formData.password}
								onChange={handleInputChange}
							/>
							{!isError ? (
								<FormHelperText>
									Enter the email you'd like to receive the newsletter on.
								</FormHelperText>
							) : (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl p={2}>
							<FormLabel fontSize={12}>Phone</FormLabel>
							<Input
								type="number"
								fontSize={12}
								required
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
							/>
							{!isError ? (
								<FormHelperText>
									Enter the email you'd like to receive the newsletter on.
								</FormHelperText>
							) : (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
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
							{!isError ? (
								<FormHelperText>
									Enter the email you'd like to receive the newsletter on.
								</FormHelperText>
							) : (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl p={2}>
							<FormLabel fontSize={12}>Bitcoin</FormLabel>
							<Input
								type="text"
								fontSize={12}
								required
								name="bitcoin"
								value={formData.bitcoin}
								onChange={handleInputChange}
							/>
							{!isError ? (
								<FormHelperText>
									Enter the email you'd like to receive the newsletter on.
								</FormHelperText>
							) : (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl p={2}>
							<FormLabel fontSize={12}>Ethereum</FormLabel>
							<Input
								type="text"
								fontSize={12}
								required
								name="ethereum"
								value={formData.ethereum}
								onChange={handleInputChange}
							/>
							{!isError ? (
								<FormHelperText>
									Enter the email you'd like to receive the newsletter on.
								</FormHelperText>
							) : (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl p={2}>
							<FormLabel fontSize={12}>USDT</FormLabel>
							<Input
								type="text"
								fontSize={12}
								required
								name="usdt"
								value={formData.usdt}
								onChange={handleInputChange}
							/>
							{!isError ? (
								<FormHelperText>
									Enter the email you'd like to receive the newsletter on.
								</FormHelperText>
							) : (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							)}
						</FormControl>
						<FormControl p={2}>
							<Button type="submit" w="100%" colorScheme="messenger">
								Update
							</Button>
						</FormControl>
					</form>
				</Box>
			</div>
		</section>
	);
};

export default Settings;
