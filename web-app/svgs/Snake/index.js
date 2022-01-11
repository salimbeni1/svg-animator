import React from 'react'
import styles from './Snake.module.scss'



export const Snake = () => {

  return <>
  <div className={styles.snakectn}>


  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1957 1191">
  <defs>
    <style>
    {`
      .cls-snake-1, .cls-snake-2 {
        fill: none;
        stroke: #000;
        stroke-miterlimit: 10;
      }

      .cls-snake-1 {
        stroke-width: 4px;
      }

      .cls-snake-2 {
        stroke-width: 10px;
        display:none;
      }
    `}
    </style>
  </defs>

  
  <g id="snake_head_2" data-name="snake head_2">
    <g>
      <path className="cls-snake-1" d="M335.68,137.72a492.31,492.31,0,0,1,51-3.76c15.35-.33,29.73.08,43,1"/>
      <path className="cls-snake-1" d="M439,116.22c-5.12-5-10.81-9.69-17.61-11.87-3.76-1.2-7.73-1.58-11.63-2.16-13.37-2-26.29-6.19-39.13-10.4-5.93-1.94-12-4-16.88-7.84-3-2.41-5.55-5.49-8.79-7.62-4.36-2.86-7.58.64-11-1-2.4-1.21-5.07-4.43-5.69-13.64"/>
      <path className="cls-snake-1" d="M522.33,152c-10.33-10.14-17.8-17.51-20.49-20.46a14.35,14.35,0,0,0-4.66-3.53,17.3,17.3,0,0,0-4.32-1.19,118.93,118.93,0,0,0-16.95-1.76l9.83.25L468.89,93.81"/>
      <path className="cls-snake-1" d="M468.61,93.78a48.91,48.91,0,0,1-27.08-.6c-10.9-3.55-17.73-10.38-23.07-15.72A80,80,0,0,1,407.27,63.4"/>
      <path className="cls-snake-1" d="M492.89,126.32a109.63,109.63,0,0,1,17.18-2A11.58,11.58,0,0,1,517,125.8c1.85,1.16,3,3.15,4.09,5s1.93,3.56,1.9,5.44c-.06,5.14-7.12,8.39-7.45,8.54"/>
      <path className="cls-snake-1" d="M421.36,104.73c-13.09-17.92-24.76-29.36-28.84-31.61a32.52,32.52,0,0,0-8.27-3.22,81,81,0,0,0-9.47-1.12c-6.79-.7-18.66-4.91-18.66-4.91-5.86-2.26-16.56-4-37.85-1.45"/>
      <path className="cls-snake-1" d="M356.24,64.26a46.48,46.48,0,0,0,53.45,25.2"/>
      <path className="cls-snake-1" d="M367.17,67.51c-1.58-5-6.25-17.11-18.52-25.78a47.83,47.83,0,0,0-14.76-7"/>
      <path className="cls-snake-1" d="M305.89,26.18c3.78,3.73,7.85,7.51,12.24,11.28a240.38,240.38,0,0,0,38.11,26.8"/>
      <path className="cls-snake-1" d="M308.41,43.7A169.47,169.47,0,0,0,235.7,36c-24.21,2.84-61.25,12.74-61.44,25.2,0,3.53,2.79,12.14,39.34,23"/>
      <path className="cls-snake-1" d="M238.14,22.62l30.73,12.69"/>
      <path className="cls-snake-1" d="M132.32,58.27a45.72,45.72,0,0,1,41.94,2.94"/>
      <path className="cls-snake-1" d="M183,72.41c-20.74-4.08-28.76-1.87-32,1.28-.67.65-10.38,10.19-17.58,17.08a52,52,0,0,0-11.16,15,11.26,11.26,0,0,0-1.44,5.8c.29,3.12,2.22,5.38,3.87,7.05,6.93,7,19.94,15,22.19,16.35"/>
      <path className="cls-snake-1" d="M132.32,58.27c-10.75,8.84-19.1,15.47-25.86,20.41-1.66,1.2-4.82,3.48-5.53,7.24-.94,4.92,2.89,9.39,4.61,11.39,5.6,6.53,13.32,8.23,16.71,8.75"/>
      <path className="cls-snake-1" d="M125,119.12c-11.43.39-19.47,6-19.95,11.72-.42,4.91,4.81,9.47,6.67,11.09a24.16,24.16,0,0,0,12.14,5.55"/>
      <path className="cls-snake-1" d="M105.43,97.68c-.87.06-10.33.78-12.88,6.4-2.68,5.89,2.44,16.7,15.26,21.66"/>
      <path className="cls-snake-1" d="M93.1,112.41c-3.51,0-30.76.44-34.73,10.87a7.51,7.51,0,0,0-.54,3.2c.49,9.16,18,14.15,19.63,14.59"/>
      <path className="cls-snake-1" d="M95.06,69.44c-8.17,2-13.87,6.17-14.09,10.65-.14,2.8,1.9,5.07,5,8.38A46.51,46.51,0,0,0,99.41,98.55"/>
      <path className="cls-snake-1" d="M85.64,88.24c-6.37-.23-25.16-.62-34.47,4.11C47.51,94.2,47.05,96,47,96.6c-.24,1.51.43,3.81,6,8a56.8,56.8,0,0,0,20.1,9.4"/>
      <path className="cls-snake-1" d="M53.27,104.52C41.21,107.14,32.81,114.25,33,120c.2,6.62,11.67,15,28.63,13.67"/>
      <path className="cls-snake-1" d="M51.09,157.49a30.36,30.36,0,0,0-14.18,7.68c-2.47,2.41-6.17,6-6.22,9.87-.08,6.58,10.54,13.8,26.64,16.59"/>
      <path className="cls-snake-1" d="M63.07,68.73c-11.11-3.49-20.75,3-21.7,9.62-.71,5,3.4,11.09,10.17,14.13"/>
      <path className="cls-snake-1" d="M460,121.59c-19.71-17-30.48-27.28-34.88-32.65a16,16,0,0,0-5.48-4.45c-5-2.41-10.41-1.57-14.38-.38"/>
      <path className="cls-snake-1" d="M300.08,26a73.06,73.06,0,0,1,11.76,35"/>
      <path className="cls-snake-1" d="M63.68,220.78c-13.29-1-23.9,3.77-25.22,9.44C37,236.5,46.13,247.37,63,250.78"/>
      <path className="cls-snake-1" d="M55.09,67.55c4.86.55,11.8,1.2,20.18,1.5,14.07.51,27.12,1.56,39.71-2.4,9.81-3.09,18.51-8.86,27.43-14,52.89-30.35,118-38.62,176.8-22.44C336.56,35,353.28,41.77,370,48.53l50.31,20.38c13,5.27,26,10.55,38.23,17.46,15.76,8.92,29.91,20.42,45.17,30.16,8.28,5.28,16.93,10.08,24.29,16.58,22.67,20,28.64,57.68,10.55,81.93a83.26,83.26,0,0,1-13.82,14c-31.53,26.17-71.41,39.68-110.43,52.19-13.05,4.18-26.13,8.32-39.48,11.4-33.94,7.84-69,8.74-103.86,9.61-26.85.67-54.07,1.31-80.21-4.91-33.22-7.91-37.37-21.49-77.2-30.4a280.79,280.79,0,0,0-51.7-7.19c-5.46-.25-10-.29-13-.29"/>
      <path className="cls-snake-1" d="M337.39,191.88c10.89,2.56,19.72,4.39,25.42,5.52,27,5.39,35.22,9.51,49.78,9.68a103.52,103.52,0,0,0,25.55-3"/>
      <path className="cls-snake-1" d="M448,167.49a53.27,53.27,0,0,0-9.21,19c-5.14,20.51,6,32.15-.14,40.65-6.93,9.68-22-4.41-45.9,4.75C380.48,236.59,361,250,342.79,259a13,13,0,0,1-4.8,1.49c-10.26.89-18.9-12.55-19.82-14-9.87-15.37-3.47-34.37-2.15-38.06"/>
      <path className="cls-snake-1" d="M318.91,168.46a46.07,46.07,0,0,1,8.56-23.68,43.45,43.45,0,0,1,7.19-7.66c-3-4.31-5.94-8.7-8.47-13.28a102.58,102.58,0,0,1-6-14.43c-6.64-21,5.32-38.4-1.92-47-2.79-3.32-9.48-6.57-51.59,4.73-21.9,5.88-39.9,12.08-52.92,16.94-2.63,19.45-10.25,28-15.55,32-7.44,5.69-28.46,16.5-46.77,16.91-1.28,0-4,0-4.82,1.57-1.76,3.47,9.54,9.26,22.5,25.24,2.28,2.81,4.16,5.38,7.92,7.58a26.92,26.92,0,0,0,15.79,3.22"/>
      <path className="cls-snake-1" d="M182.83,170.43c-1.83,0-19.17.87-28.44,15.17a33.11,33.11,0,0,0-5.12,18.76c18.75,11.54,46.5,7.31,60.1,24.62,2.83,3.61,4.8,8,8.29,10.93,2.83,2.39,6.4,3.68,9.89,4.92l67.59,24c3.89,1.38,8.66,2.63,11.8-.06a10.29,10.29,0,0,0,2.76-4.87c5-15.85-1.31-33.65,3.93-49.41a35.87,35.87,0,0,1,23.92-22.81s.1,0,.13-.08c.48-.74-7.83-5.4-13-12a31.7,31.7,0,0,1-5.73-12.13"/>
      <path className="cls-snake-1" d="M318.91,168.46c-6.7-.42-16.74-.85-29-.65-8.91.15-10.64.5-23.21,1.09-29.1,1.37-29.38,0-50,1.25-4,.25-12.71.85-24.51.62-4-.08-7.23-.23-9.34-.34"/>
      <path className="cls-snake-1" d="M428.49,131.27c-.75-2.6-1.21-4.56-.59-6.34.48-1.39,1.6-2.25,3.68-4,.62-.51,4.37-3.61,7.41-4.75,5.66-2.13,9.4,2.17,21,5.37,10.68,3,11.73.45,15.93,3.36,4.41,3,5.62,7.44,9.56,21.8,1.92,7,5.39,19.59,6.66,24.23l-32.81-2.5a24.38,24.38,0,0,1-6.85-1.19c-5.07-1.92-8.23-6.89-11-11.54l-9.14-15.21a24.66,24.66,0,0,1-2.93-6.1c-.31-1.16-.63-2.21-.9-3.17"/>
      <path className="cls-snake-1" d="M462.72,223.68a57,57,0,0,1-7.36,15.84c-2.61,3.88-4.92,6.24-24.53,21.68-9.48,7.46-11.32,8.85-14,8.31-7.1-1.42-13-13.16-10.35-20.86,1-2.84,2.53-3.38,7.93-10.05,3.24-4,5.66-7.47,7.22-9.84"/>
      <path className="cls-snake-1" d="M491.89,171.31c-2.08,11.85-3.5,21.36-4.43,27.94-.81,5.74-1.13,8.49-2.92,11.68-5.37,9.63-17.56,11.91-21.82,12.75a43.88,43.88,0,0,1-22-1.49"/>
      <path className="cls-snake-1" d="M405.11,250.4A49.11,49.11,0,0,1,387.78,265c-3.26,1.61-12.44,2.74-30.79,5a17.79,17.79,0,0,1-9.85-1.06,16.83,16.83,0,0,1-7.16-6.37"/>
      <path className="cls-snake-1" d="M405.11,250.4c-3.24-1.94-12.24-6.75-23.57-5a30.16,30.16,0,0,0-11,3.9c-10.53,6.44-13.28,18.05-13.89,21a79.31,79.31,0,0,1-29.34,14.26A78.46,78.46,0,0,1,306,286.84l-.59-16L339.81,263"/>
      <path className="cls-snake-1" d="M362.65,270.46a31.46,31.46,0,0,1-7.4,17.84A31.83,31.83,0,0,1,335,298.85"/>
      <path className="cls-snake-1" d="M537.5,144.32c-2.42.08-10,.6-13.8,6-1.36,1.95-1.84,3.93-2.24,7.16a80,80,0,0,0,.77,23.45c1.74,10.44,2.61,15.66,5,19.14,4.45,6.4,11,9.15,14.77,10.33"/>
      <path className="cls-snake-1" d="M491.89,171.31l29,2.65"/>
      <path className="cls-snake-1" d="M524.41,193c-6.2,14.32-18,24.09-30.9,24.82a30.21,30.21,0,0,1-14.55-3"/>
      <path className="cls-snake-1" d="M494.66,226.39a101.2,101.2,0,0,0-15.56,11.35c-11.17,9.92-13.81,16.76-24.46,25.2a77,77,0,0,1-17,10.19"/>
      <path className="cls-snake-1" d="M484.87,217.17c.83,1.42,6.06,10.05,15.75,11.35,1.76.24,6.67.9,11.14-2.15,3.83-2.61,7-7.71,6.09-13a12,12,0,0,0-2.49-5.41"/>
      <path className="cls-snake-1" d="M149.06,204.68A75.22,75.22,0,0,0,134,209.35c-7.67,3.3-13.53,5.91-15.9,11.64-.61,1.48-.86,3.47-1.35,7.45-.56,4.57-1,8.09-.37,11.9a25.79,25.79,0,0,0,5.88,12.14c10,12.27,29.34,11,31,10.87"/>
      <path className="cls-snake-1" d="M209.53,229A351.61,351.61,0,0,1,170.14,243a32.64,32.64,0,0,0-14.06,8c-3.88,3.82-6.34,9.48-5,14.76,2,8,11,11.65,18.84,14.12,27.36,8.65,40.66,14.11,62.48,15.23a240.37,240.37,0,0,0,73.89-7.91"/>
      <path className="cls-snake-1" d="M138.69,131.43a15,15,0,1,0,.22,30"/>
      <path className="cls-snake-1" d="M163.22,153c-5.13.39-16.21,1.83-24.2,8.47-4.58,3.8-5.09,6.78-5.19,7.85-.34,3.35,1.47,6,2.36,7.28,4.84,7.08,14.18,8,16.32,8.17"/>
      <path className="cls-snake-1" d="M136.69,176.4c-6.89.49-13,4.19-15.22,9.66C118.19,194,123,205.21,134,209.35"/>
      <path className="cls-snake-1" d="M120.82,199.15c-1.29.33-7.41,2-10.3,7.69-3.29,6.44-1.07,15.42,6,21.12"/>
      <path className="cls-snake-1" d="M127.14,156.18c-7.84,1.13-14.72,2.31-20.49,3.39a10.4,10.4,0,0,0-6.29,3.13c-2.1,2.47-1.8,6.34-.11,9.11,1.54,2.53,3.3,4.07,7.23,6.4,3.6,2.13,8.41,4.83,14.31,7.71"/>
      <path className="cls-snake-1" d="M107.85,213.77c-4.12.39-15.75,2.08-23.26,11.48-2.06,2.57-4.94,6.17-4.23,9.91,1.17,6.12,11.67,10.79,26.77,10.6"/>
      <path className="cls-snake-1" d="M116.27,240c-2.32,1.14-13.06,6.52-16.41,11.34-.51.72-1.62,2.3-1.14,3.83s2.43,2.29,3,2.51c3.7,1.4,19.19,8.68,40.73,18.91"/>
      <path className="cls-snake-1" d="M104.7,130.67c-4.31-.32-14.89-.49-23.15,6.49-2.22,1.87-7.49,6.32-6.79,11.62.44,3.36,3.08,5.53,5.37,7.35,6.86,5.47,15,6.39,19.86,6.45"/>
      <path className="cls-snake-1" d="M89,160.33c-2.49.41-24,4-30.19,8.45-.88.64-2.88,2.07-3.1,4.27s1.26,3.79,1.88,4.52c4.83,5.6,26.59,9.34,28.81,9.71"/>
      <path className="cls-snake-1" d="M86.12,201.28c-10.63,1.81-17.38,5.2-21.17,7.53-2.72,1.67-5,3.47-5.13,5.88-.13,2.14,1.43,4,3.86,6.09a48,48,0,0,0,17.8,9.4"/>
      <path className="cls-snake-1" d="M80.36,235.16c-6.35-2-13.06.54-16.13,5.64-3.68,6.13-1.5,15,5.58,19.13"/>
      <path className="cls-snake-1" d="M86.43,187.28c-17.4-.17-29.81,3.95-37.17,7.17C38.8,199,37.39,202.33,37,204.18c-1,5.54,4.79,12.4,14.62,17.33"/>
      <path className="cls-snake-1" d="M468.16,248.8c-.56.6-8.32,8.72-18.16,6.6a17.09,17.09,0,0,1-7.9-4.18"/>
      <path className="cls-snake-1" d="M409.84,262.51a24,24,0,0,1-18.58,25.59"/>
      <path className="cls-snake-1" d="M316.28,286.43a23.85,23.85,0,0,1-6.2,8.86c-7.15,6.37-15.91,6.14-18,6"/>
      <path className="cls-snake-1" d="M112.58,180.86c-11.34-3.92-22.25-.61-26.15,6.42-3.24,5.84-.77,12.7-.31,14,3.53,9.82,13.46,13,14.71,13.33"/>
      <path className="cls-snake-1" d="M61.62,133.71c-6.9,1.18-12.7,5.3-14.24,10.69-2.27,7.95,4.6,19.18,17.53,21.4"/>
      <path className="cls-snake-1" d="M40.31,237.27a14.69,14.69,0,0,0-10-.23c-5.65,2-9.8,7.73-9.27,11.8.78,5.89,11.72,11.16,27.77,10.62"/>
      <path className="cls-snake-1" d="M334,75.77a8.72,8.72,0,0,1-3.2,8.93c-3.46,2.43-8.83,1.66-11.95-2.27"/>
    </g>

    <animateMotion dur="10s" repeatCount="1" fill="freeze" rotate='auto'>
      <mpath href="#path-to-follow"/>
    </animateMotion>
  </g>


  <path id='path-to-follow' className="cls-snake-2" d="M4674,430a14083.07,14083.07,0,0,0-1711-26c-1111.11,50.49-1472.42,198.43-1822-53C484.88-120.91,602-1473.3,615-1475S994.3-162.68,453,314C351.69,403.21,241,443.36,169,463c-174.6,44.69-334.36,9.91-510-53C-850.22,227.62-1127.16-60.15-1156-30c-27.62,28.88,179.86,341.37,524,593,0,0,486.05,355.39,1052.5,379.5,86.88,3.7,236.9,8.65,415-54a996,996,0,0,0,202-98"/>
  
</svg>




</div>
</>

    }
