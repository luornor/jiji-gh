import React from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";

const Navbar: React.FC = () => {
  
  return (
    <div>
    <div className="container-fluid fixed-top">
          <div className="container topbar bg-primary d-none d-lg-block">
            <div className="d-flex justify-content-between">
              <div className="top-info ps-2">
                <small className="me-3">
                  <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
                  <a href="#" className="text-white">
                    123 Street, New York
                  </a>
                </small>
                <small className="me-3">
                  <i className="fas fa-envelope me-2 text-secondary"></i>
                  <a href="#" className="text-white">
                    Email@Example.com
                  </a>
                </small>
              </div>
              <div className="top-link pe-2">
                <a href="#" className="text-white">
                  <small className="text-white mx-2">Privacy Policy</small>/
                </a>
                <a href="#" className="text-white">
                  <small className="text-white mx-2">Terms of Use</small>/
                </a>
                <a href="#" className="text-white">
                  <small className="text-white ms-2">Sales and Refunds</small>
                </a>
              </div>
            </div>
          </div>
          <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
              <a href="/listings" className="navbar-brand">
                <h1 className="text-primary display-6">Market</h1>
              </a>
              <button
                className="navbar-toggler py-2 px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars text-primary"></span>
              </button>
              <div
                className="collapse navbar-collapse bg-white"
                id="navbarCollapse"
              >
                <div className="navbar-nav mx-auto">
                  <Link href="/listings" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link href={`/shops/${1}`} className="nav-item nav-link">
                    Shop
                  </Link>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                      <Link href="/cart" className="dropdown-item">
                        Cart
                      </Link>
                      <Link href="/checkout" className="dropdown-item">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex m-3 me-0">
                  <button
                    className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search text-primary"></i>
                  </button>
                  <Link href="/cart" className="position-relative me-4 my-auto">
                    <i className="fa fa-shopping-bag fa-2x"></i>
                    <span
                      className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                      style={{
                        top: "-5px",
                        left: "15px",
                        height: "20px",
                        minWidth: "20px",
                      }}
                    >
                      3
                    </span>
                  </Link>
                  <Link href={`/profile/${18}`} className="my-auto">
                    <i className="fas fa-user fa-2x"></i>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      <SearchModal />
    </div>
  );
};

export default Navbar;
