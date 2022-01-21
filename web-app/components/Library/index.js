import React from 'react'
import styles from './Library.module.scss'

import ReactDOMServer from 'react-dom/server';

import { useState } from 'react';

import { IoSearch ,IoFlashOutline , IoShareOutline,  IoGridOutline} from "react-icons/io5";

import { Snake } from '../../svgs/Snake'

export const Library = () => {


    const _svgs = [
        {
            _renderID: 0,
            svg: <>
                <svg  width="100%" height={'100%'} preserveAspectRatio="xMidYMid meet"  viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <g className="layer">
                    <title>Layer 1</title>
                    <circle cx="118.4" cy="123" fill="#FFFFFF" id="svg_1" r="68.62215" stroke="#000000">
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    </circle>
                    <circle cx="342.4" cy="191" fill="#FFFFFF" id="svg_2" r="54.48853" stroke="#000000">
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    </circle>
                    <circle cx="143.4" cy="328" fill="#FFFFFF" id="svg_3" r="54.45181" stroke="#000000">
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    </circle>
                    <circle cx="309.4" cy="353" fill="#FFFFFF" id="svg_4" r="121.63059" stroke="#000000"/>
                    <circle cx="260.4" cy="73" fill="#FFFFFF" id="svg_5" r="92.17918" stroke="#000000"/>
                    <circle cx="74.4" cy="252" fill="#FFFFFF" id="svg_6" r="40.31129" stroke="#000000">
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                    </circle>
                    <circle cx="392.4" cy="117" fill="#FFFFFF" id="svg_7" r="77.83315" stroke="#000000"/>
                    <circle cx="151.4" cy="197" fill="#FFFFFF" id="svg_8" r="94.24644" stroke="#000000"/>
                    </g>
                </svg>
            </>,
            tags: ["cerchi"],
        },

        {
            _renderID: 0,
            svg: <>
            <svg width="100%" height={'100%'} preserveAspectRatio="xMidYMid meet" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                
                <g className="layer">
                <title>Layer 1</title>
                <rect fill="#FFFFFF" height="35" id="svg_1" stroke="#000000" width="361" x="45.4" y="59">
                <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                </rect>
                <rect fill="#FFFFFF" height="53" id="svg_2" stroke="#000000" width="344" x="131.4" y="125">
                <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                </rect>
                <rect fill="#FFFFFF" height="38" id="svg_3" stroke="#000000" width="343" x="28.4" y="239">
                <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                </rect>
                <rect fill="#FFFFFF" height="34" id="svg_4" stroke="#000000" transform="matrix(1 0 0 1 0 0)" width="291" x="175.4" y="310"/>
                <rect fill="#FFFFFF" height="36" id="svg_5" stroke="#000000" width="360" x="38.4" y="388">
                <animate attributeName="fill" dur="1" from="red" repeatCount="1" to="green"/>
                </rect>
                </g>
            </svg>
            </>,
            tags: ["rettangoli"],
        },
        {
            _renderID: 0,
            svg: <Snake/>,
            tags:["snake" , "path follow"]
        },
        {
            _renderID: 0,
            svg:<>
            <svg version="1.1" width="100%"  viewBox="0 0 320 320" fill="none" stroke="#000" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" >
            <defs>
                <path id="r1">
                <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"></animate>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin"></animate>
                </path>
                <path id="r2">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"></animate>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"></animate>
                </path>
                <path id="r3">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"></animate>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"></animate>
                </path>
                <path id="r4">
                <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"></animate>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"></animate>
                </path>
                <path id="r5">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"></animate>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"></animate>
                </path>
                <path id="r6">
                <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"></animate>
                <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"></animate>
                </path>
            </defs>
            <use xlinkHref="#r1"></use>
            <use xlinkHref="#r1" transform="rotate(60 160 160)"></use>
            <use xlinkHref="#r1" transform="rotate(120 160 160)"></use>
            <use xlinkHref="#r1" transform="rotate(180 160 160)"></use>
            <use xlinkHref="#r1" transform="rotate(240 160 160)"></use>
            <use xlinkHref="#r1" transform="rotate(300 160 160)"></use>
            <use xlinkHref="#r2" transform="rotate(30 160 160)"></use>
            <use xlinkHref="#r2" transform="rotate(90 160 160)"></use>
            <use xlinkHref="#r2" transform="rotate(150 160 160)"></use>
            <use xlinkHref="#r2" transform="rotate(210 160 160)"></use>
            <use xlinkHref="#r2" transform="rotate(270 160 160)"></use>
            <use xlinkHref="#r2" transform="rotate(330 160 160)"></use>
            <use xlinkHref="#r3"></use>
            <use xlinkHref="#r3" transform="rotate(60 160 160)"></use>
            <use xlinkHref="#r3" transform="rotate(120 160 160)"></use>
            <use xlinkHref="#r3" transform="rotate(180 160 160)"></use>
            <use xlinkHref="#r3" transform="rotate(240 160 160)"></use>
            <use xlinkHref="#r3" transform="rotate(300 160 160)"></use>
            <use xlinkHref="#r4" transform="rotate(30 160 160)"></use>
            <use xlinkHref="#r4" transform="rotate(90 160 160)"></use>
            <use xlinkHref="#r4" transform="rotate(150 160 160)"></use>
            <use xlinkHref="#r4" transform="rotate(210 160 160)"></use>
            <use xlinkHref="#r4" transform="rotate(270 160 160)"></use>
            <use xlinkHref="#r4" transform="rotate(330 160 160)"></use>
            <use xlinkHref="#r5"></use>
            <use xlinkHref="#r5" transform="rotate(60 160 160)"></use>
            <use xlinkHref="#r5" transform="rotate(120 160 160)"></use>
            <use xlinkHref="#r5" transform="rotate(180 160 160)"></use>
            <use xlinkHref="#r5" transform="rotate(240 160 160)"></use>
            <use xlinkHref="#r5" transform="rotate(300 160 160)"></use>
            <use xlinkHref="#r6" transform="rotate(30 160 160)"></use>
            <use xlinkHref="#r6" transform="rotate(90 160 160)"></use>
            <use xlinkHref="#r6" transform="rotate(150 160 160)"></use>
            <use xlinkHref="#r6" transform="rotate(210 160 160)"></use>
            <use xlinkHref="#r6" transform="rotate(270 160 160)"></use>
            <use xlinkHref="#r6" transform="rotate(330 160 160)"></use>
            </svg>
            </>,
            tags:["Miles Elam"]
        },
        {
            _renderID: 0,
            svg:<>
            
            sss
            
            </>,
            tags:[]
        },
        {
            _renderID: 0,
            svg:<>aa</>,
            tags:[]
        },
        {
            _renderID: 0,
            svg:<>aa</>,
            tags:[]
        },
        {
            _renderID: 0,
            svg:<>aa</>,
            tags:[]
        },
        {
            _renderID: 0,
            svg:<>aa</>,
            tags:[]
        },
    ]

    const [svgs, setSvgs] = useState(_svgs)


    return (
        <div >
        
        <div className={styles.header}> <h2> <IoGridOutline/> Animation Stock Library  </h2> <div className={styles.search}> <input value="search an animation here ..." /> <IoSearch/>  </div> </div>


        <div className={styles.ctn} >

            {
                svgs.map( (el , i) => {


                    return <div key={i+"-"+el._renderID} className={styles.card}>
                    
                        <div className={styles.svg}>{el.svg}</div>
                        <div className={styles.tags}>{el.tags.map((t , i) => {return <div key={t+"-"+i} className={styles.tag}> {t} </div>})}</div>
                        <div className={styles.btns}> 
                            <button onClick={() => {
                                
                                const myNewArray = Object.assign([...svgs], {
                                    [i]: {
                                        ...svgs[i],
                                        _renderID: svgs[i]._renderID + 1
                                    }
                                });
                                setSvgs( myNewArray );                            
                                 
                                 } }> <IoFlashOutline/> </button> 
                            <button onClick={() => { alert(ReactDOMServer.renderToStaticMarkup(el.svg)) } }> <IoShareOutline/> </button> 
                        </div>

                    </div>
                
                
                } )
            }

        </div>
        
        
        </div>
    )
}
