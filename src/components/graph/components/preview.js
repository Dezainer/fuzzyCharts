import React from 'react'
import Chart from 'chart/chart'

export default class Preview extends React.Component {
	render() {
		return (
			<div className="wrapper preview">
				<div className="block">
					<Chart
						data={[
							{
								label: 'Quente',
								points: [
									{ x: 0, y: 1 },
									{ x: 1, y: 1 },
									{ x: 2, y: 0 }
								]
							},
							{
								label: 'De buenas',
								points: [
									{ x: 1, y: 0 },
									{ x: 2, y: 1 },
									{ x: 3, y: 0 }
								]
							},
							{
								label: 'Frio',
								points: [
									{ x: 2, y: 0 },
									{ x: 3, y: 1 },
									{ x: 4, y: 1 }
								]
							}
						]}
					/>
				</div>
			</div>
		)
	}
}