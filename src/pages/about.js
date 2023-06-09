import { Container, Grid, Box, Typography, Divider } from "@mui/material";
import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import BlurHashedImage from "../components/BlurHashedImage";
import { Helmet } from "react-helmet";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Our Story</title>
			</Helmet>
			<Box sx={{ backgroundColor: "#fffdf7", pt: 3, pb: 4 }}>
				<Container sx={{ mt: { xs: 0, lg: 3 } }}>
					<FadeIn>
						<Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
							<Grid
								item
								xs={10.5}
								md={6}
								lg={5.5}
								sx={{
									mr: { xs: 0, md: -2 },
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									mt: { xs: 0, sm: 0, md: 0, lg: -8 },
								}}>
								<Typography
									component={"h1"}
									sx={{
										fontFamily: "Gilroy-Heavy, Cabin",
										fontSize: { xs: "28px", sm: "32px", md: "40px" },
										textAlign: "center",
										fontWeight: 600,
										color: "primaryBlack.main",
										textTransform: "uppercase",
										letterSpacing: { xs: "8px", md: "12px" },
									}}>
									Our Story
								</Typography>
								<Divider
									sx={{
										width: { xs: "50%", md: "30%" },
										pt: 0,
										mb: { xs: 3, md: 4 },
										borderColor: "primaryRed.main",
										borderBottomWidth: 3,
									}}
								/>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/barrels.jpg?tr=q-50,w-1000,h-700'
									hash='LNE3C%$zs8-;.ARjM{kC%ixtWBRj'
									alt='Barrels at Casa Capistrano Tequila Distillery'
									zIndex={10}
									width='100%'
									height={350}
									sx={{ objectFit: "cover" }}
									boxShadow='0px 0px 15px 2px #012233'
								/>
							</Grid>
							<Grid item xs={12} md={6} lg={6.5}>
								<Box
									role='main'
									aria-label='The story of Casa Capistrano'
									sx={{ backgroundColor: "white", boxShadow: "5px 0px 20px 2px #cccccc", p: 4 }}>
									<Typography
										sx={{
											fontFamily: "Cabin",
											fontWeight: 400,
											fontSize: {
												xs: "14px",
												lg: "14px",
											},
											pb: 2,
											lineHeight: "2.5em",
											textAlign: "justify",
										}}>
										During many years contemplating tequila production, my father often shared his
										expertise about wine, including the importance of the quality of barrels. When I
										would bring home tequilas from my trips to Mexico, he learned more about tequila
										and could identify many things by aroma and taste. He was surprised of the
										parallels of two completely different products. In the spirit of the Capistrano
										name, our time with my father was always about returning home, seeing each other
										the next day, and the fact that love endures all things. Although we lost him in
										2014, his influence remains within our family, with us in this journey, his
										unique sense of humor as well. In the years to come, careful research of many
										distilleries brought me to Tequila, Jalisco, Mexico. Casa Maestri seemed like
										the best fit for the production of our products. Their techniques, staff, and
										quality standards were the best fit for making our craft tequilas. They
										understand the business, are well recognized, and decorated with many awards.
									</Typography>
									<Typography
										sx={{
											fontFamily: "Cabin",
											fontWeight: 400,
											fontSize: {
												xs: "14px",
												lg: "14px",
											},
											lineHeight: "2.5em",
											textAlign: "justify",
											pb: 1,
										}}>
										My father always said, "Every bottle has its own story to tell." Bearing the
										name he gave, every bottle stands for quality, innovation, great taste, and
										smoothness along with the flavors that each product reveals to your palate.
									</Typography>
									<Typography
										aria-label='Martin Lucas Signature'
										sx={{ fontFamily: "Dawning of a New Day", fontSize: "40px" }}>
										Martin Lucas
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</FadeIn>
				</Container>
			</Box>
		</>
	);
};

export default About;
