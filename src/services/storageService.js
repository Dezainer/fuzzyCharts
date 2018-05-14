const name = 'graph'

export function getStoredData() {
	return JSON.parse(localStorage.getItem(name))
}

export function storeData(data) {
	localStorage.setItem(name, JSON.stringify(data))
}