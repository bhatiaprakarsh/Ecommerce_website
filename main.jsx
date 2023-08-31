import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-black border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/cart.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-darker">Welcome to Dukaan</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Discover a world of endless shopping possibilities at Dukaan, where convenience meets style, and every click opens the door to a myriad of products that cater to your every need and desire. 
              As an innovative and user-friendly e-commerce platform, Dukaan revolutionizes your shopping experience by offering a seamless and enjoyable journey from the comfort of your own space..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
