import React from 'react'

export default class Properties extends React.Component {

	getContent() {
		return this.props.graph.length == 0
			? (
				<h4 className="label">
					Escolha uma função e solte aqui para constuir o gráfico
				</h4>
			)
			: (
				<h1 className="title">
					{ this.props.graph[this.props.selected].label }
				</h1>
			)
	}

	render() {
		return (
			<div className="wrapper properties">
				<div className={`block ${ 
					this.props.selected == null ? 'centered' : '' 
				}`}>
					{ this.getContent() }
				</div>
			</div>
		)
	}
}