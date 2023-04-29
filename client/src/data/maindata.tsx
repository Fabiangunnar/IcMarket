import { BsInfoSquare } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { AiOutlineLogin } from "react-icons/ai";

export interface footerTypes {
	id: string;
	head: string;
	links: linkTypes[];
}
export interface linkTypes {
	id: string;
	desc: string;
	link?: string;
}
export interface NavTypes {
	id: string;
	head: string;
	link?: string;
	icon: string;
	state: boolean;
}

export const footerData: footerTypes[] = [
	{
		id: "LMK26P",
		head: "Menu",
		links: [
			{
				id: `RST98H`,
				desc: "About us",
				link: "about",
			},
			{
				id: `XST98H`,
				desc: "Investments",
				link: "investments",
			},
			{
				id: `ZST98H`,
				desc: "FAQ",
				link: "faq",
			},
			{
				id: `RPT98H`,
				desc: "Contacts",
				link: "contact",
			},
		],
	},
	{
		id: "QWE72M",
		head: "Actions",
		links: [
			{
				id: `RST98H`,
				desc: "Make a Deposit",
				// link: "deposit-funds",
			},
			{
				id: `XST98H`,
				desc: "Statistics",
				// link: "statistics",
			},
			{
				id: `ZST98H`,
				desc: "Login",
				link: "admin/auth",
			},
		],
	},
	{
		id: "KLP59J",
		head: "Language",
		links: [
			{
				id: `RST98H`,
				desc: "ENGLISH",
			},
		],
	},
];

export const navData: NavTypes[] = [
	{
		id: "LMK26P",
		head: "Home Page",
		link: "/",
		icon: "IoHome",
		state: true,
	},
	{
		id: "XST98H",
		head: "About us",
		link: "about",
		icon: "BsInfoSquare",
		state: false,
	},
	{
		id: "QWE72M",
		head: "Investments",
		link: "investments",
		icon: "GiTrade",
		state: false,
	},
	{
		id: "KLP59J",
		head: "FAQ",
		link: "faq",
		icon: "FaQuestion",
		state: false,
	},
	{
		id: "KLP59K",
		head: "Contacts",
		link: "contact",
		icon: "MdContacts",
		state: false,
	},
	{
		id: "KLP29J",
		head: "Statistics",
		link: "statistics",
		icon: "ImStatsDots",
		state: false,
	},
	{
		id: "KQR71K",
		head: "Signin",
		link: "admin/auth",
		icon: "AiOutlineLogin",
		state: false,
	},
];

export const getIconComponent = (iconName: string) => {
	switch (iconName) {
		case "IoHome":
			return <IoHome fontSize={18} />;
		case "BsInfoSquare":
			return <BsInfoSquare fontSize={18} />;
		case "GiTrade":
			return <GiTrade fontSize={18} />;
		case "FaQuestion":
			return <FaQuestion fontSize={18} />;
		case "GiTrade":
			return <GiTrade fontSize={18} />;
		case "MdContacts":
			return <MdContacts fontSize={18} />;
		case "ImStatsDots":
			return <ImStatsDots fontSize={18} />;
		case "AiOutlineLogin":
			return <AiOutlineLogin fontSize={18} />;

		default:
			return null;
	}
};
