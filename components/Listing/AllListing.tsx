"use client";
import React, { useEffect, useState } from "react";

import Header from "@/components/Common/Header";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";

const AllListing: React.FC = () => {
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

            {/* Navbar start and Modal Search Start  */}
            <Navbar />
            {/* Navbar End and Modal Search End */}

            {/* Hero Start  */}
            <div className="container-fluid py-5 mb-5 hero-header">
              <div className="container py-5">
                <div className="row g-5 align-items-center">
                  <div className="col-md-12 col-lg-7">
                    <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                    <h1 className="mb-5 display-3 text-primary">
                      Organic Veggies & Fruits Foods
                    </h1>
                    <div className="position-relative mx-auto">
                      <input
                        className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                        type="number"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                        style={{ top: 0, right: "25%" }}
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-5">
                    <div
                      id="carouselId"
                      className="carousel slide position-relative"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active rounded">
                          <img
                            src="./assets/img/hero-img-1.png"
                            className="img-fluid w-100 h-100 bg-secondary rounded"
                            alt="First slide"
                          />
                          <a
                            href="#"
                            className="btn px-4 py-2 text-white rounded"
                          >
                            Fruites
                          </a>
                        </div>
                        <div className="carousel-item rounded">
                          <img
                            src="./assets/img/hero-img-2.jpg"
                            className="img-fluid w-100 h-100 rounded"
                            alt="Second slide"
                          />
                          <a
                            href="#"
                            className="btn px-4 py-2 text-white rounded"
                          >
                            Vesitables
                          </a>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Hero End  */}

            {/* Featurs Section Start  */}
            <div className="container-fluid featurs py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-car-side fa-3x text-white"></i>
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Free Shipping</h5>
                    <p className="mb-0">Free on order over $300</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-user-shield fa-3x text-white"></i>
                  </div>
                  <div className="featurs-content text-center">
                    <h5>Security Payment</h5>
                    <p className="mb-0">100% security payment</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fas fa-exchange-alt fa-3x text-white"></i>
                  </div>
                  <div className="featurs-content text-center">
                    <h5>30 Day Return</h5>
                    <p className="mb-0">30 day money guarantee</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="featurs-item text-center rounded bg-light p-4">
                  <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                    <i className="fa fa-phone-alt fa-3x text-white"></i>
                  </div>
                  <div className="featurs-content text-center">
                    <h5>24/7 Support</h5>
                    <p className="mb-0">Support every time fast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            {/* Featurs Section End  */}


            {/* Featurs Start  */}
            <div className="container-fluid service py-5">
              <div className="container py-5">
                <div className="row g-4 justify-content-center">
                  <div className="col-md-6 col-lg-4">
                    <a href="#">
                      <div className="service-item bg-secondary rounded border border-secondary">
                        <img
                          src="./assets/img/featur-1.jpg"
                          className="img-fluid rounded-top w-100"
                          alt=""
                        />
                        <div className="px-4 rounded-bottom">
                          <div className="service-content bg-primary text-center p-4 rounded">
                            <h5 className="text-white">Fresh Apples</h5>
                            <h3 className="mb-0">20% OFF</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a href="#">
                      <div className="service-item bg-dark rounded border border-dark">
                        <img
                          src="./assets/img/featur-2.jpg"
                          className="img-fluid rounded-top w-100"
                          alt=""
                        />
                        <div className="px-4 rounded-bottom">
                          <div className="service-content bg-light text-center p-4 rounded">
                            <h5 className="text-primary">Tasty Fruits</h5>
                            <h3 className="mb-0">Free delivery</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <a href="#">
                      <div className="service-item bg-primary rounded border border-primary">
                        <img
                          src="./assets/img/featur-3.jpg"
                          className="img-fluid rounded-top w-100"
                          alt=""
                        />
                        <div className="px-4 rounded-bottom">
                          <div className="service-content bg-secondary text-center p-4 rounded">
                            <h5 className="text-white">Exotic Vegitable</h5>
                            <h3 className="mb-0">Discount 30$</h3>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Featurs End  */}

            {/* Vesitable Shop Start */}
            <div className="container-fluid vesitable py-5">
              <div className="container py-5">
                <h1 className="mb-0">Fresh Organic Vegetables</h1>
                <div className="owl-carousel vegetable-carousel justify-content-center">
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-6.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $4.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-1.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $4.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-3.png"
                        className="img-fluid w-100 rounded-top bg-light"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Banana</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $7.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-4.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Bell Papper</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $7.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-5.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Potatoes</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $7.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-6.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $7.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-5.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Potatoes</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $7.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="border border-primary rounded position-relative vesitable-item">
                    <div className="vesitable-img">
                      <img
                        src="./assets/img/vegetable-item-6.jpg"
                        className="img-fluid w-100 rounded-top"
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Vegetable
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>Parsely</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod te incididunt
                      </p>
                      <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">
                          $7.99 / kg
                        </p>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Vesitable Shop End  */}

            {/* Bestsaler Product Start  */}
            <div className="container-fluid py-5">
              <div className="container py-5">
                <div
                  className="text-center mx-auto mb-5"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="display-4">Bestseller Products</h1>
                  <p>
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="./assets/img/best-product-1.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="./assets/img/best-product-2.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="./assets/img/best-product-3.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="./assets/img/best-product-4.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="./assets/img/best-product-5.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-4">
                    <div className="p-4 rounded bg-light">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img
                            src="./assets/img/best-product-6.jpg"
                            className="img-fluid rounded-circle w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-6">
                          <a href="#" className="h5">
                            Organic Tomato
                          </a>
                          <div className="d-flex my-3">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <h4 className="mb-3">3.12 $</h4>
                          <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                          >
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="./assets/img/fruite-item-1.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-4">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="./assets/img/fruite-item-2.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-4">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="./assets/img/fruite-item-3.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-4">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="text-center">
                      <img
                        src="./assets/img/fruite-item-4.jpg"
                        className="img-fluid rounded"
                        alt=""
                      />
                      <div className="py-2">
                        <a href="#" className="h5">
                          Organic Tomato
                        </a>
                        <div className="d-flex my-3 justify-content-center">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h4 className="mb-3">3.12 $</h4>
                        <a
                          href="#"
                          className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bestsaler Product End  */}

          </body>
        </html>
      )}
    </>
  );
};

export default AllListing;
