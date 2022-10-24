import {
	Center,
	Flex,
	Img,
	Text,
	Button,
	VStack,
	Link,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import Navbar from "../components/Navbar";

export default function Contact() {
	return (
		<>
			<Navbar />
			<Center maxW="1280px" gap={50} h="90vh" mx="auto">
				<Img src="/programmers.jpg" w="800px" h="auto" />
				<Flex flexDir="column" w="auto">
					<Img src="logo.png" boxSize="100px" mx="auto" />
					<Text
						fontSize="xx-large"
						textAlign="center"
						fontFamily="heading"
						fontWeight="light"
					>
						Entre em contato
					</Text>
					<Text textAlign="center">
						Solicite um orçamento ou marque uma reunião. Esse é o
						primeiro passo para dar vida à sua ideia.
					</Text>
					<VStack mt={7} mb={3}>
						<Text>✔ Atendimento imediato</Text>
						<Text>✔ Orçamento compatível</Text>
						<Text>✔ Satisfação garantida</Text>
					</VStack>
					<VStack>
						<Button
							colorScheme="whatsapp"
							leftIcon={<BsWhatsapp />}
							mt={5}
							w="full"
							as={Link}
							href="https://api.whatsapp.com/send?phone=5531983399692&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20%3A)"
							target="_blank"
							_hover={{
								textDecoration: "none",
								bgColor: "green.500",
							}}
							shadow="md"
						>
							WhatsApp
						</Button>
						<Text>E-mail: softyellow2@gmail.com</Text>
						<Text>{"Telefone: +55 (31) 98339-9692"}</Text>
					</VStack>
				</Flex>
			</Center>
		</>
	);
}
