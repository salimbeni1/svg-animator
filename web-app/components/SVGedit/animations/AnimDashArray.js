import React from 'react';
import { useState } from 'react';
import styles from './../SVGedit.module.scss'

export const AnimDashArray = ( {animationTiming}) => {


    // -> Dash
    const [strokeDashAnim, setStrokeDashAnim] = useState(20);
    const [strokeOfsetStart, setStrokeOfsetStart] = useState(0);
    const [strokeOfsetEnd, setStrokeOfsetEnd] = useState(2000);

    const getDivAnimDashArray = () => {

        return <div className={styles.divAnimDashArray}>

            <ul className={styles.ul3}>

            <li className={styles.li3}>
                <div className={styles.divDashAnim}>
                    <p>dash lenght  </p>

                    <input value={strokeDashAnim} onChange={(e)=>{setStrokeDashAnim(e.target.value)}}/>
                </div>
                
                </li>

            <li className={styles.li3}>
                <div className={styles.divDashAnim}>
                <p>offset start  </p>

                <input value={strokeOfsetStart} onChange={(e)=>{setStrokeOfsetStart(e.target.value)}}/>
                </div>
            </li >

            <li className={styles.li3}>
                <div className={styles.divDashAnim}>
                <p>offset end  </p>

                <input value={strokeOfsetEnd} onChange={(e)=>{setStrokeOfsetEnd(e.target.value)}}/>
                </div>
            </li>

            <li className={styles.li3}>

                <button className={styles.animateBtn} onClick={ () => 

                canvas.getSelectedElements().forEach( (elem) => {

                    let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                    myAni.setAttribute('attributeName', 'stroke-dashoffset')
                    myAni.setAttribute('from', strokeOfsetStart)
                    myAni.setAttribute('to', strokeOfsetEnd) 
                    myAni.setAttribute('dur', animationTiming.animationDur)
                    myAni.setAttribute('repeatCount', animationTiming.animationReplay)
                    elem.appendChild(myAni)

                    elem.setAttribute("stroke-dasharray" , strokeDashAnim)
                    //elem.setAttribute("stroke-dashoffset" , "100")

                    //console.log(elem);

                    //alert("been here")
                })}>
                    Animate
                </button>

            </li>

            {
            //animationTimingGlobals()
            }

            </ul>

        </div>
    }
  return getDivAnimDashArray();
};
