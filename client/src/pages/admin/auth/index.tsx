import React, { useState } from "react";
import styles from "@/styles/Home.module.scss";
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
type Props = {};

const Index = (props: Props) => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		username: "",
		email: "",
		password: "",
		confirmpassword: "",
	});
	const [isRegister, setIsRegister] = useState(true);
	const router = useRouter();
	console.log(router);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push("/admin");
	};
	const handleRegisterState = () => {
		console.log("red");
		setIsRegister((prev) => !prev);
	};
	const handleInputChange = (e: any) => {
		setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	return (
		<section className={styles.auth_block}>
			<Card background={"#759c4940"} color={"#fff"}>
				<CardHeader>
					<Text fontWeight={"semibold"} fontSize={24}>
						{isRegister ? "Register a new account" : "Login to your account"}
					</Text>
				</CardHeader>

				<CardBody className={styles.auth_info}>
					<form action="" onSubmit={handleSubmit}>
						{isRegister && (
							<>
								{/* <FormControl p={2}>
									<FormLabel fontSize={12}>Username</FormLabel>
									<Input
										type="text"
										fontSize={14}
										required
										name="username"
										placeholder="Your username"
										value={formData.username}
										onChange={handleInputChange}
									/>
								</FormControl> */}
								<FormControl p={2}>
									<FormLabel fontSize={12}>First Name: </FormLabel>
									<Input
										type="text"
										fontSize={14}
										required
										name="firstname"
										placeholder="Your firstname"
										value={formData.firstname}
										onChange={handleInputChange}
									/>
								</FormControl>
								<FormControl p={2}>
									<FormLabel fontSize={12}>Last Name: </FormLabel>
									<Input
										type="text"
										fontSize={14}
										required
										name="lastname"
										placeholder="Your lastname"
										value={formData.lastname}
										onChange={handleInputChange}
									/>
								</FormControl>
							</>
						)}
						<FormControl p={2}>
							<FormLabel fontSize={12}>Email: </FormLabel>
							<Input
								type="email"
								fontSize={14}
								required
								name="email"
								placeholder="Your email"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl p={2}>
							<FormLabel fontSize={12}>Password</FormLabel>
							<Input
								type="password"
								fontSize={14}
								required
								w="100%"
								name="password"
								placeholder="Your password"
								value={formData.password}
								onChange={handleInputChange}
							/>
						</FormControl>
						{isRegister && (
							<FormControl p={2}>
								<FormLabel fontSize={12}>Confirm Password: </FormLabel>
								<Input
									type="password"
									fontSize={14}
									required
									name="confirmpassword"
									placeholder="Confirm your password"
									value={formData.confirmpassword}
									onChange={handleInputChange}
								/>
							</FormControl>
						)}
						<FormControl p={2}>
							<Button
								fontSize={16}
								type="submit"
								w="100%"
								_hover={{
									background: "#64d2b1",
								}}
								color={"#fff"}
								background="#55b598">
								Login
							</Button>
						</FormControl>
						<FormControl p={2}>
							<Text
								_hover={{
									textDecoration: "underline",
								}}
								fontSize="sm"
								cursor={"pointer"}
								onClick={handleRegisterState}>
								{isRegister
									? "Already have an account? Login"
									: "Don't have an account? Register"}
							</Text>
						</FormControl>
					</form>
				</CardBody>
			</Card>
		</section>
	);
};

export default Index;
