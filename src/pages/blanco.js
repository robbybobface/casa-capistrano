import { Box, Container, Grid, Typography, Divider, Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";

import BuyNowBanner from "../components/buy-banner";
import { ReactComponent as BlancoLogoAlt } from "../media/blanco/blanco-tequila.svg";
import BlancoColor from "../media/blanco/blanco-color";
import BlancoAroma from "../media/blanco/blanco-aroma";
import BlancoTaste from "../media/blanco/blanco-taste";
import BlancoFinish from "../media/blanco/blanco-finish";
import { ReactComponent as BlancoAwards } from "../media/blanco/blanco-awards.svg";
import BlurHashedImage from "../components/BlurHashedImage";
import OtherTequilas from "../components/OtherTequilas";
import { Helmet } from "react-helmet";

const Blanco = () => {
	const ref = useRef(null);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Blanco Tequila</title>
			</Helmet>
			<Box sx={{ backgroundColor: "#fffdf7", pt: 1 }}>
				<Container
					component='main'
					role='main'
					aria-label='Blanco Tequila Page'
					sx={{
						display: "flex",
						minHeight: "90vh",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<FadeIn>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								minHeight: { xs: "150px", md: "245px", lg: "275px" },
								maxHeight: { xs: "150px", sm: "250px", md: "245px", lg: "275px" },
							}}>
							<BlurHashedImage
								src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/blanco-logo.png?tr=q-60'
								hash='LCRfh0t7?ZxtM}fQRPay~ot64:WB'
								alt='Blanco Logo'
								edges={true}
								width={{ xs: "90%", sm: "80%", md: "60%", lg: "60%", xl: "60%" }}
								height={{ xs: "150px", sm: "250px", md: "245px", lg: "275px" }}
								display='flex'
								justifyContent='center'
								ignoreHeight={true}
								mx='auto'
							/>
						</Box>
						<Grid
							component='section'
							role='region'
							aria-label='Blanco Tequila Landing Page'
							container
							spacing={2}
							sx={{
								mt: {
									xs: 0,
									sm: 0,
									md: -2,
								},
								mb: {
									xs: 0,
									sm: 0,
									md: 10,
									lg: 5,
								},
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Grid
								item
								xs={3.5}
								md={3}
								lg={3.5}
								sx={{
									display: { xs: "none", md: "flex" },
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Typography
									component='h1'
									sx={{
										fontFamily: "Gilroy-Bold, Cabin",
										fontSize: {
											xs: "26px",
											sm: "27px",
											md: "32px",
										},
										color: "primaryBlanco.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
									}}>
									Details
								</Typography>
								<Divider
									sx={{
										width: "30%",
										mb: 2,
										borderColor: "primaryBlanco.main",
										borderBottomWidth: 3,
									}}
								/>
								<Button
									role='button'
									aria-label='View Details'
									variant='outlined'
									color='primaryBlack'
									sx={{
										textTransform: "none",
										color: "primaryBlack.main",
										fontFamily: "calder-script, cabin, roboto",
										fontWeight: 300,
										py: 0,
										fontSize: "24px",
										width: "80%",
										boxShadow: "none",
										borderRadius: "0px",
										"&:hover": {
											backgroundColor: "primaryBlanco.main",
											color: "white",
											borderColor: "primaryBlanco.main",
											boxShadow:
												"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
										},
										zIndex: 10,
									}}
									onClick={() => {
										ref.current?.scrollIntoView({ behavior: "smooth" });
									}}>
									View Details
								</Button>
							</Grid>
							<Grid
								item
								xs={11}
								md={5}
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/blanco.png?tr=q-60'
									hash='LqQ,8doe~ofQ%MfQM{j[%LazM{j['
									alt='Blanco Bottle'
									edges={true}
									sx={{
										objectFit: "contain",
										position: "relative",
										filter: "brightness(75%);",
									}}
									height={{
										xs: "45vh",
										sm: "50vh",
										md: "65vh",
										lg: "63vh",
										xl: "63vh",
									}}
								/>
							</Grid>
							<Grid
								item
								xs={3.5}
								md={3}
								lg={3.5}
								sx={{
									display: { xs: "none", md: "flex" },
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Typography
									component='h1'
									sx={{
										fontFamily: "Gilroy-Bold, Cabin",
										fontSize: {
											xs: "26px",
											sm: "27px",
											md: "32px",
										},
										color: "primaryBlanco.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
										textAlign: "center",
									}}>
									Order Online
								</Typography>
								<Divider
									sx={{
										width: "30%",
										mb: 2,
										borderColor: "primaryBlanco.main",
										borderBottomWidth: 3,
									}}
								/>
								<Button
									role='button'
									aria-label='Order'
									disabled
									variant='outlined'
									color='primaryBlack'
									sx={{
										textTransform: "none",
										color: "primaryBlack.main",
										fontFamily: "calder-script, cabin, roboto",
										fontWeight: 300,
										py: 0,
										fontSize: "24px",
										width: "80%",
										boxShadow: "none",
										borderRadius: "0px",
										"&:hover": {
											backgroundColor: "primaryBlanco.main",
											color: "white",
											borderColor: "primaryBlanco.main",
											boxShadow:
												"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
										},
										zIndex: 10,
										px: {
											xs: 3.5,
										},
									}}
									onClick={() => {
										// navigate("/blanco");
									}}>
									Coming Soon
								</Button>
							</Grid>
							<Grid
								item
								xs={12}
								sm={10}
								sx={{
									display: { xs: "flex", md: "none" },
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Typography
									component='h1'
									sx={{
										fontFamily: "Gilroy-Bold, Cabin",
										fontSize: {
											xs: "28px",
											sm: "30px",
										},
										color: "primaryBlanco.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
										textAlign: "center",
									}}>
									Order Online
								</Typography>
								<Divider
									sx={{
										width: "30%",
										mb: 2,
										borderColor: "primaryBlanco.main",
										borderBottomWidth: 3,
									}}
								/>
								<Button
									role='button'
									aria-label='Order'
									disabled
									variant='outlined'
									color='primaryBlack'
									sx={{
										textTransform: "none",
										color: "primaryBlack.main",
										fontFamily: "calder-script, cabin, roboto",
										fontWeight: 300,
										py: 0,
										fontSize: "24px",
										width: "80%",
										boxShadow: "none",
										borderRadius: "0px",
										"&:hover": {
											backgroundColor: "primaryBlanco.main",
											color: "white",
											borderColor: "primaryBlanco.main",
											boxShadow:
												"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
										},
										zIndex: 10,
										px: {
											xs: 3.5,
										},
									}}
									onClick={() => {
										// navigate("/blanco");
									}}>
									Coming Soon
								</Button>
							</Grid>
							<Grid
								item
								xs={12}
								sm={10}
								sx={{
									display: { xs: "flex", md: "none" },
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Typography
									component='h1'
									sx={{
										fontFamily: "Gilroy-Bold, Cabin",
										fontSize: {
											xs: "28px",
											sm: "30px",
										},
										color: "primaryBlanco.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
									}}>
									Details
								</Typography>
								<Divider
									sx={{
										width: "30%",
										mb: 2,
										borderColor: "primaryBlanco.main",
										borderBottomWidth: 3,
									}}
								/>
								<Button
									role='button'
									aria-label='View Details'
									variant='outlined'
									color='primaryBlack'
									sx={{
										textTransform: "none",
										color: "primaryBlack.main",
										fontFamily: "calder-script, cabin, roboto",
										fontWeight: 300,
										py: 0,
										fontSize: "24px",
										width: "80%",
										boxShadow: "none",
										borderRadius: "0px",
										"&:hover": {
											backgroundColor: "primaryBlanco.main",
											color: "white",
											borderColor: "primaryBlanco.main",
											boxShadow:
												"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
										},
										zIndex: 10,
									}}
									onClick={() => {
										ref.current?.scrollIntoView({ behavior: "smooth" });
									}}>
									View Details
								</Button>
							</Grid>
						</Grid>
						<Box component='section' role='region' aria-label='Blanco Tequila Details'>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "flex-end",
									width: {
										xs: "70%",
										md: "40%",
										lg: "25%",
									},
									height: {
										xs: "150px",
										sm: "150px",
										md: "170px",
									},
									mt: {
										md: -12.5,
									},
									mx: "auto",
								}}
								ref={ref}>
								<BlancoLogoAlt aria-label='Blanco Tequila Logo Variant' />
							</Box>
							<Divider
								sx={{
									width: "20%",
									mt: 1,
									mb: 3,
									borderColor: "primaryBlanco.main",
									borderBottomWidth: 3,
									mx: "auto",
								}}
							/>
							<Grid
								container
								sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
								<Grid
									item
									xs={11}
									md={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Typography
										aria-label='Blanco Tequila Description'
										sx={{
											textAlign: "justify",
											fontFamily: "Cabin",
											fontSize: "16px",
											borderRight: {
												xs: "1px solid #194792",
												md: "none",
											},
											pt: {
												xs: 1,
												md: 0,
											},
											pb: {
												xs: 2,
												md: 0,
											},
											px: {
												xs: 4,
												md: 10,
											},
										}}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptater.
									</Typography>
								</Grid>
								<Grid
									item
									xs={11}
									md={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Box
										sx={{
											textAlign: "center",
											pt: {
												xs: 2,
												md: 0,
											},
											pb: 1,
											width: "100%",
											borderLeft: {
												xs: "1px solid #194792",
												md: "2px solid #194792",
											},
										}}>
										<Typography
											aria-label='Blanco Tequila Resting Time'
											color='primaryBlanco.main'
											sx={{
												// textTransform: "uppercase",
												fontWeight: 400,
												fontFamily: "Cabin",
												fontSize: "18px",
												py: 0.5,
											}}>
											<Typography
												component='span'
												sx={{
													textTransform: "uppercase",
													fontWeight: 700,
													fontFamily: "Gilroy-Heavy, Cabin",
													fontSize: "18px",
													letterSpacing: "0.5px",
												}}>
												REST:
											</Typography>
											{` None`}
										</Typography>
										<Typography
											aria-label='Blanco Tequila Refinement'
											color='primaryBlanco.main'
											sx={{
												// textTransform: "uppercase",
												fontWeight: 400,
												fontFamily: "Cabin",
												fontSize: "18px",
												py: 0.5,
											}}>
											<Typography
												component='span'
												sx={{
													textTransform: "uppercase",
													fontWeight: 700,
													fontFamily: "Gilroy-Heavy, Cabin",
													fontSize: "18px",
													letterSpacing: "0.5px",
												}}>
												REFINEMENT:
											</Typography>
											{` Bottled after distillation`}
										</Typography>
										<Typography
											aria-label='Blanco Tequila Alcohol Content'
											color='primaryBlanco.main'
											sx={{
												// textTransform: "uppercase",
												fontWeight: 400,
												fontFamily: "Cabin",
												fontSize: "18px",
												py: 0.5,
											}}>
											<Typography
												component='span'
												sx={{
													textTransform: "uppercase",
													fontWeight: 700,
													fontFamily: "Gilroy-Heavy, Cabin",
													fontSize: "18px",
													letterSpacing: "0.5px",
												}}>
												ALCOHOL:
											</Typography>
											{` 40% by Volume (80 Proof)`}
										</Typography>
										<Typography
											aria-label='Blanco Tequila Available Sizes'
											color='primaryBlanco.main'
											sx={{
												// textTransform: "uppercase",
												fontWeight: 400,
												fontFamily: "Cabin",
												fontSize: "18px",
												py: 0.5,
											}}>
											<Typography
												component='span'
												sx={{
													textTransform: "uppercase",
													fontWeight: 700,
													fontFamily: "Gilroy-Heavy, Cabin",
													fontSize: "18px",
													letterSpacing: "0.5px",
												}}>
												AVAILABILITY:
											</Typography>
											{` 750mL`}
										</Typography>
									</Box>
								</Grid>
							</Grid>
							<Grid
								container
								spacing={0}
								rowGap={4}
								mb={4}
								sx={{
									display: "flex",
									justifyContent: "center",
									width: { xs: "90%", md: "100%", lg: "80%" },
									mx: "auto",
								}}>
								<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Box
										sx={{
											backgroundColor: "white",
											boxShadow: "0px 0px 10px 0.5px #194792DD;",
											minHeight: "150px",
											// maxWidth: "200px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<BlancoColor height='50px' aria-label='Blanco Tequila Color Icon' />
										<Typography
											aria-label='Blanco Tequila Color'
											sx={{
												fontFamily: "Gilroy-Heavy, Cabin",
												color: "primaryBlack.main",
												textTransform: "uppercase",
												fontWeight: 700,
												my: 1,
												fontSize: "16px",
												letterSpacing: "1px",
											}}>
											Color
										</Typography>
										<Typography
											aria-label='Blanco Tequila Color Description'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",
												// textTransform: "uppercase",
												fontWeight: 400,
												textAlign: "center",
											}}>
											Crystal Clear / White
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Box
										sx={{
											backgroundColor: "white",
											boxShadow: "0px 0px 10px 0.5px #194792DD;",
											minHeight: "150px",
											// maxWidth: "150px",
											// minWidth: "150px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<BlancoAroma height='50px' aria-label='Blanco Tequila Aroma Icon' />
										<Typography
											aria-label='Blanco Tequila Aroma'
											sx={{
												fontFamily: "Gilroy-Heavy, Cabin",
												color: "primaryBlack.main",
												textTransform: "uppercase",
												fontWeight: 700,
												my: 1,
												fontSize: "16px",
												letterSpacing: "1px",
											}}>
											Aroma
										</Typography>
										<Typography
											aria-label='Blanco Tequila Aroma Description'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",
												// textTransform: "uppercase",
												fontWeight: 400,
												textAlign: "center",
											}}>
											Roasted Agave and Vanilla
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Box
										sx={{
											backgroundColor: "white",
											boxShadow: "0px 0px 10px 0.5px #1947929e;",
											minHeight: "150px",
											// maxWidth: "150px",
											// minWidth: "150px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<BlancoTaste height='50px' aria-label='Blanco Tequila Taste Icon' />
										<Typography
											aria-label='Blanco Tequila Taste'
											sx={{
												fontFamily: "Gilroy-Heavy, Cabin",
												color: "primaryBlack.main",
												textTransform: "uppercase",
												fontWeight: 700,
												my: 1,
												fontSize: "16px",
												letterSpacing: "1px",
											}}>
											Taste
										</Typography>
										<Typography
											aria-label='Blanco Tequila Taste Description'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",
												// textTransform: "uppercase",
												fontWeight: 400,
												textAlign: "center",
											}}>
											Agave and Vanilla
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Box
										sx={{
											backgroundColor: "white",
											boxShadow: "0px 0px 10px 0.5px #1947929e;",
											minHeight: "150px",
											// maxWidth: "150px",
											// minWidth: "150px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<BlancoFinish height='50px' aria-label='Blanco Tequila Finish Icon' />
										<Typography
											aria-label='Blanco Tequila Finish'
											sx={{
												fontFamily: "Gilroy-Heavy, Cabin",
												color: "primaryBlack.main",
												textTransform: "uppercase",
												fontWeight: 700,
												my: 1,
												fontSize: "16px",
												letterSpacing: "1px",
											}}>
											Finish
										</Typography>
										<Typography
											aria-label='Blanco Tequila Finish Description'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",
												// textTransform: "uppercase",
												fontWeight: 400,
												textAlign: "center",
											}}>
											Medium finish, smooth, with light agave flavor
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Box>
						<Box component='section' role='region' aria-label='Blanco Tequila Awards'>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									width: {
										xs: "50%",
										md: "40%",
										lg: "25%",
									},
									mx: "auto",
								}}>
								<BlancoAwards aria-label='Blanco Awards Logo' />
							</Box>
							<Divider
								sx={{
									width: "25%",
									mb: 4,
									borderColor: "primaryBlanco.main",
									borderBottomWidth: 3,
									mx: "auto",
								}}
							/>
							<Grid
								container
								spacing={0}
								rowGap={4}
								mb={4}
								sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Grid item xs={6} sm={5.25} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #1947929e;",
											backgroundColor: "white",
											minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #194792",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.Sunset.Blanco.Gold.jpg?tr=q-70'
											hash='LRGk{vR%0PRj~oRjRpWB0RRj-mj['
											alt='Blanco Sunset Gold Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											cardMedia={true}
										/>
										<CardContent
											sx={{
												px: { xs: 0, md: 2 },
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
											}}>
											<Typography
												aria-label="Blanco Tequila's Sunset Gold Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryBlanco.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													mx: {
														xs: 0,
														md: -1.5,
														lg: 0,
													},
													letterSpacing: "1px",
												}}>
												2021 Sunset International Spirits Award
											</Typography>
											<Typography
												aria-label="Blanco Tequila's Sunset Gold Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>
												Gold
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6} sm={5.25} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #1947929e;",
											backgroundColor: "white",
											minHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #194792",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.Proof.Blanco.Gold.jpg?tr=q-10'
											hash='L9L;HRqGMH%hM5}nD%JC4ToZI@O?'
											alt='Blanco PR%F Gold Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											cardMedia={true}
										/>
										<CardContent
											sx={{
												px: { xs: 0, sm: 2 },
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
											}}>
											<Typography
												aria-label="Blanco Tequila's PR%F Gold Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryBlanco.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													letterSpacing: "1px",
												}}>
												2021 PR%F Awards
											</Typography>
											<Typography
												aria-label="Blanco Tequila's PR%F Gold Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>
												Gold
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6} sm={5.25} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #1947929e;",
											backgroundColor: "white",
											minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #194792",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.SanDiego.Blanco.Gold.png?tr=q-70'
											hash='LYNS=#-iyGIXocoeofay%$RntSf+'
											alt='Blanco San Diego Gold Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											// sx={{ objectFit: "scale-down" }}
											objectfit='scale-down'
											cardMedia={true}
										/>
										<CardContent
											sx={{
												px: { xs: 0, sm: 2 },
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
											}}>
											<Typography
												aria-label="Blanco Tequila's San Diego Gold Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryBlanco.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													letterSpacing: "1px",
												}}>
												2021 San Diego Spirits Festival
											</Typography>
											<Typography
												aria-label="Blanco Tequila's San Diego Gold Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>
												Gold
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6} sm={5.25} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #1947929e;",
											backgroundColor: "white",
											minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #194792",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #194792;",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.LVG.Blanco.Silver.jpg?tr=q-70'
											hash='L8IX]g%2rsWB~WofIUay8yWCNHj['
											alt='Blanco Las Vegas Global Silver Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											cardMedia={true}
										/>
										<CardContent
											sx={{
												px: { xs: 0, sm: 2 },
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
											}}>
											<Typography
												aria-label="Blanco Tequila's Las Vegas Global Silver Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryBlanco.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													letterSpacing: "1px",
												}}>
												2021 Las Vegas Global Spirit Awards
											</Typography>
											<Typography
												aria-label="Blanco Tequila's Las Vegas Global Silver Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>
												Silver
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Box>
					</FadeIn>
				</Container>
				<OtherTequilas current='blanco' />
				<BuyNowBanner />
			</Box>
		</>
	);
};

export default Blanco;
