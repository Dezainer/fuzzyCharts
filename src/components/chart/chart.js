import React from 'react'
import './chart.css'

import ChartJs from 'chart.js'
import makeChart from 'chartFactory'

export default class Chart extends React.Component {

	componentDidMount() {
		this.setupCanvas()
		this.updateData(this.props)
	}

	componentWillReceiveProps(nextProps) {
		this.updateData(nextProps)
	}

	setupCanvas() {
		this.ctx = this.canvas.getContext('2d')

		this.ctx.canvas.width = this.block.innerWidth
		this.ctx.canvas.height = this.block.innerHeight

		ChartJs.defaults.global.legend.onClick = this.props.onClick
	}

	updateData(props) {
		this.chart = new ChartJs(this.ctx, makeChart(props.data))
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