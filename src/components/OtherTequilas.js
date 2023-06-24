import { Box, Button, Card, CardActionArea, CardContent, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BlurHashedImage from "./BlurHashedImage";
import { useNavigate } from "react-router-dom";

function OtherTequilas({ current }) {
	const navigate = useNavigate();
	return (
		<Container
			component='section'
			role='region'
			aria-label='Other Tequilas'
			sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mb: -2 }}>
			<Typography
				component={"h2"}
				sx={{
					fontFamily: "Cabin",
					fontSize: { xs: "28px", sm: "32px", md: "40px" },
					textAlign: "center",

					fontWeight: 600,
					color: "primaryBlack.main",
					textTransform: "uppercase",
					letterSpacing: "9.9px",
					// fontStyle: "italic",
				}}>
				Other Tequilas
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
			<Grid
				component='nav'
				role='navigation'
				aria-label='Other Tequilas'
				container
				mb={3}
				spacing={2}
				sx={{ display: "flex", justifyContent: "center" }}>
				{current !== "blanco" && (
					<Grid item xs={6} sm={5} md={4}>
						<Box component='article' role='button' aria-label='Blanco Tequila'>
							<Card
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
								<CardActionArea sx={{ p: { xs: 1, md: 2 } }}>
									<Box
										className='gradient'
										sx={{
											height: "100%",
											width: "100%",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/blanco-setup.jpg?tr=q-50'
											hash='LCFiJb~p?csq00D$4T4oInEL-pt7'
											alt='Blanco tequila'
											cardMedia={true}
											height='225px'
											sx={{ zIndex: 1, objectPosition: "50% 80%" }}
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
											component='h3'
											sx={{
												textAlign: "center",
												fontFamily: "Cabin",
												fontWeight: 400,
												fontSize: "18px",
												letterSpacing: "2px",
												color: "white",
												mt: -7,
												zIndex: 18,
											}}>
											Blanco
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Box>
					</Grid>
				)}
				{current !== "reposado" && (
					<Grid item xs={6} sm={5} md={4}>
						<Box component='article' role='button' aria-label='Reposado Tequila'>
							<Card
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
								<CardActionArea sx={{ p: { xs: 1, md: 2 } }}>
									<Box
										className='gradient'
										sx={{
											height: "100%",
											width: "100%",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/reposado-setup.jpg?tr=q-50'
											hash='L9DSK|K600r?00#+=rELQRkC_N%M'
											alt='Reposado tequila'
											cardMedia={true}
											height='225px'
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
											component='h3'
											sx={{
												textAlign: "center",
												fontFamily: "Cabin",
												fontWeight: 400,
												fontSize: "18px",
												letterSpacing: "2px",
												color: "white",
												mt: -7,
												zIndex: 18,
											}}>
											Reposado
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Box>
					</Grid>
				)}
				{current !== "cristalino" && (
					<Grid item xs={6} sm={5} md={4}>
						<Box component='article' role='button' aria-label='Cristalino Tequila'>
							<Card
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
								<CardActionArea sx={{ p: { xs: 1, md: 2 } }}>
									<Box
										className='gradient'
										sx={{
											height: "100%",
											width: "100%",
										}}>
										<BlurHashedImage
											src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/cristalino-setup.jpg?tr=q-50'
											hash='LHD+;:_N%gjYE2xYD%M{00D%IAD%'
											alt='Cristalino tequila'
											height='225px'
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
											component='h3'
											sx={{
												textAlign: "center",
												fontFamily: "Cabin",
												fontWeight: 400,
												fontSize: "18px",
												letterSpacing: "2px",
												color: "white",
												mt: -7,
												zIndex: 18,
											}}>
											Añejo Cristalino
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Box>
					</Grid>
				)}
				<Grid item xs={10} mt={1} sx={{ display: "flex", justifyContent: "center" }}>
					<Button
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
	);
}

export default OtherTequilas;
