import React, { useState } from "react";
import '../styles/progress.css'

export const Progress = ({ done }) => {

    const style = {
        opacity: 1,
        width: `${done}%`
    }

    return (
        <div className="progress">
            <div className="progress_done" style={style}>
            </div>
            <div className='progress_line'>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <div className='progress_number'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
        </div>
    )
}