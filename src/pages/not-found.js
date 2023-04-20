import { Typography, Box, Container, Button } from "@mui/material";
import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import background from "../media/cactus.jpg";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Box
				component='img'
				src={background}
				alt='home-art'
				sx={{
					display: "block",
					verticalAlign: "bottom",
					objectFit: "cover",
					minHeight: { xs: "600px", md: "800px", lg: "900px" },
					height: "100vh",
					width: "100%",
					position: "relative",
					filter: "brightness(60%) blur(3px)",
					zIndex: 10,
					p: 0,
					// mt: "-4px",
				}}
			/>
			<Box
				sx={{
					// maxWidth: "500px",
					position: "absolute",
					top: "30%",
					width: "100%",
					// transform: "translate(-50%, -50%)",
					zIndex: 10,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Box
					sx={{
						backgroundColor: "#FFFFFFCC",
						height: {
							xs: "52%",
							md: "55%",
						},
						minHeight: "420px",
						width: {
							xs: "70%",
							sm: "75%",
							md: "65%",
							lg: "50%",
						},
						// maxWidth: "500px",
						zIndex: 10,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						// alignItems: "center",
						px: 5,
					}}>
					<FadeIn>
						<Typography
							sx={{
								textAlign: "left",
								color: "primaryRed.main",
								fontFamily: "calder-dark-grit-shadow",
								fontSize: {
									xs: "100px",
									sm: "120px",
									md: "140px",
									lg: "160px",
								},
								// fontStyle: "italic",
								width: {
									xs: "90%",
									sm: "90%",
									md: "90%",
									lg: "80%",
								},
							}}>
							404
						</Typography>
						<Typography
							sx={{
								fontFamily: "Cabin",
								fontWeight: 700,
								fontSize: {
									xs: "26px",
									sm: "28px",
									md: "32px",
									lg: "40px",
								},
								textAlign: "left",
							}}>
							We can't find the page you are looking for
						</Typography>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 200,
								fontSize: {
									xs: "16px",
									sm: "18px",
									md: "20px",
									lg: "24px",
								},
								textAlign: "left",
								mb: 2,
							}}>
							This page has been relocated or removed.
						</Typography>
						<Button
							variant='outlined'
							color='primaryBlue'
							sx={{
								mb: 3,
								textTransform: "none",
								color: "primaryBlue.main",
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: {
									xs: "16px",
									md: "18px",
								},
								width: "150px",
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
								navigate("/");
							}}>
							Go Home
						</Button>
					</FadeIn>
				</Box>
			</Box>
		</>
	);
};

export default NotFound;
