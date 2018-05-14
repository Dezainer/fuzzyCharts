import React from 'react'
import './input.css'

export default class Input extends React.Component {
	render() {
		return (
			<input
				name={ this.props.name }
				type={ this.props.type }
				placeholder={ this.props.placeholder }
				onChange={ e => this.props.onChange(e.target.value) }
				value={ this.props.value[this.props.name] }
			/>
		)
	}
}