import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>    

    <div className={styles.mainPagediv}>

      <a href='app' className={styles.btn}> START ANIMATE NOW </a>

    </div>
    
    </>
  )
}
