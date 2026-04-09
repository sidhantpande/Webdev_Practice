import React, { useState } from 'react';

const InputBox = () => {
  const [inputText, setInputText] = useState("Hello");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <h1>Input Box</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputText}</p>
    </>
  );
};

export default InputBox;