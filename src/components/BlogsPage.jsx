import React from "react";
import {
	createStyles,
	Box,
	Center,
	Title,
	Text,
	Button,
	Container,
	Card,
	Image,
	Grid,
	Group,
	Anchor,
} from "@mantine/core";
import blog from "../assets/blog1.jpg";
import footer1 from "../assets/footer1.jpg";
import footer2 from "../assets/footer2.jpg";
import footer3 from "../assets/footer3.jpg";

const useStyles = createStyles((theme) => ({
	bg_img: {
		backgroundImage: `url(${blog})`,
		backgroundPosition: "center",
		height: "40vh",
		maxWidth: "100%",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundColor: theme.colors.dark[4],
		backgroundBlendMode: "darken",
	},
	blogColors: {
		backgroundColor: theme.colors.dark[5],
		padding: "1.5rem 7rem",
		marginTop: "1.3rem",
		alignItems: "center",
	},
	footer: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

const BlogsPage = () => {
	const { classes } = useStyles();
	return (
		<div>
			<Center mt={"4rem"} className={classes.bg_img}>
				<Box>
					<Title align="center">WHAT TO LEARN MORE ?</Title>
					<Text my={30} align="center" sx={{ width: "90ch" }}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
						voluptatum reprehenderit commodi alias error? Nobis ex voluptatum
						placeat ducimus laboriosam?
					</Text>
					<Center>
						<Button px={40}>Send</Button>
					</Center>
				</Box>
			</Center>

			<Center>
				<Box>
					<Title order={1} mt={20} align="center">
						LATEST BLOG
					</Title>
					<Text my={30} align="center" sx={{ width: "90ch" }}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
						voluptatum reprehenderit commodi alias error? Nobis ex voluptatum
						placeat ducimus laboriosam?
					</Text>
				</Box>
			</Center>

			<Container>
				<Grid>
					<Grid.Col span={4}>
						<Card>
							<Card.Section>
								<Image src={footer1} alt="footerImage" />
							</Card.Section>
							<Title order={3} my={10}>
								First Project
							</Title>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium ratione aliquid, cum recusandae adipisci nostrum
								eligendi veritatis fugit hic deserunt!
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={4}>
						<Card>
							<Card.Section>
								<Image src={footer2} alt="footerImage" />
							</Card.Section>
							<Title order={3} my={10}>
								Second Project
							</Title>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium ratione aliquid, cum recusandae adipisci nostrum
								eligendi veritatis fugit hic deserunt!
							</Text>
						</Card>
					</Grid.Col>
					<Grid.Col span={4}>
						<Card>
							<Card.Section>
								<Image src={footer3} height={190} alt="footerImage" />
							</Card.Section>
							<Title order={3} my={10}>
								Third Project
							</Title>
							<Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium ratione aliquid, cum recusandae adipisci nostrum
								eligendi veritatis fugit hic deserunt!
							</Text>
						</Card>
					</Grid.Col>
				</Grid>
			</Container>
			<Box>
				<Box className={classes.blogColors}>
					<Group position={"apart"} spacing={"md"}>
						<Image src="https://img.icons8.com/fluency/96/000000/tesla-logo.png" />
						<Image src="https://img.icons8.com/fluency/96/000000/linkedin.png" />
						<Image src="https://img.icons8.com/fluency/96/000000/diners-club.png" />
						<Image src="https://img.icons8.com/fluency/96/000000/zalando.png" />
						<Image src="https://img.icons8.com/fluency/96/000000/shopee.png" />
					</Group>
				</Box>
				<Image />
			</Box>

			<Container>
				<Box className={classes.footer}>
					<Box sx={{ width: "100%" }}>
						<Title my={"1rem"}>Accra State Housing</Title>
						<Box>
							<Text>GE-000-0000, Accra,High Street</Text>
							<Text>0302-000-000</Text>
							<Text color={"orange"}>info@architectureconst.com</Text>
						</Box>
					</Box>

					<Box sx={{ width: "100%" }}>
						<Title>Special Offers on new studio</Title>
						<Text my={"1rem"}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
							quibusdam nesciunt eveniet saepe quos sapiente soluta assumenda
							odio fugit pariatur.
						</Text>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default BlogsPage;
