"use client";
import React, { useEffect, useState } from "react";

import Header from "@/components/Common/Header";
import Link from "next/link";
import SpinnerComponent from "@/components/Common/SpinnerComponent";

const Home: React.FC = () => {
  const [domLoad, setDomLoad] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDomLoad(true);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {domLoad && (
        <html lang="en">
          <Header />
          <body>
            {/* 0Spinner Start  */}
            {Loading && <SpinnerComponent />}
            {/* Spinner End  */}

            {/* Banner Section Start */}
            <div className="container-fluid banner bg-secondary">
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="py-4">
                      <h1 className="display-3 text-white">
                        Welcome to Our Market Place
                      </h1>
                      <p className="fw-normal display-6 text-dark mb-4">
                        Login or Signup to View Products
                      </p>
                      <div className="d-flex">
                        <Link
                          href="/login"
                          className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5 me-3"
                        >
                          Login
                        </Link>
                        <Link
                          href="/signup"
                          className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                        >
                          Signup
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="position-relative">
                      <img
                        src="/assets/img/laptop_banner.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                      <div
                        className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                        style={{
                          width: "140px",
                          height: "140px",
                          top: 0,
                          left: 0,
                        }}
                      >
                        <div className="d-flex flex-row">
                          <h2 className="h2 mb-0">30%</h2>
                          <span className="h4 text-muted mb-0">off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Banner Section End  */}

            {/* Fact Start  */}
            <div className="container-fluid py-5">
              <div className="container">
                <div className="bg-light p-5 rounded">
                  <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>satisfied customers</h4>
                        <h1>1963</h1>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>quality of service</h4>
                        <h1>99%</h1>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>quality certificates</h4>
                        <h1>33</h1>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="counter bg-white rounded p-5">
                        <i className="fa fa-users text-secondary"></i>
                        <h4>Available Products</h4>
                        <h1>789</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fact Start  */}
          </body>
        </html>
      )}
    </>
  );
};

export default Home;
