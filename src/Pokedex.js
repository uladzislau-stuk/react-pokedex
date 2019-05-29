import React from 'react';
import PropTypes from 'prop-types';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = (props) => {
	const { pokemons, exp, isWinner } = props;

	return (
		<div className='Pokedex'>
			<h1>Pokedex!</h1>
			<h2>Total Experience: {exp}</h2>
			<p>{isWinner ? 'WINNER!' : 'LOOSER!'}</p>
			<div className='Pokedex-cards'>
				{pokemons.map((pokemon) =>
					<Pokecard
						key={pokemon.id.toString()}
						id={pokemon.id}
						name={pokemon.name}
						type={pokemon.type}
						exp={pokemon.base_experience}
					/>
				)}
			</div>
		</div>
	);
};

Pokedex.propTypes = {
	pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
	exp: PropTypes.number.isRequired,
	isWinner: PropTypes.bool.isRequired
};

export default Pokedex;