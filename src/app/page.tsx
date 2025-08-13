"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "/public/aasets/hero.png";
import CurveImage from "/public/aasets/curve.png";
import TicTacToeImage from "/public/aasets/tic-tac-toe.png";
import SudokuImage from "/public/aasets/sudoku.png";
import styles from "./page.module.css";

const faqs = [
	{
		question: "What are the benefits of playing brain training games?",
		answer:
			"Brain training games can help improve memory, focus, problem-solving skills, and cognitive flexibility. Regular play may enhance your ability to concentrate and think strategically.",
	},
	{
		question: "Are these games suitable for all ages?",
		answer:
			"Yes! Our classic games are designed to be enjoyed by players of all ages. They offer different difficulty levels to accommodate various skill levels.",
	},
	{
		question: "How often should I play to see improvements?",
		answer:
			"For optimal results, we recommend playing for 15-30 minutes daily. Consistency is key to developing and maintaining cognitive skills.",
	},
	{
		question: "Can I play these games offline?",
		answer:
			"Once loaded, most of our games can be played offline. However, some features like leaderboards and progress tracking require an internet connection.",
	},
];

export default function Home() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className={styles.container}>
			{/* Hero Section */}
			<section className={styles.heroSection}>
				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>
						Remember the Old Days
						<br />
						with Classic Games
					</h1>
					<p className={styles.heroSubtitle}>
						Step back in time where classic meets modern-day brain training
					</p>
					<Link href="/game" className={styles.primaryCTA}>
						Explore Games
					</Link>
				</div>
				<div className={styles.heroImageContainer}>
					<Image
						src={HeroImage}
						alt="Classic Games Collection"
						width={1400}
						height={400}
						className={styles.heroImage}
						priority={true}
					/>
				</div>
			</section>
			{/* Overlapping Curve Wave - positioned as background */}
			<div className={styles.curveWaveContainer}>
				<Image
					src={CurveImage}
					alt="Wave Overlap"
					className={styles.curveImage}
					priority={true}
					width={1400}
					height={400}
				/>
			</div>

			{/* Games Section with Wave Background */}
			<section className={styles.gamesSection}>


				<div className={styles.gamesContent}>
					<div className={styles.trendingGames}>
						<h2 className={styles.sectionTitle}>Trending Games</h2>

						{/* Tic-Tac-Toe */}
						<div className={styles.gameCard}>
							<div className={styles.gameImages}>
								<div className={styles.imageStack}>
									<Image
										src={TicTacToeImage}
										alt="Tic-Tac-Toe Pink Board"
										width={400}
										height={400}
										className={styles.image1}
									/>
								</div>
							</div>
							<div className={styles.gameInfo}>
								<h3 className={styles.gameTitle}>Tic-Tac-Toe Reimagined</h3>
								<p className={styles.gameDescription}>
									Tic-Tac-Toe isn't just for kids anymore! Dive into our elegant version of the age-old classic. Whether you're testing your memory, sharpening strategy, or just relaxing — it's a quick and clever workout for your brain. Play solo or with a friend!<br /><br />
									<b>“Think you’ve mastered the grid? Prove it.”</b>
								</p>
								<div className={styles.gameButtons}>
									<Link
										href="/game/tic-tac-toe/single-player"
										className={styles.playButton}
									>
										Play Now
									</Link>
									<Link
										href="/game/tic-tac-toe/single-player"
										className={styles.howItWorksButton}
									>
										How It Works
									</Link>
								</div>
							</div>
						</div>

						{/* Sudoku */}
						<div className={styles.gameCard}>
							<div className={styles.gameInfo}>
								<h3 className={styles.gameTitle}>Sudoku Games</h3>
								<p className={styles.gameDescription}>
									Dive into the world of logic and numbers. Our Sudoku is designed to sharpen your focus, test your problem-solving skills, and keep your brain engaged — all in a distraction-free, modern interface.
									<br /><br />
									<b>“Can you fill the grid without breaking a sweat?”</b>

								</p>
								<div className={styles.gameButtons}>
									<Link href="/game/sudoku" className={styles.playButton}>
										Play Now
									</Link>
									<Link href="/game/sudoku" className={styles.howItWorksButton}>
										How It Works
									</Link>
								</div>
							</div>
							<div className={styles.gameImages}>
								<div className={styles.imageStack}>
									<Image
										src={SudokuImage}
										alt="Sudoku Dark Board"
										width={500}
										height={500}
										className={styles.sudokuImage1}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className={styles.missionSection}>
				<div className={styles.missionContent}>
					<h2 className={styles.missionTitle}>Our Mission</h2>
					<p className={styles.missionText}>
						In today's fast-paced world of short-form content and instant
						gratification, we're building a collection of thoughtful,
						brain-training games that help you develop deep focus, improve
						memory, and strengthen cognitive abilities.
					</p>

					<div className={styles.benefitsGrid}>
						<div className={styles.benefitCard}>
							<div className={styles.benefitIcon}>🧠</div>
							<h3>Memory Enhancement</h3>
							<p>
								Improve working memory and pattern recognition through strategic
								gameplay
							</p>
						</div>
						<div className={styles.benefitCard}>
							<div className={styles.benefitIcon}>🎯</div>
							<h3>Focus Training</h3>
							<p>Develop sustained attention and concentration skills</p>
						</div>
						<div className={styles.benefitCard}>
							<div className={styles.benefitIcon}>⚡</div>
							<h3>Strategic Thinking</h3>
							<p>Enhance problem-solving and logical reasoning abilities</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className={styles.faqSection}>
				<div className={styles.faqContent}>
					<h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
					<div className={styles.faqGrid}>
						{faqs.map((faq, idx) => (
							<div
								key={idx}
								className={styles.faqItem}
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
								style={{ cursor: "pointer" }}
							>
								<h3 className={styles.faqQuestion}>
									{faq.question}
									<span style={{ float: "right", fontWeight: "bold" }}>
										{openIndex === idx ? "−" : "+"}
									</span>
								</h3>
								{openIndex === idx && (
									<p className={styles.faqAnswer}>{faq.answer}</p>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className={styles.finalCTA}>
				<div className={styles.finalCTAContent}>
					<h2>Ready to Train Your Brain?</h2>
					<p>
						Join thousands of players who are already improving their cognitive
						function
					</p>
					<div className={styles.finalCTAButtons}>
						<Link href="/game" className={styles.finalPrimaryCTA}>
							Start Playing
						</Link>
						<Link
							href="https://github.com/ajaynegi45/Old-School-Game"
							className={styles.finalSecondaryCTA}
						>
							Contribute
						</Link>
					</div>
				</div>
			</section>

		</div>
	);
}
