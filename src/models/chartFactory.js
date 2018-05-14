export default function makeChart(data) {
	let chart = { type: 'line', data: {} }

	chart.data.datasets = data.map(set => makeSet(set))
	chart.data.labels = orderPoints(chart.data.datasets)
	
	return chart
}

function makeSet(data) {
	return {
		label: data.label,
		lineTension: 0,
		data: formatPoints(data.points),
		borderWidth: 2,
		backgroundColor: ['rgba(150,220,255,0.2)'],
        borderColor: ['rgba(150,220,255,1)']
	}
}

function formatPoints(points) {
	return points.map(point => ({
		x: formatPoint(point.x), y: formatPoint(point.y)
	}))
}

function formatPoint(point) {
	return parseFloat(point) || 0
}

function orderPoints(data) {
	let points = []
	
	data.map(graph => {
		graph.data.map(item => {
			points.push(item.x)
		})
	})

	return points
		.filter((item, i, arr) => arr.indexOf(item) === i)
		.sort((a, b) => a - b)
}