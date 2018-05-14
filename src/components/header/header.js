import React from 'react'
import './header.css'

import * as StorageService from 'storageService'

export default class Header extends React.Component {

	reset() {
		StorageService.deleteData()
		this.props.retrieveFromStorage()
	}

	render() {
		return (
			<header className="wrapper">
				<h1 className="title">FUZZY CHARTS</h1>
				<h4 
					className="label"
					onClick={ () => this.reset() }
				>
					RESET
				</h4>
			</header>
		)
	}
}