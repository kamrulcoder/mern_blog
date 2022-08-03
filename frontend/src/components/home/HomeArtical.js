import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const HomeArtical = () => {
  return (
    <>
      {/* <div className="home-articals">
                {
                    allArticle.length > 0 ? allArticle.map((art, index) =>
                        <Article key={index} art={art} />
                    ) : <h3>Article not found</h3>
                }
            </div> */}
      <div className="home-articals">
        <div className="home-artical">
          <div className="row">
            <div className="col-4">
              <div className="home-image">
                <div className="image">
                  <img
                    src={`http://localhost:3000/articalImage/ss.jpg`}
                    alt="image Not found "
                  />
                  <span>programming</span>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="home-artical-details">
                <div className="title">
                  <Link to={`/artical/details/`}>Title </Link>
                </div>
                <div className="name-time">
                  <span>
                    <Link to="/">Programming related </Link>
                  </span>
                  <span>fdfdfd</span>
                </div>
                <div className="artical-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quod iste reprehenderit consectetur, quis sunt
                  perferendis doloremque eveniet voluptatum itaque eaque nihil
                  repellat eum doloribus adipisci aspernatur minus commodi
                  maiores?
                </div>
                <div className="read-more">
                  <button className="read-more-btn">
                    <Link to={`/artical/details/`}>Read more</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-artical">
          <div className="row">
            <div className="col-4">
              <div className="home-image">
                <div className="image">
                  <img
                    src={`http://localhost:3000/articalImage/ss.jpg`}
                    alt="image Not found "
                  />
                  <span>programming</span>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="home-artical-details">
                <div className="title">
                  <Link to={`/artical/details/`}>Title </Link>
                </div>
                <div className="name-time">
                  <span>
                    <Link to="/">Programming related </Link>
                  </span>
                  <span>fdfdfd</span>
                </div>
                <div className="artical-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quod iste reprehenderit consectetur, quis sunt
                  perferendis doloremque eveniet voluptatum itaque eaque nihil
                  repellat eum doloribus adipisci aspernatur minus commodi
                  maiores?
                </div>
                <div className="read-more">
                  <button className="read-more-btn">
                    <Link to={`/artical/details/`}>Read more</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination/>
    </>
  );
};

export default HomeArtical;
