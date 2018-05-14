import React from 'react'
import Chart from 'chart/chart'

export default class Preview extends React.Component {

	getChart() {
		return this.props.data.length == 0
			? (
				<h4 className="label">
					Escolha uma função e solte aqui para constuir o gráfico
				</h4>
			)
			: (
				<Chart 
					data={ this.props.data }
					onClick={ (e, data) => this.props.onClick(data.datasetIndex) }
				/>
			)
	}

	render() {
		return (
			<div className="wrapper preview">
				<div className="block centered">
					{ this.getChart() }
				</div>
			</div>
		)
	}
}