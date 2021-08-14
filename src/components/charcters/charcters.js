import React, { useState } from "react";
import "./charcters.css";

export const Charcters = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="search..."
        onChange={changeHandler}
      />
      <section className="cards">
        {items
          .filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item, key) => {
            return (
              <div key={key}>
                <h1>{item.name}</h1>
                <h4>{item.occupation}</h4>
                <h4>{item.birthday}</h4>
                <h4>{item.status}</h4>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Charcters;
