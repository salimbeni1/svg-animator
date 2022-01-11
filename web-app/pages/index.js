import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'
import { getSnakeHead } from '../svgs/snake/snakeHead'

export default function Home() {
  return (
    <>    

    <div className={styles.mainPagediv}>

      <Link href='app'>
      <a className={styles.btn}> START ANIMATE NOW </a>
      </Link>

    </div>


    <div className={styles.snakectn}>

      <div className={styles.snakeHead} >{getSnakeHead() }</div>

     

    </div>
    
    </>
  )
}
