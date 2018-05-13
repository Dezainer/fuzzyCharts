import React from 'react'
import './fuzzy.css'

import Graph from 'graph/graph'
import Options from 'options/options'

import functions from 'functions'

export default class Fuzzy extends React.Component {
	render() {
		return (
			<main>
				<div className="container">
					<Graph/>
					<Options data={ functions }/>
				</div>
			</main>
		)
	}
}