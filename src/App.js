import React, { Component } from 'react';
import './App.css';
import Background from './Components/Background';
import Clock from './Components/Clock';
import Todo from './Components/ToDo';
import Widget from './Components/Widget';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Background>
					<Widget />
				</Background>
				<Clock />
				<Todo />
			</div>
		);
	}
}

export default App;
