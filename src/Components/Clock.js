import React, { Component } from 'react';

export default class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dateDe: new Date()
		};
		//
	}
	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.timerId);
	}
	tick() {
		this.setState({
			dateDe: new Date()
		});
	}
	render() {
		return <h1 className="clock">{this.state.dateDe.toLocaleTimeString('de')} </h1>;
	}
}
