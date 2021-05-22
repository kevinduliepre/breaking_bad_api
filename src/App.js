import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(res.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(e) => setQuery(e)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
