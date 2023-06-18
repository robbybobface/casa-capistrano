import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Container,
	Button,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const drawerWidth = 240;
	const pageTitles = ["HOME", "ABOUT", "PRODUCTS"];
	const pageURLs = ["", "about", "products"];
	const [mobileOpen, setMobileOpen] = useState(false);
	const [activePage, setActivePage] = useState("home");
	const [transparent, setTransparent] = useState(true);

	const location = useLocation();
	const navigate = useNavigate();

	const pageHandler = () => {
		const url = location.pathname.split("/");
		// console.log(url);
		if (url[1] !== "") {
			setActivePage(url[1]);

			// console.log(page);
		} else {
			// console.log(page);
			setActivePage("home");
		}
	};

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const changeBackground = () => {
		// console.log(window.scrollY);
		if (window.scrollY >= 66) {
			setTransparent(false);
		} else {
			setTransparent(true);
		}
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Box
				component='img'
				src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/logo_white.png'
				alt='NavBar-Logo'
				sx={{
					width: {
						xs: "200px",
					},
					py: 2,
				}}
			/>
			<Divider />
			<List>
				{pageTitles.map((item, index) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							sx={{ textAlign: "center" }}
							onClick={() => {
								navigate(pageURLs.at(index));
							}}>
							<ListItemText
								primary={
									<Typography
										sx={{
											fontFamily: "Cabin",
											fontSize: "1.2rem",
											"&:hover": {
												textDecoration: "underline",
											},
											color:
												activePage === "home"
													? transparent
														? "primaryBlue.main"
														: "primaryBlue.main"
													: "primaryBlue.main",
											...(pageURLs.at(index) === activePage && {
												color: "primaryRed.main",
												textDecoration: "underline",
											}),
											...(activePage === "home" &&
												pageURLs.at(index) === "" && {
													color: "primaryRed.main",
													textDecoration: "underline",
												}),
										}}>
										{item}
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	useEffect(() => pageHandler(), [location.key]);
	useEffect(() => {
		changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	}, []);
	return (
		<>
			<AppBar
				position='sticky'
				color={
					activePage === "home"
						? transparent
							? "primaryTransparent"
							: "primaryBackground"
						: "primaryBackground"
				}
				sx={{
					// py: 1,
					// boxShadow: "none",
					// boxShadow: "0px 2px 4px #DEDEDE;",
					// color: activePage === "home" ? (transparent === true ? "transparent" : "white") : "white",
					transition: "all 0.2s ease-in",
					zIndex: 20,
					boxShadow:
						activePage === "home"
							? transparent
								? "none"
								: "0px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 10%), 0px 1px 10px 0px rgb(0 0 0 / 5%)"
							: "0px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 10%), 0px 1px 10px 0px rgb(0 0 0 / 5%)",
				}}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleDrawerToggle}
								color='inherit'>
								<MenuIcon
									sx={{
										color:
											activePage === "home"
												? transparent
													? "primaryBeige.main"
													: "primaryBlack.main"
												: "primaryBlack.main",
									}}
								/>
							</IconButton>
						</Box>
						<Box
							component='img'
							src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/logo_white.png'
							alt='NavBar-Logo'
							sx={{
								height: "80%",
								width: {
									xs: "80%",
									sm: "400px",
									md: "400px",
									lg: "350px",
								},
								"&:hover": {
									cursor: "pointer",
								},
							}}
							onClick={() => {
								navigate("/");
							}}
						/>
						{/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
						<Typography
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "Roboto",
								fontWeight: 500,
								letterSpacing: ".3rem",
								color: "primaryBlue",
								textDecoration: "none",
								fontSize: "14px",
							}}></Typography>
						<Box sx={{ display: { xs: "none", md: "flex" }, ml: { xs: 1, lg: 3, xl: 4 } }}>
							{pageTitles.length > 0 &&
								pageTitles.map((page, index) => (
									<Button
										key={page}
										onClick={() => {
											navigate(pageURLs.at(index));
										}}
										color={activePage !== "home" ? "primaryBlack" : "primaryBeige"}
										sx={{
											mx: 1,
											my: 2,
											px: 2,
											display: "block",
											textTransform: "none",
											fontFamily: "Cabin",
											fontWeight: 600,
											fontSize: "18px",
											"&:hover": {
												textDecoration: "underline",
											},
											color:
												activePage === "home"
													? transparent
														? "primaryWhite.main"
														: "primaryBlue.main"
													: "primaryBlue.main",
											...(pageURLs.at(index) === activePage && {
												color: "primaryRed.main",
												textDecoration: "underline",
											}),
											...(activePage === "home" &&
												pageURLs.at(index) === "" && {
													color: "primaryRed.main",
													textDecoration: "underline",
												}),
										}}>
										{page}
									</Button>
								))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box component='nav'>
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", lg: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
							backgroundColor: "#fffdf7",
						},
					}}
					onClick={handleDrawerToggle}>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
};

export default Header;
