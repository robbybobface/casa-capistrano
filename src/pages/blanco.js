import { Box, Container, Grid, Typography, Divider, Button, Card, CardContent } from "@mui/material";
import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";

import BuyNowBanner from "../components/buy-banner";
// import { ReactComponent as BlancoLogo } from "../media/blanco/Blanco-Logo-Alt-New.svg";
import { ReactComponent as BlancoLogoAlt } from "../media/blanco/blanco-tequila.svg";
import { ReactComponent as BlancoColor } from "../media/blanco/blanco-color.svg";
import { ReactComponent as BlancoAroma } from "../media/blanco/blanco-aroma.svg";
import { ReactComponent as BlancoTaste } from "../media/blanco/blanco-taste.svg";
import { ReactComponent as BlancoFinish } from "../media/blanco/blanco-finish.svg";
import { ReactComponent as BlancoAwards } from "../media/blanco/blanco-awards.svg";
import BlurHashedImage from "../components/BlurHashedImage";

const Blanco = () => {
	const ref = useRef(null);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Box sx={{ backgroundColor: "#fffdf7", pt: 1 }}>
			<Container
				sx={{
					display: "flex",
					minHeight: "90vh",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<FadeIn>
					<Box
						component='img'
						src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/blanco-logo.png'
						sx={{
							width: {
								xs: "90%",
								sm: "80%",
								md: "60%",

								lg: "60%",
								xl: "60%",
							},
							display: "flex",
							justifyContent: "center",
							mb: {
								xs: 0,
							},
							mx: "auto",
						}}
					/>

					{/* <BlancoLogo /> */}

					<Grid
						container
						spacing={2}
						sx={{
							mt: {
								xs: 0,
								sm: 0,
								md: -3,
								lg: -3,
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
								sx={{
									fontFamily: "Cabin",
									fontSize: {
										xs: "26px",
										sm: "27px",
									},
									color: "primaryBlanco.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
								}}>
								Details
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryBlanco.main", borderBottomWidth: 3 }}
							/>
							<Button
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
							<Box
								component='img'
								src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/blanco.png'
								alt='blanco-art'
								sx={{
									objectFit: "contain",
									height: {
										xs: "45vh",
										sm: "50vh",
										md: "65vh",
										lg: "63vh",
										xl: "63vh",
									},
									// width: "100%",
									position: "relative",
									filter: "brightness(75%);",
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
								sx={{
									fontFamily: "Cabin",
									fontSize: {
										xs: "26px",
										sm: "27px",
									},
									color: "primaryBlanco.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
									textAlign: "center",
								}}>
								Order Online
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryBlanco.main", borderBottomWidth: 3 }}
							/>
							<Button
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
								Buy Now
							</Button>
						</Grid>
						<Grid
							item
							xs={11}
							sx={{
								display: { xs: "flex", md: "none" },
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography
								sx={{
									fontFamily: "Cabin",
									fontSize: {
										xs: "26px",
										sm: "27px",
									},
									color: "primaryBlanco.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
									textAlign: "center",
								}}>
								Order Online
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryBlanco.main", borderBottomWidth: 3 }}
							/>
							<Button
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
								Buy Now
							</Button>
						</Grid>
						<Grid
							item
							xs={11}
							sx={{
								display: { xs: "flex", md: "none" },
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<Typography
								sx={{
									fontFamily: "Cabin",
									fontSize: {
										xs: "26px",
										sm: "27px",
									},
									color: "primaryBlanco.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
								}}>
								Details
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryBlanco.main", borderBottomWidth: 3 }}
							/>
							<Button
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

					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "flex-end",
							width: {
								xs: "50%",
								md: "40%",
								lg: "25%",
							},
							height: {
								xs: "150px",
								sm: "150px",
								md: "170px",
							},
							mt: {
								// sm: -14,
								md: -12.5,
							},
							mx: "auto",
						}}
						ref={ref}>
						<BlancoLogoAlt />
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
					<Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
						<Grid
							item
							xs={11}
							md={6}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Typography
								component='div'
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
									// height: "164px",
								}}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptater.
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
											fontFamily: "Cabin",
											fontSize: "18px",
										}}>
										REST:
									</Typography>
									{` None`}
								</Typography>
								<Typography
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
											fontFamily: "Cabin",
											fontSize: "18px",
										}}>
										REFINEMENT:
									</Typography>
									{` Bottled after distillation`}
								</Typography>
								<Typography
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
											fontFamily: "Cabin",
											fontSize: "18px",
										}}>
										ALCOHOL:
									</Typography>
									{` 40% by Volumme (80 Proof)`}
								</Typography>
								<Typography
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
											fontFamily: "Cabin",
											fontSize: "18px",
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
								<BlancoColor height='50px' />
								<Typography
									sx={{
										fontFamily: "Cabin",
										color: "primaryBlack.main",
										textTransform: "uppercase",
										fontWeight: 700,
										my: 1,
									}}>
									Color
								</Typography>
								<Typography
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
								<BlancoAroma height='50px' />
								<Typography
									sx={{
										fontFamily: "Cabin",
										color: "primaryBlack.main",
										textTransform: "uppercase",
										fontWeight: 700,
										my: 1,
									}}>
									Aroma
								</Typography>
								<Typography
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
								<BlancoTaste height='50px' />
								<Typography
									sx={{
										fontFamily: "Cabin",
										color: "primaryBlack.main",
										textTransform: "uppercase",
										fontWeight: 700,
										my: 1,
									}}>
									Taste
								</Typography>
								<Typography
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
								<BlancoFinish height='50px' />
								<Typography
									sx={{
										fontFamily: "Cabin",
										color: "primaryBlack.main",
										textTransform: "uppercase",
										fontWeight: 700,
										my: 1,
									}}>
									Finish
								</Typography>
								<Typography
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
						<BlancoAwards />
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
					<Grid container spacing={0} rowGap={4} mb={4} sx={{ display: "flex", justifyContent: "center" }}>
						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #1947929e;",
									backgroundColor: "white",
									minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									maxHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #194792",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #194792;",
									},
								}}>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.Sunset.Blanco.Gold.jpg'
									hash='LRGk{vR%0PRj~oRjRpWB0RRj-mj['
									alt='Blanco Sunset Gold Award Photo'
									height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
									cardMedia={true}
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
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
										}}>
										2021 Sunset International Spirits Award
									</Typography>
									<Typography
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
						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #1947929e;",
									backgroundColor: "white",
									minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									maxHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #194792",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #194792;",
									},
								}}>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.Proof.Blanco.Gold.jpg'
									hash='L9L;HRqGMH%hM5}nD%JC4ToZI@O?'
									alt='Blanco PR%F Gold Award Photo'
									height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
									cardMedia={true}
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
											fontWeight: 700,
											color: "primaryBlanco.main",
											lineHeight: 2,
											fontSize: "16px",
											textAlign: "center",
										}}>
										2021 PR%F Awards
									</Typography>
									<Typography
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
						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #1947929e;",
									backgroundColor: "white",
									minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									maxHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #194792",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #194792;",
									},
								}}>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.SanDiego.Blanco.Gold.png'
									hash='LYNS=#-iyGIXocoeofay%$RntSf+'
									alt='Blanco San Diego Gold Award Photo'
									height={{
										xs: "220px",
										sm: "300px",
										md: "300px",
										lg: "345px",
									}}
									objectFit='scale-down'
									cardMedia={true}
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
											fontWeight: 700,
											color: "primaryBlanco.main",
											lineHeight: 2,
											fontSize: "16px",
											textAlign: "center",
										}}>
										2021 San Diego Spirits Festival
									</Typography>
									<Typography
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
						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #1947929e;",
									backgroundColor: "white",
									minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									maxHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #194792",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #194792;",
									},
								}}>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/2021.LVG.Blanco.Silver.jpg'
									hash='L8IX]g%2rsWB~WofIUay8yWCNHj['
									alt='Blanco Las Vegas Global Silver Award Photo'
									height={{ xs: "220px", sm: "300px", md: "300px", lg: "345px" }}
									cardMedia={true}
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
											fontWeight: 700,
											color: "primaryBlanco.main",
											lineHeight: 2,
											fontSize: "16px",
											textAlign: "center",
										}}>
										2021 Las Vegas Global Spirit Awards
									</Typography>
									<Typography
										component='span'
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
				</FadeIn>
			</Container>
			<BuyNowBanner />
		</Box>
	);
};

export default Blanco;
