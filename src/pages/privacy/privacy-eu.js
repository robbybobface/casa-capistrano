import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Divider } from "@mui/material";

const PrivacyEU = () => {
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
							fontFamily: "Gilroy-Heavy, Cabin",
							fontWeight: 600,
							textAlign: "center",
							fontSize: { xs: "35px", sm: "40px", md: "52px" },
							color: "primaryBlack.main",
							mt: { xs: 2, md: 1 },
							letterSpacing: "2px",
						}}>
						Privacy Statement (EU)
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
					<Box
						component='main'
						role='main'
						aria-label='Privacy Statement US'
						sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 8 }, textAlign: "justify" }}>
						<Box component='section' role='region' aria-label='Summary'>
							<Typography
								aria-label='Last Updated'
								sx={{
									fontFamily: "Roboto",
									fontWeight: 300,
									fontStyle: "italic",
									fontSize: "14px",
									mb: 3,
								}}>
								This privacy statement was last changed on September 9, 2022, last checked on September
								9, 2022, and applies to citizens and legal permanent residents of the European Economic
								Area and Switzerland.
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								{`In this privacy statement, we explain what we do with the data we obtain about you via `}
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
								</Typography>
								. We recommend you carefully read this statement. In our processing we comply with the
								requirements of privacy legislation. That means, among other things, that:
							</Typography>
							<ul
								aria-label='Statement Objectives'
								style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										we clearly state the purposes for which we process personal data. We do this by
										means of this privacy statement;
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										we aim to limit our collection of personal data to only the personal data
										required for legitimate purposes;
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										we first request your explicit consent to process your personal data in cases
										requiring your consent;
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										we take appropriate security measures to protect your personal data and also
										require this from parties that process personal data on our behalf;
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										we respect your right to access your personal data or have it corrected or
										deleted, at your request.
									</Typography>
								</li>
							</ul>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								If you have any questions, or want to know exactly what data we keep of you, please
								contact us.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Purpose'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								1. Purpose, data and retention period
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								We may collect or receive personal information for a number of purposes connected with
								our business operations which may include the following:
							</Typography>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								1.1 To support services or products that a customer wants to buy or has purchased
							</Typography>
							<Typography
								component='h4'
								sx={{
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "14px",
									fontStyle: "italic",
									mb: 2,
								}}>
								For this purpose we use the following data:
							</Typography>
							<ul
								aria-label="Data that's collected"
								style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										A first and last name
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										Internet activity information, including, but not limited to, browsing history,
										search history, and information regarding a consumer's interaction with an
										Internet Web site, application, or advertisement
									</Typography>
								</li>
							</ul>
							<Typography
								component='h4'
								sx={{
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "14px",
									fontStyle: "italic",
									mb: 2,
								}}>
								The basis on which we may process these data is:
							</Typography>
							<Typography
								component='a'
								role='link'
								aria-label='Provision of Consent'
								href='https://cookiedatabase.org/legal-bases/#consent'
								sx={{
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "14px",
									textDecoration: "underline",
									"&:hover": {
										cursor: "pointer",
									},
									color: "primaryBlack.main",
									mb: 2,
								}}>
								Upon the provision of consent.
							</Typography>
							<Typography
								component='h4'
								sx={{
									fontFamily: "Roboto",
									fontWeight: 300,
									fontSize: "14px",
									fontStyle: "italic",
									my: 2,
								}}>
								Retention period
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								We retain this data upon termination of the service for the following number of months:
								12
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Cookies'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								2. Cookies
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Our website uses cookies. For more information about cookies, please refer to our{" "}
								<Typography
									component='span'
									role='link'
									aria-label='Cookie Policy EU'
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
										navigate("/cookie-policy-eu");
									}}>
									Cookie Policy
								</Typography>
								.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Security'>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								3. Security
							</Typography>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								We are committed to the security of personal data. We take appropriate security measures
								to limit abuse of and unauthorized access to personal data. This ensures that only the
								necessary persons have access to your data, that access to the data is protected, and
								that our security measures are regularly reviewed.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Third-party websites'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								4. Third-party websites
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								This privacy statement does not apply to third-party websites connected by links on our
								website. We cannot guarantee that these third parties handle your personal data in a
								reliable or secure manner. We recommend you read the privacy statements of these
								websites prior to making use of these websites.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Amendments'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								5. Amendments to this privacy statement
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								We reserve the right to make amendments to this privacy statement. It is recommended
								that you consult this privacy statement regularly in order to be aware of any changes.
								In addition, we will actively inform you wherever possible.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Accessing and modifying your data'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								6. Accessing and modifying your data
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								If you have any questions or want to know which personal data we have about you, please
								contact us. You can contact us by using the information below. You have the following
								rights:
							</Typography>
							<ul
								aria-label='The rights you have'
								style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px" }}>
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
										Right to rectification: you have the right to supplement, correct, have deleted
										or blocked your personal data whenever you wish.
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
								Please make sure to always clearly state who you are, so that we can be certain that we
								do not modify or delete any data of the wrong person.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Submitting a complaint'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								7. Submitting a complaint
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								If you are not satisfied with the way in which we handle (a complaint about) the
								processing of your personal data, you have the right to submit a complaint to the Data
								Protection Authority.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Contact details'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								8. Contact details
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

export default PrivacyEU;
