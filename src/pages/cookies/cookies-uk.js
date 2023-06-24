import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Box,
	Typography,
	Divider,
	Table,
	TableBody,
	TableContainer,
	TableCell,
	Paper,
	TableHead,
	TableRow,
} from "@mui/material";

const CookiesUK = () => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Box>
			<Container>
				<FadeIn>
					<Typography
						component='h1'
						sx={{
							fontFamily: "Cabin",
							fontWeight: 600,
							textAlign: "center",
							fontSize: { xs: "35px", sm: "40px", md: "52px" },
							color: "primaryBlack.main",
							// textTransform: "uppercase",
							letterSpacing: "2px",
						}}>
						Cookie Policy (UK)
					</Typography>
					<Divider
						sx={{
							width: "100%",
							pt: 2,
							mb: { xs: 1, md: 4 },
							borderColor: "primaryBlack.main",
							borderBottomWidth: 1,
						}}
					/>
					<Box
						component='section'
						role='main'
						aria-label='Cookie Policy UK'
						sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 8 }, textAlign: "justify" }}>
						<Typography
							aria-label='Last Updated'
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontStyle: "italic",
								fontSize: "14px",
								mb: 3,
							}}>
							This page was last changed on September 9, 2022, last checked on September 9, 2022 and
							applies to citizens and legal permanent residents of the United Kingdom.
						</Typography>
						<Box component='section' role='section' aria-label='Introduction'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								1. Introduction
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Our website,{" "}
								<Typography
									component='span'
									role='link'
									aria-label='Casa Capistrano'
									sx={{
										textDecoration: "underline",
										fontFamily: "Roboto",
										fontWeight: 300,
										fontSize: "14px",
										"&:hover": {
											cursor: "pointer",
										},
									}}
									onClick={() => {
										window.scrollTo(0, 0);
										navigate("/");
									}}>
									https://casacapistrano.com
								</Typography>{" "}
								(hereinafter: “the website”) uses cookies and other related technologies (for
								convenience all technologies are referred to as “cookies”). Cookies are also placed by
								third parties we have engaged. In the document below we inform you about the use of
								cookies on our website.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Cookies Explained'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								2. What are cookies?
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								A cookie is a small simple file that is sent along with pages of this website and stored
								by your browser on the hard drive of your computer or another device. The information
								stored therein may be returned to our servers or to the servers of the relevant third
								parties during a subsequent visit
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Scripts'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								3. What are scripts?
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								A script is a piece of program code that is used to make our website function properly
								and interactively. This code is executed on our server or on your device.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Web beacons'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								4. What is a web beacon?
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website
								that is used to monitor traffic on a website. In order to do this, various data about
								you is stored using web beacons.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Cookie Types'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								5. Cookies
							</Typography>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								5.1 Technical or functional cookies
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Some cookies ensure that certain parts of the website work properly and that your user
								preferences remain known. By placing functional cookies, we make it easier for you to
								visit our website. This way, you do not need to repeatedly enter the same information
								when visiting our website and, for example, the items remain in your shopping cart until
								you have paid. We may place these cookies without your consent.
							</Typography>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								5.2 Marketing/Tracking cookies
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Marketing/Tracking cookies are cookies or any other form of local storage, used to
								create user profiles to display advertising or to track the user on this website or
								across several websites for similar marketing purposes.ack the user on this website or
								across several websites for similar marketing purposes.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Cookie Implementation'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								6. Placed cookies
							</Typography>
							<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
								<TableContainer component={Paper} sx={{ maxWidth: 650 }}>
									<Table sx={{ maxWidth: 650 }} aria-label='Cookie Table'>
										<TableHead>
											<TableRow aria-label='header row'>
												<TableCell>Name</TableCell>
												<TableCell align='left'>Expiration</TableCell>
												<TableCell align='left'>Function</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow
												key='cookies'
												aria-label='cookies row 1'
												sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
												<TableCell component='th' scope='row'>
													age_verified
												</TableCell>
												<TableCell align='left'>365 Days</TableCell>
												<TableCell align='left'>
													Store if user is of legal drinking age
												</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Box>
						</Box>
						<Box component='section' role='section' aria-label='Consent'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								7. Consent
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								When you visit our website for the first time, we will show you a pop-up with an
								explanation about cookies. As soon as you click on “Save preferences”, you consent to us
								using the categories of cookies and plug-ins you selected in the pop-up, as described in
								this Cookie Policy. You can disable the use of cookies via your browser, but please note
								that our website may no longer work properly.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Enabling/Disabling Cookies'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								8. Enabling/disabling and deleting cookies
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								You can use your internet browser to automatically or manually delete cookies. You can
								also specify that certain cookies may not be placed. Another option is to change the
								settings of your internet browser so that you receive a message each time a cookie is
								placed. For more information about these options, please refer to the instructions in
								the Help section of your browser.
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Please note that our website may not work properly if all cookies are disabled. If you
								do delete the cookies in your browser, they will be placed again after your consent when
								you visit our websites again.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Your Rights'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								9. Your rights with respect to personal data
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								You have the following rights with respect to your personal data:
							</Typography>
							<ul aria-label='Rights' style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										You have the right to know why your personal data is needed, what will happen to
										it, and how long it will be retained for.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										Right of access: You have the right to access your personal data that is known
										to us.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										If you give us your consent to process your data, you have the right to revoke
										that consent and to have your personal data deleted.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										Right to transfer your data: you have the right to request all your personal
										data from the controller and transfer it in its entirety to another controller.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										Right to object: you may object to the processing of your data. We comply with
										this, unless there are justified grounds for processing.
									</Typography>
								</li>
							</ul>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								To exercise these rights, please contact us. Please refer to the contact details at the
								bottom of this Cookie Policy. If you have a complaint about how we handle your data, we
								would like to hear from you, but you also have the right to submit a complaint to the
								supervisory authority (the Information Commissioner’s Office (ICO)).
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Contact details'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								10. Contact details
							</Typography>
							<Typography
								aria-label='Company Name'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Casa Capistrano
							</Typography>
							<Typography
								aria-label='Company Name 2'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Casa Capistrano, LLC
							</Typography>
							<Typography
								aria-label='Mailing Address 1'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								PO Box 4297
							</Typography>
							<Typography
								aria-label='Mailing Address 2'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Cedar Hill, TX 75106
							</Typography>
							<Typography
								aria-label='Country'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								United States
							</Typography>
							<Typography
								aria-label='Website'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Website:{" "}
								<Typography
									component='span'
									sx={{
										textDecoration: "underline",
										fontFamily: "Roboto",
										fontWeight: 300,
										fontSize: "14px",
										"&:hover": {
											cursor: "pointer",
										},
									}}
									onClick={() => {
										window.scrollTo(0, 0);
										navigate("/");
									}}>
									https://casacapistrano.com
								</Typography>
							</Typography>
							<Typography
								aria-label='Contact Email'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Email: info@casacapistrano.com
							</Typography>
							<Typography
								aria-label='Contact Phone Number'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 4 }}>
								Phone number: (620)-837-8452
							</Typography>
						</Box>
					</Box>
				</FadeIn>
			</Container>
		</Box>
	);
};

export default CookiesUK;
