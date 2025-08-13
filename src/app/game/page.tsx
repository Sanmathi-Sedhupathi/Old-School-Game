import React from 'react'
import styles from './page.module.css'
import Card from '@/components/Card'
import TicTacToeImage from '/public/tic-tac-toe.svg'
import SudokuImage from '/public/SudokuLogo.webp'
import SchulteImage from '/public/SchulteImage.webp'
import MemoryFlip from '/public/MemoryFlip.png'

const SelectGame = () => {
  return (
    <div className={styles.container}>
      {/* Background Grid */}
      <div id={styles.bgGrid}>
        <div id={styles.blurGrid}></div>
      </div>

      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Choose Your Brain Game</h1>
          <p className={styles.pageSubtitle}>
            Select a game to start training your cognitive abilities. Each game is designed to target specific brain functions.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className={styles.gamesSection}>
        <div className={styles.gamesGrid}>
          <Card
            image={TicTacToeImage}
            name={'Tic Tac Toe'}
            link={'tic-tac-toe/single-player'}
            backgroundColor={'#FF3737'}
            textColor={'white'}
            description={'Strategic thinking and planning'}
          />
          <Card
            image={SudokuImage}
            name={'Sudoku'}
            link={'sudoku'}
            backgroundColor={'#22C55E'}
            description={'Logical reasoning and pattern recognition'}
          />
          <Card
            image={SchulteImage}
            name={'Schulte Table'}
            link={'schulte-table'}
            backgroundColor={'#3B82F6'}
            textColor={'white'}
            description={'Attention span and visual scanning'}
          />
          <Card
            image={MemoryFlip}
            name={'Memory Flip Card'}
            link={'memory-flip-card'}
            backgroundColor={'#760172'}
            textColor={'white'}
            description={'Working memory and concentration'}
          />
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoContent}>
          <h2>Why Brain Training Games?</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>🧠 Cognitive Enhancement</h3>
              <p>Regular brain training can improve memory, attention, and processing speed.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>🎯 Focus Development</h3>
              <p>These games help develop sustained attention and concentration skills.</p>
            </div>
            <div className={styles.infoCard}>
              <h3>⚡ Mental Agility</h3>
              <p>Challenge your brain with strategic thinking and problem-solving.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SelectGame
