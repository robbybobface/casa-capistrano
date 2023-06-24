import { Typography } from "@mui/material";
import React from "react";

function SkipToMain() {
	return (
		<Typography
			aria-label='skip to main content'
			component='a'
			href='#main'
			sx={{
				left: "-999px",
				position: "absolute",
				top: "auto",
				width: 1,
				height: 1,
				overflow: "hidden",
				zIndex: "-999",
				"&:focus, &:active": {
					color: "white",
					backgroundColor: "primary.main",
					left: "auto",
					top: "auto",
					width: "auto",
					height: "auto",
					overflow: "auto",
					zIndex: "-99999",
					padding: "1rem",
					margin: "10px 35%",
					borderRadius: "15px",
					border: "2px solid yellow",
				},
			}}>
			Skip to main content
		</Typography>
	);
}

export default SkipToMain;
