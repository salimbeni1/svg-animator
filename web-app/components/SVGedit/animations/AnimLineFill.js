import React from 'react';
import { useState } from 'react';
import styles from './../SVGedit.module.scss'

export const AnimLineFill = ({animationTiming}) => {

    const animate_line = ( elem ) => {
        if (elem.getTotalLength) {

            const pathLenght = elem.getTotalLength()

            let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
            myAni.setAttribute('attributeName', 'stroke-dashoffset')
            
            myAni.setAttribute('from', pathLenght )
            myAni.setAttribute('to', 0 ) 
            myAni.setAttribute('dur', animationTiming.animationDur)
            myAni.setAttribute('repeatCount', animationTiming.animationReplay)
            myAni.setAttribute('begin', animationTiming.animationBegin)
            myAni.setAttribute('end', animationTiming.animationEnd)
            elem.appendChild(myAni)

            elem.setAttribute("stroke-dasharray" , pathLenght)

        }
        
        if (elem.children){
            for (let child of elem.children) {
                animate_line(child)
            }
        }

        if (elem.tagName === 'use') {
            const href = elem.getAttribute('href') || elem.getAttribute('xlink:href');
            if (href) {
                let new_element = document.querySelector(href);
                if (new_element) {
                    animate_line(new_element)
                }
            }
        }
    }

    const getAnimLineFill = () =>{
        return <div className={styles.divAnimLineFill}>
            <ul className={styles.ul3} >

                <li className={styles.li3}>
                    <button className={styles.animateBtn} onClick={() => {

                        canvas.getSelectedElements().forEach( (elem) => {
                            animate_line(elem)
                        })

                    }}>Animate Line</button>
                </li>

                {
                    //animationTimingGlobals()
                }

            </ul>
        </div>
    }

  return getAnimLineFill();

};
