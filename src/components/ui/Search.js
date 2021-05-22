import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onSearch = (e) => {
    setText(e.target.value);
    getQuery(e.target.value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={onSearch}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
