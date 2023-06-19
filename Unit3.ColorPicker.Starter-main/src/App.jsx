import React, { useState } from 'react';

const Color = ({ color, setSelectedColor, isSelected }) => {
  const colorStyle = {
    border: isSelected ? '5px solid black' : 'none',
  };

  return (
    <div
      className={color}
      style={colorStyle}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === 'red'}
        />
        <Color
          color="orange"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === 'orange'}
        />
        <Color
          color="yellow"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === 'yellow'}
        />
        <Color
          color="green"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === 'green'}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === 'blue'}
        />
        <Color
          color="violet"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === 'violet'}
        />
      </div>
    </div>
  );
};

export default Picker;
