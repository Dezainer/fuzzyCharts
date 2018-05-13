import React from 'react'
import './graph.css'

import Properties from './components/properties'
import Preview from './components/preview'

export default class Graph extends React.Component {
	render() {
		return (
			<div className="graph">
				<Properties/>
				<Preview/>
			</div>
		)
	}
}