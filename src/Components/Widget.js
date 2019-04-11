import React, { Component } from 'react';
import widget from '../multimedia.png';

export default function Widget(props) {
	return (
		<div className="widget">
			<button onClick={() => props.onClick()}>
				<img src={widget} alt="refresh" />
			</button>
		</div>
	);
}
