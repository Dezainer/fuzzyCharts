import React from 'react'
import './options.css'

import Chart from 'chart/chart'

export default class Options extends React.Component {

	getOptions() {
		return this.props.data.map((item, i) => (
			<div className="option" key={ i }>
				<Chart data={ item }/>
			</div>
		))
	}

	render() {
		return (
			<div className="wrapper options">
				<div className="block">
					<h1 className="title">Funções</h1>
					<div className="list">
						{ this.getOptions() }
					</div>
				</div>
			</div>
		)
	}
}