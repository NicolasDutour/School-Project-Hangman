import React, { Component } from 'react'
import './App.css'
import Letter from './components/Letter'
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

	generateKeyboard = () => {
		return this.state.letters
			.split('')
			.map((letter) => (
				<Letter
					click={this.handleClickLetter}
					disabled={this.state.wordOnConstruction.has(letter)}
					key={letter}
					letter={letter.toUpperCase()}
				/>
			))
	}

	guessedWord = () => {
		return this.state.wordToGuess
			.split('')
			.map((letter) =>
				this.state.wordOnConstruction.has(letter) ? letter : ' _ '
			)
	}

	handleClickLetter = (e) => {
		let letter = e.target.value
		this.setState({
			wordOnConstruction: this.state.wordOnConstruction.add(letter),
			tries:
				this.state.tries + (this.state.wordToGuess.includes(letter) ? 0 : 1)
		})
	}

	render() {
		const { tries, wordToGuess } = this.state

		return (
			<div className='App'>
				<div className='row justify-content-center'>
					<h1 className='title'>Hangman Game</h1>
				</div>
				<div className='row justify-content-center'>
					<div className='col-md-4 text-center'>
						<h1>
							Tries: {tries} / {this.maxTries}
						</h1>
					</div>
					<div className='col-md-4 text-center'>Perdu ou Gagné</div>
					<div className='col-md-4 text-center'>
						<h1>
							{' '}
							{!(tries >= this.maxTries)
								? this.guessedWord()
								: wordToGuess}{' '}
						</h1>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-md-6 text-center'>{this.generateKeyboard()}</div>
					<div className='col-md-6 text-center image-container'>
						<img src={`img/${tries}.jpg`} alt='Hangman' />
					</div>
				</div>
			</div>
		)
	}
}

export default App
