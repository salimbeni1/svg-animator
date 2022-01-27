import React from 'react'

import { useEffect , useState } from 'react'
import styles from './SVGedit.module.scss'

import SvgCanvas from '../../svgedit/src/svgcanvas/svgcanvas.js'



import { IoChevronUp ,IoAlarmOutline, IoChevronDown , IoImageOutline , IoReorderFourOutline, IoPulseSharp , IoMoveOutline, IoLayersOutline , IoShapesOutline , IoArrowDownCircleOutline, IoCopyOutline , IoColorFillOutline , IoFlashOutline, IoCodeDownload,  IoAnalyticsOutline , IoEnterOutline , IoEyedropOutline , IoScanSharp,  IoEllipseOutline , IoStopOutline , IoSparklesOutline , IoTrashBinOutline,  IoTextSharp} from "react-icons/io5";




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
    // -> Timing Globals
    const [animationDur, setAnimationDur] = useState(10);
    const [animationBegin, setanimationBegin] = useState(0);
    const [animationEnd, setAnimationEnd] = useState(10);
    const [animationReplay, setAnimationReplay] = useState(1);
    const [animationToggleStatus, setAnimationToggleStatus] = useState(true);


    const animationTimingGlobals = () => {
        return <>
            <li className={styles.li3}>

                <div className={styles.divAnimationTimingGlobals}>

                    <p className={styles.title} onClick={() => setAnimationToggleStatus(e => !e)} >Animation Timing  {!animationToggleStatus?<IoChevronUp/>:<IoChevronDown/>} </p>

                    <div className={styles.options} style={ {display:animationToggleStatus?"none":"block"} }> 
                    <p> Duration </p>
                    <input value={animationDur} onChange={ (e) => setAnimationDur(e.target.value)}/>

                    <p> Replay </p>
                    <input value={animationReplay} onChange={ (e) => setAnimationReplay(e.target.value)}/>
                    </div>

                </div>
                

            </li>
        </>
    }

    const [animatedElements , setanimatedElements] = useState([]);
    const getTimeline = () => {

        console.log(animatedElements);

        return animatedElements.length === 0? <>No elements selected</>:
        <>

            {animatedElements.map((el, i) => {

                const color = ["red","blue","orange"][i%3]

                console.log( el.childNodes) 

                return Array.from(el.childNodes).map( (cn , cni) => {

                    console.log(cn);
                    console.log(cn.getAttribute('dur'));

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

    // -> Path follow
    const [pathFollowEl, setPathFollowEl] = useState([]);
    const [pathFollowPath, setPathFollowPath] = useState(undefined);

    // -> Morph
    const [morphInitialShape, setMorphInitialShape] = useState(undefined);
    const [morphIntermediateShapes, setMorphIntermediateShapes] = useState([]);
    const [morphFinalShape, setMorphFinalShape] = useState(undefined);

    // -> Color
    const [initalColor, setInitalColor] = useState("green");
    const [intermediateColors, setIntermediateColors] = useState([]);
    const [finalColor, setFinalColor] = useState("red");

    // -> Dash
    const [strokeDashAnim, setStrokeDashAnim] = useState(20);
    const [strokeOfsetStart, setStrokeOfsetStart] = useState(0);
    const [strokeOfsetEnd, setStrokeOfsetEnd] = useState(2000);


    


    // Result window states
    const [result, setResult] = useState(<></>)
    const [rerenderres, setRerenderres] = useState(0)


    useEffect(() => {
        
        const container = document.querySelector('#editorContainer')

        console.log(window.innerWidth)

        let width_ = width
        let height_ = height

        if (window.innerWidth < 660){
            setWidth(e => window.innerWidth - 10);
            setHeight(e => window.innerWidth - 10);
            width_ = window.innerWidth - 10
            height_ = window.innerWidth - 10
        }

        console.log(height_ , height_);

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

                //console.log(document.querySelector('#editorContainer'))
    
    
                event.preventDefault();
    
                
                var menu = document.getElementById("contextMenu")      
                menu.style.display = 'block'; 
                menu.style.left = event.pageX + "px"; 
                menu.style.top = event.pageY + "px"; 
                
            
            }

        

        //document.addEventListener('contextmenu', contectMenu)



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





       // console.log( editorContainerRect)




    }, [])


    const importImage = (e) => {
        //$id('se-prompt-dialog').title = this.i18next.t('notification.loadingImage')
        //$id('se-prompt-dialog').setAttribute('close', false)
        e.stopPropagation()
        e.preventDefault()
        const file = (e.type === 'drop') ? e.dataTransfer.files[0] : e.currentTarget.files[0]
        if (!file) {
          //$id('se-prompt-dialog').setAttribute('close', true)
          return
        }
  
        if (!file.type.includes('image')) {
          return
        }
        // Detected an image
        // svg handling
        let reader
        if (file.type.includes('svg')) {
          reader = new FileReader()
          reader.onloadend = (ev) => {
            const newElement = canvas.importSvgString(ev.target.result, true)
            newElement.setAttribute("transform","")
            console.log(newElement);
            canvas.alignSelectedElements('m', 'page')
            canvas.alignSelectedElements('c', 'page')
            // highlight imported element, otherwise we get strange empty selectbox
            canvas.selectOnly([newElement])
            //$id('se-prompt-dialog').setAttribute('close', true)
          }
          reader.readAsText(file)
        } else {
          // bitmap handling
          reader = new FileReader()
          reader.onloadend = function ({ target: { result } }) {
            /**
                * Insert the new image until we know its dimensions.
                * @param {Float} imageWidth
                * @param {Float} imageHeight
                * @returns {void}
                */
            const insertNewImage = (imageWidth, imageHeight) => {
              const newImage = canvas.addSVGElementsFromJson({
                element: 'image',
                attr: {
                  x: 0,
                  y: 0,
                  width: imageWidth,
                  height: imageHeight,
                  id: canvas.getNextId(),
                  style: 'pointer-events:inherit'
                }
              })
              canvas.setHref(newImage, result)
              canvas.selectOnly([newImage])
              canvas.alignSelectedElements('m', 'page')
              canvas.alignSelectedElements('c', 'page')
              this.topPanel.updateContextPanel()
              //$id('se-prompt-dialog').setAttribute('close', true)
            }
            // create dummy img so we know the default dimensions
            let imgWidth = 100
            let imgHeight = 100
            const img = new Image()
            img.style.opacity = 0
            img.addEventListener('load', () => {
              imgWidth = img.offsetWidth || img.naturalWidth || img.width
              imgHeight = img.offsetHeight || img.naturalHeight || img.height
              insertNewImage(imgWidth, imgHeight)
            })
            img.src = result
          }
          reader.readAsDataURL(file)
        }
      }

    


    return (
        
            <>

            <div 

            id="editorOutCanvas"

            className={styles.editorOut}
            
            >
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
                        <button onClick={() => {
                            
                            const delete_animation = (arr) => {
                                if(arr === undefined) return;
                                //console.log(arr);
                                arr.forEach((el , i) =>{
                                    //console.log(el);
                                    if(el.tagName === "g"){
                                        delete_animation(arr.childNodes)
                                    }
                                    // TODO ; may delete group
                                    else el.replaceChildren();
                            })}

                            delete_animation(canvas.getSelectedElements())

                        } }>Del Animations</button>
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
                        onMouseEnter={() => {
                            setanimatedElements([...canvas.getSelectedElements()])
                            console.log("kekeke");
                        }}
                        > 
                        <IoAlarmOutline/>
                        <div> Timing </div>
                        </button>

                        <ul className={styles.ul2}>
                            <li className={styles.li2}>
                                <div className={styles.timingMainDiv} >
                                   <p>Animation Timeline</p>

                                   <div className={styles.timeline}>
                                        {
                                            getTimeline()
                                        }
                                   </div>
                                </div>
                            </li>
                        </ul>

                    </li>

                    

                    
                
                    

                
                    <li className={styles.li1}>
                        <button onClick={() => { }}> 
                        <IoPulseSharp/> 
                        <div>Anime</div>
                        </button>

                        <ul className={styles.ul2}>
                            <li className={styles.li2}>
                                
                                <button>
                                <div>Color Animation</div> 
                                </button>

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
                                        <button onClick={ () => {canvas.getSelectedElements().forEach( (elem) => {

                                        let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                                        myAni.setAttribute('attributeName', 'fill')
                                        myAni.setAttribute('values',
                                        [initalColor,...intermediateColors,finalColor].reduce((p,c)=>p+";"+c) )
                                        myAni.setAttribute('dur', animationDur)
                                        myAni.setAttribute('repeatCount', animationReplay)
                                        elem.appendChild(myAni)
                                        //console.log(elem);

                                        } ) } }> Animate Selected
                                        </button>
                                    
                                    </li>

                                    {animationTimingGlobals()}


                                </ul>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { 
                                 } 
                                }> 

                                <div>Dash Array</div> 
                                </button>

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

                                        <button onClick={ () => 

                                        canvas.getSelectedElements().forEach( (elem) => {

                                            let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                                            myAni.setAttribute('attributeName', 'stroke-dashoffset')
                                            myAni.setAttribute('from', strokeOfsetStart)
                                            myAni.setAttribute('to', strokeOfsetEnd) 
                                            myAni.setAttribute('dur', animationDur)
                                            myAni.setAttribute('repeatCount', animationReplay)
                                            elem.appendChild(myAni)

                                            elem.setAttribute("stroke-dasharray" , strokeDashAnim)
                                            //elem.setAttribute("stroke-dashoffset" , "100")

                                            //console.log(elem);

                                            //alert("been here")
                                        })}>
                                            Animate
                                        </button>

                                    </li>

                                    {animationTimingGlobals()}

                                </ul>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { } }> 

                                <div>Follow Path</div> 
                                </button>

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
                                        <button onClick={() => {

                                            let myAni = document.createElement('animateMotion')
                                            myAni.setAttribute('dur', animationDur)
                                            myAni.setAttribute('fill', 'freeze')
                                            myAni.setAttribute('rotate', 'auto')
                                            myAni.setAttribute("repeatCount",animationReplay)

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

                                        }}>Animate</button>
                                    </li>


                                    {animationTimingGlobals()}

                                </ul>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { } }> 

                                <div>Morph Animation</div> 
                                </button>

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
                                            myAni.setAttribute('values',  
                                                morphInitialShape.getAttribute("d") + ";"+
                                                morphIntermediateShapes.map((e)=> e.getAttribute("d") ).reduce((p,c) => p+";"+c)+";"+
                                                morphFinalShape.getAttribute("d") 
                                                
                                                )
                                            myAni.setAttribute('dur', animationDur)
                                            myAni.setAttribute('repeatCount', animationReplay)

                                            morphInitialShape.appendChild(myAni)


                                         }}>Create Animation</button>
                                    </li>

                                    {animationTimingGlobals()}
                                    
                                
                                </ul>

                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { } }> 

                                <div>Line fill</div> 
                                </button>

                                <ul className={styles.ul3} >

                                    <li className={styles.li3}>
                                        <button onClick={() => {

                                            canvas.getSelectedElements().forEach( (elem) => {

                                                let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                                                myAni.setAttribute('attributeName', 'stroke-dashoffset')
                                                
                                                const pathLenght = elem.getTotalLength()

                                                myAni.setAttribute('from', pathLenght )
                                                myAni.setAttribute('to', 0 ) 
                                                myAni.setAttribute('dur', animationDur)
                                                myAni.setAttribute('repeatCount', animationReplay)
                                                elem.appendChild(myAni)

                                                elem.setAttribute("stroke-dasharray" , pathLenght)
                                                //elem.setAttribute("stroke-dashoffset" , "100")

                                                //console.log(elem);

                                                //alert("been here")
                                            })


                                        }}>Animate</button>
                                    </li>

                                    {animationTimingGlobals()}

                                </ul>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { } }> 

                                <div>TODO : Rotation</div> 
                                </button>

                                <ul className={styles.ul3} >

                                    <li className={styles.li3}>
                                        <button onClick={() => {}}>Animate</button>
                                    </li>

                                    {animationTimingGlobals()}

                                </ul>

                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { } }> 

                                <div>TODO : Zoom</div> 
                                </button>

                                <ul className={styles.ul3} >

                                    <li className={styles.li3}>
                                        <button onClick={() => {}}>Animate</button>
                                    </li>

                                    {animationTimingGlobals()}

                                </ul>

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

                                       //console.log(strokeWidth);

                                        canvas.getSelectedElements().forEach( (elem) => {

                                            //console.log(elem);

                                            elem.setAttribute('stroke-width' , e.target.value)

                                            //console.log(elem);

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
                    <div key={rerenderres} style={{width: width, height: height}} className={styles.result}>
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
