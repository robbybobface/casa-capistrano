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
import { Helmet } from "react-helmet";

const CookiesUS = () => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>Cookie Policy US</title>
			</Helmet>
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
						Cookie Policy (US)
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
						aria-label='Cookie Policy US'
						sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 8 }, textAlign: "justify" }}>
						<Typography
							aria-label='Last Updated Details'
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontStyle: "italic",
								fontSize: "14px",
								mb: 3,
							}}>
							This page was last changed on September 9, 2022, last checked on September 9, 2022 and
							applies to citizens and legal permanent residents of the United States.
						</Typography>
						<Box component='section' role='section' aria-label='Introduction'>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								1. Introduction
							</Typography>
							<Typography
								// aria-label='Introduction Content'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
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
						<Box component='section' role='section' aria-label='Cookies'>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								2. Cookies
							</Typography>
							<Typography
								// aria-label='Cookie Content'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								When you visit our website it can be necessary to store and/or read certain data from
								your device by using technologies such as cookies.
							</Typography>
							<Typography
								component='h4'
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								2.1 Technical or functional cookies
							</Typography>
							<Typography
								// aria-label='2.1 Technical or functional cookies content'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Some cookies ensure that certain parts of the website work properly and that your user
								preferences remain known. By placing functional cookies, we make it easier for you to
								visit our website. This way, you do not need to repeatedly enter the same information
								when visiting our website and, for example, the items remain in your shopping cart until
								you have paid. We may place these cookies without your consent.
							</Typography>
							<Typography
								component='h4'
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								2.2 Marketing/Tracking cookies
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Marketing/Tracking cookies are cookies or any other form of local storage, used to
								create user profiles to display advertising or to track the user on this website or
								across several websites for similar marketing purposes.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Placed Cookies'>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								3. Placed cookies
							</Typography>
							<Typography
								// aria-label='Placed Cookies Content'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Most of these technologies have a function, a purpose, and an expiration period.
							</Typography>
							<ol
								aria-label='Function, Purpose, and Expiration of Cookies'
								style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										A function is a particular task a technology has. So a function can be to “store
										certain data.”
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										Purpose is “the Why” behind the function. Maybe the data is stored because it is
										needed for statistics.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										The expiration period shows the length of the period the used technology can
										“store or read certain data.”
									</Typography>
								</li>
							</ol>
							<Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
								<TableContainer component={Paper} sx={{ maxWidth: 650 }}>
									<Table sx={{ maxWidth: 650 }} aria-label='cookie table'>
										<TableHead>
											<TableRow aria-label='header row'>
												<TableCell>Name</TableCell>
												<TableCell align='left'>Expiration</TableCell>
												<TableCell align='left'>Function</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow
												aria-label='row 1'
												key='cookies'
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
						<Box component='section' role='section' aria-label='Browser and Device based Consent'>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								4. Browser and Device based Consent
							</Typography>
							<Typography
								// aria-label='Browser and Device based Consent Content'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								When you visit our website for the first time, we will show you a pop-up with an
								explanation about cookies. You do have the right to opt-out and to object against the
								further use of non-functional cookies.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Enabling/disabling and deleting cookies'>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								5. Enabling/disabling and deleting cookies
							</Typography>
							<Typography
								// aria-label='Enabling/disabling and deleting cookies Content 1'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								You can use your internet browser to automatically or manually delete cookies. You can
								also specify that certain cookies may not be placed. Another option is to change the
								settings of your internet browser so that you receive a message each time a cookie is
								placed. For more information about these options, please refer to the instructions in
								the Help section of your browser.
							</Typography>

							<Typography
								// aria-label='Enabling/disabling and deleting cookies Content 2'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Please note that our website may not work properly if all cookies are disabled. If you
								do delete the cookies in your browser, they will be placed again after your consent when
								you visit our websites again.
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Your rights with respect to personal data'>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								6. Your rights with respect to personal data
							</Typography>
							<Typography
								// aria-label='Your rights with respect to personal data Content'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								You have the following rights with respect to your personal data:
							</Typography>
							<ul
								aria-label='The Rights you have'
								style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
								<li aria-label='Right 1'>
									<Typography
										aria-label='Request access to your personal data'
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										you may submit a request for access to the data we process about you;
									</Typography>
								</li>
								<li aria-label='Right 2'>
									<Typography
										aria-label='Objection to processing'
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										you may object to the processing;
									</Typography>
								</li>
								<li aria-label='Right 3'>
									<Typography
										aria-label='Request an overview'
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										you may request an overview, in a commonly used format, of the data we process
										about you;
									</Typography>
								</li>
								<li aria-label='Right 4'>
									<Typography
										aria-label='Request correction or deletion'
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										you may request correction or deletion of the data if it is incorrect or not or
										no longer relevant, or to ask to restrict the processing of the data.
									</Typography>
								</li>
							</ul>
							<Typography
								// aria-label='Your rights with respect to personal data Content 2'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								To exercise these rights, please contact us. Please refer to the contact details at the
								bottom of this Cookie Policy. If you have a complaint about how we handle your data, we
								would like to hear from you.
							</Typography>
							<Typography
								// aria-label='Your rights with respect to personal data Content 3'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								{`For more information about your rights with respect to personal data, please refer to our `}
								<Typography
									role='link'
									aria-label='navigate to privacy statement'
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
									}}>
									privacy Statement.
								</Typography>
							</Typography>
						</Box>
						<Box component='section' role='section' aria-label='Contact Details'>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								7. Contact details
							</Typography>
							<Typography
								// aria-label='Contact Details Content'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								For questions and/or comments about our Cookie Policy and this statement, please contact
								us by using the following contact details:
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
										navigate("/");
									}}>
									https://casacapistrano.com
								</Typography>
							</Typography>
							<Typography
								aria-label='Email'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Email: martin@casacapistrano.com
							</Typography>
							<Typography
								aria-label='Phone Number'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 4 }}>
								Phone number: 817-917-6520
							</Typography>
						</Box>
					</Box>
				</FadeIn>
			</Container>
		</>
	);
};

export default CookiesUS;
