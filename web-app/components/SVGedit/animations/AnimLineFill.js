import React from 'react';
import { useState } from 'react';
import styles from './../SVGedit.module.scss'

export const AnimLineFill = ({animationTiming}) => {

    const getAnimLineFill = () =>{
        return <div className={styles.divAnimLineFill}>
            <ul className={styles.ul3} >

                <li className={styles.li3}>
                    <button className={styles.animateBtn} onClick={() => {

                        canvas.getSelectedElements().forEach( (elem) => {

                            let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                            myAni.setAttribute('attributeName', 'stroke-dashoffset')
                            
                            const pathLenght = elem.getTotalLength()

                            myAni.setAttribute('from', pathLenght )
                            myAni.setAttribute('to', 0 ) 
                            myAni.setAttribute('dur', animationTiming.animationDur)
                            myAni.setAttribute('repeatCount', animationTiming.animationReplay)
                            myAni.setAttribute('begin', animationTiming.animationBegin)
                            myAni.setAttribute('end', animationTiming.animationEnd)
                            elem.appendChild(myAni)

                            elem.setAttribute("stroke-dasharray" , pathLenght)
                            //elem.setAttribute("stroke-dashoffset" , "100")

                            //console.log(elem);

                            //alert("been here")
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
