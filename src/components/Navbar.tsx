"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import styles from "@/components/navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={styles["navbar-container"]}>
            <nav className={styles["navbar"]}>
                <Link href="/" className={styles["brand"]}>
                    <h3 className={styles["title"]}>Old School Game</h3>
                </Link>

                <button className={styles["menu-icon"]} onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div className={`${styles["nav-links"]} ${menuOpen ? styles["active"] : ""}`}>
                    <Link href="/" className={styles["nav-link"]} onClick={closeMenu}>Home</Link>
                    <Link href="/game" className={styles["nav-link"]} onClick={closeMenu}>Games</Link>
                    <Link href="https://github.com/ajaynegi45/Old-School-Game" target="_blank" className={styles["nav-link"]} onClick={closeMenu}>GitHub</Link>
                    <button className={styles["icon-button"]} aria-label="User profile">
                        <FaUserCircle className={styles["user-icon"]} />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
