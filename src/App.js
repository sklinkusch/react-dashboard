import React, { Component } from 'react';
import './App.css';
import Background from './Components/Background';
import Clock from './Components/Clock';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Background />
				<Clock />
			</div>
		);
	}
}

export default App;
