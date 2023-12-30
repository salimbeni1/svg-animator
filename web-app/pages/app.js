"use client"
import React from 'react'

import styles from '../styles/app.module.scss'

import { SVGedit } from '../components/SVGedit'

const app = () => {


    return (
        <div className={styles.pagectn} >

            <div className={styles.app} >

                <SVGedit/>      

            </div>
           
        </div>
    )
}


export default app;
