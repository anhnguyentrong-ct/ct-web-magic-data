import React from "react";

const SingleAd = ({ title, price, location, imageUrl }) => {
  return (
    <div className="ad-card">
      <div className="ad-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="ad-info">
        <h3 className="ad-title">{title}</h3>
        <p className="ad-price">{price}</p>
        <p className="ad-location">{location}</p>
      </div>
      <style jsx>{`
        .ad-card {
          padding: 12px;
          width: 200px;
          overflow: hidden;
          background: white;
          transition: transform 0.2s;
        }

        .ad-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .ad-image {
          position: relative;
          height: 150px;
        }

        .ad-image img {
          /* width: 150px; */
          width: auto;
          height: 150px;
          object-fit: cover;
        }

        .favorite-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .ad-info {
          padding: 12px;
        }

        .ad-title {
          margin: 0 0 8px;
          font-size: 1rem;
          font-weight: 500;
          color: #333;
        }

        .ad-price {
          margin: 0 0 4px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2196f3;
        }

        .ad-location {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default SingleAd;
