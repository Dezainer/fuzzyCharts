import React from 'react'
import './fuzzy.css'

import ChartView from 'chartView/chartView'
import Properties from 'properties/properties'
import Options from 'options/options'

export default class Fuzzy extends React.Component {
	render() {
		return (
			<main>
				<div className="container">
					<div className="current">
						<Properties/>
						<ChartView/>
					</div>
					<div className="all">
						<Options/>
					</div>
				</div>
			</main>
		)
	}
}