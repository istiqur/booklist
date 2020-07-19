import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      <p>
        Currently you have <b style={{ color: "lightBlue" }}>{books.length}</b>{" "}
        books to dig in ...
      </p>
    </div>
  );
};

export default Navbar;
