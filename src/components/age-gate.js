import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { useCookies } from "react-cookie";
import BlurHashedImage from "./BlurHashedImage";
import { Helmet } from "react-helmet";

const AgeGate = () => {
	const [oldEnough, setOldEnough] = useState(true);
	const [loading, setLoading] = useState(false);
	const [cookies, setCookie] = useCookies(["age_verified"]);

	function delay(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}
	return (
		<>
			<Helmet>
				<title>Casa Capistrano</title>
			</Helmet>
			<BlurHashedImage
				src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/background.jpg?tr=q-50'
				hash='L.Ko4RRjM{t7~qofkCof%2s.ayof'
				display='block'
				sx={{ objectFit: "cover" }}
				alt='background cactus art'
				height='100vh'
				width='100%'
				minHeight={{ xs: "600px", md: "800px", lg: "700px" }}
				position='relative'
				filter='brightness(80%) blur(1px)'
				zIndex={1000}
				p={0}
			/>
			<Box
				component='main'
				role='main'
				aria-label='Casa Capistrano Age Gate Screen'
				sx={{
					position: "absolute",
					top: { xs: "15%", lg: "20%" },
					width: "100%",
					zIndex: 9999,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Paper
					elevation={3}
					sx={{
						backgroundColor: "white",
						height: {
							xs: "52%",
							md: "60%",
						},
						minHeight: "525px",
						width: "80%",
						maxWidth: "500px",
						zIndex: 999999,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						px: 2,
						py: { xs: 0, md: 2 },
					}}>
					<FadeIn>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								mx: "auto",
								width: {
									xs: "95%",
									md: "85%",
								},
							}}>
							<BlurHashedImage
								src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/logo-alt.png?tr=q-60'
								hash='LNR:A~t7?cj[.8WBV@of_NWBMxj['
								alt='Casa Capistrano Welcome Graphic'
								edges={true}
								width={{ xs: "90%", md: "100%" }}
								height={{ xs: "150px", sm: "250px", md: "245px", lg: "275px" }}
								display='flex'
								justifyContent='center'
								ignoreHeight={true}
								mx='auto'
							/>
						</Box>
						<Typography
							component='h1'
							aria-label='Welcome to Casa Capistrano!'
							sx={{
								fontFamily: "indie-flower, Roboto",
								fontSize: {
									xs: "32px",
									sm: "45px",
								},
								color: "primaryBlue.main",
								fontWeight: 900,
								textAlign: "center",
								px: { xs: 0, md: 4 },
								letterSpacing: "1px",
								mx: "auto",
							}}>
							Welcome to Casa Capistrano!
						</Typography>
						{!oldEnough ? (
							<Typography
								aria-label='Error'
								sx={{
									fontFamily: "calder-script, Roboto",
									fontSize: {
										xs: "13px",
										sm: "18px",
									},
									color: "primaryRed.main",
									fontWeight: 500,
									textAlign: "center",
									px: 4,
									pb: 1,
									mx: "auto",
								}}>
								You are not old enough to view this content
							</Typography>
						) : (
							""
						)}

						<Typography
							component='h2'
							aria-label='Are you above the legal drinking age in your country?'
							sx={{
								fontFamily: "calder-script, Roboto",
								fontSize: {
									xs: "26px",
									sm: "30px",
								},
								color: "primaryBlue.main",
								fontWeight: 300,
								textAlign: "center",
								px: { xs: 1, md: 4 },
								mx: "auto",
								pb: 1,
							}}>
							Are you above the legal drinking age in your country?
						</Typography>
						<Grid
							container
							spacing={0}
							mt={1}
							mb={2}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center", mx: "auto" }}>
							<Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<LoadingButton
									aria-label='Yes'
									variant='outlined'
									color='primaryBlue'
									loading={loading}
									size='small'
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										textTransform: "none",
										color: "white",
										fontFamily: "calder-script, Roboto",
										fontWeight: 300,
										fontSize: "24px",
										borderRadius: "0px",
										backgroundColor: "primaryBlue.main",
										borderColor: "primaryBlue.main",
										width: "90%",
										py: { xs: 0, md: 0 },
										"&:hover": {
											boxShadow: "0 0.7em 0.7em -0.4em #0122336f",
											transform: "translateY(-0.1em)",
											cursor: "pointer",
											backgroundColor: "primaryBlue.main",
										},
										transition: "all 200ms ease-in",
									}}
									onClick={() => {
										setLoading(true);
										delay(1500).then(() =>
											setCookie("age_verified", "verified", {
												path: "/",
												expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
											})
										);
									}}>
									Yes
								</LoadingButton>
							</Grid>
							<Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<Button
									aria-label='No'
									variant='outlined'
									color='primaryBlue'
									size='small'
									sx={{
										textTransform: "none",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										color: "primaryBlue.main",
										fontFamily: "calder-script, Roboto",
										fontWeight: 300,
										fontSize: "24px",
										borderRadius: "0px",
										backgroundColor: "white",
										borderColor: "primaryBlue.main",
										width: "90%",
										py: { xs: 0, md: 0 },
										"&:hover": {
											boxShadow: "0 0.7em 0.7em -0.4em #0122336f",
											transform: "translateY(-0.1em)",
											cursor: "pointer",
											backgroundColor: "white",
										},
										transition: "all 200ms ease-in",
									}}
									onClick={() => {
										setOldEnough(false);
									}}>
									No
								</Button>
							</Grid>
						</Grid>
						<Typography
							aria-label='Casa Capistrano Disclaimer'
							sx={{
								fontFamily: "Roboto",
								fontSize: {
									xs: "12px",
									sm: "12px",
								},
								color: "primaryBlue.main",
								fontWeight: 300,
								textAlign: "center",
								px: { xs: 1, md: 3 },
								mx: "auto",
								mb: 0.5,
							}}>
							By entering this website, you certify that you are of legal drinking age in the state/region
							in which you reside.
						</Typography>
					</FadeIn>
				</Paper>
			</Box>
		</>
	);
};

export default AgeGate;
