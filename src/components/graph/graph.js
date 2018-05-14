import React from 'react'
import './graph.css'

import Properties from './components/properties'
import Preview from './components/preview'

import * as GraphService from 'graphService'

export default class Graph extends React.Component {

	state = { graph: [] }

	allowDrop(e) {
		e.preventDefault()
	}

	handleDrop(e) {
		e.preventDefault()

		let { graph } = this.state,
			func = JSON.parse(e.dataTransfer.getData('function')),
			updatedGraph = GraphService.addFunction(graph, func)

		this.setState({ 
			graph: updatedGraph,
			selected: graph.length
		})
	}

	handleLegendClick(selected) {
		this.setState({ selected })
	}

	updateFunction(i, func) {
		let { graph } = this.state,
			updatedGraph = GraphService.updateFunction(graph, i, func)

		this.setState({ graph: updatedGraph })
	}

	render() {
		return (
			<div 
				className="graph" 
				onDragOver={ e => this.allowDrop(e) }
				onDrop={ e => this.handleDrop(e) }
			>
				<Properties
					{ ...this.state }
					updateFunction={ (i, func) => this.updateFunction(i, func) }
				/>
				<Preview 
					data={ this.state.graph }
					onClick={ i => this.handleLegendClick(i) }
				/>
			</div>
		)
	}
}