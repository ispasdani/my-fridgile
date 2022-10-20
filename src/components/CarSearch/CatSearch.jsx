import React from "react";
import "./CatSearch.css";

export default function CatSearch() {
  return (
    <input
      className="cat-search"
      maxlength="15"
      type="text"
      placeholder="Search a category..."
    ></input>
  );
}
