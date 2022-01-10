import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    
    <Header/>

    <div>
      this is the front page !! <br/>
      the fanciest svg animation should be here <br/>
      I m thinking of a chinese dragon ...

      <a> START ANIMATE NOW </a>

    </div>
    
    </>
  )
}
