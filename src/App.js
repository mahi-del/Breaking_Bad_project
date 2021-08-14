import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Charcters from "./components/charcters/charcters";
import Pagination from "./components/Pagination";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  // Page Change

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => setCurrentPage(number);

  return (
    <Fragment className="container">
      <Header />
      <Charcters items={currentItems} isLoading={isLoading} />
      <Pagination
        totalPosts={items.length}
        postPerPage={itemsPerPage}
        paginate={paginate}
      />
    </Fragment>
  );
};

export default App;
