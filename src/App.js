import React, { Component } from 'react'
import './App.css'

import { randomWord } from './Utils'

class App extends Component {
	constructor(props) {
		super(props)
		this.maxTries = 6
		this.state = {
			letters: 'abcdefghijklmnopqrstuvwxyz',
			tries: 0,
			wordOnConstruction: new Set([]),
			wordToGuess: randomWord()
		}
	}

	render() {
		return (
			<div className='App'>
				<div className='row justify-content-center'>
					<h1 className='title'>Hangman Game</h1>
				</div>
				<div className='row justify-content-center'>
					<div className='col-md-4 text-center'>
						<h1>Tries: ...</h1>
					</div>
					<div className='col-md-4 text-center'>Perdu ou Gagné</div>
					<div className='col-md-4 text-center'>
						<h1> DISPLAY WORD </h1>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-md-6 text-center'>KEYBOARD</div>
					<div className='col-md-6 text-center'>IMAGE HANGMAN</div>
				</div>
			</div>
		)
	}
}

export default App
