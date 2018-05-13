import React from 'react'
import Chart from 'chart/chart'

export default class Preview extends React.Component {

	getChart() {
		return !this.props.data
			? (
				<h4 className="label">
					Escolha uma função e solte aqui para constuir o gráfico
				</h4>
			)
			: <Chart data={ this.props.data }/>
	}

	render() {
		return (
			<div className="wrapper preview">
				<div className="block">
					{ this.getChart() }
				</div>
			</div>
		)
	}
}