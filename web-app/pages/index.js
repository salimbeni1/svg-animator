import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>    

    <div className={styles.mainPagediv}>

      <Link href='app'>
      <a className={styles.btn}> START ANIMATE NOW </a>
      </Link>

    </div>
    
    </>
  )
}
