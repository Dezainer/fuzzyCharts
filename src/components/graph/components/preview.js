import React from 'react'
import Chart from 'chart/chart'

export default class Preview extends React.Component {
	render() {
		return (
			<div className="wrapper preview">
				<div className="block">
					<Chart
						data={{
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
					}}
					/>
				</div>
			</div>
		)
	}
}