import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { Container, Box, Typography, Divider } from "@mui/material";

const Disclaimer = () => {
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
						Disclaimer
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
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							Casa Capistrano is committed to keeping this website up to date and accurate. Should you
							nevertheless encounter anything that is incorrect or out of date, we would appreciate it if
							you could let us know. Please indicate where on the website you read the information. We
							will then look at this as soon as possible. Please send your response by email to:
							martin@casacapistrano
						</Typography>

						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							We are not liable for loss as a result of inaccuracies or incompleteness, nor for loss
							resulting from problems caused by or inherent to the dissemination of information through
							the internet, such as disruptions or interruptions. When using web forms, we strive to limit
							the number of required fields to a minimum. For any loss suffered as a result of the use of
							data, advice or ideas provided by or on behalf of Casa Capistrano via this website, Casa
							Capistrano accepts no liability.
						</Typography>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							Responses and privacy inquiries submitted by email or using a web form will be treated in
							the same way as letters. This means that you can expect a response from us within a period
							of 1 month at the latest. In the case of complex requests, we will let you know within 1
							month if we need a maximum of 3 months.
						</Typography>

						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							Any personal data you provide us with in the context of your response or request for
							information will only be used in accordance with our privacy statement.
						</Typography>

						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							Casa Capistrano shall make every reasonable effort to protect its systems against any form
							of unlawful use. Casa Capistrano shall implement appropriate technical and organizational
							measures to this end, taking into account, among other things, the state of the art.
							However, it shall not be liable for any loss whatsoever, direct and/or indirect, suffered by
							a user of the website, which arises as a result of the unlawful use of its systems by a
							third party.
						</Typography>

						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							Casa Capistrano accepts no responsibility for the content of websites to which or from which
							a hyperlink or other reference is made. Products or services offered by third parties shall
							be subject to the applicable terms and conditions of those third parties.
						</Typography>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							All intellectual property rights to content on this website are vested in Casa Capistrano.
						</Typography>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 2,
							}}>
							Copying, disseminating and any other use of these materials is not permitted without the
							written permission of Casa Capistrano, except and only insofar as otherwise stipulated in
							regulations of mandatory law (such as the right to quote), unless specific content dictates
							otherwise.
						</Typography>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontSize: "14px",
								textAlign: "justify",
								mb: 4,
							}}>
							If you have any questions or problems with the accessibility of the website, please do not
							hesitate to contact us.
						</Typography>
					</Box>
				</FadeIn>
			</Container>
		</Box>
	);
};

export default Disclaimer;
