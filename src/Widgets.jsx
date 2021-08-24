import React from 'react'
import "./Widgets.css"
function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/facebook"
                width="350"
                height="100%"
                style={{border:'none',
                overflow:'hidden'
                }}
                scrolling='on'
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widgets
