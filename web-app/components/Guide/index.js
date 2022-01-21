import React from 'react'

import styles from './guide.module.scss'
import { IoAddOutline , IoCloseOutline } from "react-icons/io5";

import { useState } from 'react';

export const Guide = () => {


    const [guideOpen, setGuideOpen] = useState({
        "Quick Guide":true,
        "Types of Animations":false,
        "Editor Guide":false,
        "Library Guide":false
    })

    return (
        <div className={styles.pagediv}>
            
            <div className={styles.block}>

                <header className={styles.blockHeader} onClick={ () => { 
                    const newState = {
                        ...guideOpen,
                        "Quick Guide":!guideOpen["Quick Guide"],
                    }
                    setGuideOpen(newState)
                 } } >
                    <h2>Quick Guide</h2>
                    {
                        guideOpen["Quick Guide"]?<IoCloseOutline />:<IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Quick Guide"]?{display:"block", height: 'auto',padding:'20px 20px'}:{display:"none"}}>
                    work in progress ... sry
                </div>

            </div>

            <div className={styles.block}>

                <header className={styles.blockHeader} onClick={ () => { 
                    const newState = {
                        ...guideOpen,
                        "Types of Animations":!guideOpen["Types of Animations"],
                    }
                    setGuideOpen(newState)
                 } }>
                    
                    <h2>Types of Animations</h2>
                    {
                        guideOpen["Types of Animations"]?<IoCloseOutline />:<IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Types of Animations"]?{display:"block", height: 'auto',padding:'20px 20px'}:{display:"none"}}>
                work in progress ... sry
                </div>

            </div>

            <div className={styles.block}>

                <header className={styles.blockHeader} onClick={ () => { 
                    const newState = {
                        ...guideOpen,
                        "Editor Guide":!guideOpen["Editor Guide"],
                    }
                    setGuideOpen(newState)
                 } }>
                    <h2>Editor Guide</h2>
                    {
                        guideOpen["Editor Guide"]?<IoCloseOutline />:<IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Editor Guide"]?{display:"block", height: 'auto',padding:'20px 20px'}:{display:"none"}}>
                work in progress ... sry
                </div>

            </div>

            <div className={styles.block} >

                <header className={styles.blockHeader} onClick={ () => { 
                    const newState = {
                        ...guideOpen,
                        "Library Guide":!guideOpen["Library Guide"],
                    }
                    setGuideOpen(newState)
                 } }>
                    <h2>Library Guide</h2>
                    {
                        guideOpen["Library Guide"]?<IoCloseOutline />:<IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Library Guide"]?{display:"block", height: 'auto',padding:'20px 20px'}:{display:"none"}}>
                work in progress ... sry
                </div>

            </div>


        </div>
    )
}
