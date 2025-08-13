import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import FooterWave from "/public/aasets/footer_wave.png";

export default function Footer() {
	return (
		<>
			{/* Newsletter stays outside the wave area */}
			<section className={styles.newsletterSection}>
				<div className={styles.newsletterBox}>
					<h3>Subscribe to our Newsletter</h3>
					<p>
						Don’t miss out on the fun. Be the first to know about our new games,
						exclusive offers and more, straight into your inbox
					</p>
					<form className={styles.newsletterForm}>
						<input type="email" placeholder="Enter Email Address" required />
						<button type="submit">Subscribe</button>
					</form>
				</div>
			</section>

			<div className={styles.footerWrapper}>
				{/* Wave as background */}
				<div className={styles.waveBackground}>
	<Image
		src={FooterWave}
		alt="Footer Wave"
		width={1920}
		height={400}
		className={styles.waveImage}
		priority
	/>
</div>


				{/* Actual Footer Section */}
				<footer className={styles.footerContainer}>
					<div className={styles.footerContent}>
						<div className={styles.footerLeft}>
							<h2>OLD SCHOOL GAMES</h2>
							<p>Unlock Your Mind's Potential</p>
						</div>

						<div className={styles.footerLinks}>
							<div>
								<p>Games</p>
								<Link href="/game/tic-tac-toe/single-player">Tic Tac Toe</Link>
								<Link href="/game/sudoku">Sudoku</Link>
							</div>
							<div>
								<p>Resources</p>
								<Link href="https://github.com/ajaynegi45/Old-School-Game/issues">Issues</Link>
								<Link href="https://github.com/ajaynegi45/Old-School-Game/blob/main/README.md">About Us</Link>
								<Link href="https://github.com/ajaynegi45/Old-School-Game">Contribution</Link>
							</div>
						</div>
					</div>

					<p className={styles.copyright}>
						© 2025 Old School Games. All Rights Reserved
					</p>
				</footer>
			</div>
		</>
	);
}
