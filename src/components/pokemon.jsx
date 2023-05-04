import React from "react";

const Pokemon = ({
  pokemonName = "Loading...",
  pokemonNum = "Loading...",
  pokemonType = "Loading...",
  pokemonWeaknesses = "Loading...",
  imgSrc = "Loading...",
}) => {
  const cardStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s ease-in-out",
    border: "1px solid black",
  };

  const typeStyle = {
    display: "inline-block",
    padding: "5px 10px",
    marginRight: "5px",
    borderRadius: "10px",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const weaknessStyle = {
    display: "inline-block",
    padding: "5px 10px",
    marginRight: "5px",
    borderRadius: "10px",
    fontWeight: "bold",
    backgroundColor: "red",
    color: "white",
  };

  return (
    <div style={cardStyle}>
      <p className="thick-text">{`#${pokemonNum}`}</p>
      <img src={imgSrc} alt="Pokemon" className="cardImage" />
      <div>
        <p className="thin-text">Name:</p>
        <p className="no-margins">{pokemonName}</p>
      </div>
      <p className="thin-text">Types:</p>
      <div>
        {pokemonType.map((type, index) => {
          return (
            <div
              key={index}
              style={{ ...typeStyle, backgroundColor: `var(--${type})` }}
            >
              {type}
            </div>
          );
        })}
      </div>
      <p className="thin-text">Weaknesses:</p>
      <div>
        {pokemonWeaknesses.map((weakness, index) => {
          return (
            <div key={index} style={weaknessStyle}>
              {weakness}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
