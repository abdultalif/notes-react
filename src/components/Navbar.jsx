import React from "react";

import "../styles/style.css";

const Navbar = (props) => {
  const { children } = props;

  return (
    <header className="">
      <nav className="note-app__header--nav">
        <h1 className="note-app__header--logo">Notes</h1>
        {children}
      </nav>
    </header>
  );
};

export default Navbar;
