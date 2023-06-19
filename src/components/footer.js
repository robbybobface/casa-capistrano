import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				display: "flex",
				minHeight: "165px",
				backgroundColor: "primaryBlue.main",
				justifyContent: "center",
				zIndex: 20,
			}}>
			<Container sx={{ pb: 2, pt: 4 }}>
				<Grid container sx={{ display: "flex", justifyContent: "center" }}>
					<Grid item xs={10} md={4}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "flex-start",
							}}>
							<Box
								component='img'
								src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/logo_white.png'
								alt='NavBar-Logo'
								sx={{
									width: "90%",
									mb: 2,
								}}
							/>
							<Typography
								sx={{
									fontFamily: "cabin, Roboto",
									fontSize: "14px",
									fontWeight: 300,
									color: "white",
									// letterSpacing: "1.px",
									pb: 2,
									textAlign: "center",
								}}>
								"Every bottle has its own story to tell." Casa Capistrano stands for quality,
								innovation, great taste, and smoothness along with the flavors that each sip reveals to
								your palate.
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
									pb: 3,
								}}>
								<Box>
									<FacebookIcon sx={{ color: "white", px: 2 }} fontSize='small' />
								</Box>
								<Box>
									<TwitterIcon sx={{ color: "white", px: 2 }} fontSize='small' />
								</Box>
								<Box>
									<InstagramIcon sx={{ color: "white", px: 2 }} fontSize='small' />
								</Box>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={10} md={4} pb={1}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "flex-start",
							}}>
							<Typography
								sx={{
									fontFamily: "Cabin",
									fontSize: "20px",
									fontWeight: 700,
									color: "white",
									// textDecoration: "underline",
									pb: 2,
									textTransform: "uppercase",
									letterSpacing: "2px",
								}}>
								Navigation
							</Typography>
							<Typography
								sx={{
									fontFamily: "Roboto",
									fontSize: "15px",
									fontWeight: 300,
									color: "white",
									pb: 2,
									"&:hover": {
										color: "primaryRed.main",
										cursor: "pointer",
									},
									transition: "color 0.1s ease-in",
								}}
								onClick={() => {
									window.scrollTo(0, 0);
									navigate("/");
								}}>
								Home
							</Typography>
							<Typography
								sx={{
									fontFamily: "Roboto",
									fontSize: "15px",
									fontWeight: 300,
									color: "white",
									pb: 2,
									"&:hover": {
										color: "primaryRed.main",
										cursor: "pointer",
									},
									transition: "color 0.1s ease-in",
								}}
								onClick={() => {
									window.scrollTo(0, 0);
									navigate("/about");
								}}>
								About
							</Typography>
							<Typography
								sx={{
									fontFamily: "Roboto",
									fontSize: "15px",
									fontWeight: 300,
									color: "white",
									pb: 2,
									"&:hover": {
										color: "primaryRed.main",
										cursor: "pointer",
									},
									transition: "color 0.1s ease-in",
								}}
								onClick={() => {
									window.scrollTo(0, 0);
									navigate("/products");
								}}>
								Products
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={10} md={4}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "flex-start",
							}}>
							<Typography
								sx={{
									fontFamily: "Cabin",
									fontSize: "20px",
									fontWeight: 700,
									color: "white",
									// textDecoration: "underline",
									pb: 2,
									textTransform: "uppercase",
									letterSpacing: "2px",
								}}>
								Contact Info
							</Typography>
							<Typography
								component='div'
								sx={{
									fontFamily: "Cabin",
									fontSize: "14px",
									fontWeight: 400,
									color: "white",
									pb: 2,
									lineHeight: "1.5em",
									display: "flex",
									alignItems: "flex-start",
									textAlign: "center",
								}}>
								<LocationOnIcon fontSize='small' sx={{ pr: 1 }} />
								Casa Capistrano, LLC PO Box 4297 Cedar Hill, TX 75106
							</Typography>
							<Typography
								component='div'
								sx={{
									fontFamily: "Cabin",
									fontSize: "14px",
									fontWeight: 400,
									color: "white",
									pb: 2,
									lineHeight: "1.5em",
									display: "flex",
									alignItems: "flex-start",
									textAlign: "center",
								}}>
								<PhoneIcon fontSize='small' sx={{ pr: 1 }} />
								(620)-TEQUILA or (620)-837-8452
							</Typography>
							<Typography
								component='div'
								sx={{
									fontFamily: "Cabin",
									fontSize: "14px",
									fontWeight: 400,
									color: "white",
									pb: 3,
									lineHeight: "1.5em",
									display: "flex",
									alignItems: "flex-start",
									textAlign: "center",
								}}>
								<EmailIcon fontSize='small' sx={{ pr: 1 }} />
								info@casacapistrano.com
							</Typography>
						</Box>
					</Grid>
					<Grid
						item
						xs={10}
						sx={{
							display: "flex",
							justifyContent: "center",
							flexDirection: "column",
						}}>
						<Typography
							sx={{
								color: "white",
								fontSize: "10px",
								textTransform: "uppercase",
								textAlign: "center",
								fontFamily: "Roboto",
								fontWeight: 300,
								pb: 2,
							}}>
							{`COPYRIGHT ©${new Date().getFullYear()} IMPORTED BY CASA CAPISTRANO LLC`}
						</Typography>
						<Typography
							sx={{
								color: "white",
								fontSize: "10px",
								textTransform: "uppercase",
								textAlign: "center",
								fontFamily: "Roboto",
								fontWeight: 300,
								pb: 2,
							}}>
							PLEASE DO NOT SHARE WITH ANYONE UNDER THE LEGAL PURCHASE AGE FOR ALCOHOL. DRINK RESPONSIBLY
						</Typography>
					</Grid>
					<Grid container rowSpacing={1.5} mt={1} sx={{ display: "flex", justifyContent: "center" }}>
						<Grid item xs={10} sm={6} md={3}>
							<Typography
								component='div'
								onClick={() => {
									if (navigator.language === "en-US" || navigator.language === "en-us") {
										window.scrollTo(0, 0);
										navigate("/cookie-policy-us");
									} else if (navigator.language === "en-CA" || navigator.language === "en-ca") {
										window.scrollTo(0, 0);
										navigate("/cookie-policy-ca");
									} else if (navigator.language === "en-GB" || navigator.language === "en-gb") {
										window.scrollTo(0, 0);
										navigate("/cookie-policy-uk");
									} else if (navigator.language === "en") {
										window.scrollTo(0, 0);
										navigate("/cookie-policy-eu");
									} else {
										window.scrollTo(0, 0);
										navigate("/cookie-policy-us");
									}
								}}
								sx={{
									textAlign: "center",
									color: "white",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "11px",
									textTransform: "uppercase",
									borderRight: { xs: "none", sm: "0.5px solid white" },
									"&:hover": {
										cursor: "pointer",
									},
								}}>
								Cookie Policy
							</Typography>
						</Grid>
						<Grid item xs={10} sm={6} md={3}>
							<Typography
								component='div'
								onClick={() => {
									if (navigator.language === "en-US" || navigator.language === "en-us") {
										window.scrollTo(0, 0);
										navigate("/privacy-statement-us");
									} else if (navigator.language === "en-CA" || navigator.language === "en-ca") {
										window.scrollTo(0, 0);
										navigate("/privacy-statement-ca");
									} else if (navigator.language === "en-GB" || navigator.language === "en-gb") {
										window.scrollTo(0, 0);
										navigate("/privacy-statement-uk");
									} else if (navigator.language === "en") {
										window.scrollTo(0, 0);
										navigate("/privacy-statement-eu");
									} else {
										window.scrollTo(0, 0);
										navigate("/privacy-statement-us");
									}
								}}
								sx={{
									textAlign: "center",
									color: "white",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "11px",
									textTransform: "uppercase",
									borderLeft: { xs: "none", sm: "0.5px solid white" },
									borderRight: {
										xs: "none",
										md: "0.5px solid white",
									},
									"&:hover": {
										cursor: "pointer",
									},
								}}>
								Privacy Statement
							</Typography>
						</Grid>
						<Grid item xs={10} sm={6} md={3}>
							<Typography
								component='div'
								onClick={() => {
									window.scrollTo(0, 0);
									navigate("/imprint");
								}}
								sx={{
									textAlign: "center",
									color: "white",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "11px",
									textTransform: "uppercase",
									borderLeft: { xs: "none", md: "0.5px solid white" },
									borderRight: { xs: "none", sm: "0.5px solid white" },
									"&:hover": {
										cursor: "pointer",
									},
								}}>
								Imprint
							</Typography>
						</Grid>
						<Grid item xs={10} sm={6} md={3}>
							<Typography
								component='div'
								onClick={() => {
									window.scrollTo(0, 0);
									navigate("/disclaimer");
								}}
								sx={{
									textAlign: "center",
									color: "white",
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "11px",
									textTransform: "uppercase",
									borderLeft: { xs: "none", sm: "0.5px solid white" },
									"&:hover": {
										cursor: "pointer",
									},
								}}>
								Disclaimer
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
