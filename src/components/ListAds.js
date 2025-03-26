import React from "react";
import SingleAd from "./SingleAd";

const mockData = Array.from({ length: 10 }, (_, index) => ({
  id: `ad_${index}`,
  title: "AN GIA RIVERSIDE CHO THUÊ 3PN2WC",
  price: "13 triệu/tháng",
  location: "Tp Hồ Chí Minh",
  imageUrl: "https://picsum.photos/400/300",
}));

const ListAds = ({ ads }) => {
  console.log("ListAds: ", ads);
  return (
    <div className="ads-container">
      <h2 className="section-title">Tin đăng dành cho bạn</h2>
      <div className="ads-grid">
        {!ads?.data || ads?.data?.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div>
            {ads?.data.map((ad) => (
              <SingleAd
                key={ad.id}
                title={ad.subject}
                price={ad.price_string}
                location={ad.detail_address}
                imageUrl={ad.image}
              />
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .ads-container {
          padding: 24px 8px;
          max-width: 1060px;
          margin: 0 auto;
          background: white;
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: #333;
        }

        .ads-grid {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        .ads-grid > div {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }

        .ads-grid > div > * {
          flex: 0 1 calc(20% - 13px);
          min-width: 200px;
        }

        @media (max-width: 1200px) {
          .ads-grid > div > * {
            flex: 0 1 calc(25% - 12px);
          }
        }

        @media (max-width: 992px) {
          .ads-grid > div > * {
            flex: 0 1 calc(33.333% - 11px);
          }
        }

        @media (max-width: 768px) {
          .ads-container {
            padding: 16px;
          }
          .ads-grid > div > * {
            flex: 0 1 calc(50% - 8px);
          }
        }

        @media (max-width: 480px) {
          .ads-grid > div > * {
            flex: 0 1 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ListAds;
