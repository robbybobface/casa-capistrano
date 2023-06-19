import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../utils/AppContext";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";

const CookieBanner = () => {
	const { userReject } = useContext(AppContext);
	const [stateUserReject, setStateUserReject] = userReject;
	const [cookies, setCookie] = useCookies(["age_verified", "accept_cookies"]);
	const [changeColor, setChangeColor] = useState(null);
	const [fontColor, setFontColor] = useState("primaryBlack.main");
	const navigate = useNavigate();
	const location = useLocation();
	// location.pathname.split("/")[1] !== "" ? "primaryBlack.main" : !changeColor ? "primaryBlack.main" : "white";

	const changeText = () => {
		if (window.scrollY >= 66) {
			setChangeColor(true);
		} else {
			setChangeColor(false);
		}
	};

	useEffect(() => {
		// console.log(location.pathname.split("/")[1] !== "");
		if (location.pathname.split("/")[1] !== "") {
			setFontColor("primaryBlack.main");
		} else {
			// console.log(changeColor === null);
			setFontColor(
				changeColor === null ? "primaryBlack.main" : !changeColor ? "primaryWhite.main" : "primaryBlack.main"
			);
		}
	}, [location.pathname, changeColor]);

	useEffect(() => {
		changeText();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeText);
	}, []);
	return (
		<Box
			sx={{
				width: "100%",
				// backgroundColor: "white",
				minHeight: { xs: "180px", sm: "130px" },
				position: "fixed",
				bottom: 0,
				zIndex: 10000,
				background: "rgba( 255, 255, 255, 0.3 );",
				boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
				backdropFilter: "blur( 8px );",
				webkitBackdropFilter: "blur( 8px );",
			}}>
			<Container
				sx={{
					height: { xs: "180px", sm: "130px" },
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Grid
					container
					spacing={0}
					rowGap={2}
					sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Typography
							color={fontColor}
							sx={{
								fontFamily: "cabin, Roboto",
								fontWeight: 300,
								fontSize: { xs: "14px", md: "14px", lg: "16px" },
								transition: "all 0.1s ease-in",
								textAlign: "center",
								px: { xs: 0, sm: 4, md: 8 },
							}}>
							By clicking "Accept", you agree to the storing of cookies on your device to enhance site
							navigation and to analyze site usage. Read more{" "}
							<Typography
								component='span'
								sx={{
									color: fontColor,
									textDecoration: "underline",
									fontFamily: "Roboto",
									fontWeight: 500,
									fontSize: { xs: "14px", md: "14px", lg: "16px" },
									"&:hover": {
										cursor: "pointer",
									},
									transition: "all 0.1s ease-in",
								}}
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
								}}>
								here
							</Typography>
						</Typography>
					</Grid>
					<Grid
						item
						xs={5}
						sm={3}
						lg={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Button
							variant='contained'
							color='primaryBlue'
							startIcon={<CookieOutlinedIcon fontSize='small' sx={{ color: "white" }} />}
							sx={{
								// mb: 3,
								width: "80%",
								textTransform: "none",
								color: "white",
								fontFamily: "Cabin",
								fontWeight: 600,
								letterSpacing: "1.2px",
								fontSize: { xs: "14px", md: "14px", lg: "16px" },
								borderRadius: "0px",
								border: "1px solid rgba( 1, 34, 51, 0.4 )",
								background: "rgba( 1, 34, 51, 0.7 );",
								backdropFilter: "blur( 20px );",
								webkitBackdropFilter: "blur( 20px );",
							}}
							onClick={() => {
								setCookie("accept_cookies", "true", {
									path: "/",
								});
							}}>
							Accept
						</Button>
					</Grid>
					<Grid
						item
						xs={5}
						sm={3}
						lg={2}
						sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<Button
							variant='contained'
							color='primaryDarkerBeige'
							sx={{
								// mb: 3,
								width: "80%",
								textTransform: "none",
								color: "primaryBlack.main",
								fontFamily: "Cabin",
								letterSpacing: "1.2px",
								fontSize: { xs: "14px", md: "14px", lg: "16px" },
								borderRadius: "0px",
								border: "1px solid rgba( 232, 232, 232, 0.3 );",
								background: "rgba( 232, 232, 232, 0.7 );",
								// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
								backdropFilter: "blur( 20px );",
								webkitBackdropFilter: "blur( 20px );",
							}}
							onClick={() => {
								// setCookie("accept_cookies", "false", {
								// 	path: "/",
								// 	expires: new Date(Date.now() + 60 * 1000),
								// });
								setStateUserReject(true);
							}}>
							Reject
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CookieBanner;
