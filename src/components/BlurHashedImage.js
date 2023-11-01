import { Box, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function BlurHashedImage({
	cardMedia,
	src,
	hash,
	alt,
	height,
	mt,
	removeShadow,
	edges,
	ignoreHeight,
	banner,
	offsetTop,
	...props
}) {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.onload = () => setImageLoaded(true);
		img.src = src;
	}, [src]);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: height ?? "300px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: offsetTop ?? 0,
			}}>
			{!imageLoaded && (
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
			)}
			{cardMedia ? (
				<CardMedia
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={ignoreHeight ? "" : height}
					image={src}
					style={{ position: "absolute", top: 0, left: 0, opacity: imageLoaded ? 1 : 0 }}
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						opacity: imageLoaded ? 1 : 0,
						height: ignoreHeight ? "" : height,
						objectFit: props.objectfit,
						...props,
					}}
					{...props}
				/>
			) : (
				<Box
					component='img'
					loading='lazy'
					title={alt}
					alt={alt}
					height={ignoreHeight ? "" : height}
					width={props.width ?? "100%"}
					mt={mt}
					sx={{
						objectFit: "cover",
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						opacity: imageLoaded ? 1 : 0,
						// margin: banner ? undefined : "auto",
						height: ignoreHeight ? "auto" : height,
						...props,
					}}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						margin: "auto",
						// margin: banner ? undefined : "auto",
						opacity: imageLoaded ? 1 : 0,
					}}
					src={src}
					{...props}
				/>
			)}
		</Box>
	);
}

export default BlurHashedImage;
