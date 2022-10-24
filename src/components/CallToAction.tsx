import { Box, chakra, Flex, Link, Stack } from "@chakra-ui/react";

export default function CallToAction() {
	return (
		<Flex
			_dark={{
				bg: "#3e3e3e",
			}}
			p={50}
			w="full"
			alignItems="center"
			justifyContent="center"
			borderTop="1px"
			borderColor="gray.200"
		>
			<Flex
				justify="center"
				bg="white"
				_dark={{
					bg: "gray.800",
				}}
				w="full"
			>
				<Box
					w={{
						base: "full",
						md: "75%",
						lg: "50%",
					}}
					px={0}
					py={20}
					textAlign={{
						base: "left",
						md: "center",
					}}
				>
					<chakra.span
						fontSize={{
							base: "3xl",
							sm: "4xl",
						}}
						fontFamily="heading"
						fontWeight="extrabold"
						letterSpacing="tight"
						lineHeight="shorter"
						color="gray.900"
						_dark={{
							color: "gray.100",
						}}
						mb={6}
					>
						<chakra.span display="block">
							Pronto para tirar sua ideia do papel?
						</chakra.span>
					</chakra.span>
					<Stack
						justifyContent={{
							base: "left",
							md: "center",
						}}
						direction={{
							base: "column",
							sm: "row",
						}}
						spacing={2}
						mt={2}
					>
						<Box display="inline-flex" rounded="md" shadow="md">
							<Link
								href="/contato"
								w="full"
								display="inline-flex"
								alignItems="center"
								justifyContent="center"
								px={5}
								py={3}
								mt="20px"
								border="solid transparent"
								fontWeight="bold"
								fontFamily="heading"
								rounded="md"
								_light={{
									color: "white",
								}}
								bg="yellow.400"
								_dark={{
									bg: "brand.500",
								}}
								_hover={{
									bg: "yellow.500",
									_dark: {
										bg: "brand.600",
									},
								}}
							>
								Solicitar orçamento
							</Link>
						</Box>
					</Stack>
				</Box>
			</Flex>
		</Flex>
	);
}
