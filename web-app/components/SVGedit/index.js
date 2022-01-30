import React from 'react'

import { useEffect , useState } from 'react'
import styles from './SVGedit.module.scss'
import Draggable from "react-draggable";


import SvgCanvas from '../../svgedit/src/svgcanvas/svgcanvas.js'

import { deleteSelectedElementAnimation , importImage } from './utils';



import { IoChevronUp ,IoAlarmOutline, IoCloseSharp,  IoChevronDown , IoImageOutline , IoReorderFourOutline, IoPulseSharp , IoMoveOutline, IoLayersOutline , IoShapesOutline , IoArrowDownCircleOutline, IoCopyOutline , IoColorFillOutline , IoFlashOutline, IoCodeDownload,  IoAnalyticsOutline , IoEnterOutline , IoEyedropOutline , IoScanSharp,  IoEllipseOutline , IoStopOutline , IoSparklesOutline , IoTrashBinOutline,  IoTextSharp} from "react-icons/io5";
import { AnimColor } from './animations/AnimColor';
import { AnimeMorph } from './animations/AnimeMorph';
import { AnimDashArray } from './animations/AnimDashArray';
import { AnimPathFollow } from './animations/AnimPathFollow';
import { AnimLineFill } from './animations/AnimLineFill';
import { AnimZoom } from './animations/AnimZoom';
import { AnimRotation } from './animations/AnimRotation';




export const SVGedit = () => {

    // Editor window size
    const [width, setWidth] = useState(500)
    const [height, setHeight] = useState(500)


    // Fill color
    const [fillColor, setFillColor] = useState("red")

    // Stroke Style
    const [strokeWidth, setStrokeWidth] = useState(1);
    const [strokeColor, setStrokeColor] = useState("black");
    const [strokeEnd, setStrokeEnd] = useState("");


    // Animation 
    // -> Animation Block focus
    const [animationBoardSet, setAnimationBoardSet] = useState([]);

    const clickOnAnimBtn = ( nameOption ) => {

        const b = document.getElementById("animationBoard")
        if(b.style.display === "flex"){
            if(animationBoardSet.includes(nameOption))
                b.style.display = "none"
            else
                ;
        }else{
            b.style.display = "flex"
        }

        setAnimationBoardSet([nameOption])
    }

    // -> Timing Globals
    const [animationDur, setAnimationDur] = useState(10);
    const [animationBegin, setAnimationBegin] = useState(0);
    const [animationEnd, setAnimationEnd] = useState(10);
    const [animationReplay, setAnimationReplay] = useState(1);
    const [animationToggleStatus, setAnimationToggleStatus] = useState(true);
    

    const animationTimingGlobals = () => {
        return <>
            

                <div className={styles.divAnimationTimingGlobals}>

                    <p className={styles.title} onClick={() => setAnimationToggleStatus(e => !e)} >Animation Timing  {!animationToggleStatus?<IoChevronUp/>:<IoChevronDown/>} </p>

                    <div className={styles.options} style={ {display:animationToggleStatus?"none":"grid"} }> 
                    <p> Duration </p>
                    <input value={animationDur} onChange={ (e) => {
                        setAnimationDur(e.target.value)
                        setAnimationEnd(Number(animationBegin) + Number(e.target.value))
                    }
                        }/>

                    <p> Replay </p>
                    <input value={animationReplay} onChange={ (e) => setAnimationReplay(e.target.value)}/>

                    <p> Begin </p>
                    <input value={animationBegin} onChange={ (e) =>{
                        setAnimationBegin(e.target.value)
                        setAnimationEnd(Number(animationDur) + Number(e.target.value))
                    } }/>

                    <p> End </p>
                    <input value={animationEnd} onChange={ (e) => 
                        setAnimationEnd(e.target.value)
                        }/>
                    </div>

                </div>
                

            
        </>
    }

    const animationTiming = {
        animationDur: animationDur,
        animationBegin: animationBegin,
        animationEnd: animationEnd,
        animationReplay: animationReplay,
        animationToggleStatus: animationToggleStatus,
        animationTimingGlobals: animationTimingGlobals,
    }


    // -> Timeline
    const [animatedElements , setanimatedElements] = useState([]);
    const getTimeline = () => {
        return animatedElements.length === 0? <>No elements selected</>:
        <>
            {animatedElements.map((el, i) => {

                const color = ["red","blue","orange"][i%3]
                return Array.from(el.childNodes).map( (cn , cni) => {
                    if(cn.getAttribute('dur')){
                        const dur = cn.getAttribute('dur')         
                        const start = cn.getAttribute('begin')? cn.getAttribute('begin'): 0
                        const end = cn.getAttribute('end')? cn.getAttribute('end'): start + dur
                        return <>

                        

                        <div style={{margin:"3px"}} key={"el"+i+"-"+cni}>
                            <div style={{
                                position:'relative',
                                left: start*10,
                                width: dur*10,
                                height:1,
                                border: '5px solid '+color,
                                borderRadius:3,
                                backgroundColor:color
                            }} ></div>
                        </div>



                        </>
                    } 
                } )
            })}
        </>
    }


    // Result window states
    const [result, setResult] = useState(<></>)
    const [rerenderres, setRerenderres] = useState(0)


    useEffect(() => {
        
        const container = document.querySelector('#editorContainer')

        let width_ = width
        let height_ = height

        if (window.innerWidth < 660){
            setWidth(e => window.innerWidth - 10);
            setHeight(e => window.innerWidth - 10);
            width_ = window.innerWidth - 10
            height_ = window.innerWidth - 10
        }

        window.width = width_
        window.height = height_

        const hiddenTextTagId = 'text'

        const config = {
            initFill: { color: 'FFFFFF', opacity: 1 },
            initStroke: { color: '000000', opacity: 1, width: 1 },
            text: { stroke_width: 0, font_size: 24, font_family: 'serif' },
            initOpacity: 1,
            imgPath: '../svgedit/images',
            dimensions: [ width_, height_ ],
            baseUnit: 'px'
        }

        window.canvas = new SvgCanvas(container, config)
        canvas.updateCanvas(width_, height_)

        window.fill = function (colour) {
                canvas.getSelectedElements().forEach((el) => {
                el.setAttribute('fill', colour)
            })
        }

        const hiddenTextTag = window.canvas.$id(hiddenTextTagId)
        window.canvas.textActions.setInputElem(hiddenTextTag)

        const addListenerMulti = (element, eventNames, listener) => {
            eventNames.split(' ').forEach((eventName) => element.addEventListener(eventName, listener, false))
        }

        addListenerMulti(hiddenTextTag, 'keyup input', (evt) => {
            window.canvas.setTextContent(evt.currentTarget.value)
        })

        document.onclick = function(e) {
            const el = document.getElementById("contextMenu")
            //console.log(el);
            if(el){
                document.getElementById("contextMenu").style.display = 'none';
            }
        }

        const contectMenu = (event) => {

                event.preventDefault();
                var menu = document.getElementById("contextMenu")      
                menu.style.display = 'block'; 
                menu.style.left = event.pageX + "px"; 
                menu.style.top = event.pageY + "px"; 
            }


        document.querySelector('#editorContainer').addEventListener("mouseover",function() {
            document.addEventListener('contextmenu', contectMenu)
        });
        
        document.querySelector('#editorContainer').addEventListener("mouseout",function() {
            document.removeEventListener("contextmenu", contectMenu, false);
        });

        

        document.addEventListener( "keydown" , 

            (e) => {
                // Ctrl+C or Cmd+C pressed?
                if ((e.ctrlKey || e.metaKey) && e.key == "c") {
                    canvas.copySelectedElements()
                 }
           
                 // Ctrl+V or Cmd+V pressed?
                 if ((e.ctrlKey || e.metaKey) && e.key === "v") {
                    canvas.pasteElements()
                 }
           
                 // Ctrl+X or Cmd+X pressed?
                 if ((e.ctrlKey || e.metaKey) && e.key === "x" ) {
                    // Do stuff.
                 } 

                 //console.log(e.key);

                 // Delete key
                 if ((e.key === "Backspace")) {

                    //canvas.deleteSelectedElements()
                    
                 } 
            }
        );


        // white layer around editor
        const editorContainerRect =  document.querySelector('#editorContainer').getBoundingClientRect()
        let editorOutCanvas1 = document.querySelector('#editorOutCanvas1')
        let editorOutCanvas2 = document.querySelector('#editorOutCanvas2')
        let editorOutCanvas3 = document.querySelector('#editorOutCanvas3')
        let editorOutCanvas4 = document.querySelector('#editorOutCanvas4')

        editorOutCanvas1.style.width = "100vw"
        editorOutCanvas1.style.height = editorContainerRect.top+"px"
        
        editorOutCanvas2.style.height = editorContainerRect.height+"px"
        editorOutCanvas2.style.width = editorContainerRect.left+"px"
        editorOutCanvas2.style.top = editorContainerRect.top+"px"

        editorOutCanvas3.style.top = editorContainerRect.top+"px"
        editorOutCanvas3.style.left = (editorContainerRect.left + editorContainerRect.width)+"px"
        editorOutCanvas3.style.height = editorContainerRect.height+"px"
        editorOutCanvas3.style.width = (document.body.clientWidth - (editorContainerRect.left + editorContainerRect.width) ) +"px"

        editorOutCanvas4.style.top = (editorContainerRect.top + editorContainerRect.height)+"px"
        editorOutCanvas4.style.width = "100vw"
        editorOutCanvas4.style.height = (window.innerHeight - (editorContainerRect.top + editorContainerRect.height)) + "px"

        let editorINCanvas1 = document.querySelector('#editorINCanvas1')
        editorINCanvas1.style.backgroundColor = "transparent"
        editorINCanvas1.style.border = "1px solid black"
        editorINCanvas1.style.top = editorContainerRect.top+"px"
        editorINCanvas1.style.left = editorContainerRect.left+"px"
        editorINCanvas1.style.height = editorContainerRect.height+"px"
        editorINCanvas1.style.width = editorContainerRect.width+"px"

    }, [])



    return (
        
            <>

            <div id="editorOutCanvas" className={styles.editorOut} >
                <div id="editorOutCanvas1"></div>
                <div id="editorOutCanvas2"></div>
                <div id="editorOutCanvas3"></div>
                <div id="editorOutCanvas4"></div>

                <div id="editorINCanvas1"></div>
            </div>



            <div id="contextMenu" className={styles.contextMenu}>
                
                <ul>
                    <li>
                        <button onClick={() => {canvas.deleteSelectedElements()} }>Delete</button>
                    </li>
                    <li>
                        <button onClick={() => {deleteSelectedElementAnimation()} }>Del Animations</button>
                    </li>
                    <hr/>
                    <li>
                        <button onClick={() => {canvas.groupSelectedElements()} } >Group</button>
                    </li>
                    <li>
                        <button onClick={() => {canvas.ungroupSelectedElement()} } >Ungroup</button>
                    </li>
                    <hr/>
                    <li>
                        <button onClick={() => {canvas.copySelectedElements()} } >Copy</button>
                    </li>
                    <li>
                        <button onClick={() => {canvas.cutSelectedElements()} } >Cut</button>
                    </li>
                    <li>
                        <button onClick={() => {canvas.pasteElements()} } >Paste</button>
                    </li>
                </ul>
                
            </div>



            <Draggable>
                <div id="timingMainDiv" className={styles.timingMainDiv} >
                    <p>Animation Timeline</p>

                    < IoCloseSharp className={styles.timingMainDivClose} onClick={() => {
                            document.getElementById("timingMainDiv").style.display = "none"
                    }}/>

                    
                    <div className={styles.timeline}>
                        {
                            getTimeline()
                        }
                    </div>
                </div>
            </Draggable>


            <Draggable>
                <div id="animationBoard" className={styles.animationBoard} >

                        
                        <p className={styles.animationBoardTitle} >Animation Board</p> 
                        < IoCloseSharp className={styles.animationBoardClose} onClick={() => {
                            document.getElementById("animationBoard").style.display = "none"
                        }}/>
                        

                        {animationBoardSet.includes("AnimColor")? <AnimColor animationTiming={animationTiming} /> :<></>}

                        {animationBoardSet.includes("AnimDashArray")?<AnimDashArray animationTiming={animationTiming} />:<></>}

                        {animationBoardSet.includes("AnimPathFollow")?<AnimPathFollow animationTiming={animationTiming} />:<></>}

                        {animationBoardSet.includes("AnimMorph")?<AnimeMorph animationTiming={animationTiming} />:<></>}

                        {animationBoardSet.includes("AnimLineFill")?<AnimLineFill animationTiming={animationTiming}/>:<></>}

                        {animationBoardSet.includes("AnimZoom")?<AnimZoom animationTiming={animationTiming}/>:<></>}

                        {animationBoardSet.includes("AnimRotation")?<AnimRotation animationTiming={animationTiming}/>:<></>}

                        
                        <div style={{borderTop:"4px solid black" , width:"100%"}}></div>
                        {animationTimingGlobals()}

                </div>
            </Draggable>


            <div className={styles.ctn} >

                
                <div className={styles.editor}>
                <ul className={styles.btnPannel} style={{height: height}}>

                    <li className={styles.li1}>
                        <button onClick={() => canvas.setMode('select')}> 
                        
                        <IoMoveOutline/>
                        <div> Select </div>
                        </button>
                    </li>

                    <li className={styles.li1}>
                        <button > 
                        <IoShapesOutline/>
                        <div> Shapes </div>
                        </button>

                        <ul className={styles.ul2}>

                            <li className={styles.li2}>
                                <button onClick={() => canvas.setMode('circle')}>
                                    <div> Circle </div> 
                                    <IoEllipseOutline/>
                                </button>
                            </li>
                        
                            <li className={styles.li2}>
                                <button onClick={ () => canvas.setMode('rect')}> 
                                    <div>Recta </div> 
                                    <IoStopOutline/>
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => canvas.setMode('text')}> 
                                    <div>Text</div>
                                    <IoTextSharp/>
                                </button>
                            </li>
                        
                            <li className={styles.li2}>
                                <button onClick={ () => canvas.setMode('path')}> 
                                    <div>Path</div> 
                                    <IoAnalyticsOutline/> 
                                </button>
                            </li>

                        </ul>
                    </li>

                    <li className={styles.li1}>
                        <button onClick={() => {
                            document.getElementById('file-import-input').click();
                        }}> 
                            <input id="file-import-input" type="file" onChange={ (e) => {importImage(e)}} style={{display:"none"}} />
                            <IoArrowDownCircleOutline/>
                            <div> Import </div>
                        </button>
                    </li>

                    <li className={styles.li1}>
                        <button onClick={() => {}}> 
                        <IoLayersOutline/>
                        <div> Layer </div>
                        </button>

                        <ul className={styles.ul2}>
                            <li className={styles.li2}>
                                <button onClick={() => {canvas.moveToTopSelectedElement()}}> 
                                    <div> Push Front </div>
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={() => {canvas.moveToBottomSelectedElement()}}> 
                                    <div> Push Back </div>
                                </button>
                            </li>
                        
                        </ul>
                    </li>

                    <li className={styles.li1}>
                        <button
                        onClick={ () => {

                            setanimatedElements([...canvas.getSelectedElements()])
                            const timingDiv = document.getElementsByClassName(styles.timingMainDiv)
                            for (let item of timingDiv){

                                if(item.style.display === "flex"){
                                    item.style.display = "none"
                                }else{
                                    item.style.display = "flex"
                                }
                            }
                        }
                        }
                        > 
                        <IoAlarmOutline/>
                        <div> Timing </div>
                        </button>    
                    </li>

                        
                    <li className={styles.li1}>
                        <button onClick={() => { }}> 
                        <IoPulseSharp/> 
                        <div>Anime</div>
                        </button>

                        <ul className={styles.ul2}>
                            <li className={styles.li2}>
                                <button onClick={() => {clickOnAnimBtn("AnimColor")}}>
                                <div>Color Animation</div> 
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={() => {clickOnAnimBtn("AnimDashArray")}} > 
                                <div>Dash Array</div> 
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={() => {clickOnAnimBtn("AnimPathFollow")}}> 
                                <div>Follow Path</div> 
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={() => {clickOnAnimBtn("AnimMorph")}}> 
                                <div>Morph Animation</div> 
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={() => {clickOnAnimBtn("AnimLineFill")}}> 
                                <div>Line fill</div> 
                                </button>
 
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => {clickOnAnimBtn("AnimRotation")} }> 
                                <div>Rotation</div> 
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => {clickOnAnimBtn("AnimZoom")}}> 
                                <div>Zoom</div> 
                                </button>
                            </li>
                            
                        </ul>
                    </li>
                

                
                    <li className={styles.li1}>
                        <button onClick={ () => fill(fillColor)}>
                        <IoColorFillOutline/> 
                        <div>Fill</div>
                        </button>

                        <ul className={styles.ul2}>
                            <li className={styles.li2}>
                                <div style={{display:"flex",cursor:"pointer"}}>
                                <div onClick={() => {setFillColor("red") ; fill("red")}} style={{backgroundColor: "red", width:"20px" , height: "20px"}}></div>
                                <div onClick={() => {setFillColor("green"); fill("green")}} style={{backgroundColor: "green", width:"20px" , height: "20px"}}></div>
                                <div onClick={() => {setFillColor("blue"); fill("blue")}} style={{backgroundColor: "blue", width:"20px" , height: "20px"}}></div>
                                <div onClick={() => {setFillColor("white"); fill("white")}} style={{backgroundColor: "white", width:"20px" , height: "20px"}}></div>
                                <div onClick={() => {setFillColor("black"); fill("black")}} style={{backgroundColor: "black", width:"20px" , height: "20px"}}></div>
                                <div onClick={() => {setFillColor("yellow"); fill("yellow")}} style={{backgroundColor: "yellow", width:"20px" , height: "20px"}}></div>
                                <div onClick={() => {setFillColor("orange"); fill("orange")}} style={{backgroundColor: "orange", width:"20px" , height: "20px"}}></div>
                                </div>
                            </li>

                            <li className={styles.li2}>
                                <div className={styles.colorInput}>
                                Color
                                <input onChange={(event) => {setFillColor(event.target.value); fill(event.target.value)}} value={fillColor}/>
                                </div>
                            </li>
                        </ul>
                    </li>
                
                    <li className={styles.li1}>
                        <button onClick={ () => {}}>  
                            <IoReorderFourOutline/>
                            <div>Stroke</div>
                        </button>

                        <ul className={styles.ul2}>
                            
                            <li className={styles.li2}>
                                <div className={styles.strokeStyle}>
                                   <p>size</p> 
                                   <input value={ strokeWidth } onChange={ (e) => {
                                       setStrokeWidth(w => e.target.value)
                                        canvas.getSelectedElements().forEach( (elem) => {
                                            elem.setAttribute('stroke-width' , e.target.value)
                                        })
                                   }
                                   }/>
                                </div>
                                
                            </li>

                            <li className={styles.li2}>
                                <div className={styles.strokeStyle}>
                                    <p>color</p>
                                    <div className={styles.strokeStyleColor}>

                                        <input  value={strokeColor} onChange={ (e) => {
                                            setStrokeColor(e.target.value)
                                            canvas.getSelectedElements().forEach( (elem) => {
                                                elem.setAttribute('stroke' , e.target.value)
                                            })
                                        }}/>

                                        <div style={{backgroundColor:strokeColor}}></div>
                                    </div>
                                </div>
                                 
                            </li>

                            <li className={styles.li2}>
                                <div className={styles.strokeStyle}>
                                    <p> ending</p>
                                    <select onChange={ (e) => {
                                        canvas.getSelectedElements().forEach( (elem) => {
                                            elem.setAttribute('stroke-linecap' , e.target.value)

                                        })
                                        } }>
                                        <option value="butt">butt</option>
                                        <option value="square">square</option>
                                        <option value="round">round</option>
                                    </select>
                                </div>
                                
                            </li>

                            <li className={styles.li2}>
                                <div className={styles.strokeStyle}>
                                    <p> angles</p>
                                    <select onChange={ (e) => {
                                        canvas.getSelectedElements().forEach( (elem) => {
                                            elem.setAttribute('stroke-linejoin' , e.target.value)
                                        })
                                    } }>
                                        <option value="miter">miter</option>
                                        <option value="round">round</option>
                                        <option value="bevel">bevel</option>
                                    </select>
                                </div>
                                
                            </li>

                        </ul>
                    </li>

                    <li className={styles.li1}>
                        <button onClick={() => {canvas.clear(); canvas.updateCanvas(width, height);}}>
                            <IoSparklesOutline/>
                            <div> Clear</div>
                        </button>
                    </li>
                
                    <li className={styles.li1}>
                        <button onClick={() => setResult(<div dangerouslySetInnerHTML={{__html: canvas.getSvgString()}} />)}> 
                            <IoEnterOutline/> 
                            <div>Result</div>
                        </button>
                    </li>
                </ul>
                
                <input id="text" style={{width:0,height:0,opacity: 0}}/>

                <div>
                    <div id="editorContainer" className={styles.editor}></div> 
                    <div className={styles.subtitle}> EDITOR </div>
                </div>

                </div>


                <div className={styles.resultAnimation}>

                <div>
                    <div key={rerenderres} style={{width: width, height: height , overflow:"hidden"}} className={styles.result}>
                        { result }
                    </div>
                    <div className={styles.subtitle}>RESULT ANIMATION</div>

                </div>

                <ul className={styles.btnPannel} style={{height: height ,  width: 75}}>
                    
                    <li className={styles.li1}>
                        <button onClick={() => {
                        setRerenderres(i=> i+1)
                        } }> 
                        <IoFlashOutline/>
                        <div> Run </div>
                    </button>
                    </li>
                    
                    <li className={styles.li1}>
                        <button onClick={() => {alert(canvas.getSvgString())} }> 
                        <IoCodeDownload/>
                        <div> Raw </div>
                    </button>
                    </li>

                    <li className={styles.li1}>
                        <button onClick={() => {
                            //alert(canvas.getSvgString())

                            const a = document.createElement('a') // Create "a" element
                            const blob = new Blob([canvas.getSvgString()], {type: 'image/svg+xml'}) // Create a blob (file-like object)
                            const url = URL.createObjectURL(blob) // Create an object URL from blob
                            a.setAttribute('href', url) // Set "a" element link
                            a.setAttribute('download', "SVG-editor.svg") // Set download filename
                            a.click() // Start downloading
                            
                            } }> 
                        <IoImageOutline/>
                        <div> SVG </div>
                    </button>
                    </li>

                    <li className={styles.li1}>
                        <button onClick={() => {navigator.clipboard.writeText(canvas.getSvgString())}}> 
                        <IoCopyOutline/>
                        <div> Copy </div>
                    </button>
                    </li>
                    
                
                </ul>

                </div>

            </div>       
            </>

    )
}
