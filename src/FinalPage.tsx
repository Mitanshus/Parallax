import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import secondBackground from "./assets/BG.svg";
import mobileBackground from "./assets/BG_half.png";
import { isMobile, MobileView } from "react-device-detect";
import { Typography } from "@mui/material";

const FinalPage = () => {
	const alignCenter = { display: "flex", alignItems: "center" };
	console.log(isMobile);
	return (
		<div>
			<div className={styles.background} />

			<Parallax pages={5.4}>
				<ParallaxLayer
					offset={0}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "center" }}
				>
					<div className="content-wrapper">
						<div className="content">
							<div className="link-container">
								<p className={styles.scrollText}>
									Scroll down To Get in Contact with us
								</p>
							</div>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 1, end: 6 }}
					style={{ ...alignCenter, justifyContent: "flex-start" }}
				>
					<div className={` ${styles.sticky}`}>
						<div
							className="left-half-bg"
							style={{
								backgroundImage: isMobile
									? `$url(${mobileBackground})`
									: `url(${secondBackground})`,
							}}
						/>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1.5}
					speed={0.5}
					style={{
						...alignCenter,
						justifyContent: isMobile ? "center" : "flex-end",
					}}
				>
					<div className={`${styles.card} ${styles.parallax} ${styles.red} `}>
						<Typography fontWeight={"bold"}>Our Website:</Typography>
						<Typography
							component="a"
							href="https://www.paradisefoodcourt.in/"
							target="_blank"
							color="white"
							sx={{ textDecoration: "underline" }}
						>
							paradisefoodcourt.in
						</Typography>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2.5}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "flex-end" }}
				>
					<div className={`${styles.card} ${styles.parallax} ${styles.red}`}>
						<Typography fontWeight={"bold"}>EMAIL ADDRESS:</Typography>
						{isMobile && <br />}
						<Typography
							component="a"
							href="mailto:feedback@paradisefoodcourt.in"
							color="white"
							sx={{
								textDecoration: "underline",
								cursor: "pointer",
								textWrap: "wrap",
							}}
						>
							feedback@paradisefoodcourt.in
						</Typography>
					</div>
				</ParallaxLayer>
				<ParallaxLayer
					offset={3.5}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "flex-end" }}
				>
					<div className={`${styles.card} ${styles.parallax} ${styles.red}`}>
						<Typography fontWeight={"bold"}>CONTACT NO:</Typography>
						<Typography
							component="a"
							href="tel:+91 040-67408400"
							color="white"
							sx={{
								textDecoration: "underline",
								cursor: "pointer",
								// paddingBottom: "1rem",
							}}
						>
							040-67408400
						</Typography>
					</div>
				</ParallaxLayer>
				<ParallaxLayer
					offset={4.5}
					speed={0.5}
					style={{ ...alignCenter, justifyContent: "flex-end" }}
				>
					<div className={`${styles.card} ${styles.parallax} ${styles.red}`}>
						<Typography fontWeight={"bold"}>Thank You For Your time</Typography>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default FinalPage;
