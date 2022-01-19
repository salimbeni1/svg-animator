import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className={styles.header}>

        <div className={styles.logo}>
        <Link href="/">
        <a> logo </a> 
        </Link>
        </div>

        <ul className={styles.btns}>
            <li> 
            <Link href="/app">
            <a>make ur animation</a> 
            </Link>
            </li>
            <li> 
            <Link href='/library'>
            <a  >library</a> 
            </Link>
            </li>
            <li>
            <Link href='/guide'>
            <a>how to use</a>  
            </Link>
            </li>
            <li> 
            <Link href='/about'>
            <a >about</a> 
            </Link>
            </li> 
        </ul>

        </header>
    )
}
