import React from 'react'
import Input from 'input/input'
import * as FunctionService from 'functionService'

export default class Properties extends React.Component {

	handleNameChange(func, name) {
		let { selected } = this.props,
			updatedFunc = FunctionService.updateName(func, name)

		this.props.updateFunction(selected, updatedFunc)
	}

	getForm(func) {
		return (
			<div>
				<h1 className="title">Propriedades</h1>
				<Input
					name="label"
					placeholder="Nome"
					value={ func }
					onChange={ name => this.handleNameChange(func, name) }
				/>
			</div>
		)
	}

	getContent() {
		return this.props.graph.length == 0
			? (
				<h4 className="label">
					Escolha uma função e solte aqui para constuir o gráfico
				</h4>
			)
			: this.getForm(this.props.graph[this.props.selected])
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