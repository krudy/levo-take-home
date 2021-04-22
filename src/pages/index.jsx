import React, { useState } from 'react';

import Card from '../components/Card';

const Homepage = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="pageTitle">Related Articles</h1>
          <p className="pageDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="cardContainer">
            <Card
              date="12 Sep, 2018"
              title="Love of learning, art keys to a great year for Gwen"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
              backgroundColor="#f0b03a"
            />
            <Card
              date="28 Sep, 2018"
              title="Curious mind lends the way for carer Jill"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
              backgroundColor="#3ca9c7"
            />
            <Card
              date="12 Sep, 2018"
              title="Celebrating our volunteers"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
              backgroundColor="#6640b3"
            />
          </div>
          {showMore && (
            <div className="cardContainer">
              <Card
                date="12 Sep, 2018"
                title="Love of learning, art keys to a great year for Gwen"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
                backgroundColor="#6640b3"
              />
              <Card
                date="28 Sep, 2018"
                title="Curious mind lends the way for carer Jill"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
                backgroundColor="#f0b03a"
              />
              <Card
                date="12 Sep, 2018"
                title="Celebrating our volunteers"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua."
                backgroundColor="#3ca9c7"
              />
            </div>
          )}
          <div className="buttonRow">
            {!showMore && (
              <button className="button" onClick={() => setShowMore(true)}>
                Read More
              </button>
            )}
            {showMore && (
              <button className="button" onClick={() => setShowMore(false)}>
                Read Less
              </button>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: #e3e3e3;
          padding: 20px;
          font-family: Arial, Helvetica, sans-serif;
        }
        .wrapper {
        }
        .pageTitle {
          color: #c94d4d;
        }
        .pageDescription {
          max-width: 600px;
          margin-bottom: 20px;
          color: #4f4f4f;
        }
        .cardContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .cardContainer > :global(.container) {
          margin: 10px;
        }
        .buttonRow {
          display: flex;
          justify-content: center;
        }
        .button {
          background: none;
          border: 1px solid #c94d4d;
          color: #c94d4d;
          font-size: 15px;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default Homepage;
