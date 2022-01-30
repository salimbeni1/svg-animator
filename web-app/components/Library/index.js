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
            svg: <Snake/>,
            tags:["snake" , "path follow"]
        },
        {
            _renderID: 0,
            svg:<>
            <svg version="1.1" width="100%"  viewBox="0 0 320 320" fill="none" stroke="#000" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" >
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
            
            <svg viewBox="0 0 500 500" width="100%"  xmlns="http://www.w3.org/2000/svg" >
            
            <g >
            <path d="m188.4,99c-52,-45 -117,-29 -116,43c1,72 124,186 75,234c-49,48 -110,-89 -66,-118" fill="#FFFFFF" id="svg_1" stroke="#000000" strokeDasharray="606.2749" strokeLinecap="round" strokeWidth="20">
            <animate attributeName="stroke-dashoffset" begin="0" dur="5" end="5" from="606.2749" repeatCount="1" to="0"/>
            </path>
            <path d="m178.4,162c51,-105 2,208 66,203c64,-5 -8,-333 60.6,-248" fill="#FFFFFF" id="svg_3" stroke="#000000" strokeDasharray="571.5365" strokeLinecap="round" strokeWidth="20">
            <animate attributeName="stroke-dashoffset" begin="0" dur="5" end="5" from="571.5365" repeatCount="1" to="0"/>
            </path>
            <path d="m402.73058,198.75392c64.88505,38.13354 69.9542,-91.09679 -12.16595,-84.7412c-82.12015,6.35559 -102.39673,131.34886 -71.98186,193.84549c30.41487,62.49663 116.59033,-23.30383 83.13398,-23.30383c-33.45636,0 48.66379,117.57841 5.06914,94.27458c-43.59465,-23.30383 13.17978,-45.54839 27.37338,-46.60766" fill="#FFFFFF" id="svg_6" stroke="#000000" strokeDasharray="731.71869" strokeLinecap="round" strokeWidth="20" transform="rotate(9.02306 378.495 247.836)">
            <animate attributeName="stroke-dashoffset" begin="0" dur="5" end="5" from="731.71869" repeatCount="1" to="0"/>
            </path>
            </g>
            </svg>
            
            </>,
            tags:["SVG"]
        },
        {
            _renderID: 0,
            svg:<>
            
            <svg viewBox="0 0 500 500" width="100%"  xmlns="http://www.w3.org/2000/svg" >
                
                <g >
                <title>Layer 1</title>
                <circle cx="124.4" cy="50.5" fill="#FFFFFF" id="svg_1" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0fd"/>
                </circle>
                <circle cx="111.4" cy="87" fill="#FFFFFF" id="svg_2" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#0fd"/>
                </circle>
                <circle cx="106.4" cy="128" fill="#FFFFFF" id="svg_3" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#0fd"/>
                </circle>
                <circle cx="116.4" cy="162" fill="#FFFFFF" id="svg_4" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0fd"/>
                </circle>
                <circle cx="151.4" cy="197" fill="#FFFFFF" id="svg_5" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd"/>
                </circle>
                <circle cx="197.4" cy="208" fill="#FFFFFF" id="svg_6" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd"/>
                </circle>
                <circle cx="249.4" cy="194" fill="#FFFFFF" id="svg_7" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd"/>
                </circle>
                <circle cx="289.4" cy="156" fill="#FFFFFF" id="svg_8" r="58.92695" stroke="#000000"/>
                <circle cx="305.4" cy="118" fill="#FFFFFF" id="svg_9" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#0fd"/>
                </circle>
                <circle cx="281.4" cy="69" fill="#FFFFFF" id="svg_10" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0fd"/>
                </circle>
                <circle cx="243.4" cy="56" fill="#FFFFFF" id="svg_11" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd"/>
                </circle>
                <circle cx="207.4" cy="89" fill="#FFFFFF" id="svg_12" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd"/>
                </circle>
                <circle cx="215.4" cy="135" fill="#FFFFFF" id="svg_13" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd"/>
                </circle>
                <circle cx="265.4" cy="157" fill="#FFFFFF" id="svg_14" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd"/>
                </circle>
                <circle cx="304.4" cy="181" fill="#FFFFFF" id="svg_15" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#0fd"/>
                </circle>
                <circle cx="324.4" cy="217" fill="#FFFFFF" id="svg_16" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd"/>
                </circle>
                <circle cx="307.4" cy="258" fill="#FFFFFF" id="svg_17" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0fd"/>
                </circle>
                <circle cx="275.4" cy="276" fill="#FFFFFF" id="svg_18" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd"/>
                </circle>
                <circle cx="226.4" cy="286" fill="#FFFFFF" id="svg_19" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#0fd"/>
                </circle>
                <circle cx="193.4" cy="305" fill="#FFFFFF" id="svg_20" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#0fd"/>
                </circle>
                <circle cx="175.4" cy="335" fill="#FFFFFF" id="svg_21" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0fd"/>
                </circle>
                <circle cx="191.4" cy="362" fill="#FFFFFF" id="svg_22" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#0fd"/>
                </circle>
                <circle cx="232.4" cy="386" fill="#FFFFFF" id="svg_23" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0fd"/>
                </circle>
                <circle cx="277.4" cy="389" fill="#FFFFFF" id="svg_24" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd"/>
                </circle>
                <circle cx="320.4" cy="369" fill="#FFFFFF" id="svg_25" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd"/>
                </circle>
                <circle cx="347.4" cy="334" fill="#FFFFFF" id="svg_26" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd"/>
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0fd"/>
                </circle>
                <circle cx="378.4" cy="313" fill="#FFFFFF" id="svg_27" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#0fd"/>
                </circle>
                <circle cx="427.4" cy="311" fill="#FFFFFF" id="svg_28" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#ff0;#0fd"/>
                </circle>
                <circle cx="449.4" cy="339" fill="#FFFFFF" id="svg_29" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#ff0;#ff0;#0fd"/>
                </circle>
                <circle cx="445.4" cy="391" fill="#FFFFFF" id="svg_30" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#ff0;#ff0;#0fd;#0fd"/>
                </circle>
                <circle cx="427.4" cy="432" fill="#FFFFFF" id="svg_31" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#ff0;#ff0;#0fd;#0f0;#0fd"/>
                </circle>
                <circle cx="427.4" cy="466" fill="#FFFFFF" id="svg_32" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#ff0;#ff0;#0fd;#0f0;#ff0;#0fd"/>
                </circle>
                <circle cx="460.4" cy="499" fill="#FFFFFF" id="svg_33" r="58.92695" stroke="#000000" transform="matrix(1 0 0 1 0 0)">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#ff0;#ff0;#0fd;#0f0;#ff0;#ff0;#0fd"/>
                </circle>
                <circle cx="510.4" cy="522" fill="#FFFFFF" id="svg_34" r="58.92695" stroke="#000000">
                <animate attributeName="fill" begin="0" dur="50" repeatCount="indefinite" values="#0fd;#0ad;#0f0;#ff0;#ff0;#0f0;#0fd;#0fd;#ff0;#ff0;#0f0;#0fd;#0fd;#0fd;#0fd;#ff0;#0fd;#0f0;#0fd;#ff0;#ff0;#0f0;#ff0;#0f0;#0fd;#0fd;#0f0;#ff0;#ff0;#0fd;#0f0;#ff0;#ff0;#0fd;#0fd"/>
                </circle>
                </g>
                </svg>
            </>,
            tags:["color change"]
        },
        {
            _renderID: 0,
            svg:<>
            
            <svg  viewBox="0 0 500 500" width="100%" xmlns="http://www.w3.org/2000/svg" >
            
            <g >
            <title>Layer 1</title>
            <path d="m123.8154,257.94382l-26.39539,126.17735l54.0378,73.43108l-8.31351,-73.43108l14.54864,-98.25286l32.21484,79.63653l108.0756,75.49956l-67.54725,-77.56805l-17.6662,-81.70501l69.62563,89.97893l145.48639,95.15014l-120.54587,-110.66374l-46.76348,-85.84197l86.25265,51.71203l101.84047,-42.40386l-90.4094,8.27392l-67.54725,-47.57507l5.19594,-94.11589l69.62563,51.71203l-9.3527,57.91747l63.3905,-54.81475l-104.95804,-89.97893l-82.09589,-29.99298l-14.54864,-47.57507l-163.1526,-1.03424l47.80267,92.04741l-12.47026,77.56805l33.66971,55.84899z" fill="red" id="svg_6" stroke="#000000" strokeLinejoin="round" strokeWidth="10">
            <animate attributeName="d" begin="0" dur="10" end="10" repeatCount="1" values="M 100.39999999999998 236 L 75 358 L 127 429 L 119 358 L 133 263 L 164 340 L 268 413 L 203 338 L 186 259 L 253 346 L 393 438 L 277 331 L 232 248 L 315 298 L 413 257 L 326 265 L 261 219 L 266 128 L 333 178 L 324 234 L 385 181 L 284 94 L 205 65 L 191 19 L 34 18 L 80 107 L 68 182 L 100.39999999999998 236 z;M91.39999999999998,245 L57,358 L73,443 L84,358 L132,263 L139,339 L260,455 L177,335 L194,257 L229,344 L370,462 L261,331 L239,244 L306,321 L417,306 L327,295 L260,216 L265,128 L374,181 L347,248 L417,171 L282,81 L205,60 L190,19 L33,18 L74,106 L59,182 L91.39999999999998,245 z;M 100.39999999999998 236 L 75 358 L 127 429 L 119 358 L 133 263 L 164 340 L 268 413 L 203 338 L 186 259 L 253 346 L 393 438 L 277 331 L 232 248 L 315 298 L 413 257 L 326 265 L 261 219 L 266 128 L 333 178 L 324 234 L 385 181 L 284 94 L 205 65 L 191 19 L 34 18 L 80 107 L 68 182 L 100.39999999999998 236 z"/>
            <animate attributeName="d" begin="0" dur="10" repeatCount="indefinite" values="M 100.39999999999998 236 L 75 358 L 127 429 L 119 358 L 133 263 L 164 340 L 268 413 L 203 338 L 186 259 L 253 346 L 393 438 L 277 331 L 232 248 L 315 298 L 413 257 L 326 265 L 261 219 L 266 128 L 333 178 L 324 234 L 385 181 L 284 94 L 205 65 L 191 19 L 34 18 L 80 107 L 68 182 L 100.39999999999998 236 z;M91.39999999999998,245 L57,358 L73,443 L84,358 L132,263 L139,339 L260,455 L177,335 L194,257 L229,344 L370,462 L261,331 L239,244 L306,321 L417,306 L327,295 L260,216 L265,128 L374,181 L347,248 L417,171 L282,81 L205,60 L190,19 L33,18 L74,106 L59,182 L91.39999999999998,245 z;M 100.39999999999998 236 L 75 358 L 127 429 L 119 358 L 133 263 L 164 340 L 268 413 L 203 338 L 186 259 L 253 346 L 393 438 L 277 331 L 232 248 L 315 298 L 413 257 L 326 265 L 261 219 L 266 128 L 333 178 L 324 234 L 385 181 L 284 94 L 205 65 L 191 19 L 34 18 L 80 107 L 68 182 L 100.39999999999998 236 z"/>
            </path>
            <circle cx="161.4" cy="56" fill="#FFFFFF" id="svg_7" r="16.64332" stroke="#000000" strokeWidth="10"/>
            <path d="m109.00822,131.44142l-6.50541,38.22255l13.30396,29.81618l27.29893,18.11613" fill="transparent" id="svg_8" stroke="#000000" strokeLinecap="round" strokeWidth="10" transform="matrix(1 0 0 1 0 0)">
            <animate attributeName="d" begin="0" dur="10" repeatCount="indefinite" values="M109.00821785311578,131.44142198982752 L102.50280693794866,169.66397582908493 L115.80676480569053,199.48015776194399 L143.1056927568523,217.59629139369412 ;M 109.52724011724322 138.38930545676024 L 117.64390707271275 175.82405195310156 L 133.14634722696456 196.15748621988655 L 168.76965669312034 199.59712299437746;M109.00821785311578,131.44142198982752 L102.50280693794866,169.66397582908493 L115.80676480569053,199.48015776194399 L143.1056927568523,217.59629139369412 "/>
            </path>
            </g>
            </svg>
            
            </>,
            tags:["wierd stuff" , "morph"]
        },
        {
            _renderID: 0,
            svg:<>
           
            </>,
            tags:[]
        },
        {
            _renderID: 0,
            svg:<></>,
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
                        
                        
                            <button onClick={() => {

                                 const a = document.createElement('a') // Create "a" element
                                 const blob = new Blob([ReactDOMServer.renderToStaticMarkup(el.svg)], {type: 'image/svg+xml'}) // Create a blob (file-like object)
                                 const url = URL.createObjectURL(blob) // Create an object URL from blob
                                 a.setAttribute('href', url) // Set "a" element link
                                 a.setAttribute('download', "SVG-editor.svg") // Set download filename
                                 a.click() // Start downloading
                                 
                                 } }> <IoShareOutline/> </button> 
                        
                        
                        </div>

                    </div>
                
                
                } )
            }

        </div>
        
        
        </div>
    )
}
