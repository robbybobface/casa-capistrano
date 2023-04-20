import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";

import background from "../media/background.jpg";

const BuyNowBanner = () => {
	return (
		<Box sx={{ position: "relative", textAlign: "center" }}>
			<Box
				component='img'
				src={background}
				alt='buy-now-banner-art'
				sx={{
					objectFit: "cover",
					height: "200px",
					width: "100%",
					// position: "relative",
					filter: "brightness(65%);",
					mb: -1,
				}}
			/>

			<Container
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}>
				<Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Grid item xs={11} sm={11} md={6} lg={6} sx={{ textAlign: "center" }}>
						<Typography
							sx={{
								color: "white",
								fontFamily: "Roboto",
								fontWeight: 600,
								fontSize: {
									xs: "16px",
									sm: "22px",
									md: "24px",
									lg: "27px",
								},
								// fontStyle: "italic",
								textTransform: "uppercase",
								letterSpacing: "5px",
							}}>
							Tequila Crafted For You
						</Typography>
						<Typography
							sx={{
								color: "white",
								fontFamily: "Roboto",
								fontWeight: 400,
								fontSize: {
									xs: "18px",
									sm: "28px",
									md: "35px",
									lg: "40px",
								},
								letterSpacing: "5px",
								textTransform: "uppercase",
							}}>
							Buy Casa Capistrano Now
						</Typography>
					</Grid>
					<Grid item xs={4} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Button
							variant='outlined'
							color='primaryBlack'
							sx={{
								textTransform: "none",
								color: "primaryBlack.main",
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: {
									xs: "16px",
									md: "20px",
								},
								width: "160px",
								boxShadow: "1px 1px 3px 1px #012233",
								backgroundColor: "white",
								borderColor: "white",
								borderRadius: "0px",
								"&:hover": {
									backgroundColor: "primaryBlack.main",
									color: "white",
									borderColor: "primaryBlack.main",
									boxShadow:
										"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",
								},
								zIndex: 20,
								transition: "all 200ms ease-in",
							}}
							onClick={() => {
								// ref.current?.scrollIntoView({ behavior: "smooth" });
							}}>
							Buy Now
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default BuyNowBanner;
