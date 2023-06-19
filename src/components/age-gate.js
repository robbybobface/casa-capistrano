import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { ReactComponent as Logo } from "../media/logo-alt.svg";
import { useCookies } from "react-cookie";
import BlurHashedImage from "./BlurHashedImage";

const AgeGate = () => {
	const [oldEnough, setOldEnough] = useState(true);
	const [loading, setLoading] = useState(false);
	const [cookies, setCookie] = useCookies(["age_verified"]);

	function delay(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}
	return (
		<>
			{/* <Box
				component='img'
				src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/background.jpg'
				alt='home-art'
				sx={{
					display: "block",
					verticalAlign: "bottom",
					objectFit: "cover",
					minHeight: { xs: "600px", md: "800px", lg: "700px" },
					height: "100vh",
					width: "100%",
					position: "relative",
					filter: "brightness(80%) blur(1px)",
					zIndex: 1000,
					p: 0,
				}}
			/> */}
			<BlurHashedImage
				src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/background.jpg?tr=w-1920'
				hash='L.Ko4RRjM{t7~qofkCof%2s.ayof'
				display='block'
				verticalAlign='bottom'
				sx={{ objectFit: "cover" }}
				alt='cactus art'
				height='100vh'
				width='100%'
				minHeight={{ xs: "600px", md: "800px", lg: "700px" }}
				position='relative'
				filter='brightness(80%) blur(1px)'
				zIndex={1000}
				p={0}
			/>
			<Box
				sx={{
					// maxWidth: "500px",
					position: "absolute",
					top: { xs: "15%", lg: "20%" },
					width: "100%",
					// transform: "translate(-50%, -50%)",
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
						p: 2,
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
							<Logo />
						</Box>
						<Typography
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
								// fontStyle: "italic",
								letterSpacing: "1px",
								mx: "auto",
							}}>
							Welcome to Casa Capistrano!
						</Typography>
						{!oldEnough ? (
							<Typography
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
							sx={{
								fontFamily: "calder-script, Roboto",
								fontSize: {
									xs: "26px",
									sm: "30px",
								},
								color: "primaryBlue.main",
								fontWeight: 300,
								textAlign: "center",
								px: { xs: 2, md: 4 },
								mx: "auto",
								pb: 1,
							}}>
							Are you above the legal drinking age in your country?
						</Typography>
						<Grid
							container
							spacing={0}
							// columnGap={1}
							mt={1}
							mb={3}
							sx={{ display: "flex", justifyContent: "center", alignItems: "center", mx: "auto" }}>
							<Grid item xs={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
								<LoadingButton
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
										// boxShadow: "2px 2px 4px 2px #012233",
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
										// boxShadow: "2px 2px 4px 2px #012233",
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
							sx={{
								fontFamily: "Roboto",
								fontSize: {
									xs: "9px",
									sm: "10px",
								},
								color: "primaryBlue.main",
								fontWeight: 300,
								textAlign: "center",
								px: 4,
								mx: "auto",
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
