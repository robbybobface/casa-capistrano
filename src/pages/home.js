import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import { Box, Container, Divider, Typography, Grid, Card, CardContent, CardActionArea, Button } from "@mui/material";
import BlurHashedImage from "../components/BlurHashedImage";
import { Helmet } from "react-helmet";
import SkipToMain from "../components/SkipToMain";
import animationData from "../lotties/down-arrow.json";
import Lottie from "lottie-react";

const Home = () => {
	const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

	const navigate = useNavigate();
	const changeText = () => {
		if (window.scrollY >= 66) {
			setHideScrollIndicator(false);
		} else {
			setHideScrollIndicator(true);
		}
	};

	useEffect(() => {
		// adding the event when scroll hide scroll indicator
		changeText();
		window.addEventListener("scroll", changeText);
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Casa Capistrano</title>
			</Helmet>
			<Box
				sx={{
					backgroundColor: "primaryBeige.main",
					minHeight: "100vh",
				}}>
				<SkipToMain />
				<Box component='section' aria-label='hero landing page'>
					<BlurHashedImage
						src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/home-art-alt.jpg?tr=q-80'
						hash='L9C=;v%M00MdEl-o$%NG00w[~pbw'
						alt='home hero image'
						height='100vh'
						width='100%'
						mt={{
							xs: -7,
							sm: -8,
							md: -9.45,
							lg: -9.45,
							objectFit: "cover",
						}}
						minHeight={{ xs: "600px", md: "800px", lg: "900px" }}
						position='relative'
						filter='brightness(65%);'
					/>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
							zIndex: 18,
						}}>
						<Typography
							component='h1'
							sx={{
								textAlign: "center",
								color: "white",
								fontFamily: "calder-dark-grit-shadow, cabin",
								fontSize: {
									xs: "55px",
									sm: "75px",
									md: "100px",
									lg: "120px",
								},
								width: {
									xs: "100%",
									sm: "90%",
									md: "90%",
									lg: "80%",
								},
							}}>
							Auténico Tequila
						</Typography>
						<Typography
							component='h2'
							aria-label="Casa Capistrano Tequila's slogan"
							sx={{
								textAlign: "center",
								color: "white",
								fontFamily: "calder-script, Patrick Hand SC, Roboto",
								fontStyle: "italic",
								fontSize: {
									xs: "40px",
									sm: "40px",
									md: "65px",
									lg: "70px",
								},
								width: {
									xs: "90%",
									sm: "60%",
									lg: "50%",
								},
								letterSpacing: { xs: "3px", sm: "4px", md: "5px", lg: "8px" },
							}}>
							Where every bottle has its own story to tell...
						</Typography>
					</Box>
					<FadeIn>
						<Box
							sx={{
								opacity: hideScrollIndicator ? 1 : 0,
								position: "relative",

								top: 0,
								width: "100%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								transition: "all 0.4s ease-in-out",
							}}>
							<Box
								sx={{
									position: "absolute",
									bottom: -15,
									width: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column",
								}}>
								<Typography
									component='h3'
									aria-label='scroll to explore'
									sx={{
										textAlign: "center",
										color: "white",
										fontFamily: "calder-script, Patrick Hand SC, cabin",
										fontSize: {
											xs: "22px",
											sm: "24px",
											md: "26px",
											lg: "30px",
										},
										fontWeight: 600,
										fontStyle: "italic",
										letterSpacing: "5px",
										mb: -4,
									}}>
									Scroll To Explore
								</Typography>
								<Lottie
									title='scroll down animation'
									aria-label='scroll down animation'
									role='img'
									animationData={animationData}
								/>
							</Box>
						</Box>
					</FadeIn>
				</Box>

				<FadeIn>
					<Box component='main' id='main' aria-label='Casa Capistrano Tequilas'>
						<Box
							sx={{
								backgroundColor: "#fffdf7",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}>
							<Container
								sx={{
									pt: 4,
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
									alignItems: "center",
								}}>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										width: {
											xs: "90%",
											md: "75%",
										},
									}}>
									<BlurHashedImage
										src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/home-logo.png?tr=q-90'
										hash='LdRCxhozt7ayj[j[WBay_Nafj[kC'
										alt='Casa Capistrano Brand Logo'
										edges={true}
										width={{ xs: "90%", md: "100%" }}
										height={{ xs: "150px", sm: "250px", md: "245px", lg: "250px" }}
										display='flex'
										justifyContent='center'
										ignoreHeight={true}
										mx='auto'
									/>
								</Box>
								<Divider
									sx={{
										width: "65%",
										pt: 2,
										mb: 4,
										borderColor: "primaryRed.main",
										borderBottomWidth: 3,
									}}
								/>
								<Typography
									aria-label='Description of Casa Capistrano Tequilas'
									sx={{
										fontFamily: "cabin, Roboto",
										fontSize: {
											xs: "16px",
											md: "20px",
											lg: "22px",
										},
										color: "primaryBlack.main",
										textAlign: "center",
										width: "90%",
										mb: 2,
										fontWeight: 300,
									}}>
									Our tequilas are 100% de Agave made to our specifications using a careful mixture of
									Highland and Lowland Agave, harvested and accurately trimmed for the best flavor. We
									use a blend of cooked agave for which at least 50% cooks slowly in brick/stone ovens
									the traditional way also using traditional mills in the process. All water used in
									production is purified using modern technology and UV sterilization. Our products
									use distillery cultivated yeast for slow to medium fermentation prior to a double
									distillation process.
								</Typography>
								<Button
									role='navigation'
									aria-label='Learn more'
									variant='contained'
									color='primaryRed'
									sx={{
										mb: 3,
										textTransform: "none",
										color: "white",
										fontFamily: "calder-script, cabin, Roboto",
										fontSize: "24px",
										borderRadius: "0px",
										py: 0,
									}}
									onClick={() => {
										window.scrollTo(0, 0);
										navigate("/about");
									}}>
									Learn More
								</Button>
								<Divider
									sx={{
										width: "65%",
										mt: 2,
										mb: { xs: 2, md: 4 },
										borderColor: "primaryDarkerBeige.main",
										borderBottomWidth: 1,
									}}
								/>
								<Typography
									component='h2'
									sx={{
										fontFamily: "Gilroy-Heavy, Cabin",
										fontSize: "40px",
										textAlign: "center",
										fontWeight: 600,
										color: "primaryBlack.main",
										textTransform: "uppercase",
										letterSpacing: "12px",
									}}>
									Our Tequilas
								</Typography>
								<Divider
									sx={{
										width: { xs: "50%", md: "30%" },
										pt: 0,
										mb: { xs: 2, md: 4 },
										borderColor: "primaryRed.main",
										borderBottomWidth: 3,
									}}
								/>
							</Container>
							<Container>
								<Grid container mb={3} spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
									<Grid
										role='article'
										aria-label="Casa Capistrano's Blanco Tequila"
										item
										xs={11}
										sm={6}
										md={4}>
										<Card
											role='navigation'
											aria-label='Blanco Tequila'
											sx={{
												borderRadius: "0px",
												boxShadow: "1px 1px 5px 1px #01223399",
												backgroundColor: "#fffdf7",
												"&:hover": {
													boxShadow: "0px 0px 5px 3px #012233DD",
												},
											}}
											onClick={() => {
												window.scrollTo(0, 0);
												navigate("/blanco");
											}}>
											<CardActionArea aria-label='blanco tequila' sx={{ p: 2 }}>
												<Box
													className='gradient'
													sx={{
														height: "100%",
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/blanco-setup.jpg?tr=q-20'
														hash='LCFiJb~p?csq00D$4T4oInEL-pt7'
														alt='blanco tequila'
														cardMedia={true}
														height='500px'
														sx={{ zIndex: 1 }}
													/>
												</Box>
												<CardContent
													sx={{
														display: "flex",
														justifyContent: "center",
														flexDirection: "column",
														p: 0,
													}}>
													<Typography
														sx={{
															textAlign: "center",
															fontFamily: "Gilroy-Heavy, Cabin",
															fontWeight: 400,
															fontSize: "24px",
															letterSpacing: "1px",
															color: "white",
															mt: -7,
															zIndex: 18,
														}}>
														Blanco
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
									<Grid
										role='article'
										aria-label="Casa Capistrano's Reposado Tequila"
										item
										xs={11}
										sm={6}
										md={4}>
										<Card
											role='navigation'
											aria-label='Reposado Tequila'
											sx={{
												borderRadius: "0px",
												boxShadow: "1px 1px 5px 1px #01223399",
												backgroundColor: "#fffdf7",

												"&:hover": {
													boxShadow: "0px 0px 5px 3px #012233DD",
												},
												transition: "all 0.2s ease-in",
											}}
											onClick={() => {
												window.scrollTo(0, 0);
												navigate("/reposado");
											}}>
											<CardActionArea aria-label='reposado tequila' sx={{ p: 2 }}>
												<Box
													className='gradient'
													sx={{
														height: "100%",
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/reposado-setup.jpg?tr=q-30'
														hash='L9DSK|K600r?00#+=rELQRkC_N%M'
														alt='reposado tequila'
														cardMedia={true}
														height='500px'
														sx={{ zIndex: 1 }}
													/>
												</Box>
												<CardContent
													sx={{
														display: "flex",
														justifyContent: "center",
														flexDirection: "column",
														p: 0,
													}}>
													<Typography
														sx={{
															textAlign: "center",
															fontFamily: "Gilroy-Heavy, Cabin",
															fontWeight: 400,
															fontSize: "24px",
															letterSpacing: "1px",
															color: "white",
															mt: -7,
															zIndex: 18,
														}}>
														Reposado
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
									<Grid
										role='article'
										aria-label="Casa Capistrano's Cristalino Tequila"
										item
										xs={11}
										sm={6}
										md={4}>
										<Card
											role='navigation'
											aria-label='Cristalino Tequila'
											sx={{
												borderRadius: "0px",
												boxShadow: "1px 1px 5px 1px #01223399",
												backgroundColor: "#fffdf7",
												"&:hover": {
													boxShadow: "0px 0px 5px 3px #012233DD",
												},
												transition: "all 0.2s ease-in",
											}}
											onClick={() => {
												window.scrollTo(0, 0);
												navigate("/cristalino");
											}}>
											<CardActionArea aria-label='cristalino tequila' sx={{ p: 2 }}>
												<Box
													className='gradient'
													sx={{
														height: "100%",
														width: "100%",
													}}>
													<BlurHashedImage
														src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/cristalino-setup.jpg?tr=q-30'
														hash='LHD+;:_N%gjYE2xYD%M{00D%IAD%'
														alt='cristalino tequila'
														height='500px'
														cardMedia={true}
														sx={{ zIndex: 1 }}
													/>
												</Box>
												<CardContent
													sx={{
														display: "flex",
														justifyContent: "center",
														flexDirection: "column",
														p: 0,
													}}>
													<Typography
														sx={{
															textAlign: "center",
															fontFamily: "Gilroy-Heavy, Cabin",
															fontWeight: 400,
															fontSize: "24px",
															letterSpacing: "1px",
															color: "white",
															mt: -7,
															zIndex: 18,
														}}>
														Añejo Cristalino
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
									<Grid item xs={10} mt={1} sx={{ display: "flex", justifyContent: "center" }}>
										<Button
											role='navigation'
											aria-label='Products'
											variant='outlined'
											color='primaryBlue'
											sx={{
												mb: 3,
												textTransform: "none",
												color: "primaryBlue.main",
												fontFamily: "calder-script, cabin, roboto",
												fontSize: "24px",
												py: 0,
												px: 3,
												borderRadius: "0px",
												backgroundColor: "white",
												borderColor: "primaryBlue.main",
												boxShadow: "2px 2px 4px 2px #012233",
												"&:hover": {
													backgroundColor: "primaryBlue.main",
													color: "white",
													boxShadow: "2px 2px 4px 2px rgb(1 34 51 / 44%)",
												},
												transition: "all 200ms ease-in",
											}}
											onClick={() => {
												window.scrollTo(0, 0);
												navigate("/products");
											}}>
											View All Tequilas
										</Button>
									</Grid>
								</Grid>
							</Container>
						</Box>
					</Box>
				</FadeIn>
			</Box>
		</>
	);
};

export default Home;
