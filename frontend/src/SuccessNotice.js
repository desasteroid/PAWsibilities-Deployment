import React from 'react'
import "../src/SuccessNotice.css"

export default function SuccessNotice(props) {
    return (
        <div className="error-notice">
            <span>{props.message}</span>
            <button onClick={props.clearNotice}>X</button>
            
        </div>
    )
}
