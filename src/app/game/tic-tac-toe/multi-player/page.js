"use client";
import { useState, useEffect, useCallback } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import io from 'socket.io-client';
import styles from "./page.module.css";

// https://oldschoolgame.vercel.app use in production
const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001');

const Game = () => {


    const [board, setBoard] = useState(Array(9).fill(null)); // Tic Tac Toe board
    const [isXNext, setIsXNext] = useState(true); // Determines if 'X' is the next player
    const [gameNumber, setGameNumber] = useState(''); // Game number for joining games
    const [currentGame, setCurrentGame] = useState(null); // The current game being played
    const [status, setStatus] = useState(''); // Status message to display to the user
    const [mySymbol, setMySymbol] = useState(''); // Player's symbol ('X' or 'O')
    const [hasStarted, setHasStarted] = useState(false); // Flag to check if the game has started

    const [optionSelected, setOptionSelected] = useState(false);
    const [optionNewGame, setOptionNewGame] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        let statusTimer;
        if (status) {
            statusTimer = setTimeout(() => {
                setStatus('');
            }, 10000); // 10000 milliseconds = 10 seconds
        }
        return () => {
            clearTimeout(statusTimer); // Clear the timer on cleanup
        };
    }, [status]);

    useEffect(() => {
        socket.on('move', ({gameNumber, index, symbol}) => {
            console.log(`Game Number: ${gameNumber}`);
            setBoard(prevBoard => {
                const newBoard = [...prevBoard];
                newBoard[index] = symbol;
                setIsXNext(symbol !== 'X');
                return newBoard;
            });
        });

        socket.on('gameCreated', ({gameNumber}) => {
            setCurrentGame(gameNumber);
            setStatus(`Game created. Your game number is ${gameNumber}`);
        });

        socket.on('gameJoined', ({gameNumber}) => {
            setCurrentGame(gameNumber);
            setStatus(`Joined game ${gameNumber}`);
        });

        socket.on('userJoined', ({userId}) => {
            setHasStarted(true);
            setStatus(`User ${userId} joined the game`);
            setGameStarted(true);
        });

        socket.on('resetGame', () => {
            reset(false);
        });

        socket.on('error', (error) => {
            setStatus(`Error: ${error}`);
        });

        return () => {
            socket.off('move');
            socket.off('gameCreated');
            socket.off('gameJoined');
            socket.off('userJoined');
            socket.off('resetGame');
            socket.off('error');
        };
    }, [reset]);

    const handleClick = (index) => {
        if (!currentGame) {
            setStatus('Create or join a game first!');
            return;
        }
        if (!hasStarted) {
            setStatus('Please wait for opponent to join');
            return;
        }
        if (board[index] || calculateWinner(board)) return;

        if (isXNext && mySymbol !== 'X') {
            setStatus('Please wait for opponent\'s move');
            return;
        }

        if (isXNext === false && mySymbol === 'X') {
            setStatus('Please wait for opponent\'s move');
            return;
        }

        const symbol = isXNext ? 'X' : 'O';

        socket.emit('move', {gameNumber: currentGame, index, symbol});
    };


    const reset = useCallback((isUserInitiated = true) => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        if (isUserInitiated) {
            socket.emit('resetGame', currentGame);
        }
    }, [currentGame]);

    const handleCreateGame = () => {
        setMySymbol('X');
        socket.emit('createGame');
    };

    const handleJoinGame = () => {
        if (!gameNumber) return;
        setMySymbol('O');
        socket.emit('joinGame', gameNumber);
    };

    const winner = calculateWinner(board);
    const isBoardFull = board.every(cell => cell !== null);
    const gameStatus = winner ? `${winner} is winner 🎉` : isBoardFull ? 'Match Tie 🙁' : `You are ${mySymbol} `;


    return (
        <>

            {/*<div id={styles.bgGrid}>*/}
            {/*    <div id={styles.blurGrid}></div>*/}
            {/*</div>*/}


            {!gameStarted && (
                <div className={styles.urlContainer}>{
                    optionSelected ? (
                        optionNewGame ? (
                            <div>
                                <div className={styles.urlWrapper}>
                                    <p className={styles.urlText}>{currentGame === null ? 'Refresh the Page' : currentGame}</p>
                                    <CopyToClipboard text={currentGame} onCopy={() => setStatus('Game number copied!')}>
                                        <button className={styles.copyButton}>Copy Code</button>
                                    </CopyToClipboard>
                                </div>
                                <p className={styles.shareText}>{status}</p>
                            </div>
                        ) : (
                            <div>
                                <div className={styles.urlWrapper}>
                                    <input className={styles.urlText} placeholder={'Enter the Code'} type="text"
                                           value={gameNumber}
                                           onChange={(e) => setGameNumber(e.target.value)}/>
                                    <button className={styles.copyButton} onClick={() => {
                                        handleJoinGame();
                                        setGameStarted(true);
                                    }}>Join Game
                                    </button>
                                </div>
                                <p className={styles.shareText}>{status}</p>
                            </div>
                        )
                    ) : (
                        <div>
                            <div className={styles.urlWrapperButton}>
                                <button className={styles.copyButton} onClick={() => {
                                    handleCreateGame();
                                    setOptionNewGame(true);
                                    setOptionSelected(true);
                                }}>Create Game
                                </button>
                                <button className={styles.copyButton} onClick={() => setOptionSelected(true)}>Join Game
                                </button>
                            </div>
                            <p className={styles.shareText}>Game On! Create New or Join Existing</p>
                        </div>
                    )}
                </div>)}


            {
                (currentGame && gameStatus) &&
                <div className={styles.gameStatusContainer}>
                    <p>{gameStatus}</p>
                    <p>Current Turn: {isXNext ? 'X' : 'O'}</p>

                </div>
            }



            <div>
                <p className={styles.statusError}>{status}</p>
            </div>

            <div className={styles.gridContainer}>
                {board.map((cell, index) => (
                    <button key={index} className={styles.gridButton} onClick={() => handleClick(index)}>
                        {cell}
                    </button>
                ))}
            </div>


            {/* Show reset button and result message if the game is over */}
            {(gameStatus.includes("winner") || gameStatus.includes('Tie')) && (
                <div className={styles.resetButtonContainer}>
                    {gameStatus.includes('Tie') ? (
                        <h2 className={styles.winMessage}>It&apos;s a draw!</h2>
                    ) : (
                        <h2 className={styles.winMessage}>
                            {winner === mySymbol ? "You win! 🎉" : "You lose the game 😞"}
                        </h2>
                    )}
                    {/* Button to reset the game */}
                    <button type="button" className={styles.resetButton} onClick={() => reset(true)}>Reset</button>
                </div>
            )}



        </>
    );
};

const calculateWinner = (board) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};

export default Game;
