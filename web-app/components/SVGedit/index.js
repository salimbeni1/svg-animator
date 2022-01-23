import React from 'react'

import { useEffect , useState } from 'react'
import styles from './SVGedit.module.scss'

import SvgCanvas from '../../svgedit/src/svgcanvas/svgcanvas.js'



import { IoImageOutline , IoPulseSharp , IoMoveOutline, IoLayersOutline , IoShapesOutline , IoArrowDownCircleOutline, IoCopyOutline , IoColorFillOutline , IoFlashOutline, IoCodeDownload,  IoAnalyticsOutline , IoEnterOutline , IoEyedropOutline , IoScanSharp,  IoEllipseOutline , IoStopOutline , IoSparklesOutline , IoTrashBinOutline,  IoTextSharp} from "react-icons/io5";




export const SVGedit = () => {

    // Editor window size
    const [width, setWidth] = useState(500)
    const [height, setHeight] = useState(500)


    // Fill color
    const [fillColor, setFillColor] = useState("red")


    // Animation 
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

        document.addEventListener( "keydown" , 

            (e) => {
                // Ctrl+C or Cmd+C pressed?
                if ((e.ctrlKey || e.metaKey) && e.keyCode == 67) {
                    canvas.copySelectedElements()
                 }
           
                 // Ctrl+V or Cmd+V pressed?
                 if ((e.ctrlKey || e.metaKey) && e.keyCode == 86) {
                    canvas.pasteElements()
                 }
           
                 // Ctrl+X or Cmd+X pressed?
                 if ((e.ctrlKey || e.metaKey) && e.keyCode == 88) {
                    // Do stuff.
                 } 
            }
        );

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
                        <button onClick={() => {}}> 
                        <IoScanSharp/>
                        <div> Group </div>
                        </button>

                        <ul className={styles.ul2}>
                            <li className={styles.li2}>
                                <button onClick={() => {canvas.groupSelectedElements()}}> 
                                    <div> group  </div>
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={() => {canvas.ungroupSelectedElement()}}> 
                                    <div> ungroup </div>
                                </button>
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
                                        return <li className={styles.li3}>
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
                                        myAni.setAttribute('dur', 1)
                                        myAni.setAttribute('repeatCount', '1')
                                        elem.appendChild(myAni)
                                        //console.log(elem);

                                        } ) } }> Animate Selected
                                        </button>
                                    
                                    </li>


                                </ul>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { 

                                    canvas.getSelectedElements().forEach( (elem) => {

                                        let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                                        myAni.setAttribute('attributeName', 'stroke-dashoffset')
                                        myAni.setAttribute('from', '0')
                                        myAni.setAttribute('to', '1000')
                                        myAni.setAttribute('dur', 10)
                                        myAni.setAttribute('repeatCount', '1')
                                        elem.appendChild(myAni)

                                        elem.setAttribute("stroke-dasharray" , "20")
                                        elem.setAttribute("stroke-dashoffset" , "100")

                                        //console.log(elem);

                                        //alert("been here")
                                    })


                                 } 
                                }> 

                                <div>Dash Array</div> 
                                </button>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { } }> 

                                <div>Follow Path</div> 
                                </button>

                                <ul className={styles.ul3}>

                                    <li className={styles.li3}> 
                                        <div className={styles.divPathFollow2}>
                                            <p>Elements  </p>
                                            <p> : {pathFollowEl.length} selected </p>
                                        </div> 
                                            <button onClick={ () => { setPathFollowEl( canvas.getSelectedElements() ) } } > pick selected </button>
                                    </li>

                                    <li className={styles.li3}> 
                                        <div className={styles.divPathFollow2}>
                                            <p>Path  </p>
                                            <p> : {pathFollowPath?1:0} selected </p>

                                        </div> 
                                            <button onClick={ () => { 
                                                const path = canvas.getSelectedElements()[0]
                                                if(pathFollowEl.includes(path)){
                                                    alert("cannot animate on same path")
                                                    return;
                                                }
                                                setPathFollowPath( path ) 
                                                } } > pick selected  </button>
                                    </li>

                                    <li className={styles.li3}>
                                        <button onClick={() => {

                                            let myAni = document.createElement('animateMotion')
                                            myAni.setAttribute('dur', '10s')
                                            myAni.setAttribute('fill', 'freeze')
                                            myAni.setAttribute('rotate', 'auto')
                                            myAni.setAttribute("repeatCount","1")

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

                                </ul>
                            </li>

                            <li className={styles.li2}>
                                <button onClick={ () => { } }> 

                                <div>Morph Animation</div> 
                                </button>

                                <ul className={styles.ul3} >
                                    <li className={styles.li3}>
                                        <div className={styles.divMorpth2}>
                                            <p>Initial Path</p>
                                            <p> : {morphInitialShape?1:0} path </p>

                                        </div>

                                        <button onClick={ () => { 

                                            const pathEl = canvas.getSelectedElements()[0] 
                                            
                                            const path = pathEl?.getAttribute("d");

                                            if(!path){
                                                alert("you can only morph a PATH")
                                            }

                                            setMorphInitialShape( pathEl ) 

                                        }
                                        } >pick selected</button>
                                        
                                    </li>

                                    {morphIntermediateShapes.map((el , i) => {

                                        return <li key={"mip"+i} className={styles.li3}>
                                            <div className={styles.divMorpth2}>
                                                <p>Inter Path {i}</p>
                                                <p> : {morphIntermediateShapes[i]?1:0} path </p>

                                            </div>

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
                                            <p>Final Path</p>
                                            <p> : {morphFinalShape?1:0} path </p>

                                        </div>

                                        <button onClick={ () => { 

                                            const pathEl = canvas.getSelectedElements()[0] 

                                            const path = pathEl?.getAttribute("d");

                                            if(!path){
                                                alert("you can only morph a PATH")
                                            }

                                            setMorphFinalShape( pathEl ) 

                                            }}
                                             >pick selected</button>
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
                                            myAni.setAttribute('dur', 10)
                                            myAni.setAttribute('repeatCount', '1')

                                            morphInitialShape.appendChild(myAni)


                                         }}>Create Animation</button>
                                    </li>
                                    
                                
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
                        <button onClick={ () => canvas.deleteSelectedElements()}>  
                            <IoTrashBinOutline/>
                            <div>Del</div>
                        </button>
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
