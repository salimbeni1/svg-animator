"use client"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'
import { Snake } from '../svgs/Snake'

export default function Home() {
  return <>    

  <div className={styles.mainPagediv}>

    <Link href='app' className={styles.btn}>
     START ANIMATE NOW 
    </Link>

  </div>


  <div className={styles.snakectn}>

    <Snake/>
  </div>
  

  </>;
}
