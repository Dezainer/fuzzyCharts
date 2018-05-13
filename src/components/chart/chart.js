import React from 'react'
import './chart.css'

import ChartJs from 'chart.js'
import makeChart from 'chartFactory'

export default class Chart extends React.Component {

	componentDidMount() {
		let ctx = this.canvas.getContext('2d'), chart

		ctx.canvas.width = this.block.innerWidth
		ctx.canvas.height = this.block.innerHeight

		chart = new ChartJs(ctx, makeChart(this.props.data))
	}

	render() {
		return (
			<div 
				className="chart" 
				ref={ ref => this.block = ref }
			>
				<canvas 
					ref={ ref => this.canvas = ref } 
				/>
			</div>
		)
	}
}