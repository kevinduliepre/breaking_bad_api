import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  const characters = items.map((item) => (
    <CharacterItem key={item.char_id} item={item} />
  ));

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">{characters}</section>
  );
};

export default CharacterGrid;
