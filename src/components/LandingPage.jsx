import {
	createStyles,
	Button,
	Stack,
	Center,
	Text,
	Box,
	Container,
	Grid,
	Card,
	Title,
	Image,
} from "@mantine/core";
import landingImage from "../assets/LandingPage.jpg";

const useStyles = createStyles((theme) => ({
	landing: {
		margin: 0,
		padding: 0,
		display: "block",
	},
	bg_img: {
		backgroundImage: `url(${landingImage})`,
		maxWidth: "100%",
		height: "70vh",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundColor: theme.colors.dark[2],
		backgroundBlendMode: "darken",
		objectFit: "cover",
		"@media (max-width:40rem)": {
			height: "50vh",
		},
	},

	txt_sm: {
		fontSize: "1.2rem",
		fontWeight: "bold",
		color: theme.colors.white,
	},
	txt_lg: {
		fontSize: "3rem",
		fontFamily: "bold",
		color: theme.colors.white,
		"@media(max-width:40rem)": {
			fontSize: "2.3rem",
		},
	},
	pos_Rel: {
		position: "relative",
		top: -90,
		left: 0,
		"@media(max-width:40rem)": {
			display: "grid",
		},
	},

	mdBg_img: {
		html: {
			fontSize: "10px",
		},
	},
}));

const LandingPage = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.landing}>
			<Center className={classes.bg_img}>
				<Box>
					<Stack>
						<Center>
							<small className={classes.txt_sm}>
								Firm Architecture and Design
							</small>
						</Center>

						<Box>
							<Text className={classes.txt_lg}>ARCHITECTURE AND </Text>
							<Text className={classes.txt_lg}>CONSTRUCTIONS</Text>
						</Box>
					</Stack>
					<Center>
						<Button>Read More</Button>
					</Center>
				</Box>
			</Center>
			<Container className={classes.pos_Rel}>
				<Grid className={classes.pos_blk}>
					<Grid.Col span={4}>
						<Card px={30}>
							<Center>
								<Stack>
									<Center>
										<Image
											src="https://img.icons8.com/fluency/96/000000/sun_over_a_house.png"
											width={96}
											height={96}
											alt="Residential design"
										/>
									</Center>

									<Center>
										<Title order={3}>Residential Design</Title>
									</Center>
									<Center>
										This Accra office works at eh intersection of
										architecture,urbanism and art ... and really likes tautology
										of it name
									</Center>

									<Button variant="subtle" color="yellow">
										Read More
									</Button>
								</Stack>
							</Center>
						</Card>
					</Grid.Col>
					<Grid.Col span={4}>
						<Card px={30}>
							<Center>
								<Stack>
									<Center>
										<Image
											src="https://img.icons8.com/fluency/96/000000/company.png"
											width={96}
											height={96}
											alt="Office design"
										/>
									</Center>

									<Center>
										<Title order={3}>Office Design</Title>
									</Center>
									<Center>
										This Accra office works at eh intersection of
										architecture,urbanism and art ... and really likes tautology
										of it name
									</Center>

									<Button variant="subtle" color="yellow">
										Read More
									</Button>
								</Stack>
							</Center>
						</Card>
					</Grid.Col>
					<Grid.Col span={4}>
						<Card px={30}>
							<Center>
								<Stack>
									<Center>
										<Image
											src="https://img.icons8.com/fluency/96/000000/city-buildings.png"
											width={96}
											height={96}
											alt="Commercial design"
										/>
									</Center>

									<Center>
										<Title order={3}>Commercial Design</Title>
									</Center>
									<Center>
										This Accra office works at eh intersection of
										architecture,urbanism and art ... and really likes tautology
										of it name
									</Center>

									<Button variant="subtle" color="yellow">
										Read More
									</Button>
								</Stack>
							</Center>
						</Card>
					</Grid.Col>
				</Grid>
			</Container>
		</div>
	);
};

export default LandingPage;
