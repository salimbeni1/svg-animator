import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { MdOutlineAnimation } from "react-icons/md";




export const Header = () => {


    const [btnSmallClass, setBtnSmallClass] = useState(false)
    
    return <>
    <header className={styles.header}>

    <div className={styles.logo}>
    <Link href="/">
         <div className={styles.sublogo}> <MdOutlineAnimation/> SVG-ANIMATOR</div> 
    </Link>
    </div>

    <div className={styles.menu} onClick={() => {setBtnSmallClass(!btnSmallClass)} } ><IoMenu/></div>

    <ul className={styles.btns}>
        <li> 
        <Link href="/app">
        Animate 
        </Link>
        </li>
        <li> 
        <Link href='/library'>
        Library 
        </Link>
        </li>
        <li>
        <Link href='/guide'>
        Guide  
        </Link>
        </li>
        <li> 
        <Link href='/about'>
        About 
        </Link>
        </li> 
    </ul>

    </header>


    <ul className={!btnSmallClass?styles.btnsSmallH:styles.btnsSmallV}>
        <li> 
        <Link href="/app">
        make ur animation 
        </Link>
        </li>
        <li> 
        <Link href='/library'>
        library 
        </Link>
        </li>
        <li>
        <Link href='/guide'>
        how to use  
        </Link>
        </li>
        <li> 
        <Link href='/about'>
        about 
        </Link>
        </li> 
    </ul>


    </>;
}
