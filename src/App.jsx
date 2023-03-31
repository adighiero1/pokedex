import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Pokemon from "./components/pokemon.jsx";
import { filterPokemon, arrayStringToUpperCase } from "./util/functions.jsx";
//
function App() {
  const [pokemonListData, setPokemonListData] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [weaknessFilter, setWeaknessFilter] = useState("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
        );
        const pokemonArray = await res.json();
        setPokemonListData(arrayStringToUpperCase(pokemonArray));
      } catch (e) {
        console.error(e);
      }
    };
    fetchPokemonList();
  }, []);

  const filteredPokemonList = filterPokemon(
    pokemonListData,
    nameFilter,
    typeFilter,
    weaknessFilter
  );

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  const handleWeaknessFilterChange = (event) => {
    setWeaknessFilter(event.target.value);
  };

  return (
    <div className="app-container">
      <div>
        <div className="app-header">
          <Header />
        </div>
        <div className="pokemon-body">
          <div className="form-control-group">
            <form>
              <label htmlFor="filter-name">Name:</label>
              <input
                type="text"
                name="filter-name"
                id="filter-name"
                value={nameFilter}
                placeholder="Ex. Bulbasaur"
                onChange={handleNameFilterChange}
              />
              <label htmlFor="filter-type">Type:</label>
              <input
                type="text"
                name="filter-type"
                id="filter-type"
                value={typeFilter}
                placeholder="Ex. Grass"
                onChange={handleTypeFilterChange}
              />
              <label htmlFor="filter-weaknesses">Weaknesses:</label>
              <input
                type="text"
                name="filter-weaknesses"
                id="filter-weaknesses"
                value={weaknessFilter}
                placeholder="Ex. Fire"
                onChange={handleWeaknessFilterChange}
              />
            </form>
          </div>

          {(filteredPokemonList.length > 0
            ? filteredPokemonList
            : pokemonListData.pokemon || []
          ).map((item) => (
            <Pokemon
              key={item.id}
              pokemonName={item.name}
              pokemonNum={item.num}
              pokemonType={item.type}
              pokemonWeaknesses={item.weaknesses}
              imgSrc={item.img}
              className="pokemon-card"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
