import React from "react";
import {
	createStyles,
	Box,
	Text,
	Title,
	Stack,
	Center,
	Grid,
	Image,
	Container,
	Group,
	Card,
} from "@mantine/core";
import stairscase from "../assets/stairscase.jpg";
import building from "../assets/water_building.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import woman from "../assets/woman.jpg";
import man from "../assets/man.jpg";

const useStyles = createStyles(() => ({
	abt_img: {
		maxWidth: "100%",
	},
}));

const AboutPage = () => {
	const { classes } = useStyles();
	return (
		<div>
			<Container size="xl">
				<Grid>
					<Grid.Col span={4}>
						<Box>
							<Title py={30} order={2}>
								ABOUT US
							</Title>

							<Stack>
								<Center>
									<Image
										src="https://img.icons8.com/fluency/96/000000/warranty.png"
										width={96}
										height={96}
										alt="Quality"
									/>

									<Stack>
										<Title order={3}>Quality</Title>
										<Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Omnis ducimus amet dolores at? Saepe atque tenetur,
											laborum vitae expedita mollitia, explicabo totam officiis
											sequi corrupti quidem tempore eaque.
										</Text>
									</Stack>
								</Center>
								<Center>
									<Image
										src="https://img.icons8.com/fluency/96/000000/delivery.png"
										width={96}
										height={96}
										alt="Quickness"
									/>
									<Stack>
										<Title order={3}>Quickness</Title>
										<Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Omnis ducimus amet dolores at? Saepe atque tenetur,
											laborum vitae expedita mollitia, explicabo totam officiis
											sequi corrupti quidem tempore eaque.
										</Text>
									</Stack>
								</Center>
								<Center>
									<Image
										src="https://img.icons8.com/fluency/96/000000/resume.png"
										width={96}
										height={96}
										alt="Result"
									/>
									<Stack>
										<Title order={3}>Result</Title>
										<Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Omnis ducimus amet dolores at? Saepe atque tenetur,
											laborum vitae expedita mollitia, explicabo totam officiis
											sequi corrupti quidem tempore eaque.
										</Text>
									</Stack>
								</Center>
							</Stack>
						</Box>
					</Grid.Col>

					<Grid.Col span={4}>
						<Image maxWidth={100} height={"90vh"} src={stairscase} />
					</Grid.Col>
					<Grid.Col span={4}>
						<Image Width={100} height={"90vh"} src={building} />
					</Grid.Col>
				</Grid>
			</Container>
			<Box mt={"3rem"}>
				<Group spacing={0} grow={1}>
					<Image maxWidth={"100%"} height={"50vh"} src={img3} />
					<Image maxWidth={"100%"} height={"50vh"} src={img2} />
					<Image maxWidth={"100%"} height={"50vh"} src={img1} />
				</Group>
			</Box>

			<Container>
				<Grid gutter={50} grow mt={"1rem"}>
					<Grid.Col span={3}>
						<Center>
							<Image src={woman} width={300} height={300} radius={500} />
						</Center>

						<Center my={"1.2rem"}>
							<Text>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Delectus nemo rem animi, deserunt voluptate, est reprehenderit
								possimus molestias aut ipsum culpa ipsam accusamus maxime esse
								autem sit provident dolorum praesentium iusto! Eos totam
								delectus ipsum reprehenderit dolorum maiores esse sunt.
							</Text>
						</Center>
						<Center>
							<Title order={2}>Bertie Norton</Title>
						</Center>
						<Center>
							<Text>Designer</Text>
						</Center>
					</Grid.Col>

					<Grid.Col span={3}>
						<Center>
							<Image src={man} width={300} height={300} radius={500} />
						</Center>

						<Center my={"1.2rem"}>
							<Text>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Delectus nemo rem animi, deserunt voluptate, est reprehenderit
								possimus molestias aut ipsum culpa ipsam accusamus maxime esse
								autem sit provident dolorum praesentium iusto! Eos totam
								delectus ipsum reprehenderit dolorum maiores esse sunt.
							</Text>
						</Center>
						<Center>
							<Title order={2}>Frank Kinney</Title>
						</Center>
						<Center>
							<Text>Director</Text>
						</Center>
					</Grid.Col>
				</Grid>

				
			</Container>
		</div>
	);
};

export default AboutPage;
