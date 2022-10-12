import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	chakra,
	Flex,
	Heading,
	Link,
	Stack,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Lottie from "react-lottie";
import animationData from "../../public/site.json";

export default function Hero() {
	const [palavra, setPalavra] = useState("sua ideia");
	const [palavraIndex, setPalavraIndex] = useState(0);
	const [change, setChange] = useState(true);

	useEffect(() => {
		const listaPalavras = [
			"sua ideia",
			"sua startup",
			"sua empresa",
			"sua loja",
		];
		const timer = setInterval(() => {
			setPalavra(listaPalavras[palavraIndex]);
			setPalavraIndex(
				palavraIndex === listaPalavras.length - 1 ? 0 : palavraIndex + 1
			);
			setChange(!change);
		}, 3000);
		return () => clearTimeout(timer);
	}, [palavraIndex, change]);

	return (
		<Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
			<Background />
			<Flex
				as={motion.div}
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition="1s"
				p={{ base: 4, md: 8 }}
				flex={1}
				align={"center"}
				justify={"center"}
			>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<Heading fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}>
						<br />{" "}
						<Text color={"yellow.400"} as={"span"}>
							Construímos o Software da
						</Text>{" "}
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: "''",
								width: "full",
								height: useBreakpointValue({
									base: "20%",
									md: "30%",
								}),
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "yellow.400",
								zIndex: -1,
							}}
						>
							{palavra}
						</Text>
					</Heading>
					<Text
						fontSize={{ base: "md", lg: "lg" }}
						color={"gray.500"}
					>
						Tiramos a sua ideia do papel desde a ideação, design,
						prototipação até o desenvolvimento e infraestrutura do
						seu projeto.
					</Text>
					<Stack
						direction={{ base: "column", md: "row" }}
						spacing={4}
					>
						<Button
							as={Link}
							href="https://api.whatsapp.com/send?phone=5531983399692&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20%3A)"
							target="_blank"
							bg={"yellow.400"}
							color={"white"}
							textDecoration="none"
							_hover={{
								bg: "yellow.400",
								textDecoration: "none",
							}}
							rightIcon={<ArrowForwardIcon />}
							fontFamily="heading"
							shadow="lg"
						>
							Solicitar orçamento
						</Button>
						{/* <Button fontWeight={"light"}>Como trabalhamos</Button> */}
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Illustration />
			</Flex>
		</Stack>
	);
}

function Background() {
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i: number) => {
			const delay = i * 1.5;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {
						delay,
						type: "spring",
						duration: 1.5,
						bounce: 0,
					},
					opacity: { delay, duration: 1 },
				},
			};
		},
	};

	return (
		<chakra.svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 800 800"
			zIndex={-100}
			pos="absolute"
			w="99vw"
			h="99vh"
			opacity="50%"
			as={motion.svg}
			initial="hidden"
			animate="visible"
		>
			<motion.rect
				variants={draw}
				custom={1}
				fill="#FFFFFF"
				width="800"
				height="800"
			/>
			<motion.g
				variants={draw}
				custom={0}
				fill="none"
				stroke="#FFEE33"
				strokeWidth="1"
			>
				<motion.path
					variants={draw}
					custom={1}
					d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
				/>
				<motion.path
					variants={draw}
					custom={2}
					d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"
				/>
				<motion.path
					variants={draw}
					custom={3}
					d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"
				/>
				<motion.path
					variants={draw}
					custom={4}
					d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"
				/>
				<motion.path
					variants={draw}
					custom={5}
					d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269"
				/>
			</motion.g>
			<motion.g variants={draw} fill="#000000">
				<motion.circle
					custom={0}
					variants={draw}
					cx="769"
					cy="229"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="539"
					cy="269"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="603"
					cy="493"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="731"
					cy="737"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="520"
					cy="660"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="309"
					cy="538"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="295"
					cy="764"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="40"
					cy="599"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="102"
					cy="382"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="127"
					cy="80"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="370"
					cy="105"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="578"
					cy="42"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="237"
					cy="261"
					r="5"
				/>
				<motion.circle
					custom={0}
					variants={draw}
					cx="390"
					cy="382"
					r="5"
				/>
			</motion.g>
		</chakra.svg>
	);
}

function Illustration() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
	};
	return (
		<Box
			cursor="default"
			p={0}
			mr={{ base: "auto", md: 20 }}
			mt={{ base: 5, md: 20 }}
			as={motion.div}
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition="1s"
		>
			<Lottie
				options={defaultOptions}
				isClickToPauseDisabled
				height={"100%"}
				width={"100%"}
				speed={0.2}
			/>
		</Box>
	);
}
