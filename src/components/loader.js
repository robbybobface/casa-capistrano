import React from "react";
import { Box } from "@mui/material";
import { HashLoader } from "react-spinners";

export const Loader = ({ index }) => {
	return (
		<Box
			sx={{
				minHeight: { xs: "calc(100vh - 60px)", sm: "calc(100vh - 70px)", lg: "calc(100vh - 75px)" },
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#fffdf7",
			}}>
			<HashLoader color='#6c0d0f' loading={true} size={100} aria-busy aria-label='Page is Loading' />
		</Box>
	);
};

export default Loader;
