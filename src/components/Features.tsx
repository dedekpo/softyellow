import { Box, chakra, Flex, Icon, Img, Stack } from "@chakra-ui/react";

export default function Features() {
	return (
		<Flex
			bg="white"
			_dark={{
				bg: "#3e3e3e",
			}}
			p={20}
			w="auto"
			justifyContent="center"
			alignItems="center"
			fontFamily="heading"
		>
			<Box
				py={12}
				bg="white"
				_dark={{
					bg: "gray.800",
				}}
				rounded="xl"
			>
				<Box
					maxW="7xl"
					mx="auto"
					px={{
						base: 4,
						lg: 8,
					}}
				>
					<Box
						textAlign={{
							lg: "center",
						}}
					>
						<chakra.h2
							_light={{
								color: "brand.600",
							}}
							fontWeight="light"
							textTransform="uppercase"
							letterSpacing="wide"
							fontSize={20}
							color={"yellow.400"}
							fontFamily="body"
						>
							Serviços
						</chakra.h2>
						<chakra.p
							mt={2}
							fontSize={{
								base: "3xl",
								sm: "4xl",
							}}
							lineHeight="8"
							fontWeight="extrabold"
							letterSpacing="tight"
							_light={{
								color: "gray.900",
							}}
						>
							Tudo que você precisa para tirar a ideia do papel
						</chakra.p>
						<chakra.p
							mt={4}
							maxW="2xl"
							fontSize="xl"
							mx={{
								lg: "auto",
							}}
							color="gray.500"
							_dark={{
								color: "gray.400",
							}}
							fontFamily="body"
						>
							Somos uma equipe especializada em Desenvolvimento
							Web, Mobile, Desktop, Design de Produtos,
							Infraestrutura e Análise de Dados.
						</chakra.p>
					</Box>

					<Box mt={10}>
						<Stack
							spacing={{
								base: 10,
								md: 0,
							}}
							display={{
								md: "grid",
							}}
							gridTemplateColumns={{
								md: "repeat(2,1fr)",
							}}
							gridColumnGap={{
								md: 8,
							}}
							gridRowGap={{
								md: 10,
							}}
						>
							<Feature
								title="Desenvolvimento de Aplicações"
								icon={"/computer.svg"}
							>
								Quer construir uma rede social, CRM, SaaS ou
								algo mais complexo? Desenvolvemos seu aplicativo
								para múltiplas plataformas.
							</Feature>

							<Feature
								title="Website e E-commerce"
								icon={"/world.svg"}
							>
								Criamos a Landing Page do seu empreendimento, ou
								também, a sua loja no meio digital. Temos a
								solução ideal para isso. Tudo da forma que você
								imaginou.
							</Feature>

							<Feature
								title="Design de Produto e Analytics"
								icon={"/insights.svg"}
							>
								Experiência de usuário (UX), Interface de
								usuário (UI), Wireframes, Análise de Produto,
								Análise de Dados e funis de usuários. Tudo a sua
								disposição.
							</Feature>

							<Feature
								title="Infraestrutura e Segurança"
								icon={"/cloud.svg"}
							>
								Cuidamos de tudo, desde o planejamento,
								infraestrutura até o DevOps seguindo as melhores
								práticas de segurança e compliance. Nossa
								arquitetura favorita? Serverless.
							</Feature>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Flex>
	);
}

function Feature(props: any) {
	return (
		<Flex>
			<Flex shrink={0}>
				<Flex
					alignItems="center"
					justifyContent="center"
					h={12}
					w={12}
					rounded="md"
					_light={{
						bg: "yellow.300",
					}}
					color="white"
				>
					{/* <Icon
						boxSize={6}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						color="gray.900"
					>
						{props.icon}
					</Icon> */}
					<Img src={props.icon} />
				</Flex>
			</Flex>
			<Box ml={4}>
				<chakra.dt
					fontSize="lg"
					fontWeight="medium"
					lineHeight="6"
					_light={{
						color: "gray.900",
					}}
				>
					{props.title}
				</chakra.dt>
				<chakra.dd
					mt={2}
					color="gray.500"
					_dark={{
						color: "gray.400",
					}}
					fontFamily="body"
				>
					{props.children}
				</chakra.dd>
			</Box>
		</Flex>
	);
}
