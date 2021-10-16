import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";

import './App.scss';
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Footer from "./components/Footer"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemons: []
    }
  }

  //https://img.pokemondb.net/artwork/bulbasaur.jpg

  async componentDidMount(){
    const response = await axios.get(this.state.url)
    this.setState({
      pokemons: response.data.results
    })
    //console.log(this.state.pokemons)
  }

  render(){
    return (
      <div className="App">
        <Header />
        <PokemonList pokemon={this.state.pokemons} />
        <Footer />
      </div>
    );
  }
}

export default App;
