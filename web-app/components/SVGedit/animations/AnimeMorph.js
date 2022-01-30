import React from 'react';
import { useState } from 'react';
import styles from './../SVGedit.module.scss'



export const AnimeMorph = ( {animationTiming}) => {


const getRedSquare = () => {
    return <rect fill="white" stroke="red" strokeDasharray="null" strokeLinejoin="round" strokeLinecap="round" strokeOpacity="null" fillOpacity="null" opacity="1" x="22" y="20.000005960464478" width="457.00000762939453" height="459.9999940395355"  strokeWidth="30" transform="matrix(1 0 0 1 0 0)"></rect>
     
    /** 
    <path fill="transparent" stroke="red" strokeDasharray="null" strokeLinejoin="round" strokeLinecap="round" strokeOpacity="null" fillOpacity="null" style="pointer-events:inherit" d="M 26 25 C 26 25 476 476 476 476 C 476 476 26 25 26 25 z"  strokeWidth="30" transform="matrix(1 0 0 1 0 0)"></path>
   <path fill="transparent" stroke="red" strokeDasharray="null" strokeLinejoin="round" strokeLinecap="round" strokeOpacity="null" fillOpacity="null" d="M 475 22 C 475 22 28 477 28 477 C 28 477 475 22 475 22 z"  strokeWidth="30"></path>
    */
    
}

// -> Morph
const [morphInitialShape, setMorphInitialShape] = useState(undefined);
const [morphIntermediateShapes, setMorphIntermediateShapes] = useState([]);
const [morphFinalShape, setMorphFinalShape] = useState(undefined);

const getDivAnimMorph = () => {
    return <div className={styles.divAnimMorph}>

                            <ul className={styles.ul3} >
                                <li className={styles.li3}>
                                    <div className={styles.divMorpth2}>
                                        
                                        <button onClick={ () => { 

                                            const pathEl = canvas.getSelectedElements()[0] 
                                            
                                            const path = pathEl?.getAttribute("d");

                                            if(!path){
                                                alert("you can only morph a PATH")
                                                return;
                                            }

                                            console.log(typeof pathEl , pathEl);

                                            setMorphInitialShape( pathEl ) 

                                            const mis = document.getElementById("morphInitialShape")
                                            while (mis.childNodes.length > 1) {
                                                mis.removeChild(mis.lastChild);
                                            }
                                            mis.appendChild(pathEl.cloneNode(true))
                                            mis.firstChild.setAttribute("stroke" , "lime")

                                        }
                                        } >pick selected</button>
                                        <p>Initial</p>
                                        
                                        
                                        <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" id="morphInitialShape" width="50px" height="50px" viewBox='0 0 500 500' >{getRedSquare()}</svg>
                                        
                                        

                                    </div>

                                    
                                    
                                </li>

                                {morphIntermediateShapes.map((el , i) => {

                                    return <li key={"mip"+i} className={styles.li3}>
                                        <div className={styles.divMorpth2}>
                                            
                                            <button onClick={ () => { 

                                                const pathEl = canvas.getSelectedElements()[0] 

                                                const path = pathEl?.getAttribute("d");

                                                if(!path){
                                                    alert("you can only morph a PATH")
                                                }

                                                let temp = morphIntermediateShapes;
                                                temp[i] = pathEl
                                                setMorphIntermediateShapes(
                                                    temp
                                                    ) 
                                                const mid = document.getElementById("morphIntermediateShapes"+i)
                                                while (mid.childNodes.length > 1) {
                                                    mid.removeChild(mid.lastChild);
                                                }
                                                mid.appendChild(pathEl.cloneNode(true))  
                                                mid.firstChild.setAttribute("stroke" , "lime")
                                            
                                            }
                                            
                                            }
                                            >pick selected</button>

                                            <p>Inter{i}</p>
                                       

                                            <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" id={"morphIntermediateShapes"+i} width="50px" height="50px" viewBox='0 0 500 500' >{getRedSquare()}</svg>

                                        </div>

                                        
                                        


                                    </li>
                                })}

                                <li className={styles.li3}>

                                    <button onClick={() => {
                                        let temp = morphIntermediateShapes
                                        temp.push(canvas.getSelectedElements()[0] )
                                        setMorphIntermediateShapes([...temp])
                                    }}> add intermediate path </button>

                                </li>

                                <li className={styles.li3}>
                                    <div className={styles.divMorpth2}>
                                        

                                        <button onClick={ () => { 

                                        const pathEl = canvas.getSelectedElements()[0] 

                                        const path = pathEl?.getAttribute("d");

                                        if(!path){
                                            alert("you can only morph a PATH")
                                            return;
                                        }

                                        setMorphFinalShape( pathEl ) 
                                        const mfs = document.getElementById("morphFinalShape")
                                        while (mfs.childNodes.length > 1) {
                                            mfs.removeChild(mfs.lastChild);
                                        }                                        
                                        mfs.appendChild(pathEl.cloneNode(true))
                                        mfs.firstChild.setAttribute("stroke" , "lime")

                                        }}
                                        >pick selected</button>

                                        <p>Final</p>
                                        

                                        <svg preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" id="morphFinalShape" width="50px" height="50px" viewBox='0 0 500 500' >
                                            {
                                            getRedSquare()
                                            }
                                        </svg>

                                    </div>

                                    
                                </li>

                                <li className={styles.li3}>
                                    <button className={styles.animateBtn} onClick={ () => {

                                        let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                                        myAni.setAttribute('attributeName', 'd')
                                        const values = morphInitialShape.getAttribute("d") + ";"+
                                            (morphIntermediateShapes.length === 0 ?"": (morphIntermediateShapes.map((e)=> e.getAttribute("d") ).reduce((p,c) => p+";"+c))+";") +
                                            morphFinalShape.getAttribute("d") ;

                                        console.log(values);
                                        console.log(morphInitialShape.getAttribute("d"));
                                        myAni.setAttribute('values', values
                                            )
                                        myAni.setAttribute('dur', animationTiming.animationDur)
                                        myAni.setAttribute('repeatCount', animationTiming.animationReplay)
                                        myAni.setAttribute('begin', animationTiming.animationBegin)
                                        myAni.setAttribute('end', animationTiming.animationEnd)
                                        morphInitialShape.appendChild(myAni)


                                     }}>Animate Morph</button>
                                </li>

                                <li className={styles.li3}>

                                    <button onClick={() => {
                                        setMorphInitialShape(undefined)
                                        setMorphIntermediateShapes([])
                                        setMorphFinalShape(undefined)
                                        const mfs = document.getElementById("morphFinalShape")
                                        while (mfs.childNodes.length > 1) {
                                            mfs.removeChild(mfs.lastChild);
                                        }
                                        mfs.firstChild.setAttribute("stroke" , "red")
                                        const mis = document.getElementById("morphInitialShape")
                                        while (mis.childNodes.length > 1) {
                                            mis.removeChild(mis.lastChild);
                                        } 
                                        mis.firstChild.setAttribute("stroke" , "red")


                                    }}>
                                        reset
                                    </button>
                                </li>

                                {
                                //animationTiming.animationTimingGlobals()
                                }
                                
                            
                            </ul>
    </div>
}

  return getDivAnimMorph();
};
