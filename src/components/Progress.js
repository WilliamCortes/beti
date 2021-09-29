import React, {useState} from "react";
import '../styles/progress.css'

export const Progress = ({done}) => {

	const style = {
		opacity: 1,
		width: `${done}%`
	}
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				
			</div>
		</div>
	)
}