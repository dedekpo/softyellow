import {
	Box,
	chakra,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	VisuallyHidden,
	Input,
	IconButton,
	useColorModeValue,
	Flex,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Image from "next/image";

const Logo = (props: any) => {
	return (
		<Flex
			flex={{ base: 1 }}
			justify={{ base: "center", md: "start" }}
			align="center"
		>
			<Image
				src="/logo.png"
				alt="Soft Yellow"
				width="30px"
				height="30px"
			/>
			<Text
				fontFamily={"heading"}
				fontWeight="light"
				color={useColorModeValue("gray.800", "white")}
				ml={2}
			>
				Soft
			</Text>
			<Text
				fontFamily={"heading"}
				color={useColorModeValue("yellow.400", "white")}
			>
				Yellow
			</Text>
		</Flex>
	);
};

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode;
	label: string;
	href: string;
}) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			target="_blank"
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

const ListHeader = ({ children }: { children: ReactNode }) => {
	return (
		<Text fontWeight={"500"} fontSize={"lg"} mb={2}>
			{children}
		</Text>
	);
};

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container as={Stack} maxW={"6xl"} py={10}>
				<Flex
					justify="space-between"
					align="center"
					flexDir={{ base: "column", md: "row" }}
				>
					<Stack spacing={6}>
						<Flex>
							<Logo
								color={useColorModeValue("gray.700", "white")}
							/>
							<SocialButton
								label={"Instagram"}
								href={"https://www.instagram.com/softyellow2/"}
							>
								<FaInstagram />
							</SocialButton>
						</Flex>
						<Text fontSize={"sm"}>
							© 2022 Soft Yellow. Todos os direitos reservados
						</Text>
					</Stack>
					{/* <Stack align={"flex-start"} mt={{ base: 5, md: 0 }}>
						<ListHeader>Entramos em contato</ListHeader>
						<Stack direction={"row"}>
							<Input
								placeholder={"Deixe seu email"}
								bg={useColorModeValue(
									"blackAlpha.100",
									"whiteAlpha.100"
								)}
								border={0}
								_focus={{
									bg: "whiteAlpha.300",
								}}
							/>
							<IconButton
								bg={useColorModeValue(
									"yellow.400",
									"yellow.800"
								)}
								color={useColorModeValue(
									"gray.700",
									"gray.800"
								)}
								_hover={{
									bg: "green.600",
								}}
								aria-label="Subscribe"
								icon={<BiMailSend />}
							/>
						</Stack>
					</Stack> */}
				</Flex>
			</Container>
		</Box>
	);
}
