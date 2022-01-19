import React from 'react'

import { useEffect } from 'react'

import SvgCanvas from '../../svgedit/src/svgcanvas/svgcanvas.js'

export const SVGedit = () => {


    useEffect(() => {
        
        const container = document.querySelector('#editorContainer')
        const { width, height } = { width: 500, height: 300 }
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


                <div id="editorContainer"></div>

                <div>
                <button onClick={() => canvas.setMode('select')}>Select</button>
                <button onClick={() => canvas.setMode('circle')}>Circle</button>
                <button onClick={ () => canvas.setMode('rect')}>Rect</button>
                <button onClick={ () => canvas.setMode('text')}>Text</button>
                <button onClick={ () => fill('#ff0000')}>Fill Red</button>
                <button onClick={ () => canvas.deleteSelectedElements()}>Delete Selected</button>
                <button onClick={() => {canvas.clear(); canvas.updateCanvas(width, height);}}>Clear All</button>
                <button onClick={() => alert(canvas.getSvgString())}>Get SVG</button>
                </div>
                
                <input id="text" style={{width:0,height:0,opacity: 0}}/>        
                </>

    )
}
