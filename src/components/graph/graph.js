import React from 'react'
import './graph.css'

import Properties from './components/properties'
import Preview from './components/preview'

import * as GraphService from 'graphService'

export default class Graph extends React.Component {

	allowDrop(e) {
		e.preventDefault()
	}

	handleDrop(e) {
		e.preventDefault()

		let func = JSON.parse(e.dataTransfer.getData('function'))
		this.addFunction(func)
	}

	addFunction(func) {
		let { graph } = this.props,
			updatedGraph = GraphService.addFunction(graph, func)

		this.props.setState({ 
			graph: updatedGraph,
			selected: graph.length
		})
	}

	updateFunction(i, func) {
		let { graph } = this.props,
			updatedGraph = GraphService.updateFunction(graph, i, func)

		this.props.setState({ graph: updatedGraph })
	}

	removeFunction(i) {
		let { graph, selected } = this.props,
			updatedGraph = GraphService.removeFunction(graph, i)

		selected -= 1
		this.props.setState({ graph: updatedGraph, selected })
	}

	handleLegendClick(selected) {
		this.props.setState({ selected })
	}

	render() {
		return (
			<div 
				className="graph" 
				onDragOver={ e => this.allowDrop(e) }
				onDrop={ e => this.handleDrop(e) }
			>
				<Properties
					{ ...this.props }
					updateFunction={ (i, func) => this.updateFunction(i, func) }
					removeFunction={ i => this.removeFunction(i) }
				/>
				<Preview 
					data={ this.props.graph }
					onClick={ i => this.handleLegendClick(i) }
				/>
			</div>
		)
	}
}