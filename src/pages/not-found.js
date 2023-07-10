import { Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import BlurHashedImage from "../components/BlurHashedImage";
import { Helmet } from "react-helmet";

const NotFound = () => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Not Found</title>
			</Helmet>
			<BlurHashedImage
				src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/cactus.jpg?tr=q-70'
				hash='LECu6fIU?]M|%MoztRt7?vWCMdjt'
				display='block'
				alt='background cactus art'
				height='100vh'
				width='100%'
				sx={{ objectFit: "cover" }}
				offsetTop={{
					xs: -7,
					sm: -8,
					md: -9.45,
					lg: -9.45,
				}}
				minHeight={{ xs: "600px", md: "800px", lg: "900px" }}
				position='relative'
				filter='brightness(60%) blur(3px)'
				zIndex={10}
				p={0}
			/>
			<Box
				role='main'
				aria-label='Page Not found'
				sx={{
					position: "absolute",
					top: "30%",
					width: "100%",
					zIndex: 10,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Box
					sx={{
						backgroundColor: "#fffdf7CC",
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
						zIndex: 10,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						px: 5,
					}}>
					<FadeIn>
						<Typography
							component={"h1"}
							aria-label='404 Error'
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
							component={"h2"}
							aria-label='Page Not Found'
							sx={{
								fontFamily: "calder-script, cabin, roboto",
								fontWeight: 700,
								fontSize: {
									xs: "30px",
									sm: "32px",
									md: "36px",
									lg: "48px",
								},
								textAlign: "left",
							}}>
							We can't find the page you are looking for
						</Typography>
						<Typography
							component={"h3"}
							aria-label='Page has been relocated or removed'
							sx={{
								fontFamily: "cabin, roboto",
								fontWeight: 300,
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
							role='navigation'
							aria-label='Home'
							variant='outlined'
							color='primaryBlue'
							sx={{
								mb: 3,
								textTransform: "none",
								color: "primaryBlue.main",
								fontFamily: "calder-script, cabin, roboto",
								fontWeight: 300,
								fontSize: {
									xs: "20px",
									md: "24px",
								},
								py: 0,
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
								window.scrollTo(0, 0);
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
