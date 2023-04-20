import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import { Container, Box, Typography, Divider } from "@mui/material";

const Imprint = () => {
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
						Imprint
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
							This imprint was last updated on September 9, 2022.
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
							The owner of this website is:
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 0.5 }}>
							Casa Capistrano Casa Capistrano LLC
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
							Email: martin@casacapistrano.com
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 4 }}>
							Phone number: 817-917-6520
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 700, fontSize: "14px", mb: 2 }}>
							The legal representative(s) of Casa Capistrano Casa Capistrano LLC:
						</Typography>
						<Typography sx={{ fontFamily: "Roboto", fontWeight: 300, fontSize: "14px", mb: 2 }}>
							Martin Lucas
						</Typography>
						<Typography
							sx={{
								fontFamily: "Roboto",
								fontWeight: 300,
								fontStyle: "italic",
								fontSize: "14px",
								mb: 6,
							}}>
							We are not willing or obliged to participate in dispute resolution procedures before a
							consumer arbitration board.
						</Typography>
					</Box>
				</FadeIn>
			</Container>
		</Box>
	);
};

export default Imprint;
