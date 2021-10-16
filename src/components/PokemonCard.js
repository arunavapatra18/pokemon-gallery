import React from 'react'
import Type from './Type'

export default function PokemonCard() {
    return (
        <div className="card">
            <header className="card-header">
                <p>Bulbasaur</p>
                <Type type={"Fire"} />
                <Type type={"Fairy"} />
            </header>
        </div>
    )
}
