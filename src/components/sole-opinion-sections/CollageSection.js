import React, { useState } from 'react'



export default function CollageSection() {

    const [upper, setUpper] = useState('test')
    const [lower, setLower] = useState('test')



    return (
        <div className="collage-section">
            Collage
            {/* <iframe src='https://my.spline.design/untitled-83c683f96b31567088693a6c0795ee17/' frameborder='0' width='100%' height='100%'></iframe> */}
            {/* <iframe style={{height: "30rem"}} title="olivia" src='https://my.spline.design/untitled-83c683f96b31567088693a6c0795ee17/' frameborder='0' width='100%' height='100%'></iframe> */}
            {/* <iframe style={{height: "30rem"}} title="olivia" src='https://my.spline.design/untitled-83c683f96b31567088693a6c0795ee17/' frameborder='0' width='100%' height='100%'></iframe> */}
            <iframe style={{height: "30rem"}} title="olivia" src='https://my.spline.design/untitled-83c683f96b31567088693a6c0795ee17/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    )
}