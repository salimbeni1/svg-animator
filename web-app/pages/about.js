import styles from '../styles/about.module.scss'


import React from 'react'

import { IoMailOpenOutline , IoLogoGithub , IoLogoLinkedin , IoLogoYoutube , IoLogoStackoverflow } from "react-icons/io5";

const about = () => {
    return (
        <div className={styles.pagediv}>

            <div className={styles.cnt1}>

                <div className={styles.cnt2}>

                    <h1>What is this site ?</h1>

                    <p>
                        Design interactive animations for the web
                        to bring your site to life !!! 
                        This app is a simple svg animation editor that allows you
                        to create the fanciest graphical effects :P
                    </p>

                    What is offered :
                    <ul>
                        <li><b>support</b> on all modern browsers</li>
                        <li>a <b>wide range of animations</b>, and even more to come !</li>
                        <li>a library of some <b>premade animations</b></li>
                        <li><b>import your images</b> of any format in your animations</li>
                        <li><b>convenient export</b> to your site</li>
                        <li><b>easy to use</b> editor</li>
                        <li><b>free</b> and  <b>no registration</b> needed</li>
                    </ul>

                    <h1>Who is it for ?</h1>

                    <p>
                        Pretty much everyone. I made this for myself but feel free to do whatever you want with it. There are already some well build svg animators, but they unfortunately are not free :/
                        Thus if you just want build an animation fast without too much overhead{"<3"} 
                    </p>

                </div>

                <div className={styles.im2}>

                    

                </div>

            </div>

            <div className={styles.cnt1}>

                

                <div className={styles.im2}>
                
                </div>

                <div className={styles.cnt2}>

                    <h1>What is the story behind it ?</h1>

                    <p>
                        Making clean SVG animations for the web has not been an easy
                        journey for me. Expecially when more complex motions are involved 
                        where aligning and timing becomes crutial. And lets not start talking
                        about browsers support and synchronisation ...
                    </p>

                    <p>
                        So to simplify my task I decided to automate my animation process with this app.
                    </p>

                    <p>
                        
                    </p>

                </div>

            </div>

            <div className={styles.cnt1}>
   
                <div className={styles.cnt2}>

                    
                    <h1>Ideas / Issues / Contributions</h1>

                    <p>
                        This is an active and open project.
                        I gladly welcome any critics and suggestions to make this app better. 
                        So do not hesitate to reach me if you have an idea , a problem or
                        simply want to contribute to this :) 
                    </p>


                    <h1>About Me</h1>

                    <p>
                        I am a enthousiast software developper, always working on a fun side project !!
                    </p>

                    <div className={styles.contact}> 
                        <h3>Etienne Salimbeni : </h3>
                        
                        <IoMailOpenOutline/> 

                        <IoLogoGithub/>

                        <IoLogoLinkedin/>

                        <IoLogoYoutube/>

                        <IoLogoStackoverflow/>
                        
                    </div>
                    


                </div>

                <div className={styles.im2}>
                
                </div>

            </div>


        </div>
    )
}

export default about
