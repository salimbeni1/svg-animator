import React from 'react';
import { useState } from 'react';
import styles from './../SVGedit.module.scss'

export const AnimPathFollow = ( {animationTiming}) => {

    // -> Path follow
    const [pathFollowEl, setPathFollowEl] = useState([]);
    const [pathFollowPath, setPathFollowPath] = useState(undefined);

    const getDivAnimPathFollow = () => {
        return <div className={styles.divAnimPathFollow}>

            <ul className={styles.ul3}>

            <li className={styles.li3}> 
                <div className={styles.divPathFollow2}>
                    
                    <button onClick={ () => { setPathFollowEl( canvas.getSelectedElements() ) } } > pick selected </button>
                    <p>Elements  </p>
                    <p> : {pathFollowEl.length} selected </p>
                </div> 
                
                </li>

            <li className={styles.li3}> 
                <div className={styles.divPathFollow2}>
                    
                    <button onClick={ () => { 
                        const path = canvas.getSelectedElements()[0]
                        if(pathFollowEl.includes(path)){
                            alert("cannot animate on same path")
                            return;
                        }
                        setPathFollowPath( path ) 
                        } } > pick selected  </button>
                    <p>Path  </p>
                    <p> : {pathFollowPath?1:0} selected </p>
                </div> 
                    
            </li>

            <li className={styles.li3}>
                <button className={styles.animateBtn} onClick={() => {

                    let myAni = document.createElement('animateMotion')
                    myAni.setAttribute('dur', animationTiming.animationDur)
                    myAni.setAttribute('fill', 'freeze')
                    myAni.setAttribute('rotate', 'auto')
                    myAni.setAttribute("repeatCount",animationTiming.animationReplay)
                    myAni.setAttribute('begin', animationTiming.animationBegin)
                    myAni.setAttribute('end', animationTiming.animationEnd)

                    //myAni.setAttribute("path", "M-25,-12.5 L25,-12.5 L 0,-87.5 z" )

                    let pathIdEl = document.createElement("mpath")
                    pathIdEl.setAttribute("href" ,"#"+pathFollowPath.id )
                    myAni.appendChild(pathIdEl)

                    pathFollowEl.forEach(
                        (el) => {
                            el.appendChild(myAni)
                            
                            console.log(el);   
                        }
                        
                        );

                    setPathFollowEl([])

                }}>Animate Path Follow</button>
            </li>
            
            {
            //animationTimingGlobals()
        }
            
            </ul>

            
        </div>
    }

  return getDivAnimPathFollow();
};
