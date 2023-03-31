const filterPokemon = (allPokemon, name = "", type = "", weakness = "") => {
  // If the input object does not contain Pokemon data, return an empty array
  if (!allPokemon.pokemon) {
    return [];
  }

  // Filter the Pokemon array based on the provided filters
  const filteredPokemon = allPokemon.pokemon.filter((pokemon) => {
    const nameMatch =
      !name || pokemon.name.toUpperCase() === name.toUpperCase();
    const typeMatch = !type || pokemon.type.includes(type.toUpperCase());
    const weaknessMatch =
      !weakness || pokemon.weaknesses.includes(weakness.toUpperCase());

    return nameMatch && typeMatch && weaknessMatch;
  });

  // Return the filtered Pokemon array
  return filteredPokemon;
};

// This function takes in an object containing an array of Pokemon data and returns the same object with all type and weakness strings converted to uppercase.
const arrayStringToUpperCase = (allPokemonObject) => {
  // Map over each Pokemon in the Pokemon array and return a modified Pokemon object with uppercase type and weakness strings
  const modifiedPokemon = allPokemonObject.pokemon.map((pokemon) => {
    return {
      ...pokemon,
      type: pokemon.type.map((type) => type.toUpperCase()),
      weaknesses: pokemon.weaknesses.map((weakness) => weakness.toUpperCase()),
    };
  });

  // Return the modified object with the updated Pokemon array
  return { ...allPokemonObject, pokemon: modifiedPokemon };
};

// Export the two functions so they can be used in other modules
export { filterPokemon, arrayStringToUpperCase };
