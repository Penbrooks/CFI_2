import React from "react";
import "./searchbar.scss";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <>
      <input
        className="search-bar"
        key="random1"
        value={keyword}
        placeholder={"Search movies, events, actors and activities..."}
        //  onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="search-icon fa fa-search" />
      {/* <span><FontAwesomeIcon icon={['fal', 'boxing-glove']} /></span> */}
    </>
  );
};

export default SearchBar;
