import React from 'react';

const Input = ({ label, value, onChangeText }) => {

  return (
    <div>
      <p>{label}</p>
      <input
        value={value}
        onChangeText={onChangeText}
      />
    </div>
  )
};

export default Input
