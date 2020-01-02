import React from 'react'
import '../assets/css/letter.css'

const Letter = ({ letter, disabled, click }) => {
	return (
		<button
			style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
			type='button'
			className='letter'
			disabled={disabled}
			onClick={click}
			value={letter}>
			{letter}
		</button>
	)
}

export default Letter
