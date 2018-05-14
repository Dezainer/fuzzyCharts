import React from 'react'
import Input from 'input/input'
import * as FunctionService from 'functionService'

export default class Properties extends React.Component {

	handleNameChange(func, name) {
		let { selected } = this.props,
			updatedFunc = FunctionService.updateName(func, name)

		this.props.updateFunction(selected, updatedFunc)
	}

	handlePointXChange(func, i, value) {
		let { selected } = this.props,
			updateFunc = FunctionService.updatePointX(func, i, value)

		this.props.updateFunction(selected, updateFunc)
	}

	handlePointYChange(func, i, value) {
		let { selected } = this.props,
			updateFunc = FunctionService.updatePointY(func, i, value)

		this.props.updateFunction(selected, updateFunc)
	}

	getProperties(func) {
		return (
			<div>
				<h1 className="title">Propriedades</h1>
				<Input
					name="label"
					placeholder="Nome"
					value={ func }
					onChange={ name => this.handleNameChange(func, name) }
				/>
				<h2 className="subtitle">Pontos</h2>
				<div className="point">
					<h4 className="label">Valor X</h4>
					<h4 className="label">Valor Y</h4>
				</div>
				{ this.getPoints(func) }
			</div>
		)
	}

	getPoints(func) {
		return func.points.map((point, i) => (
			<div className="point" key={ i }>
				<Input
					name="x"
					type="number"
					placeholder="Valor X"
					value={ point }
					onChange={ value => this.handlePointXChange(func, i, value) }
				/>
				<Input
					name="y"
					type="number"
					placeholder="Valor Y"
					value={ point }
					onChange={ value => this.handlePointYChange(func, i, value) }
				/>
			</div>
		))
	}

	getContent() {
		return this.props.graph.length == 0
			? (
				<h4 className="label">
					Escolha uma função e solte aqui para constuir o gráfico
				</h4>
			)
			: this.getProperties(this.props.graph[this.props.selected])
	}

	render() {
		return (
			<div className="wrapper properties">
				<div className={`block ${ 
					this.props.selected == -1 ? 'centered' : '' 
				}`}>
					{ this.getContent() }
				</div>
			</div>
		)
	}
}