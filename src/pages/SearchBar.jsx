import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function SearchBar({ data }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null)

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handelFormSubmit(event) {
    event.preventDefault();
    const value = inputRef.current.value;
    data(value);
  }

  return (
    <div className="formContainer">
    <form className="form" onSubmit={handelFormSubmit}>
      <label>Search Image</label>
      <input type="text" ref={inputRef} value={inputValue} onChange={handleInputChange} />
    </form>
  </div>
  );
}
