// Card.js
import React from 'react';

const Card = ({ image, heading, description }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    width: '300px',
    margin: '16px',
    backgroundColor: 'white',
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px', // Set a fixed height for uniformity
    objectFit: 'cover', // Ensure the image covers the area without distortion
  };

  const cardContentStyle = {
    padding: '16px',
  };

  const cardHeadingStyle = {
    fontSize: '1.5em',
    margin: '0',
    textAlign: 'center',
  };

  const cardDescriptionStyle = {
    color: '#555',
    textAlign: 'center',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img src={image} alt={heading} style={cardImageStyle} />
      <div style={cardContentStyle}>
        <h2 style={cardHeadingStyle}>{heading}</h2>
        <p style={cardDescriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

export default Card;