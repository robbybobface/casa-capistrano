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

const CookiesCA = () => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Box>
			<Container>
				<FadeIn>
					<Typography
						sx={{
							fontFamily: "Cabin",
							fontWeight: 600,
							textAlign: "center",
							fontSize: { xs: "35px", sm: "40px", md: "52px" },
							color: "primaryBlack.main",
							// textTransform: "uppercase",
							letterSpacing: "2px",
						}}>
						Cookie Policy (CA)
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
					<Box sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 8 }, textAlign: "justify" }}>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontStyle: "italic",
								fontSize: "14px",
								mb: 3,
							}}>
							This page was last changed on September 9, 2022, last checked on September 9, 2022 and
							applies to citizens and legal permanent residents of the Canada.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							1. Introduction
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Our website,{" "}
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
							</Typography>{" "}
							(hereinafter: “the website”) uses cookies and other related technologies (for convenience
							all technologies are referred to as “cookies”). Cookies are also placed by third parties we
							have engaged. In the document below we inform you about the use of cookies on our website.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							2. What are cookies?
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							A cookie is a small simple file that is sent along with pages of this website and stored by
							your browser on the hard drive of your computer or another device. The information stored
							therein may be returned to our servers or to the servers of the relevant third parties
							during a subsequent visit
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							3. What are scripts?
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							A script is a piece of program code that is used to make our website function properly and
							interactively. This code is executed on our server or on your device.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							4. What is a web beacon?
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that
							is used to monitor traffic on a website. In order to do this, various data about you is
							stored using web beacons.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							5. Third parties
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							We have made agreements about the use of cookies with other companies that place cookies.
							However, we cannot guarantee that these third parties handle your personal data in a
							reliable or secure manner. Parties such as Google are to be considered as independent data
							controllers. We recommend that you read the privacy statements of these companies.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							6. Cookies
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
							6.1 Technical or functional cookies
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Some cookies ensure that certain parts of the website work properly and that your user
							preferences remain known. By placing functional cookies, we make it easier for you to visit
							our website. This way, you do not need to repeatedly enter the same information when
							visiting our website and, for example, the items remain in your shopping cart until you have
							paid.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
							6.2 Marketing/Tracking cookies
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Marketing/Tracking cookies are cookies or any other form of local storage, used to create
							user profiles to display advertising or to track the user on this website or across several
							websites for similar marketing purposes.ack the user on this website or across several
							websites for similar marketing purposes.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							7. Placed cookies
						</Typography>
						<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
							<TableContainer component={Paper} sx={{ maxWidth: 650 }}>
								<Table sx={{ maxWidth: 650 }} aria-label='simple table'>
									<TableHead>
										<TableRow>
											<TableCell>Name</TableCell>
											<TableCell align='left'>Expiration</TableCell>
											<TableCell align='left'>Function</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow
											key='cookies'
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
											<TableCell component='th' scope='row'>
												age_verified
											</TableCell>
											<TableCell align='left'>365 Days</TableCell>
											<TableCell align='left'>Store if user is of legal drinking age</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							8. Consent
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							When you visit our website for the first time, we will show you a pop-up with an explanation
							about cookies. You do have the right to opt-out and to object against the further use of
							non-functional cookies.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							9. Enabling/disabling and deleting cookies
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							You can use your internet browser to automatically or manually delete cookies. You can also
							specify that certain cookies may not be placed. Another option is to change the settings of
							your internet browser so that you receive a message each time a cookie is placed. For more
							information about these options, please refer to the instructions in the Help section of
							your browser. Or you can indicate your preferences on the following page:
							https://youradchoices.ca
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Please note that our website may not work properly if all cookies are disabled. If you do
							delete the cookies in your browser, they will be placed again after your consent when you
							visit our websites again.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							10. Your rights with respect to personal data
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							You have the following rights with respect to your personal data:
						</Typography>
						<ul style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									you may submit a request for access to the data we process about you;
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									you may object to the processing;
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									you may request an overview, in a commonly used format, of the data we process about
									you;
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									you may request correction or deletion of the data if it is incorrect or not or no
									longer relevant. Where appropriate, the amended information shall be transmitted to
									third parties having access to the information in question.
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									You have the right to withdraw consent at any time, subject to legal or contractual
									restrictions and reasonable notice. You will be informed of the implications of such
									withdrawal.
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									You have the right to address a challenge concerning non-compliance with PIPEDA to
									our organization and, if the issue is not resolved, to the Office of the Privacy
									Commissioner of Canada.
								</Typography>
							</li>
						</ul>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							To exercise these rights, please contact us. Please refer to the contact details at the
							bottom of this Cookie Policy. If you have a complaint about how we handle your data, we
							would like to hear from you.
						</Typography>

						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							11. Contact details
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							For questions and/or comments about our Cookie Policy and this statement, please contact us
							by using the following contact details:
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Casa Capistrano
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Casa Capistrano, LLC
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							PO Box 4297
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Cedar Hill, TX 75106
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							United States
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
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
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Email: martin@casacapistrano.com
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 4 }}>
							Phone number: 817-917-6520
						</Typography>
					</Box>
				</FadeIn>
			</Container>
		</Box>
	);
};

export default CookiesCA;
