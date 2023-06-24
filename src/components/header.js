import React, { useState, useEffect, useRef } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { ControlledMenu, MenuDivider, MenuItem, useHover, useMenuState } from "@szhsin/react-menu";

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
	Collapse,
	ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { ChevronRight, ExpandLess, ExpandMore, RemoveSharp } from "@mui/icons-material";
import FadeIn from "react-fade-in/lib/FadeIn";

const Header = () => {
	const drawerWidth = 260;
	const pageTitles = ["HOME", "ABOUT", "PRODUCTS"];
	const pageURLs = ["", "about", "blanco", "reposado", "cristalino", "products"];
	const tequilaTypes = ["blanco", "reposado", "cristalino", "view All"];
	const [mobileOpen, setMobileOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [activePage, setActivePage] = useState("home");
	const [transparent, setTransparent] = useState(true);

	const location = useLocation();
	const navigate = useNavigate();

	const buttonRef = useRef(null);
	const [menuState, toggle] = useMenuState({ transition: true });
	const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

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

	const handleDrawerProductsToggle = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const changeBackground = () => {
		// console.log(window.scrollY);
		if (window.scrollY >= 66) {
			setTransparent(false);
		} else {
			setTransparent(true);
		}
	};
	const menuItemClassNameBlanco = ({ hover }) => (hover ? "blanco-hover" : "blanco");
	const menuItemClassNameReposado = ({ hover }) => (hover ? "reposado-hover" : "reposado");
	const menuItemClassNameCristalino = ({ hover }) => (hover ? "cristalino-hover" : "cristalino");

	const drawer = (
		<Box sx={{ textAlign: "center" }} aria-label='navigation drawer'>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flex: 1,
				}}>
				<Box
					component='img'
					src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/logo_white.png?tr=q-50'
					width={"100%"}
					alt='casa capistrano logo'
					sx={{
						width: {
							xs: "200px",
						},
						py: 2,
					}}
				/>
			</Box>
			<Divider />
			<List role='navigation' aria-label='navigation link list'>
				<FadeIn visible={mobileOpen}>
					{pageTitles.map((item, index) => (
						<ListItem
							key={item}
							disablePadding
							aria-label={item.toLowerCase().slice(0, 1).toUpperCase() + item.toLowerCase().slice(1)}>
							<ListItemButton
								role={index < 2 ? "navigation" : "button"}
								aria-label={
									index < 2
										? item.toLowerCase().slice(0, 1).toUpperCase() + item.toLowerCase().slice(1)
										: "open products submenu"
								}
								sx={{ textAlign: "left", pl: 4 }}
								onClick={() => {
									if (item !== "PRODUCTS") {
										window.scrollTo(0, 0);
										navigate(pageURLs.at(index));
										handleDrawerToggle();
									} else {
										handleDrawerProductsToggle();
									}
								}}>
								<ListItemText
									aria-details={`navigation link ${item.toLowerCase()}`}
									primary={
										<Typography
											sx={{
												fontFamily: "Cabin",
												fontSize: "1.2rem",
												zIndex: 20,
												"&:hover": {
													textDecoration: "underline",
												},
												color:
													activePage === "home"
														? transparent
															? "Blue.main"
															: "primaryBlue.main"
														: "primaryBlue.main",
												...(pageURLs.at(index) === activePage && {
													color: "primaryRed.main",
													textDecoration: "underline",
												}),
												...(index === 2 &&
													(activePage === "blanco" ||
														activePage === "reposado" ||
														activePage === "cristalino" ||
														activePage === "products") && {
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
								{item === "PRODUCTS" ? (
									dropdownOpen ? (
										<ExpandLess sx={{ mr: 1 }} />
									) : (
										<ExpandMore sx={{ mr: 1 }} />
									)
								) : (
									""
								)}
							</ListItemButton>
						</ListItem>
					))}
					<Collapse in={dropdownOpen} timeout='auto' unmountOnExit>
						<List dense component='div' disablePadding>
							{tequilaTypes.map((item, index) => (
								<ListItem
									key={`tequila-${index}`}
									disableGutters
									disablePadding
									aria-label={
										item.toLowerCase().slice(0, 1).toUpperCase() + item.toLowerCase().slice(1)
									}>
									<ListItemButton
										role='navigation'
										aria-label={
											item.toLowerCase().slice(0, 1).toUpperCase() + item.toLowerCase().slice(1)
										}
										sx={{ textAlign: "left", pl: 5 }}
										onClick={() => {
											window.scrollTo(0, 0);
											navigate(pageURLs.at(index + 2));
											handleDrawerToggle();
										}}>
										<ListItemIcon sx={{ minWidth: "32px !important" }}>
											{index < 3 && (
												<RemoveSharp
													color={
														index === 0
															? "primaryBlanco"
															: index === 1
															? "primaryRed"
															: "primaryBlack"
													}
													sx={{ fontSize: "18px" }}
												/>
											)}
										</ListItemIcon>
										<ListItemText
											aria-details={`navigation drawer ${item.toLowerCase()}`}
											primary={
												<Typography
													sx={{
														fontFamily: "Cabin",
														fontSize: "1.2rem",
														zIndex: 20,
														"&:hover": {
															textDecoration: "underline",
														},
														color:
															activePage === "home"
																? transparent
																	? "Blue.main"
																	: "primaryBlue.main"
																: "primaryBlue.main",
														...(pageURLs.at(index + 2) === activePage && {
															color:
																index === 0
																	? "primaryBlanco.main"
																	: index === 1
																	? "primaryRed.main"
																	: index === 2
																	? "primaryBlack.main"
																	: "primaryRed.main",
															textDecoration: "underline",
														}),
														...(activePage === "home" &&
															pageURLs.at(index + 2) === "" && {
																color: "primaryRed.main",
																textDecoration: "underline",
															}),
													}}>
													{item.slice(0, 1).toUpperCase() + item.slice(1)}
												</Typography>
											}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Collapse>
				</FadeIn>
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
				aria-label='header'
				role='navigation'
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
								aria-label='navigation menu toggle'
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
							src='https://ik.imagekit.io/5ywj5edvn/CasaCapistrano/logo_white.png?tr=q-50'
							alt='casa capistrano navigation bar logo'
							width={{ xs: "80%", sm: "65%", md: "400px", lg: "350px" }}
							height={"80%"}
							sx={{
								"&:hover": {
									cursor: "pointer",
								},
							}}
							onClick={() => {
								window.scrollTo(0, 0);
								navigate("/");
							}}
						/>
						<Typography
							noWrap
							component='div'
							href=''
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
							}}></Typography>
						<Box
							sx={{ display: { xs: "none", md: "flex" }, ml: { xs: 1, lg: 3, xl: 4 } }}
							aria-label='navigation buttons'>
							{pageTitles.length > 0 &&
								pageTitles.map((page, index) => {
									if (page !== "PRODUCTS") {
										return (
											<Button
												aria-label={`${page.toLowerCase()}`}
												key={index}
												onClick={() => {
													window.scrollTo(0, 0);
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
													transition: "all 0.1s ease-in-out",
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
										);
									} else {
										return (
											<Box key={index}>
												<Button
													aria-haspopup
													ref={buttonRef}
													aria-label={`${page.toLowerCase()}`}
													onClick={() => {
														console.log("clicked");
														window.scrollTo(0, 0);
														navigate(pageURLs.at(index));
													}}
													color={activePage !== "home" ? "primaryBlack" : "primaryBeige"}
													sx={{
														mx: 1,
														my: 2,
														px: 2,
														display: "flex",
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
														...((activePage === "products" ||
															activePage === "blanco" ||
															activePage === "reposado" ||
															activePage === "cristalino") && {
															color: "primaryRed.main",
															textDecoration: "underline",
														}),
														...(activePage === "home" &&
															pageURLs.at(index) === "" && {
																color: "primaryRed.main",
																textDecoration: "underline",
															}),
													}}
													{...anchorProps}>
													{page}
													<ExpandMore
														sx={{
															ml: 0.5,
															mr: -1,
															transform:
																menuState.state === "open" ||
																menuState.state === "opening"
																	? "rotate(180deg)"
																	: "",
															transition: "transform 0.1s ease-in-out",
														}}
													/>
												</Button>
												<ControlledMenu
													captureFocus={true}
													align='center'
													initialMounted={true}
													aria-label='products menu'
													menuClassName={
														activePage === "home" ? (transparent ? "scroll" : "") : ""
													}
													arrowProps={{
														className:
															activePage === "home" ? (transparent ? "scroll" : "") : "",
													}}
													{...hoverProps}
													{...menuState}
													// state='open'
													menuStyle={{
														borderRadius: "0px",
														fontFamily: "Cabin, roboto",
														fontSize: "18px",
														paddingRight: "0px",
													}}
													arrow
													anchorRef={buttonRef}
													onClose={() => toggle(false)}>
													<MenuItem
														className={menuItemClassNameBlanco}
														style={{
															paddingRight: "0px",
														}}
														onClick={() => {
															window.scrollTo(0, 0);
															navigate("/blanco");
														}}>
														{({ hover }) => (
															<>
																Blanco
																<ChevronRight
																	color='primaryBlanco'
																	sx={{
																		ml: hover ? 0.5 : 0,
																		opacity: hover ? 1 : 0,
																		transition: "all 0.2s ease-in",
																	}}
																/>
															</>
														)}
													</MenuItem>
													<MenuItem
														className={menuItemClassNameReposado}
														style={{
															paddingRight: "0px",
														}}
														onClick={() => {
															window.scrollTo(0, 0);
															navigate("/reposado");
														}}>
														{({ hover }) => (
															<>
																Reposado
																<ChevronRight
																	color='primaryRed'
																	sx={{
																		ml: hover ? 0.5 : 0,
																		opacity: hover ? 1 : 0,
																		transition: "all 0.2s ease-in",
																	}}
																/>
															</>
														)}
													</MenuItem>
													<MenuItem
														className={menuItemClassNameCristalino}
														style={{
															paddingRight: "0px",
														}}
														onClick={() => {
															window.scrollTo(0, 0);
															navigate("/cristalino");
														}}>
														{({ hover }) => (
															<>
																Cristalino
																<ChevronRight
																	color='primaryBlack'
																	sx={{
																		ml: hover ? 0.5 : 0,
																		opacity: hover ? 1 : 0,
																		transition: "all 0.2s ease-in",
																	}}
																/>
															</>
														)}
													</MenuItem>
													<MenuDivider />
													<MenuItem
														// style={{
														// 	// fontFamily: "calder-script, cabin",
														// 	fontSize: "22px",
														// 	paddingVertical: "0px",
														// }}
														style={{
															paddingRight: "0px",
														}}
														onClick={() => {
															window.scrollTo(0, 0);
															navigate("/products");
														}}>
														{({ hover }) => (
															<>
																View All
																<ChevronRight
																	sx={{
																		ml: hover ? 0.5 : 0,
																		opacity: hover ? 1 : 0,
																		transition: "all 0.2s ease-in",
																	}}
																/>
															</>
														)}
													</MenuItem>
												</ControlledMenu>
											</Box>
										);
									}
								})}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box component='nav' id='menu-appbar' aria-label='mobile navigation drawer'>
				<Drawer
					variant='temporary'
					anchor='left'
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
							backgroundColor: "rgba(255, 253, 247, 0.8);",
							// boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 );",
							backdropFilter: "blur( 7px );",
							webkitBackdropFilter: "blur( 7px );",
						},
					}}>
					{drawer}
				</Drawer>
			</Box>
		</>
	);
};

export default Header;
