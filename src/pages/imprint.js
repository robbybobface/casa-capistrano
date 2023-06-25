import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { Container, Box, Typography, Divider } from "@mui/material";
import { Helmet } from "react-helmet";

const Imprint = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Imprint</title>
			</Helmet>
			<Container component='main' role='main' aria-label='Casa Capsitrano Imprint Page'>
				<FadeIn>
					<Typography
						component='h1'
						sx={{
							fontFamily: "Gilroy-Heavy, Cabin",
							fontWeight: 600,
							textAlign: "center",
							fontSize: { xs: "35px", sm: "40px", md: "52px" },
							color: "primaryBlack.main",
							// textTransform: "uppercase",
							letterSpacing: "2px",
						}}>
						Imprint
					</Typography>
					<Divider
						sx={{
							width: "100%",
							pt: 1,
							mb: { xs: 1, md: 4 },
							borderColor: "primaryBlack.main",
							borderBottomWidth: 1,
						}}
					/>
					<Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 8 }, textAlign: "justify" }}>
						<Typography
							aria-label='Imprint last updated'
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontStyle: "italic",
								fontSize: "14px",
								mb: 3,
							}}>
							This imprint was last updated on September 9, 2022.
						</Typography>
						<Box component='section' role='region' aria-label='Owner Details'>
							<Typography
								aria-hidden
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								The owner of this website is:
							</Typography>
							<Typography
								aria-label='Owner Name'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Casa Capistrano Casa Capistrano LLC
							</Typography>
							<Typography
								aria-label='Owner Company'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Casa Capistrano, LLC
							</Typography>
							<Typography
								aria-label='Owner Mailing Address 1'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								PO Box 4297
							</Typography>
							<Typography
								aria-label='Owner Mailing Address 2'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Cedar Hill, TX 75106
							</Typography>
							<Typography
								aria-label='Owner Country'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								United States
							</Typography>
							<Typography
								aria-label='Owner Email'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Email: martin@casacapistrano.com
							</Typography>
							<Typography
								aria-label='Owner Phone'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 4 }}>
								Phone number: 817-917-6520
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Legal Representative Details'>
							<Typography
								aria-hidden
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								The legal representative(s) of Casa Capistrano Casa Capistrano LLC:
							</Typography>
							<Typography
								aria-label='Legal Representative Name'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Martin Lucas
							</Typography>
							<Typography
								aria-label='Legal Representation Information'
								sx={{
									fontFamily: "Roboto",
									fontWeight: 300,
									fontStyle: "italic",
									fontSize: "14px",
									mb: 6,
								}}>
								We are not willing or obliged to participate in dispute resolution procedures before a
								consumer arbitration board.
							</Typography>
						</Box>
					</Box>
				</FadeIn>
			</Container>
		</>
	);
};

export default Imprint;
