import React from 'react';

const Input = ({ label, value, onChangeText }) => {

  return (
    <div>
      <p>{label}</p>
      <form>
        <input
          value={value}
          onChangeText={onChangeText}
        />
      </form>
    </div>
  )
};

export default Input
