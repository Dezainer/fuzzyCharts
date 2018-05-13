import React from 'react'
import './graph.css'

import Properties from './components/properties'
import Preview from './components/preview'

export default class Graph extends React.Component {

	state = {
		graph: {
			data: [
				{
					label: 'Inadequado',
					points: [
						{ x: 0, y: 1 },
						{ x: 20, y: 1 },
						{ x: 50, y: 0 }
					]
				},
				{
					label: 'Médio',
					points: [
						{ x: 20, y: 0 },
						{ x: 50, y: 1 },
						{ x: 70, y: 0 }
					]
				},
				{
					label: 'Adequado',
					points: [
						{ x: 50, y: 0 },
						{ x: 70, y: 1 },
						{ x: 100, y: 1 }
					]
				}
			]
		}
	}

	render() {
		return (
			<div className="graph">
				<Properties/>
				<Preview data={ this.state.grapha }/>
			</div>
		)
	}
}