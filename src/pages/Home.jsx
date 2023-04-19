import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-10 col-md-6 text-center">
          <h1 className="display-4 font-weight-bold mb-4">
            Welcome to our cab system
          </h1>
          <p className="lead mb-5">
            Enter your source and destination below to book a cab:
          </p>
          <Link
            to="/booking"
            className="btn btn-primary btn-lg px-5"
          >
            Book a Cab
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
