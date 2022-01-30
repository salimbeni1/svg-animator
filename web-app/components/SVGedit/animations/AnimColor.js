import React from 'react';
import { useState } from 'react';
import styles from './../SVGedit.module.scss'


export const AnimColor = ( {animationTiming} ) => {

    const [initalColor, setInitalColor] = useState("green");
    const [intermediateColors, setIntermediateColors] = useState([]);
    const [finalColor, setFinalColor] = useState("red");

    const getDivAnimColor = () => {
        return <div className={styles.divAnimColor}>
        
        <ul className={styles.ul3}>

        <li className={styles.li3}> 
        <div className={styles.divcolor2}>
            <p>Initial Color</p>
            <div className={styles.divcolor3input}>
                <input value={initalColor} onChange={(e) => setInitalColor(e.target.value)}/>
                <div className={styles.anmColor} style={{backgroundColor: initalColor}} ></div>
            </div>
        </div>
        </li>
        { intermediateColors.map((e,i) => {
            return <li className={styles.li3} key={"intermediateColor-"+i}>
            <div className={styles.divcolor2}>
            <p>Inter {i} Color</p>
            <div className={styles.divcolor3input}>
                <input value={intermediateColors[i]} onChange={(e) => {
                    let temp = intermediateColors
                    temp[i] = e.target.value
                    setIntermediateColors([...temp])}
                    }/>
                <div className={styles.anmColor} style={{backgroundColor: intermediateColors[i]}} ></div>
            </div>
            
            </div>
            </li>
        }) }
        <li className={styles.li3}> 
        <button onClick={() => {
            let temp = intermediateColors
            const arr = ["#0f0" ,"#ff0" , "#0fd" ]
            temp.push( arr[(Math.random() * arr.length) | 0] )
            setIntermediateColors([...temp])
        }}>Add intermediate color</button>
         </li>
        <li className={styles.li3}> 
        <div className={styles.divcolor2}>
            <p>Final Color</p>
            <div className={styles.divcolor3input}>
                <input value={finalColor} onChange={(e) => setFinalColor(e.target.value)}/>
                <div className={styles.anmColor} style={{backgroundColor: finalColor}}></div>
            </div>
            
        </div>
        </li>
        <li className={styles.li3}> 
            <button className={styles.animateBtn} onClick={ () => {canvas.getSelectedElements().forEach( (elem) => {

            let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
            myAni.setAttribute('attributeName', 'fill')
            myAni.setAttribute('values',
            [initalColor,...intermediateColors,finalColor].reduce((p,c)=>p+";"+c) )
            myAni.setAttribute('dur', animationTiming.animationDur)
            myAni.setAttribute('repeatCount', animationTiming.animationReplay)
            myAni.setAttribute('begin', animationTiming.animationBegin)
            myAni.setAttribute('end', animationTiming.animationEnd)
            elem.appendChild(myAni)
            

            } ) } }> Animate Color
            </button>
        
        </li>
    </ul>
    </div>
    }

  return getDivAnimColor();
};
