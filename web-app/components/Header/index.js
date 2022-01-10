import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>

        <div className={styles.logo}>
        <a href='/' > logo </a> </div>

        <ul className={styles.btns}>
            <li> 
            <a href='app' >make ur animation</a> 
            </li>
            <li> 
            <a href='library' >library</a> 
            </li>
            <li>
            <a href='guide' >how to use</a>  
            </li>
            <li> 
            <a href='about' >about</a> 
            </li>
        </ul>

        </header>
    )
}
