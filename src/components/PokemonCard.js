import axios from "axios";
import React from "react";
import Type from "./Type";

export default class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.poke.name,
      url: props.poke.url,
      photoUrl: "https://img.pokemondb.net/artwork/" + this.name + ".jpg",
      types: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({
      types: res.data.types,
    });
  }

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="title is-4">
            {this.state.name.slice(0, 1).toUpperCase() +
              this.state.name.slice(1)}
          </p>
          <div className="types-container">
            {this.state.types == null
              ? "Loading..."
              : this.state.types.map((type) => (
                  <Type type={type.type.name} key={type.type.name} />
                ))}
          </div>
        </header>
      </div>
    );
  }
}
