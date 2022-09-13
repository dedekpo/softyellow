import {
	Box,
	Center,
	Circle,
	Flex,
	Text,
	chakra,
	useColorModeValue,
	Img,
} from "@chakra-ui/react";

export default function Portfolio() {
	return (
		<Center
			flexDir="column"
			mt="100px"
			pt={10}
			borderTop="1px"
			borderColor="gray.200"
			maxW="5xl"
			mx="auto"
		>
			<chakra.h1
				py={5}
				fontSize={48}
				fontFamily={"heading"}
				fontWeight={"bold"}
				textAlign="center"
				color={useColorModeValue("gray.700", "gray.50")}
			>
				Nosso último projeto
			</chakra.h1>
			<Text textAlign="center" color="gray.700" fontSize="xl" mb="60px">
				A ICE Play é uma plataforma de streaming de cursos para o Ensino
				Médio, com foco em habilidades para o futuro. E também, cliente
				satisfeita da Soft Yellow!
			</Text>
			<Box
				borderRadius="20px"
				bgColor="gray.700"
				w={{ base: "90vw", md: "80vw" }}
				h="720px"
				border="1px"
				pos="relative"
				shadow="dark-lg"
			>
				<Flex gap="10px" my="10px" ml="10px">
					<Circle
						size={{ base: "10px", md: "20px" }}
						bgColor="red.400"
					/>
					<Circle
						size={{ base: "10px", md: "20px" }}
						bgColor="yellow.400"
					/>
					<Circle
						size={{ base: "10px", md: "20px" }}
						bgColor="green.400"
					/>
				</Flex>
				<Text
					pos="absolute"
					top="0px"
					left="0"
					align="center"
					py={{ base: 1, md: 2 }}
					w="full"
					h="30px"
					fontWeight={{ base: "light", md: "bold" }}
					color="gray.100"
				>
					Landing Page ICE Play
				</Text>
				<chakra.iframe
					src="https://iceplay.com.br"
					w={{ base: "99.99%", md: "full" }}
					h={{ base: "95.8%", md: "94.4%" }}
					borderBottomRadius={"20px"}
					mt={1}
					scrolling="no"
				/>
			</Box>
			<Text mt={{ base: "60px", md: 10 }} mb={2}>
				Tecnologias utilizadas:
			</Text>
			<Flex
				w={{ base: "100vw", md: "4xl" }}
				justify="space-evenly"
				mb={10}
			>
				<Img
					h="50px"
					src="/react.png"
					filter="grayscale(100%)"
					_hover={{
						filter: "grayscale(0%)",
					}}
				/>
				<Img
					h="50px"
					src="/nextjs.png"
					filter="grayscale(100%)"
					_hover={{
						filter: "grayscale(0%)",
					}}
				/>
				<Img
					h="50px"
					src="/aws.png"
					filter="grayscale(100%)"
					_hover={{
						filter: "grayscale(0%)",
					}}
				/>
			</Flex>
		</Center>
	);
}
