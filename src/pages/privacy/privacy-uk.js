import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Divider } from "@mui/material";

const PrivacyUK = () => {
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
						Privacy Statement (UK)
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
							This privacy statement was last changed on September 9, 2022, last checked on September 9,
							2022, and applies to citizens and legal permanent residents of the United Kingdom.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							{`In this privacy statement, we explain what we do with the data we obtain about you via `}
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
							. We recommend you carefully read this statement. In our processing we comply with the
							requirements of privacy legislation. That means, among other things, that:
						</Typography>
						<ul style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									we clearly state the purposes for which we process personal data. We do this by
									means of this privacy statement;
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									we aim to limit our collection of personal data to only the personal data required
									for legitimate purposes;
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									we first request your explicit consent to process your personal data in cases
									requiring your consent;
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									we take appropriate security measures to protect your personal data and also require
									this from parties that process personal data on our behalf;
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									we respect your right to access your personal data or have it corrected or deleted,
									at your request.
								</Typography>
							</li>
						</ul>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							If you have any questions, or want to know exactly what data we keep of you, please contact
							us.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							1. Purpose, data and retention period
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							We may collect or receive personal information for a number of purposes connected with our
							business operations which may include the following:
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
							1.1 To support services or products that a customer wants to buy or has purchased
						</Typography>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								fontStyle: "italic",
								mb: 2,
							}}>
							For this purpose we use the following data:
						</Typography>
						<ul style={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px" }}>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									A first and last name
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									Internet activity information, including, but not limited to, browsing history,
									search history, and information regarding a consumer's interaction with an Internet
									Web site, application, or advertisement
								</Typography>
							</li>
						</ul>
						<Typography
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
							We retain this data upon termination of the service for the following number of months: 12
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							2. Cookies
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Our website uses cookies. For more information about cookies, please refer to our{" "}
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
									navigate("/cookie-policy-uk");
								}}>
								Cookie Policy
							</Typography>
							.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							3. Security
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							We are committed to the security of personal data. We take appropriate security measures to
							limit abuse of and unauthorized access to personal data. This ensures that only the
							necessary persons have access to your data, that access to the data is protected, and that
							our security measures are regularly reviewed.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							4. Third-party websites
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							This privacy statement does not apply to third-party websites connected by links on our
							website. We cannot guarantee that these third parties handle your personal data in a
							reliable or secure manner. We recommend you read the privacy statements of these websites
							prior to making use of these websites.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							5. Amendments to this privacy statement
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							We reserve the right to make amendments to this privacy statement. It is recommended that
							you consult this privacy statement regularly in order to be aware of any changes. In
							addition, we will actively inform you wherever possible.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							6. Accessing and modifying your data
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							If you have any questions or want to know which personal data we have about you, please
							contact us. You can contact us by using the information below. You have the following
							rights:
						</Typography>
						<ul style={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px" }}>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									You have the right to know why your personal data is needed, what will happen to it,
									and how long it will be retained for.
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									Right of access: You have the right to access your personal data that is known to
									us.
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									Right to rectification: you have the right to supplement, correct, have deleted or
									blocked your personal data whenever you wish.
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									If you give us your consent to process your data, you have the right to revoke that
									consent and to have your personal data deleted.
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									Right to transfer your data: you have the right to request all your personal data
									from the controller and transfer it in its entirety to another controller.
								</Typography>
							</li>
							<li>
								<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
									Right to object: you may object to the processing of your data. We comply with this,
									unless there are justified grounds for processing.
								</Typography>
							</li>
						</ul>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Please make sure to always clearly state who you are, so that we can be certain that we do
							not modify or delete any data of the wrong person.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							7. Submitting a complaint
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							If you are not satisfied with the way in which we handle (a complaint about) the processing
							of your personal data, you have the right to submit a complaint to the Information
							Commissioner’s Office:
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Wycliffe House
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Water Lane
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Wilmslow
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Cheshire
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							SK9 5AF
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							8. Children
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Our website is not designed to attract children and it is not our intent to collect personal
							data from children under the age of consent in their country of residence. We therefore
							request that children under the age of consent do not submit any personal data to us.
						</Typography>

						<Typography sx={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "22px", mb: 2 }}>
							9. Contact details
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
									navigate("/");
								}}>
								https://casacapistrano.com
							</Typography>
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Email: info@casacapistrano.com
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 4 }}>
							Phone number: (620)-837-8452
						</Typography>
					</Box>
				</FadeIn>
			</Container>
		</Box>
	);
};

export default PrivacyUK;
