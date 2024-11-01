import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { Box, Container, Typography, Divider } from "@mui/material";
import BlurHashedImage from "../components/BlurHashedImage";
import { Helmet } from "react-helmet";
import SkipToMain from "../components/SkipToMain";
import useBuyNow from "../utils/useBuyNow";
import Loader from "../components/loader";

const BuyNow = () => {
	const { isLoading } = useBuyNow();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>Buy Casa Capistrano Tequila</title>
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
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						pb: { xs: 4, sm: 2, md: 0 },
					}}>
					<FadeIn>
						<Box component='section' role='region' aria-label='Casa Capistrano Tequila - Our Tequilas'>
							<Box
								sx={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									width: {
										xs: "100%",
										sm: "90%",
										md: "60%",
									},
									my: 2,
									mx: "auto",
								}}>
								<BlurHashedImage
									src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/buy-online.png?tr=q-40'
									hash='LES6D8D$?b%N?vWBWAtR_N%gIUM{'
									alt='Casa Capistrano Tequilas Graphic'
									edges={true}
									width={{ xs: "320px", sm: "90%", md: "100%" }}
									height={{ xs: "130px", sm: "250px", md: "245px", lg: "275px" }}
									display='flex'
									bottom={0}
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
								aria-label='Selling Disclaimer'
								sx={{
									fontFamily: "Cabin",
									fontSize: {
										xs: "14px",
										md: "16px",
										lg: "18px",
									},
									fontWeight: 500,
									color: "primaryBlack.main",
									textAlign: "center",
									width: { xs: "90%", md: "75%" },
									mb: 1,
									mx: "auto",
								}}>
								We can ship to most states + D.C. (except: Alabama, Alaska, Hawaii, Idaho, Kansas,
								Massachusetts, Michigan, Mississippi, Oklahoma, South Carolina, South Dakota, Tennessee,
								Utah)
							</Typography>
						</Box>
						{isLoading && <Loader />}
						<div id='collection-component-1730304639059'></div>
					</FadeIn>
				</Container>
			</Box>
		</>
	);
};

export default BuyNow;
