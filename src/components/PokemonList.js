import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    let pokeList = props.pokemon;
    return (
        <div className="list">
            {/*console.log(pokeList[8].name)*/}
            {pokeList.map((pokemon) => 
                <PokemonCard poke={pokemon} key={pokemon.name}/>
            )}
        </div>
    )
}
