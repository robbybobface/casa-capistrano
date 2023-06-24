import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Divider } from "@mui/material";

const PrivacyCA = () => {
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
						Privacy Statement (CA)
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
						component='main'
						role='main'
						aria-label='Privacy Statement US'
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
							This privacy statement was last changed on September 9, 2022, last checked on September 9,
							2022, and applies to citizens and legal permanent residents of the Canada.
						</Typography>
						<Box component='section' role='region' aria-label='Summary'>
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
								1. Purpose and categories of data
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
								The following categories of data are collected
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
								Retention period
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								We retain this data upon termination of the service for the following number of months:
								12
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Disclosure practices'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								2. Disclosure practices
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								We disclose personal information if we are required by law or by a court order, in
								response to a law enforcement agency, to the extent permitted under other provisions of
								law, to provide information, or for an investigation on a matter related to public
								safety.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Do Not Track & Privacy Control'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								3. How we respond to Do Not Track signals & Global Privacy Control
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Our website does not respond to and does not support the Do Not Track (DNT) header
								request field.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Cookies'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								4. Cookies
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Our website uses cookies. For more information about cookies, please refer to our Cookie
								Policy on our{" "}
								<Typography
									component='span'
									role='link'
									aria-label='Cookie Policy (CA)'
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
										navigate("/cookie-policy-ca");
									}}>
									Cookie Policy (CA)
								</Typography>{" "}
								webpage.
							</Typography>
						</Box>
						<Box component='section' role='region' aria-label='Security'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								5. Security
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
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
								6. Third-party websites
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
								7. Amendments to this privacy statement
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
								8. Accessing and modifying your data
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								If you have any questions or want to know which personal data we have about you, please
								contact us. Please make sure to always clearly state who you are, so that we can be
								certain that we do not modify or delete any data of the wrong person. We shall provide
								the requested information only upon receipt of a verifiable consumer request. You can
								contact us by using the information below.
							</Typography>
							<Typography
								component='h3'
								sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
								8.1 You have the following rights with respect to your personal data
							</Typography>
							<ol
								type='a'
								aria-label='The rights you have'
								style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px" }}>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										You may submit a request for access to the data we process about you.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										You may request an overview, in a commonly used format, of the data we process
										about you.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										You may request correction or deletion of the data if it is incorrect or not or
										no longer relevant. Where appropriate, the amended information shall be
										transmitted to third parties having access to the information in question.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										You have the right to withdraw consent at any time, subject to legal or
										contractual restrictions and reasonable notice. You will be informed of the
										implications of such withdrawal.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										You have the right to address a challenge concerning non-compliance with PIPEDA
										to our organization and, if the issue is not resolved, to the Office of the
										Privacy Commissioner of Canada.
									</Typography>
								</li>
								<li>
									<Typography
										sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
										We shall give access to personal information in an alternative format to an
										individual with a sensory disability who has a right of access to personal
										information under PIPEDA and who requests that it be transmitted in the
										alternative format if (a) a version of the information already exists in that
										format; or (b) its conversion into that format is reasonable and necessary in
										order for the individual to be able to exercise rights.
									</Typography>
								</li>
							</ol>
						</Box>
						<Box component='section' role='region' aria-label='Children'>
							<Typography
								component='h2'
								sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
								9. Children
							</Typography>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								Our website is not designed to attract children and it is not our intent to collect
								personal data from children under the age of consent in their country of residence. We
								therefore request that children under the age of consent do not submit any personal data
								to us.
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
						<Box component='section' role='region' aria-label='Contact Representative Information'>
							<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
								We have appointed a contact person for the organization's policies and practices and to
								whom complaints or inquiries can be forwarded:
							</Typography>
							<Typography
								aria-label='Contact Name'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Martin Lucas
							</Typography>
							<Typography
								aria-label='Contact Company'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								Casa Capistrano, LLC
							</Typography>
							<Typography
								aria-label='Contact Email'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
								PO Box 4297
							</Typography>
							<Typography
								aria-label='Contact Phone Number'
								sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 4 }}>
								Cedar Hill, TX 75106
							</Typography>
						</Box>
					</Box>
				</FadeIn>
			</Container>
		</Box>
	);
};

export default PrivacyCA;
