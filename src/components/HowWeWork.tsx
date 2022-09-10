import {
	Box,
	Container,
	Flex,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

export default function HowWeWork() {
	return (
		<Container
			maxW="4xl"
			mt="100px"
			pt={10}
			borderTop="1px"
			borderColor="gray.200"
		>
			<Text
				py={5}
				fontSize={48}
				fontFamily={"heading"}
				fontWeight={"bold"}
				color={useColorModeValue("gray.700", "gray.50")}
				textAlign="center"
			>
				Como trabalhamos
			</Text>
			<Text textAlign="center" color="gray.700" fontSize="xl" mb="60px">
				Nossa missão é fazer com que você alcance o seu objetivo de
				construir seu produto digital com a menor dor de cabeça
				possível. Somos obcecados por tecnologia, design, qualidade e
				excelência.
			</Text>
			<Step
				pos={"Passo 1"}
				tag={"PRÉ-PROJETO"}
				title={"Objetivo"}
				phrase={
					"Esta fase se concentra em recuperar informações das partes interessadas e, finalmente, concordar com a meta e a visão, ao mesmo tempo em que identifica possíveis desafios e restrições do projeto."
				}
				subtag={
					"Apresentações • Estabelecendo a equipe • Confirmando o objetivo"
				}
			/>
			<Step
				pos={"Passo 2"}
				tag={"CONTRATO ASSINADO"}
				title={"Prototipação e design"}
				phrase={
					"Seja um site, aplicativo ou uma plataforma B2B, é essencial ter uma experiência de usuário e interfaces eficientes e que funcionem bem."
				}
				subtag={"Diagramas UX • Telas mockups"}
			/>
			<Step
				pos={"Passo 3"}
				tag={"CICLOS"}
				title={"Densenvolvimento"}
				phrase={
					"Organizamos o nosso trabalho em ciclos semanais e escolhemos a estrutura adequada à sua solução. Frequentemente atualizamos você sobre o status do desenvolvimento. Qualquer coisa que possa surgir ao longo do caminho é resolvida imediatamente."
				}
				subtag={
					"Ambiente de desenvolvimento • Backlog • Sprints semanais"
				}
			/>
			<Step
				pos={"Passo 4"}
				tag={"DEVOPS"}
				title={"Infraestrutura"}
				phrase={
					"Os projetos são implantados na nuvem ou no local seguindo as práticas recomendadas de DevOps. Sua infraestrutura será segura, sólida, rápida e escalável."
				}
				subtag={
					"Projeto de infraestrutura • Modelagem de dados • Monitoramento"
				}
			/>
			<Step
				pos={"Passo 5"}
				tag={"TESTES"}
				title={"Garantia da qualidade"}
				phrase={
					"Depois de tudo implantado, nosso objetivo é que você saia com o produto desejado. Por isso aplicamos testes e ajustes alinhado ao feedback."
				}
				subtag={
					"Monitoramento de desempenho • Teste de usabilidade • Lançamento 🚀"
				}
			/>
		</Container>
	);
}

function Step({
	pos,
	tag,
	title,
	phrase,
	subtag,
}: {
	pos: string;
	tag: string;
	title: string;
	phrase: string;
	subtag: string;
}) {
	return (
		<Flex
			flexDir="column"
			gap={2}
			borderLeft="1px"
			borderLeftWidth={2}
			borderColor="gray.600"
			pl={{ base: "20px", md: "100px" }}
			w="full"
			pb="70px"
			pos="relative"
		>
			<Box
				w="12px"
				h="12px"
				bgColor="gray.600"
				borderRadius="full"
				pos="absolute"
				left="-7px"
				top="-1px"
			/>
			<Text
				fontSize="md"
				bgColor="green.100"
				color="green.400"
				fontWeight="black"
				px={3}
				borderRadius="lg"
				pos="absolute"
				left="-120px"
				top="-7px"
			>
				{pos}
			</Text>
			<Text
				bgColor="yellow.300"
				w="fit-content"
				px="2px"
				fontSize="smaller"
			>
				{tag}
			</Text>
			<Text
				as="h1"
				fontWeight="black"
				fontSize="2xl"
				fontFamily={"heading"}
			>
				{title}
			</Text>
			<Text as="h1" color="gray.600" fontSize="xl">
				{phrase}
			</Text>
			<Text fontWeight="light" color="gray.600" fontSize="small">
				{subtag}
			</Text>
		</Flex>
	);
}
