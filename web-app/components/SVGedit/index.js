import React from 'react'

import { useEffect , useState } from 'react'
import styles from './SVGedit.module.scss'

import SvgCanvas from '../../svgedit/src/svgcanvas/svgcanvas.js'



import { IoPulseSharp , IoMoveOutline, IoLayersOutline , IoShapesOutline , IoArrowDownCircleOutline, IoCopyOutline , IoColorFillOutline , IoFlashOutline, IoCodeDownload,  IoAnalyticsOutline , IoEnterOutline , IoEyedropOutline , IoScanSharp,  IoEllipseOutline , IoStopOutline , IoSparklesOutline , IoTrashBinOutline,  IoTextSharp} from "react-icons/io5";

export const SVGedit = () => {

    

    const [width, setWidth] = useState(500)
    const [height, setHeight] = useState(500)

    const [fillColor, setFillColor] = useState("red")

    


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

                    <li>
                        <button onClick={() => canvas.setMode('select')}> 
                        
                        <IoMoveOutline/>
                        <div> Select </div>
                        </button>
                    </li>

                    <li>
                        <button > 
                        <IoShapesOutline/>
                        <div> Shapes </div>
                        </button>

                        <ul>

                            <li>
                                <button onClick={() => canvas.setMode('circle')}>
                                    <div> Circle </div> 
                                    <IoEllipseOutline/>
                                </button>
                            </li>
                        
                            <li>
                                <button onClick={ () => canvas.setMode('rect')}> 
                                    <div>Recta </div> 
                                    <IoStopOutline/>
                                </button>
                            </li>

                            <li>
                                <button onClick={ () => canvas.setMode('text')}> 
                                    
                                    <div>Text</div>
                                    <IoTextSharp/>
                                </button>
                            </li>
                        
                            <li>
                                <button onClick={ () => canvas.setMode('path')}> 
                                
                                <div>Path</div> 
                                <IoAnalyticsOutline/> 
                                </button>
                            </li>

                        </ul>
                    </li>

                    <li>
                        <button onClick={() => {
                            document.getElementById('file-import-input').click();
                        }}> 
                            <input id="file-import-input" type="file" onChange={ (e) => {importImage(e)}} style={{display:"none"}} />
                            <IoArrowDownCircleOutline/>
                            <div> Import </div>
                        </button>
                    </li>

                    <li>
                        <button onClick={() => {}}> 
                        <IoLayersOutline/>
                        <div> Layer </div>
                        </button>

                        <ul>
                            <li>
                                <button onClick={() => {canvas.moveToTopSelectedElement()}}> 
                                    <div> Push Front </div>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => {canvas.moveToBottomSelectedElement()}}> 
                                    <div> Push Back </div>
                                </button>
                            </li>
                        
                        </ul>
                    </li>

                    <li>
                        <button onClick={() => {}}> 
                        <IoScanSharp/>
                        <div> Group </div>
                        </button>

                        <ul>
                            <li>
                                <button onClick={() => {canvas.groupSelectedElements()}}> 
                                    <div> group  </div>
                                </button>
                            </li>

                            <li>
                                <button onClick={() => {canvas.ungroupSelectedElement()}}> 
                                    <div> ungroup </div>
                                </button>
                            </li>
                        
                        </ul>

                    </li>

                    

                    
                
                    

                
                    <li>
                        <button onClick={() => { }}> 
                        <IoPulseSharp/> 
                        <div>Anime</div>
                        </button>

                        <ul className={styles.btnExt}>
                            <li>
                                <button onClick={ () => {canvas.getSelectedElements().forEach( (elem) => {

                                let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                                myAni.setAttribute('attributeName', 'fill')
                                //myAni.setAttribute('begin', 0)
                                myAni.setAttribute('from', 'red')
                                myAni.setAttribute('to', 'green')
                                myAni.setAttribute('dur', 1)
                                myAni.setAttribute('repeatCount', '1')
                                elem.appendChild(myAni)
                                //console.log(elem);

                                } ) } }> 

                                <div>Color Animation</div> 
                                </button>
                            </li>

                            <li>
                                <button onClick={ () => {} }> 

                                <div>Dash Array</div> 
                                </button>
                            </li>

                            <li>
                                <button onClick={ () => {} }> 

                                <div>Follow Path</div> 
                                </button>
                            </li>

                            <li>
                                <button onClick={ () => { } }> 

                                <div>Morph Animation</div> 
                                </button>
                            </li>
                            
                        </ul>
                    </li>
                

                
                    <li>
                        <button onClick={ () => fill(fillColor)}>
                        <IoColorFillOutline/> 
                        <div>Fill</div>
                        </button>

                        <ul className={styles.btnExt}>
                            <li>
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

                            <li>
                                <div className={styles.colorInput}>
                                Color
                                <input onChange={(event) => {setFillColor(event.target.value); fill(event.target.value)}} value={fillColor}/>
                                </div>
                            </li>
                        </ul>
                    </li>
                
                    <li>
                        <button onClick={ () => canvas.deleteSelectedElements()}>  
                            <IoTrashBinOutline/>
                            <div>Del</div>
                        </button>
                    </li>

                    <li>
                        <button onClick={() => {canvas.clear(); canvas.updateCanvas(width, height);}}>
                            <IoSparklesOutline/>
                            <div> Clear</div>
                        </button>
                    </li>
                
                    <li>
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
                    
                    <li>
                        <button onClick={() => {
                        setRerenderres(i=> i+1)
                        } }> 
                        <IoFlashOutline/>
                        <div> Run </div>
                    </button>
                    </li>
                    
                    <li>
                        <button onClick={() => {alert(canvas.getSvgString())} }> 
                        <IoCodeDownload/>
                        <div> Export </div>
                    </button>
                    </li>

                    <li>
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
