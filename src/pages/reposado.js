import { Box, Container, Grid, Typography, Divider, Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";

import BuyNowBanner from "../components/buy-banner";

import ReposadoTequila from "../media/reposado/reposado-tequila";
import ReposadoColor from "../media/reposado/reposado-color";
import ReposadoAroma from "../media/reposado/reposado-aroma";
import ReposadoTaste from "../media/reposado/reposado-taste";
import ReposadoFinish from "../media/reposado/reposado-finish";
import ReposadoAwards from "../media/reposado/reposado-awards";
import BlurHashedImage from "../components/BlurHashedImage";
import OtherTequilas from "../components/OtherTequilas";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Reposado = () => {
	const navigate = useNavigate();
	const ref = useRef(null);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Reposado Tequila</title>
			</Helmet>
			<Box sx={{ backgroundColor: "#fffdf7", pt: 1 }}>
				<Container
					component='main'
					role='main'
					aria-label='Reposado Tequila Page'
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
								src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/Reposado-Logo-New.png?tr=q-10'
								hash='LDRyg4xtx]t7M{ayM{j[_NofD%ay'
								alt='Reposado logo'
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
							aria-label='Reposado Tequila Landing Page'
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
										color: "primaryRed.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
									}}>
									Details
								</Typography>
								<Divider
									sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
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
											backgroundColor: "primaryRed.main",
											color: "white",
											borderColor: "primaryRed.main",
											boxShadow:
												"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
										},
										zIndex: 10,
									}}
									onClick={() => {
										ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/reposado.png?tr=q-60'
									hash='LqQ,2Lj[~poe%gfQMxfQt7fQRjfQ'
									alt='Reposado bottle'
									sx={{ objectFit: "contain" }}
									edges={true}
									height={{
										xs: "45vh",
										sm: "50vh",
										md: "65vh",
										lg: "63vh",
										xl: "63vh",
									}}
									position='relative'
									filter='brightness(75%)'
									maxHeight={"700px"}
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
										color: "primaryRed.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
										textAlign: "center",
									}}>
									Order Online
								</Typography>
								<Divider
									sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
								/>
								<Button
									role='button'
									aria-label='Order'
									// disabled
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
											backgroundColor: "primaryRed.main",
											color: "white",
											borderColor: "primaryRed.main",
											boxShadow:
												"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
										},
										zIndex: 10,
										px: {
											xs: 3.5,
										},
									}}
									onClick={() => navigate("/buy-now")}>
									Buy Now
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
										color: "primaryRed.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
										textAlign: "center",
									}}>
									Order Online
								</Typography>
								<Divider
									sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
								/>
								<Button
									role='button'
									aria-label='Order'
									// disabled
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
											backgroundColor: "primaryRed.main",
											color: "white",
											borderColor: "primaryRed.main",
											boxShadow:
												"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
										},
										zIndex: 10,
										px: {
											xs: 3.5,
										},
									}}
									onClick={() => navigate("/buy-now")}>
									Buy Now
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
										color: "primaryRed.main",
										fontWeight: 700,
										textTransform: "uppercase",
										letterSpacing: "8px",
									}}>
									Details
								</Typography>
								<Divider
									sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
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
											backgroundColor: "primaryRed.main",
											color: "white",
											borderColor: "primaryRed.main",
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
						<Box component='section' role='region' aria-label='Reposado Tequila Details'>
							<Box
								sx={{
									scrollMarginTop: "100px",
									display: "flex",
									justifyContent: "center",
									alignItems: "flex-end",
									width: {
										xs: "70%",
										md: "40%",
										lg: "25%",
									},
									mt: {
										xs: 7,
										md: 0,
									},
									mx: "auto",
								}}
								ref={ref}>
								<ReposadoTequila aria-label='Reposado Tequila Logo Variant' />
							</Box>
							<Divider
								sx={{
									width: "20%",
									mt: 1,
									mb: 3,
									borderColor: "primaryRed.main",
									borderBottomWidth: 3,
									mx: "auto",
								}}
							/>
							<Grid
								container
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									mb: 4,
									mx: "auto",
								}}>
								<Grid
									item
									xs={11}
									md={6}
									sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
									<Typography
										aria-label="Reposado Tequila's Description"
										sx={{
											textAlign: "justify",
											fontFamily: "Cabin",
											fontSize: "16px",
											borderRight: {
												xs: "1px solid #6c0d0f",
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
										Our Reposado tequila is a true testament to the art of tequila craftmanship.
										Carefully aged in oak barrels, our Reposado acquires remarkable depth in flavor
										while retaining the essence of pure agave. Enjoy this extraordinary tequila neat
										or elevate your favorite cocktail with its nuanced character. Our Reposado is
										the embodiment of sophistication and pleasure.
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
												xs: "1px solid #6c0d0f",
												md: "2px solid #6c0d0f",
											},
										}}>
										<Typography
											aria-label='Reposado Resting Time'
											color='primaryRed.main'
											sx={{
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
											{` 8 months in oak barrels`}
										</Typography>
										<Typography
											aria-label="Reposado Tequila's Refinement"
											color='primaryRed.main'
											sx={{
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
											{` Blended for consistency and balance`}
										</Typography>
										<Typography
											aria-label="Reposado Tequila's Alcohol Content"
											color='primaryRed.main'
											sx={{
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
											aria-label="Reposado Tequila's Available Sizes"
											color='primaryRed.main'
											sx={{
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
											boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
											minHeight: "150px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<ReposadoColor height='50px' aria-label='Reposado Tequila Color Icon' />
										<Typography
											aria-label='Reposado Tequila Color'
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
											aria-label='Reposado Tequila Color Description'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",

												fontWeight: 400,
												textAlign: "center",
											}}>
											Golden
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Box
										sx={{
											backgroundColor: "white",
											boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
											minHeight: "150px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<ReposadoAroma height='50px' aria-label='Reposado Tequila Aroma Icon' />
										<Typography
											aria-label='Reposado Tequila Aroma'
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
											aria-label='Reposado Tequila Aroma'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",

												fontWeight: 400,
												textAlign: "center",
											}}>
											Buttery with Vanilla, and Citrus Notes
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Box
										sx={{
											backgroundColor: "white",
											boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
											minHeight: "150px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<ReposadoTaste height='50px' aria-label='Reposado Tequila Taste Icon' />
										<Typography
											aria-label='Reposado Tequila Taste'
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
											aria-label='Reposado Tequila Taste'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",

												fontWeight: 400,
												textAlign: "center",
											}}>
											Agave, Vanilla, Caramel, Hint of Cinnamon and Spices
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Box
										sx={{
											backgroundColor: "white",
											boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
											minHeight: "150px",
											minWidth: "70%",
											maxWidth: "70%",
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
											transition: "all 0.2s ease-in",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}>
										<ReposadoFinish height='50px' aria-label='Reposado Tequila Finish Icon' />
										<Typography
											aria-label='Reposado Tequila Finish'
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
											aria-label='Reposado Tequila Finish'
											sx={{
												fontFamily: "Cabin",
												color: "primaryBlack.main",
												fontWeight: 400,
												textAlign: "center",
											}}>
											Light flavors of vanilla and oak with agave
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Box>
						<Box component='section' role='region' aria-label='Reposado Tequila Awards'>
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
								<ReposadoAwards aria-label='Reposado Awards Logo' />
							</Box>
							<Divider
								sx={{
									width: "25%",
									mb: 4,
									borderColor: "primaryRed.main",
									borderBottomWidth: 3,
									mx: "auto",
								}}
							/>
							<Grid
								container
								spacing={0}
								rowGap={4}
								mb={4}
								sx={{ display: "flex", justifyContent: "center" }}>
								<Grid item xs={6} sm={5.25} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #6c0d0f9e;",
											backgroundColor: "white",
											minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #6c0d0f",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.LVG.Reposado.Gold.jpg?tr=q-70'
											hash='LEJ7{;t6EWj@?wofRkbI8{aybca}'
											alt='Reposado Las Vegas Global Gold Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											cardMedia={true}
										/>
										<CardContent
											sx={{
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
												px: { xs: 0, md: 2 },
											}}>
											<Typography
												aria-label="Reposado Tequila's Las Vegas Global Gold Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryRed.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													letterSpacing: "1px",
												}}>
												2021 Las Vegas Global Spirit Awards
											</Typography>
											<Typography
												aria-label="Reposado Tequila's Las Vegas Global Gold Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>{`Gold`}</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item xs={6} sm={5.25} md={3} sx={{ display: "flex", justifyContent: "center" }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
											backgroundColor: "white",
											minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #6c0d0f",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.Sunset.Reposado.Silver.jpg?tr=q-70'
											hash='LMFiPx9F4n-;~qIUaet700of%MM{'
											alt='Reposado Sunset Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											cardMedia={true}
										/>
										<CardContent
											sx={{
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
												px: { xs: 0, md: 0 },
											}}>
											<Typography
												aria-label="Reposado Tequila's Sunset International Spirits Silver Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryRed.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													letterSpacing: "1px",

													mx: {
														xs: 0,
														md: -2,
														lg: 0,
													},
												}}>
												2021 Sunset International Spirits Award
											</Typography>
											<Typography
												aria-label="Reposado Tequila's Sunset International Spirits Silver Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>{`Silver`}</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid
									item
									xs={6}
									sm={5.25}
									md={3}
									sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
											backgroundColor: "white",
											minHeight: { xs: "330px", sm: "375px", md: "410px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #6c0d0f",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
											flex: 1,
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.SanDiego.Reposado.Silver.png?tr=q-70'
											hash='L3E:0p~q00%M~q_3-;xu00-;4mRj'
											alt='Reposado San Diego Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											cardMedia={true}
											objectfit='scale-down'
										/>
										<CardContent
											sx={{
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
												px: { xs: 0, md: 2 },
												flex: 1,
											}}>
											<Typography
												aria-label="Reposado Tequila's San Diego Spirits Festival Silver Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryRed.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													letterSpacing: "1px",
												}}>
												2021 San Diego Spirits Festival
											</Typography>
											<Typography
												aria-label="Reposado Tequila's San Diego Spirits Festival Silver Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>{`Silver`}</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid
									item
									xs={6}
									sm={5.25}
									md={3}
									sx={{ display: "flex", justifyContent: "center", flex: 1 }}>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
											backgroundColor: "white",
											minHeight: { xs: "330px", sm: "375px", md: "410px", lg: "450px" },
											maxHeight: { xs: "360px", sm: "410px", md: "430px", lg: "450px" },
											minWidth: "90%",
											maxWidth: "90%",
											borderBottom: "3px solid #6c0d0f",
											pb: 2,
											"&:hover": {
												boxShadow: "0px 0px 10px 2px #6c0d0f;",
											},
											flex: 1,
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.Proof.Reposado.Bronze.jpg?tr=q-10'
											hash='L8Km%_4T00~WhL=dMdS$00NGWTOY'
											alt='Reposado PR%F Award Photo'
											height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
											cardMedia={true}
										/>
										<CardContent
											sx={{
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
												px: { xs: 0, sm: 2 },
												flex: 1,
											}}>
											<Typography
												aria-label="Reposado Tequila's PR%F Bronze Award"
												sx={{
													fontFamily: "Gilroy-Heavy, Cabin",
													fontWeight: 700,
													color: "primaryRed.main",
													lineHeight: 2,
													fontSize: "16px",
													textAlign: "center",
													letterSpacing: "1px",
												}}>
												2021 PR%F Awards
											</Typography>
											<Typography
												aria-label="Reposado Tequila's PR%F Bronze Award Win"
												sx={{
													fontWeight: 400,
													fontFamily: "Cabin",
													lineHeight: 2,
													fontSize: "16px",
												}}>{`Bronze`}</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Box>
					</FadeIn>
				</Container>
				<OtherTequilas current='reposado' />
				<BuyNowBanner />
			</Box>
		</>
	);
};

export default Reposado;
