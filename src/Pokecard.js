import React from 'react';
import PropTypes from 'prop-types';
import './Pokecard.css'

const POKE_BASE_URI_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = number => number <= 100 ? `00${number}`.slice(-3) : number;

const Pokecard = (props) => {
	const { id, name, type, exp } = props;
	const imgSrc = `${POKE_BASE_URI_API}${padToThree(id)}.png`;

	return (
		<div className='Pockecard'>
			<h1>{name}</h1>
			<img src={imgSrc} alt={name} />
			<div>Type: {type}</div>
			<div>Exp: {exp}</div>
		</div>
	);
};

Pokecard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	exp: PropTypes.number.isRequired
};

export default Pokecard;