import { resetNav } from "@/redux-actions/navSlice";
import {
	Button,
	Modal,
	ModalHeader,
	ModalCloseButton,
	ModalFooter,
	Text,
	ModalBody,
	ModalContent,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

export default function ModalPage({ overlay, isOpen, onClose }: any) {
	const router = useRouter();
	const dispatch = useDispatch();
	return (
		<>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				{overlay}
				<ModalContent background={"#759c4990"} color={"#fff"}>
					<ModalHeader
						background={"#759c49"}
						color={"#fff"}
						textAlign={"center"}>
						Confirm Logout?
					</ModalHeader>

					<ModalBody textAlign={"center"} px={8}>
						<Text>
							Click proceed to logout and be redirected to the{" "}
							<strong>Premium Investment</strong> Home page
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							w="100%"
							_hover={{
								background: "#64d2b1",
							}}
							color={"#fff"}
							background="#55b598"
							onClick={() => {
								router.push("/");
								dispatch(resetNav());
							}}>
							Proceed
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
