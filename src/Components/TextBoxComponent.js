import React, { useState } from 'react';

const TextBoxComponent = () => {
  
  const [textBoxValue, setTextBoxValue] = useState('');

 
  const handleTextBoxChange = (event) => {
    setTextBoxValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={textBoxValue}
        onChange={handleTextBoxChange}
        placeholder="Enter text here"
      />
      <p>Text Box Value: {textBoxValue}</p>
    </div>
  );
};

export default TextBoxComponent;
