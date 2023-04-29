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
		username: "",
		password: "",
	});
	const router = useRouter();
	console.log(router);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push("/");
	};

	const handleInputChange = (e: any) => {
		setFormData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	return (
		<section className={styles.auth_block}>
			<Card>
				<CardHeader>
					<Text fontWeight={"semibold"} fontSize={24}>
						Login to your account
					</Text>
				</CardHeader>

				<CardBody className={styles.auth_info}>
					<form action="" onSubmit={handleSubmit}>
						<FormControl p={2}>
							<FormLabel fontSize={14}>Username</FormLabel>
							<Input
								type="text"
								fontSize={16}
								required
								name="username"
								placeholder="Your username"
								value={formData.username}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl p={2}>
							<FormLabel fontSize={14}>Password</FormLabel>
							<Input
								type="password"
								fontSize={16}
								required
								w="100%"
								name="password"
								placeholder="Your password"
								value={formData.password}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl p={2}>
							<Button
								fontSize={16}
								type="submit"
								w="100%"
								colorScheme="messenger">
								Login
							</Button>
						</FormControl>
					</form>
				</CardBody>
			</Card>
		</section>
	);
};

export default Index;
