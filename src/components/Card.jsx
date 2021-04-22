import React from 'react';

const Card = ({ date, title, description, backgroundColor }) => (
  <>
    <div className="container">
      <div className="date">{date}</div>
      <h3 className="title">{title}</h3>
      <div className="description">{description}</div>
      <button className="readMore">Read More</button>
    </div>
    <style jsx>{`
      .container {
        padding: 20px;
        background-color: ${backgroundColor};
        max-width: 400px;
        min-height: 250px;
        position: relative;
        color: #f5f5f5;
      }
      .readMore {
        position: absolute;
        bottom: 20px;
        font-size: 12px;
        background: none;
        border: 1px solid #f5f5f5;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        color: #f5f5f5;
      }
    `}</style>
  </>
);

export default Card;
