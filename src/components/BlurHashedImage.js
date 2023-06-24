import { Box, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurHashedImage({ cardMedia, src, hash, alt, height, mt, removeShadow, edges, ignoreHeight, ...props }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => setImageLoaded(true);
		img.src = src;
	}, [src]);

	return (
		<>
			{!imageLoaded ? (
				<Box
					aria-busy
					mt={mt}
					position={"relative"}
					sx={{
						display: "flex",
						width: "100%",
						height: height ?? "270px",
					}}>
					<Blurhash
						hash={hash}
						width={"100%"}
						height={height ?? "300px"}
						resolutionX={64}
						resolutionY={64}
						punch={1}
					/>
					<Box className={`skeleton-loading`} />
					{edges && <Box className='inset-edges' />}
				</Box>
			) : cardMedia ? (
				<CardMedia
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={ignoreHeight ? "" : height}
					image={src}
					sx={{ height: ignoreHeight ? "" : height, objectFit: props.objectfit, ...props }}
					{...props}
				/>
			) : (
				<Box
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={ignoreHeight ? "" : height}
					mt={mt}
					sx={{ height: ignoreHeight ? "" : height, ...props }}
					src={src}
					{...props}
				/>
			)}
		</>
	);
}

export default BlurHashedImage;
