import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { MdOutlineAnimation } from "react-icons/md";




export const Header = () => {


    const [btnSmallClass, setBtnSmallClass] = useState(false)
    
    return (
        <>
        <header className={styles.header}>

        <div className={styles.logo}>
        <Link href="/">
        
        <a> <div className={styles.sublogo}> <MdOutlineAnimation/> SVG-ANIMATOR</div> </a>
        </Link>
        </div>

        <div className={styles.menu} onClick={() => {setBtnSmallClass(!btnSmallClass)} } ><IoMenu/></div>

        <ul className={styles.btns}>
            <li> 
            <Link href="/app">
            <a>Animate</a> 
            </Link>
            </li>
            <li> 
            <Link href='/library'>
            <a >Library</a> 
            </Link>
            </li>
            <li>
            <Link href='/guide'>
            <a>Guide</a>  
            </Link>
            </li>
            <li> 
            <Link href='/about'>
            <a >About</a> 
            </Link>
            </li> 
        </ul>

        </header>


        <ul className={!btnSmallClass?styles.btnsSmallH:styles.btnsSmallV}>
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


        </>
    )
}
