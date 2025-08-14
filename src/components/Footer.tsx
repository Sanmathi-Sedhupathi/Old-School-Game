import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import FooterWave from "/public/aasets/footer_wave.png";

export default function Footer() {
	return (
		<>
			<section className={styles.newsletterSection}>
				<div className={styles.newsletterBox}>
					<h3>Subscribe to our Newsletter</h3>
					<p>
						Don&apos;t miss out on the fun. Be the first to know about our new games,
						exclusive offers, and more — straight to your inbox.
					</p>
					<form className={styles.newsletterForm}>
						<input type="email" placeholder="Enter Email Address" required />
						<button type="submit">Subscribe</button>
					</form>
					<p className={styles.privacyNote}>
						Your privacy is important. I never share your email.
					</p>
				</div>
			</section>

			<div className={styles.footerWrapper}>
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

				<footer className={styles.footerContainer}>
					<div className={styles.footerContent}>
						<div className={styles.footerLeft}>
							<h2>OLD SCHOOL GAMES</h2>
							<p>Unlock Your Mind&apos;s Potential</p>
						</div>

						<div className={styles.footerLinks}>
							<div>
								<p>Play Game</p>
								<Link href="/game/tic-tac-toe/single-player">Tic Tac Toe</Link>
								<Link href="/game/sudoku">Sudoku</Link>
								<Link href="https://ajaynegi.web.app/contact/">Contact Us</Link>
								<Link href="/contact">Contact Page</Link>
							</div>
							<div>
								<p>Contribution</p>
								<Link href="https://github.com/ajaynegi45/Old-School-Game/issues">Issues</Link>
								<Link href="https://github.com/ajaynegi45/Old-School-Game/blob/main/README.md">About Us</Link>
								<Link href="https://github.com/ajaynegi45/Old-School-Game">Contribution</Link>
							</div>
						</div>
					</div>

					<p className={styles.copyright}>
						&copy; 2025 Old School Games. All Rights Reserved
					</p>
				</footer>
			</div>
		</>
	);
}
