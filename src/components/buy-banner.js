import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import BlurHashedImage from "./BlurHashedImage";

const BuyNowBanner = () => {
	return (
		<Box
			component='section'
			role='banner'
			aria-label='Buy Casa Capistrano Now Banner'
			sx={{ position: "relative", textAlign: "center" }}>
			<BlurHashedImage
				src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/background.jpg?tr=q-70'
				hash='L.Ko4RRjM{t7~qofkCof%2s.ayof'
				alt='Buy Now Banner Background Art'
				sx={{
					objectFit: "cover",
					objectPosition: "50% 65%",
					filter: "brightness(50%) contrast(110%) saturate(110%)",
				}}
				height='180px'
				width='100%'
				mb={-1}
			/>

			<Container
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}>
				<Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Grid item xs={11} sm={11} md={6} lg={7} sx={{ textAlign: "center" }}>
						<Typography
							component='h2'
							sx={{
								color: "white",
								fontFamily: "Gilroy-Bold, roboto",
								fontWeight: 600,
								fontSize: {
									xs: "16px",
									sm: "22px",
									md: "26px",
									lg: "30px",
								},
								// fontStyle: "italic",
								textTransform: "uppercase",
								letterSpacing: "2px",
							}}>
							Tequila Crafted For You
						</Typography>
						<Typography
							component='h1'
							sx={{
								color: "white",
								fontFamily: "Gilroy-Regular, Roboto",
								fontWeight: 400,
								fontSize: {
									xs: "18px",
									sm: "28px",
									md: "35px",
									lg: "40px",
								},
								letterSpacing: "4px",
								textTransform: "uppercase",
							}}>
							Buy Casa Capistrano Now
						</Typography>
					</Grid>
					<Grid item xs={8} md={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Button
							role='link'
							aria-label='Buy Now'
							disabled
							variant='outlined'
							color='primaryBlack'
							sx={{
								textTransform: "none",
								color: "primaryBlack.main",
								fontFamily: "calder-script, roboto",
								fontWeight: 300,
								fontSize: {
									xs: "22px",
									md: "24px",
									lg: "28px",
								},
								py: 0,
								px: 4,
								maxWidth: "180px",
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
							Coming Soon
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default BuyNowBanner;
