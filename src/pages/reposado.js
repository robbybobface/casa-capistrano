import { Box, Container, Grid, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material";
import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";

import BuyNowBanner from "../components/buy-banner";
import reposado from "../media/reposado/reposado.png";

// import { ReactComponent as ReposadoLogo } from "../media/reposado/Reposado-Logo-Alt.svg";
import { ReactComponent as ReposadoLogoAlt } from "../media/reposado/reposado-tequila.svg";
import { ReactComponent as ReposadoColor } from "../media/reposado/reposado-color.svg";
import { ReactComponent as ReposadoAroma } from "../media/reposado/reposado-aroma.svg";
import { ReactComponent as ReposadoTaste } from "../media/reposado/reposado-taste.svg";
import { ReactComponent as ReposadoFinish } from "../media/reposado/reposado-finish.svg";
import { ReactComponent as ReposadoAwards } from "../media/reposado/reposado-awards.svg";

import ReposadoLogo from "../media/reposado/Reposado-Logo-New.png";

import reposadoProofBronze from "../media/reposado/2021.Proof.Reposado.Bronze.jpg";
import reposadoSanDiegoSilver from "../media/reposado/2021.SanDiego.Reposado.Silver.png";
import reposadoSunsetSilver from "../media/reposado/2021.Sunset.Reposado.Silver.jpg";
import reposadoLVGGold from "../media/reposado/2021.LVG.Reposado.Gold.jpg";

const Reposado = () => {
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
						src={ReposadoLogo}
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
					{/* <ReposadoLogo /> */}
					{/* </Box> */}

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
									color: "primaryRed.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
								}}>
								Details
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
							/>
							<Button
								variant='outlined'
								color='primaryBlack'
								sx={{
									textTransform: "none",
									color: "primaryBlack.main",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "16px",
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
								src={reposado}
								alt='reposado-art'
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
									color: "primaryRed.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
									textAlign: "center",
								}}>
								Order Online
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
							/>
							<Button
								variant='outlined'
								color='primaryBlack'
								sx={{
									textTransform: "none",
									color: "primaryBlack.main",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "16px",
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
									color: "primaryRed.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
									textAlign: "center",
								}}>
								Order Online
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
							/>
							<Button
								variant='outlined'
								color='primaryBlack'
								sx={{
									textTransform: "none",
									color: "primaryBlack.main",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "16px",
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
									color: "primaryRed.main",
									fontWeight: 700,
									textTransform: "uppercase",
									letterSpacing: "9.9px",
								}}>
								Details
							</Typography>
							<Divider
								sx={{ width: "30%", mb: 2, borderColor: "primaryRed.main", borderBottomWidth: 3 }}
							/>
							<Button
								variant='outlined'
								color='primaryBlack'
								sx={{
									textTransform: "none",
									color: "primaryBlack.main",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "16px",
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
						<ReposadoLogoAlt />
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
						sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4, mx: "auto" }}>
						<Grid
							item
							xs={11}
							md={6}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Typography
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
										xs: "1px solid #6c0d0f",
										md: "2px solid #6c0d0f",
									},
								}}>
								<Typography
									color='primaryRed.main'
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
									{` 8 months in oak barrels`}
								</Typography>
								<Typography
									color='primaryRed.main'
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
									{` Something (w.i.p)`}
								</Typography>
								<Typography
									color='primaryRed.main'
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
									color='primaryRed.main'
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
								<ReposadoColor height='50px' />
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
								<ReposadoAroma height='50px' />
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
								<ReposadoTaste height='50px' />
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
								<ReposadoFinish height='50px' />
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
									Light flavors of vanilla and oak with agave
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
						<ReposadoAwards />
					</Box>

					<Divider
						sx={{ width: "25%", mb: 4, borderColor: "primaryRed.main", borderBottomWidth: 3, mx: "auto" }}
					/>
					<Grid container spacing={2} mb={4} sx={{ display: "flex", justifyContent: "center" }}>
						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #6c0d0f9e;",
									backgroundColor: "white",
									minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									maxHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #6c0d0f",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #6c0d0f;",
									},
								}}>
								{/* <CardActionArea sx={{ pb: 3 }}> */}
								<CardMedia
									component='img'
									// height='345px'
									sx={{ height: { xs: "220px", sm: "300px", md: "300px", lg: "345px" } }}
									image={reposadoLVGGold}
									alt='reposado LVG Gold'
									// sx={{ objectFit: "contain"  }}
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
										// pb: 1,
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
											fontWeight: 700,
											color: "primaryRed.main",
											lineHeight: 2,
											fontSize: "16px",
											textAlign: "center",
											// px: 2,
											// py: 1,
										}}>
										2021 Las Vegas Global Spirit Awards
									</Typography>
									<Typography
										sx={{
											fontWeight: 400,
											fontFamily: "Cabin",
											lineHeight: 2,
											fontSize: "16px",
										}}>{`Gold`}</Typography>
								</CardContent>
								{/* </CardActionArea> */}
							</Card>
						</Grid>
						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
									backgroundColor: "white",
									minHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									maxHeight: { xs: "360px", sm: "410px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #6c0d0f",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #6c0d0f;",
									},
								}}>
								{/* <CardActionArea sx={{ pb: 3 }}> */}
								<CardMedia
									component='img'
									// height='345px'
									sx={{ height: { xs: "220px", sm: "300px", md: "300px", lg: "345px" } }}
									image={reposadoSunsetSilver}
									alt='reposado sunset award silver'
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
										// pb: 1,
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
											fontWeight: 700,
											color: "primaryRed.main",
											lineHeight: 2,
											fontSize: "16px",
											textAlign: "center",
											// px: 2,
											// py: 1,
											mx: {
												xs: 0,
												md: -2,
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
										}}>{`Silver`}</Typography>
								</CardContent>
								{/* </CardActionArea> */}
							</Card>
						</Grid>

						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
									backgroundColor: "white",
									minHeight: { xs: "330px", sm: "375px", md: "410px", lg: "450px" },
									maxHeight: { xs: "330px", sm: "375px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #6c0d0f",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #6c0d0f;",
									},
								}}>
								{/* <CardActionArea sx={{ pb: 3 }}> */}
								<CardMedia
									component='img'
									// height='345px'
									sx={{
										height: {
											xs: "220px",
											sm: "300px",
											md: "300px",
											lg: "345px",
											objectFit: "scale-down",
										},
									}}
									image={reposadoSanDiegoSilver}
									alt='reposado San Diego Silver'
									// sx={{ objectFit: "scale-down" }}
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
										// pb: 1,
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
											fontWeight: 700,
											color: "primaryRed.main",
											lineHeight: 2,
											fontSize: "16px",
											textAlign: "center",
											// px: 2,
											// py: 1,
											mx: {
												xs: 0,
												sm: -1.5,
												md: 0,
												lg: 0,
											},
										}}>
										2021 San Diego Spirits Festival
									</Typography>
									<Typography
										sx={{
											fontWeight: 400,
											fontFamily: "Cabin",
											lineHeight: 2,
											fontSize: "16px",
										}}>{`Silver`}</Typography>
								</CardContent>
								{/* </CardActionArea> */}
							</Card>
						</Grid>
						<Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
							<Card
								sx={{
									borderRadius: "0px",
									boxShadow: "0px 0px 10px 0.5px #6c0d0fDD;",
									backgroundColor: "white",
									minHeight: { xs: "330px", sm: "375px", md: "410px", lg: "450px" },
									maxHeight: { xs: "330px", sm: "375px", md: "410px", lg: "450px" },
									minWidth: "90%",
									maxWidth: "90%",
									borderBottom: "3px solid #6c0d0f",
									pb: 2,
									"&:hover": {
										boxShadow: "0px 0px 10px 2px #6c0d0f;",
									},
								}}>
								{/* <CardActionArea sx={{ pb: 3 }}> */}
								<CardMedia
									component='img'
									// height='345px'
									sx={{ height: { xs: "220px", sm: "300px", md: "300px", lg: "345px" } }}
									image={reposadoProofBronze}
									alt='reposado PR%F bronze'
									// sx={{ objectFit: "contain" }}
								/>
								<CardContent
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
										// pb: 1,
									}}>
									<Typography
										component='div'
										sx={{
											fontFamily: "Cabin",
											fontWeight: 700,
											color: "primaryRed.main",
											lineHeight: 2,
											fontSize: "16px",
											textAlign: "center",
											// px: 2,
											// py: 1,
										}}>
										2021 PR%F Awards
									</Typography>
									<Typography
										sx={{
											fontWeight: 400,
											fontFamily: "Cabin",
											lineHeight: 2,
											fontSize: "16px",
										}}>{`Bronze`}</Typography>
								</CardContent>
								{/* </CardActionArea> */}
							</Card>
						</Grid>
					</Grid>
				</FadeIn>
			</Container>
			<BuyNowBanner />
		</Box>
	);
};

export default Reposado;
