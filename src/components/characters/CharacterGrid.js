import React from "react";
import CharacterItems from "./CharacterItems";
import spinner from "../../img/spinner.gif";

function CharacterGrid({ items, isLoading }) {
  return isLoading ? (
    <div className="center">
      <img src={spinner} />
    </div>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItems key={item.char_id} item={item} />
      ))}
    </section>
  );
}

export default CharacterGrid;
