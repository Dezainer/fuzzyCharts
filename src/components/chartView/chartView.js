import React from 'react'
import './chartView.css'

import ChartJs from 'chart.js'

export default class ChartView extends React.Component {

	componentDidMount() {
		let ctx = this.canvas.getContext('2d'),
			chart

		ctx.canvas.width = this.block.innerWidth
		ctx.canvas.height = this.block.innerHeight

		chart = new ChartJs(ctx, {
			type: 'line',
		    data: {
		    	labels: [0,1,2,3,4],
		        datasets: [{
		            label: 'Frio',
		            lineTension: 0,
		            data: [
			            { x: 0, y: 1 },
			            { x: 1, y: 1 },
			            { x: 2, y: 0 }
		            ],
		            backgroundColor: [
		                'rgba(150,220,255,0.2)'
		            ],
		            borderColor: [
		                'rgba(150,220,255,1)'
		            ],
		            borderWidth: 2
		        }, {
		            label: 'De buenas',
		            lineTension: 0,
		            data: [
			            { x: 1, y: 0 },
			            { x: 2, y: 1 },
			            { x: 3, y: 0 }
		            ],
		            backgroundColor: [
		                'rgba(150,220,255,0.2)'
		            ],
		            borderColor: [
		                'rgba(150,220,255,1)'
		            ],
		            borderWidth: 2
		        }, {
		            label: 'Quente',
		            lineTension: 0,
		            data: [
			            { x: 2, y: 0 },
			            { x: 3, y: 1 },
			            { x: 4, y: 1 }
		            ],
		            backgroundColor: [
		                'rgba(150,220,255,0.2)'
		            ],
		            borderColor: [
		                'rgba(150,220,255,1)'
		            ],
		            borderWidth: 2
		        }]
		    }
		})
	}

	render() {
		return (
			<div className="wrapper chart">
				<div 
					className="block" 
					ref={ ref => this.block = ref }
				>
					<canvas 
						ref={ ref => this.canvas = ref } 
					/>
				</div>
			</div>
		)
	}
}