import React from 'react';
import { useState } from 'react';
import styles from './../SVGedit.module.scss'



export const AnimeMorph = ( {animationTiming}) => {

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
                                            }

                                            setMorphInitialShape( pathEl ) 

                                        }
                                        } >pick selected</button>
                                        <p>Initial Path</p>
                                        <p> : {morphInitialShape?1:0} path </p>
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

                                            }}
                                            >pick selected</button>

                                            <p>Inter Path{i}</p>
                                            <p> : {morphIntermediateShapes[i]?1:0} path </p>
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
                                        }

                                        setMorphFinalShape( pathEl ) 

                                        }}
                                        >pick selected</button>

                                        <p>Final Path</p>
                                        <p> : {morphFinalShape?1:0} path </p>

                                    </div>

                                    
                                </li>

                                <li className={styles.li3}>
                                    <button onClick={ () => {

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

                                        morphInitialShape.appendChild(myAni)


                                     }}>Create Animation</button>
                                </li>

                                {
                                //animationTiming.animationTimingGlobals()
                                }
                                
                            
                            </ul>
    </div>
}

  return getDivAnimMorph();
};
