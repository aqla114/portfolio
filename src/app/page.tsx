import { Providers } from './provider';
import 'devicon/devicon.min.css';
import {
	Box,
	Card,
	CardBody,
	CardHeader,
	HStack,
	Heading,
	Link,
	SimpleGrid,
	Stack,
	StackDivider,
	Text,
} from '@chakra-ui/react';

export default function Home() {
	return (
		<Providers>
			<Box w="100%" p="5%" bg="gray.50">
				<Heading as="h1" size="3xl">
					HN: どや
				</Heading>
				<Card marginTop={10}>
					<CardHeader>
						<Heading as="h2" size="xl">
							About me
						</Heading>
					</CardHeader>
					<CardBody>
						<Stack divider={<StackDivider />} spacing="4">
							<Box>
								<Heading size="xs">おしごと</Heading>
								<Text pt="2" fontSize="sm">
									Web エンジニア
								</Text>
							</Box>
							<Box>
								<Heading size="xs" textTransform="uppercase">
									生まれ
								</Heading>
								<Text pt="2" fontSize="sm">
									1997年 金沢市
								</Text>
							</Box>
							<Box>
								<Heading size="xs" textTransform="uppercase">
									好きなもの
								</Heading>
								<Text pt="2" fontSize="sm">
									アニメ、ゲーム、ボルダリング、ギター
								</Text>
							</Box>
							<Box>
								<Heading size="xs" textTransform="uppercase">
									使っているエディタ
								</Heading>
								<Text pt="2" fontSize="sm">
									<i className="devicon-vscode-plain" /> VSCode
								</Text>
							</Box>
						</Stack>
					</CardBody>
				</Card>
				<Card marginTop={10}>
					<CardHeader>
						<Heading as="h2" size="xl">
							Careers
						</Heading>
					</CardHeader>
					<CardBody>
						<Stack divider={<StackDivider />} spacing="4">
							<Box>
								<Heading size="xs">株式会社HERP</Heading>
								<Text pt="2" fontSize="sm">
									2023/11 -
								</Text>
							</Box>
							<Box>
								<Heading size="xs">株式会社クックパッド</Heading>
								<Text pt="2" fontSize="sm">
									2021/04 - 2023/10
									<br />
									１年目は新規事業のサーバーサイドエンジニア。２年目以降はレシピサービスの基盤周りを見るエンジニア。
									<br />
									テックリードとかグループリーダーとかサービスのリアーキテクティングプロジェクトとかやってた。
								</Text>
							</Box>
							<Box>
								<Heading size="xs">
									東京大学大学院情報理工学系研究科電子情報工学専攻
								</Heading>
								<Text pt="2" fontSize="sm">
									2019/04 - 2021/03
									<br />
									自然言語処理・機械学習あたりをやってた。
								</Text>
							</Box>
						</Stack>
					</CardBody>
				</Card>
				<Card marginTop={10}>
					<CardHeader>
						<Heading as="h2" size="xl">
							Skills
						</Heading>
					</CardHeader>
					<CardBody>
						<SimpleGrid spacing={'16px'} minChildWidth={'51px'} fontSize={48}>
							<i className="devicon-typescript-plain colored" />
							<i className="devicon-react-original-wordmark colored" />
							<i className="devicon-nextjs-original-wordmark colored" />
							<i className="devicon-nodejs-plain-wordmark colored" />

							<i className="devicon-ruby-plain colored" />
							<i className="devicon-rails-plain-wordmark colored" />

							<i className="devicon-python-plain colored" />
							<i className="devicon-pytorch-plain-wordmark colored" />

							<i className="devicon-mysql-plain-wordmark colored" />
							<i className="devicon-github-original-wordmark colored" />
						</SimpleGrid>
						<HStack spacing={3} fontSize={48}></HStack>
					</CardBody>
				</Card>
				<Card marginTop={10}>
					<CardHeader>
						<Heading as="h2" size="xl">
							Resources
						</Heading>
					</CardHeader>
					<CardBody>
						<Stack divider={<StackDivider />} spacing="4">
							<Box>
								<Heading size="xs">GitHub</Heading>
								<Link href="https://github.com/aqla114" isExternal>
									<Text pt="2" fontSize="sm">
										https://github.com/aqla114
									</Text>
								</Link>
							</Box>
							<Box>
								<Heading size="xs">Blog</Heading>
								<Link href="https://hilinker.hatenablog.com" isExternal>
									<Text pt="2" fontSize="sm">
										https://hilinker.hatenablog.com
									</Text>
								</Link>
							</Box>
							<Box>
								<Heading size="xs">Twitter</Heading>
								<Link href="https://twitter.com/hilinker" isExternal>
									<Text pt="2" fontSize="sm">
										@hilinker
									</Text>
								</Link>
							</Box>
						</Stack>
					</CardBody>
				</Card>
			</Box>
		</Providers>
	);
}
