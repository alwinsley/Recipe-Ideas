import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '6px',
        marginBottom: '15px'
      }}
    >
      <h1>{title}</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Calories: {calories}</p>
      <img src={image} width='100%' alt='' />
    </div>
  );
};

export default Recipe;
