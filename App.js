import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
	constructor(){
		super(); //<<--provides the context for 'this'
		this.state = { red: 0, green: 0, blue: 0 };
		this.update = this.update.bind(this);
	}
	update(e){
		this.setState({ 
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value,
		 });
	}
	render(){
		return (
			<div>
				<Slider ref="red" update={this.update} />
				Red: {this.state.red}<br/>
				<Slider ref="green" update={this.update} />
				Green: {this.state.green}<br/>
				<Slider ref="blue" update={this.update} />
				Blue: {this.state.blue}
			</div>
		);
	}
}

class Slider extends React.Component {
	render() {
		return (
			<input type="range" min="0" max="255" 
			  onChange={this.props.update} />
		);
	}
}

const Widget = (props) => {
	return (
		<div> 
			<input type="text" onChange={props.update} />
			<h1>{props.txt}</h1>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));