export function updateName(func, label) {
	func.label = label
	return func
}

export function updatePointX(func, key, value) {
	func.points[key].x = value
	return func
}

export function updatePointY(func, key, value) {
	func.points[key].y = value
	return func
}