import React from "react";
import axios from "axios";
import "bulma/css/bulma.css";

import './App.scss';
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemon: null
    }
  }

  //https://img.pokemondb.net/artwork/bulbasaur.jpg

  async componentDidMount(){
    const response = await axios.get(this.state.url)
    //console.log(response.data.results[0]);
    this.setState({
      pokemon: response.data.results
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <PokemonCard />
      </div>
    );
  }
}

export default App;
