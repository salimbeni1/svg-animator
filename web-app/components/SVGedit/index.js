import React from 'react'

import { useEffect , useState } from 'react'
import styles from './SVGedit.module.scss'

import SvgCanvas from '../../svgedit/src/svgcanvas/svgcanvas.js'

import { IoPulseSharp , IoCopyOutline , IoColorFillOutline , IoFlashOutline, IoCodeDownload,  IoAnalyticsOutline , IoEnterOutline , IoEyedropOutline , IoScanSharp,  IoEllipseOutline , IoStopOutline , IoSparklesOutline , IoTrashBinOutline,  IoTextSharp} from "react-icons/io5";

export const SVGedit = () => {

    const { width, height } = { width: 500, height: 500 }


    const [result, setResult] = useState(<></>)

    const [rerenderres, setRerenderres] = useState(0)


    useEffect(() => {
        
        const container = document.querySelector('#editorContainer')
        window.width = width
        window.height = height

        const hiddenTextTagId = 'text'

        const config = {
            initFill: { color: 'FFFFFF', opacity: 1 },
            initStroke: { color: '000000', opacity: 1, width: 1 },
            text: { stroke_width: 0, font_size: 24, font_family: 'serif' },
            initOpacity: 1,
            imgPath: '../svgedit/images',
            dimensions: [ width, height ],
            baseUnit: 'px'
        }

        window.canvas = new SvgCanvas(container, config)
        canvas.updateCanvas(width, height)

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

    


    return (
        
            <>
            <div className={styles.ctn} >

                

                <div className={styles.btnPannel} style={{height: height , width: 150}}>
                <button onClick={() => canvas.setMode('select')}> 
                    <IoScanSharp/>
                    <div> Select </div>
                </button>
                <button onClick={() => canvas.setMode('circle')}>
                     <IoEllipseOutline/>
                    <div> Circle </div> 
                    </button>
                <button onClick={ () => canvas.setMode('rect')}> 
                    <IoStopOutline/>
                    <div>Rect </div> 
                </button>
                <button onClick={ () => canvas.setMode('text')}> 
                    <IoTextSharp/>
                    <div>Text</div>
                </button>

                <button onClick={ () => canvas.setMode('path')}> 
                    <IoAnalyticsOutline/> 
                    <div>Path</div> 
                </button>

                <button onClick={() => { canvas.getSelectedElements().forEach( (elem) => {
                    

                    let myAni = document.createElementNS('http://www.w3.org/2000/svg', 'animate')
                    myAni.setAttribute('attributeName', 'fill')
                    //myAni.setAttribute('begin', 0)
                    myAni.setAttribute('from', 'red')
                    myAni.setAttribute('to', 'green')
                    myAni.setAttribute('dur', 1)
                    myAni.setAttribute('repeatCount', '1')
                    elem.appendChild(myAni)

                    console.log(elem);

                } ) }}> 
                    <IoPulseSharp/> 
                    <div>Anime</div>
                </button>

                <button onClick={ () => fill('#ff0000')}>
                     <IoColorFillOutline/> 
                     <div>Fill</div>
                </button>

                <button onClick={ () => canvas.deleteSelectedElements()}>  
                    <IoTrashBinOutline/>
                    <div>Del</div>
                </button>
                <button onClick={() => {canvas.clear(); canvas.updateCanvas(width, height);}}>
                    <IoSparklesOutline/>
                     <div> Clear</div>
                </button>
                <button onClick={() => setResult(<div dangerouslySetInnerHTML={{__html: canvas.getSvgString()}} />)}> 
                    <IoEnterOutline/> 
                    <div>Result</div>
                </button>

                

                </div>

                
                <input id="text" style={{width:0,height:0,opacity: 0}}/>


                <div>
                    <div id="editorContainer" className={styles.editor}></div> 
                    <div className={styles.subtitle}> EDITOR </div>
                </div>

                <div>
                    <div key={rerenderres} style={{width: width, height: height}} className={styles.result}>
                        { result }
                    </div>
                    <div className={styles.subtitle}>RESULT ANIMATION</div>
                </div>

                <div className={styles.btnPannel} style={{height: height ,  width: 75}}>
                <button onClick={() => {
                    setRerenderres(i=> i+1)
                    } }> 
                    <IoFlashOutline/>
                    <div> Run </div>
                </button>
                <button onClick={() => {alert(canvas.getSvgString())} }> 
                    <IoCodeDownload/>
                    <div> Export </div>
                </button>
                <button onClick={() => {navigator.clipboard.writeText(canvas.getSvgString())}}> 
                    <IoCopyOutline/>
                    <div> Copy </div>
                </button>
                
                </div>

            </div>       
            </>

    )
}
