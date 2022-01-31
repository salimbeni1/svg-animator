import React from 'react'

import styles from './Guide.module.scss'
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";

import { useState } from 'react';

import Image from 'next/image'

export const Guide = () => {


    const [guideOpen, setGuideOpen] = useState({
        "Quick Guide": true,
        "Types of Animations": true,
        "Editor Guide": true,
        "Library Guide": false
    })

    return (
        <div className={styles.pagediv}>

            <div className={styles.block}>

                <header className={styles.blockHeader} onClick={() => {
                    const newState = {
                        ...guideOpen,
                        "Quick Guide": !guideOpen["Quick Guide"],
                    }
                    setGuideOpen(newState)
                }} >
                    <h2>Quick Guide</h2>
                    {
                        guideOpen["Quick Guide"] ? <IoCloseOutline /> : <IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Quick Guide"] ? { display: "block", height: 'auto', padding: '20px 20px' } : { display: "none" }}>
                    
                    <p> 
                        Use the left buttons to draw on the editor window, add animations to the svg elements with Anime,
                        and use the Result button to see the animation on the result window.    
                    
                        When the resulting animation is completed , you can on the right buttons , rerun the animation with Run , get the plaintext svg animation with Raw , download the svg with SVG  
                        or copy on your clipboard the raw svg animation , to copy paste it on your app.
                    </p>

                    <p> 
                        More information on the editor tools and animation tools below
                    </p>

                    <div className={styles.im1}>
                        <Image 
                        src={"/guide/im1.png"}
                        layout='fill'
                        objectFit='contain'
                        />
                    </div>


                </div>

            </div>

            <div className={styles.block}>

                <header className={styles.blockHeader} onClick={() => {
                    const newState = {
                        ...guideOpen,
                        "Types of Animations": !guideOpen["Types of Animations"],
                    }
                    setGuideOpen(newState)
                }}>

                    <h2>Types of Animations</h2>
                    {
                        guideOpen["Types of Animations"] ? <IoCloseOutline /> : <IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Types of Animations"] ? { display: "block", height: 'auto', padding: '20px 20px' } : { display: "none" }}>
                    
                    <div className={styles.animationG}>

                        <div className={styles.animationim}>
                            <Image 
                            src={"/guide/animColor.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.animationtext}>
                            <h1>Color Animation</h1>
                            <p> 
                                select at least a final and start color , to animate.
                                You can also add as many intermediate colors as you want.
                            </p>
                        </div>

                        <div className={styles.animationexample}>
                            
                        </div>


                        <div className={styles.animationim}>
                            <Image 
                            src={"/guide/animMorph.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.animationtext}>
                            <h1>Morph Animation</h1>
                            <p> 
                                pick a start and final shape, intermediate shapes are accepted too.
                                Note that the element must not be deleted before the creation of the animation.
                                After the creation it you can remove all secondary elements used to create the animation.
                            </p>
                        </div>

                        <div className={styles.animationexample}>
                            
                        </div>




                        <div className={styles.animationim}>
                            <Image 
                            src={"/guide/animDash.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.animationtext}>
                            <h1>Dash Line Animation</h1>
                            <p> 
                                You can select the direction of the dash animation by reversing the order of
                                offset-start and offset-end. The dash-lenght is for the size of the dash.
                            </p>
                        </div>

                        <div className={styles.animationexample}>
                            
                        </div>





                        <div className={styles.animationim}>
                            <Image 
                            src={"/guide/animLine.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.animationtext}>
                            <h1>Line Animation</h1>
                            <p> 
                                No parameters needed , the lenght of the path is automatic.
                            </p>
                        </div>

                        <div className={styles.animationexample}>
                            
                        </div>


                        <div className={styles.animationim}>
                            <Image 
                            src={"/guide/animPathFollow.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.animationtext}>
                            <h1>Path Follow Animation</h1>
                            <p> 
                                select an element and the path it will follow.
                                Note that the element will follow the path relative to the top left corner of the editor.
                                If you want the element to follow the path at the center , just place the element on the top left of the editor.
                            </p>
                        </div>

                        <div className={styles.animationexample}>
                            
                        </div>




                    </div>
                </div>

            </div>

            <div className={styles.block}>

                <header className={styles.blockHeader} onClick={() => {
                    const newState = {
                        ...guideOpen,
                        "Editor Guide": !guideOpen["Editor Guide"],
                    }
                    setGuideOpen(newState)
                }}>
                    <h2>Editor Guide</h2>
                    {
                        guideOpen["Editor Guide"] ? <IoCloseOutline /> : <IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Editor Guide"] ? { display: "block", height: 'auto', padding: '20px 20px' } : { display: "none" }}>
                    


                    <div className={styles.editorG} >

                        <div className={styles.editorim}>
                            <Image 
                            src={"/guide/shapes.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.editortext}>
                            <h1>Shapes</h1>
                            <p> insert a shape on the canvas.
                                It will only create one shape.

                                 </p>
                        </div>

                        <div className={styles.editorim}>
                            <Image 
                            src={"/guide/stroke.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.editortext}>
                            <h1>Stroke</h1>
                            <p> edit the type of the stroke


                            </p>
                        </div>

                        <div className={styles.editorim}>
                            <Image 
                            src={"/guide/layer.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.editortext}>
                            <h1>Layer</h1>
                            <p> to put the selected elements 
                                in front/back of the svg                                
                            </p>
                        </div>

                        <div className={styles.editorim}>
                            <Image 
                            src={"/guide/color.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.editortext}>
                            <h1>Color</h1>
                            <p> pick a color clicking on the default ones.
                                Or write your color in the text input.
                                The color : "transparent" is valid </p>
                        </div>

                        <div className={styles.editorim}>
                            <Image 
                            src={"/guide/rightc.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                        </div>

                        <div className={styles.editortext}>
                            <h1>Right Click</h1>
                            <ul>
                                <li> delete the el. </li>
                                <li> remove all animations from  el. </li>
                                <li> group/ungroup els. </li>
                                <li> copy - cut - paste </li>
                            </ul>
                        </div>
                        

                    </div>


                </div>

            </div>

            <div className={styles.block} >

                <header className={styles.blockHeader} onClick={() => {
                    const newState = {
                        ...guideOpen,
                        "Library Guide": !guideOpen["Library Guide"],
                    }
                    setGuideOpen(newState)
                }}>
                    <h2>Library Guide</h2>
                    {
                        guideOpen["Library Guide"] ? <IoCloseOutline /> : <IoAddOutline />
                    }
                </header>

                <div className={styles.blockContent} style={guideOpen["Library Guide"] ? { display: "block", height: 'auto', padding: '20px 20px' } : { display: "none" }}>
                    
                    <p> You can dowload all animations of the library by clicking the dowload icon hover the animation. </p>

                    <div className={styles.im1}>
                            <Image 
                            src={"/guide/lib.png"}
                            layout='fill'
                            objectFit='contain'
                            />
                    </div>


                </div>

            </div>


        </div>
    )
}
