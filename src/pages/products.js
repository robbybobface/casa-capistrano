import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in";
import { Box, Container, Typography, Divider, Grid, Card, CardContent, Button } from "@mui/material";
import BlurHashedImage from "../components/BlurHashedImage";
import { Helmet } from "react-helmet";
import SkipToMain from "../components/SkipToMain";

const Products = () => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Our Tequilas</title>
			</Helmet>
			<Box
				sx={{
					backgroundColor: "#fffdf7",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<SkipToMain />
				<Container
					component='main'
					role='main'
					id='main'
					aria-label="Casa Capistrano Tequila's Products"
					sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
					<FadeIn>
						<Box component='section' role='region' aria-label='Casa Capistrano Tequila - Our Tequilas'>
							<Box
								focusable
								sx={{
									display: "flex",
									justifyContent: "center",
									width: {
										xs: "90%",
										md: "60%",
									},
									my: 2,
									mx: "auto",
								}}>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/our-tequilas.png?tr=q-40'
									hash='LES6D8D$?b%N?vWBWAtR_N%gIUM{'
									alt='Casa Capistrano Tequilas Graphic'
									edges={true}
									width={{ xs: "90%", md: "100%" }}
									height={{ xs: "150px", sm: "250px", md: "245px", lg: "275px" }}
									display='flex'
									justifyContent='center'
									ignoreHeight={true}
									mx='auto'
								/>
							</Box>
							<Divider
								sx={{
									width: "60%",
									mb: 3,
									borderColor: "primaryRed.main",
									borderBottomWidth: 3,
									mx: "auto",
								}}
							/>
							<Typography
								aria-label="Description of Casa Capistrano Tequila's"
								sx={{
									fontFamily: "Cabin",
									fontSize: {
										xs: "18px",
										md: "18px",
										lg: "20px",
									},
									color: "primaryBlack.main",
									textAlign: "center",
									width: "90%",
									mb: 1,
									mx: "auto",
								}}>
								Our Reposado and Añejo rest in oak barrels for 8 and 15 months respectively. For the
								transformation to Añejo Cristalino, the Añejo tequila goes through a carbon filtration
								process before bottling, resulting in a very pure, smooth, and clear product. All of our
								tequilas are smooth, 80 proof (40% alcohol by volume.)
							</Typography>
						</Box>
						<Grid
							component='section'
							role='region'
							aria-label='Blanco, Reposado, and Añejo Tequila product cards'
							container
							spacing={2}
							mb={4}
							mt={1}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<Grid item xs={11} sm={6} md={4}>
								<Box component='article' role='article' aria-label='Blanco Tequila'>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 15px 2px #acacac;",
											backgroundColor: "white",
											minHeight: {
												xs: "600px",
												md: "675px",
											},
											"&:hover": {
												boxShadow: "0px 0px 15px 2px #012233",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/blanco-setup.jpg?tr=q-30'
											hash='LCFiJb~p?csq00D$4T4oInEL-pt7'
											alt='Blanco tequila setup'
											cardMedia={true}
											height='450px'
										/>
										<CardContent
											sx={{
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
												pb: 1,
												pt: 1.5,
											}}>
											<Typography
												component='h2'
												sx={{
													textAlign: "center",
													fontFamily: "Gilroy-Heavy, Roboto",
													fontWeight: 300,
													fontSize: "32px",
													letterSpacing: "0px",
												}}>
												Blanco
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
													alignItems: "center",
													minHeight: {
														xs: "120px",
														sm: "90px",
														md: "134px",
														lg: "138px",
													},
												}}>
												<Typography
													aria-label="Blanco Tequila's Description"
													sx={{
														fontFamily: "Cabin, Roboto",
														fontWeight: 300,
														color: "primaryBlack.main",
														lineHeight: 2,
														fontSize: {
															xs: "14px",
															md: "13px",
															lg: "14px",
														},
														textAlign: "center",
														px: {
															xs: 2,
															md: 1,
															lg: 2,
														},
														py: 1,
													}}>
													Neat, On the Rocks, or in a Margarita — This is our youngest
													tequila. Made with 100% blue agave.
												</Typography>
												<Button
													aria-label='Learn More'
													variant='outlined'
													color='primaryBlack'
													sx={{
														textTransform: "none",
														color: "primaryBlack.main",
														fontFamily: "calder-script, Roboto",
														fontWeight: 300,
														fontSize: "24px",
														width: "75%",
														boxShadow: "none",
														borderRadius: "0px",
														py: 0,
														"&:hover": {
															backgroundColor: "primaryBlanco.main",
															color: "white",
															borderColor: "primaryBlanco.main",
															boxShadow:
																"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
														},
													}}
													onClick={() => {
														window.scrollTo(0, 0);
														navigate("/blanco");
													}}>
													Explore Blanco
												</Button>
											</Box>
										</CardContent>
									</Card>
								</Box>
							</Grid>
							<Grid item xs={11} sm={6} md={4}>
								<Box component='article' role='article' aria-label='Reposado Tequila'>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 15px 2px #acacac;",
											backgroundColor: "white",
											minHeight: {
												xs: "600px",
												md: "675px",
											},
											"&:hover": {
												boxShadow: "0px 0px 15px 2px #012233",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/reposado-setup.jpg?tr=q-30'
											hash='L9DSK|K600r?00#+=rELQRkC_N%M'
											alt='Reposado tequila setup'
											cardMedia={true}
											height='450px'
										/>
										<CardContent
											sx={{
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
												pb: {
													xs: 0,
													md: 1,
												},
												px: {
													xs: 2,
													md: 1.5,
													lg: 2,
												},
												pt: 1.5,
											}}>
											<Typography
												component='h2'
												sx={{
													textAlign: "center",
													fontFamily: "Gilroy-Heavy, Roboto",
													fontWeight: 300,
													fontSize: "32px",
													letterSpacing: "0px",
												}}>
												Reposado
											</Typography>
											<Typography
												aria-label="Reposado Tequila's Description"
												sx={{
													fontFamily: "Cabin, Roboto",
													fontWeight: 300,
													color: "primaryBlack.main",
													lineHeight: 2,
													fontSize: {
														xs: "14px",
														md: "13px",
														lg: "14px",
													},
													textAlign: "center",
													px: {
														xs: 2,
														sm: 0,
														md: 0,
														lg: 2,
													},
													py: 1,
												}}>
												Aged for 8 months for Smoothness, Character, and a Golden color, this
												tequila is great in cocktails or on the rocks.
											</Typography>
											<Button
												aria-label='Learn More'
												variant='outlined'
												color='primaryBlack'
												sx={{
													textTransform: "none",
													color: "primaryBlack.main",
													fontFamily: "calder-script, Roboto",
													py: 0,
													fontWeight: 300,
													fontSize: "24px",
													width: "75%",
													boxShadow: "none",
													borderRadius: "0px",
													"&:hover": {
														backgroundColor: "primaryRed.main",
														color: "white",
														borderColor: "primaryRed.main",
														boxShadow:
															"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
													},
												}}
												onClick={() => {
													window.scrollTo(0, 0);
													navigate("/reposado");
												}}>
												Explore Reposado
											</Button>
										</CardContent>
									</Card>
								</Box>
							</Grid>
							<Grid item xs={11} sm={6} md={4}>
								<Box component='article' role='article' aria-label='Cristalino Tequila'>
									<Card
										sx={{
											borderRadius: "0px",
											boxShadow: "0px 0px 15px 2px #acacac;",
											backgroundColor: "white",
											minHeight: {
												xs: "550px",
												md: "675px",
											},
											"&:hover": {
												boxShadow: "0px 0px 15px 2px #012233",
											},
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/cristalino-setup.jpg?tr=q-30'
											hash='LHD+;:_N%gjYE2xYD%M{00D%IAD%'
											alt='Cristalino tequila setup'
											height='450px'
											cardMedia={true}
										/>
										<CardContent
											sx={{
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												alignItems: "center",
												pb: 1,
												pt: 1.5,
											}}>
											<Typography
												component='h2'
												sx={{
													textAlign: "center",
													fontFamily: "Gilroy-Heavy, Roboto",
													fontWeight: 300,
													fontSize: "32px",
													letterSpacing: "0px",
												}}>
												Añejo Cristalino
											</Typography>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													justifyContent: "space-between",
													alignItems: "center",
													minHeight: {
														xs: "120px",
														sm: "90px",
														md: "134px",
														lg: "138px",
													},
												}}>
												<Typography
													aria-label="Añejo Cristalino Tequila's Description"
													sx={{
														fontFamily: "Cabin, Roboto",
														fontWeight: 300,
														color: "primaryBlack.main",
														lineHeight: 2,
														fontSize: {
															xs: "14px",
															md: "13px",
															lg: "14px",
														},
														textAlign: "center",
														px: 2,
														py: 1,
													}}>
													Aged for 15 months and precisely filtered to make a clear and smooth
													sipping tequila.
												</Typography>
												<Button
													aria-label='Learn More'
													variant='outlined'
													color='primaryBlack'
													sx={{
														textTransform: "none",
														color: "primaryBlack.main",
														fontFamily: "calder-script, Roboto",
														py: 0,
														fontWeight: 300,
														fontSize: "24px",
														width: "75%",
														boxShadow: "none",
														mt: "auto",
														borderRadius: "0px",
														"&:hover": {
															backgroundColor: "primaryBlack.main",
															color: "white",
															borderColor: "primaryBlack.main",
															boxShadow:
																"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
														},
													}}
													onClick={() => {
														window.scrollTo(0, 0);
														navigate("/cristalino");
													}}>
													Explore Cristalino
												</Button>
											</Box>
										</CardContent>
									</Card>
								</Box>
							</Grid>
						</Grid>
					</FadeIn>
				</Container>
			</Box>
		</>
	);
};

export default Products;
