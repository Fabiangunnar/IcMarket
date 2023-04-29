import React, { useState } from "react";
import styles from "@/styles/pages/User.module.scss";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import {
	Box,
	Button,
	Card,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	Text,
} from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { AiFillEdit } from "react-icons/ai";

type Props = {};

const KYC = (props: Props) => {
	const [idInput, setIdInput] = useState<any>(null);
	const [poaInput, setPoaInput] = useState<any>(null);
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(poaInput, idInput);
	};
	return (
		<section className={` ${styles.manage_user_grid}`}>
			<div className={`${styles.user_block} `}>
				<Card w="100%" background={"#759c4930"}>
					<div className={`${styles.management_block}`}>
						<div className={`${styles.management_head}`}>
							<BiMoneyWithdraw />
							<p>KYC Verification</p>
						</div>
						<Box p={4}>
							<form className={`${styles.form}`} onSubmit={handleSubmit}>
								<FormControl>
									<FormLabel fontSize={12} color={"#fff"}>
										Identification Documents (National ID, International
										Passport etc..)
									</FormLabel>
									<Dropzone
										onDrop={(acceptedFiles) => setIdInput(acceptedFiles[0])}>
										{({ getRootProps, getInputProps }) => (
											<section>
												<Box
													cursor={"pointer"}
													borderRadius={8}
													border={`1px solid #759c49`}
													_focus={{
														border: `1px solid #55b598`,
													}}
													p={3}
													{...getRootProps()}>
													<input {...getInputProps()} type="file" />
													<Box
														className={`${styles.input}`}
														p={3}
														borderRadius={4}
														border={`1px dashed #d0ff9c`}>
														{!idInput ? (
															<Flex justify={"space-between"} align={"center"}>
																<Text color={"#cecece"} fontSize={12}>
																	Drag 'n' drop some files here, or click to
																	select files
																</Text>
																<BsUpload color={"#fafafa"} />
															</Flex>
														) : (
															<Flex justify={"space-between"} align={"center"}>
																<Text color={"#fafafa"} fontSize={12}>
																	{idInput.name}
																</Text>
																<AiFillEdit color={"#fafafa"} />
															</Flex>
														)}
													</Box>
												</Box>
											</section>
										)}
									</Dropzone>
								</FormControl>
								<Divider />
								<FormControl>
									<FormLabel fontSize={12} color={"#fff"}>
										Proof of address (Bank statement, Any ID with your address
										on it)
									</FormLabel>
									<Dropzone
										onDrop={(acceptedFiles) => setPoaInput(acceptedFiles[0])}>
										{({ getRootProps, getInputProps }) => (
											<section>
												<Box
													cursor={"pointer"}
													borderRadius={8}
													border={`1px solid #759c49`}
													_focus={{
														border: `1px solid #55b598`,
													}}
													p={3}
													{...getRootProps()}>
													<input {...getInputProps()} type="file" />
													<Box
														className={`${styles.input}`}
														p={3}
														borderRadius={4}
														border={`1px dashed #d0ff9c`}>
														{!poaInput ? (
															<Flex justify={"space-between"} align={"center"}>
																<Text color={"#cecece"} fontSize={12}>
																	Drag 'n' drop some files here, or click to
																	select files
																</Text>
																<BsUpload color={"#fafafa"} />
															</Flex>
														) : (
															<Flex justify={"space-between"} align={"center"}>
																<Text color={"#fafafa"} fontSize={12}>
																	{poaInput.name}
																</Text>
																<AiFillEdit color={"#fafafa"} />
															</Flex>
														)}
													</Box>
												</Box>
											</section>
										)}
									</Dropzone>
								</FormControl>
								<FormControl>
									<Button
										fontSize={14}
										type="submit"
										w="100%"
										_hover={{
											background: "#64d2b1",
										}}
										color={"#fff"}
										background="#55b598">
										Submit Documents
									</Button>
								</FormControl>
							</form>
						</Box>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default KYC;
