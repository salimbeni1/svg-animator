import React from 'react'

import { useEffect , useState } from 'react'
import styles from './SVGedit.module.scss'

import SvgCanvas from '../../svgedit/src/svgcanvas/svgcanvas.js'

export const SVGedit = () => {

    const { width, height } = { width: 500, height: 500 }


    const [result, setResult] = useState(<></>)


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
            <div className={styles.ctn}>

                

                <div className={styles.btnPannel}>
                <button onClick={() => canvas.setMode('select')}>Select</button>
                <button onClick={() => canvas.setMode('circle')}>Circle</button>
                <button onClick={ () => canvas.setMode('rect')}>Rect</button>
                <button onClick={ () => canvas.setMode('text')}>Text</button>
                <button onClick={ () => canvas.setMode('path')}>Path</button>
                <button onClick={ () => fill('#ff0000')}>Fill Red</button>
                <button onClick={ () => canvas.deleteSelectedElements()}>Delete Selected</button>
                <button onClick={() => {canvas.clear(); canvas.updateCanvas(width, height);}}>Clear All</button>
                <button onClick={() => setResult(<div dangerouslySetInnerHTML={{__html: canvas.getSvgString()}} />)}>RESULT</button>
                </div>

                
                <input id="text" style={{width:0,height:0,opacity: 0}}/>


                <div>
                    <div id="editorContainer" className={styles.editor}></div> 
                    <div className={styles.subtitle}> EDITOR </div>
                </div>

                <div>
                    <div style={{width: width, height: height}} className={styles.result}>
                        {result}
                    </div>
                    <div className={styles.subtitle}>RESULT ANIMATION</div>
                </div>

            </div>       
            </>

    )
}
