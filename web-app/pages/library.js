import React from 'react'
import { Library } from '../components/Library'

import styles from '../styles/library.module.scss'

export const library = () => {
    return (
        <div className={styles.pagediv}>
            
            <Library/>

        </div>
    )
}

export default library
