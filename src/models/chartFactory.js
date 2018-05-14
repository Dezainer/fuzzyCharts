export default function makeChart(data) {
	let chart = { type: 'line', data: {} }

	chart.data.datasets = data.map(set => makeSet(set))
	chart.data.labels = orderPoints(data)
	
	return chart
}

function makeSet(data) {
	return {
		label: data.label,
		lineTension: 0,
		data: data.points,
		borderWidth: 2,
		backgroundColor: ['rgba(150,220,255,0.2)'],
        borderColor: ['rgba(150,220,255,1)']
	}
}

function orderPoints(data) {
	let points = []
	
	data.map(graph => {
		graph.points.map(item => {
			points.push(item.x)
		})
	})

	return points
		.filter((item, i, arr) => arr.indexOf(item) === i)
		.sort((a, b) => a - b)
}