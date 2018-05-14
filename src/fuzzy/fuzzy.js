import React from 'react'
import './fuzzy.css'

import Header from 'header/header'
import Graph from 'graph/graph'
import Options from 'options/options'

import functions from 'functions'
import * as StorageService from 'storageService'

export default class Fuzzy extends React.Component {

	componentWillMount() {
		this.retrieveFromStorage()
	}

	retrieveFromStorage() {
		let graph = StorageService.getStoredData() || [],
			selected = graph.length - 1

		this.setState({ graph, selected })
	}

	componentDidUpdate() {
		let { graph } = this.state
		StorageService.storeData(graph)
	}

	bindState(state) {
		this.setState(state)
	}

	render() {
		return (
			<main>
				<div className="container">
					<Header retrieveFromStorage={ () => this.retrieveFromStorage() }/>
					<Graph 
						setState={ state => this.bindState(state) }
						{ ...this.state }
					/>
					<Options data={ functions }/>
				</div>
			</main>
		)
	}
}