"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";

const testimonialPage: React.FC = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <html lang="en">
      <Header />
      <body>
        {/* 0Spinner Start  */}
        {Loading && <SpinnerComponent />}
        {/* Spinner End  */}

        {/* Navbar start and Modal Search Start  */}
        <Navbar />
        {/* Navbar End and Modal Search End */}

        {/* <!-- Single Page Header start --> */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Testimonial</h1>
        </div>
        {/* <!-- Single Page Header End --> */}

        {/* <!-- Testimonial Start --> */}
        <div className="container-fluid testimonial py-5">
          <div className="container py-5">
            <div className="testimonial-header text-center">
              <h4 className="text-primary">Our Testimonial</h4>
              <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              <div className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-secondary position-absolute"
                    style={{ bottom: "30px", right: 0 }}
                  ></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img
                        src="/assets/img/testimonial-1.jpg"
                        className="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-secondary position-absolute"
                    style={{ bottom: "30px", right: 0 }}
                  ></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img
                        src="/assets/img/testimonial-1.jpg"
                        className="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt="test"
                      />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-secondary position-absolute"
                    style={{ bottom: "30px", right: 0 }}
                  ></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s,
                    </p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img
                        src="/assets/img/testimonial-1.jpg"
                        className="img-fluid rounded"
                        style={{ width: "100px", height: "100px" }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">Client Name</h4>
                      <p className="m-0 pb-3">Profession</p>
                      <div className="d-flex pe-5">
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                        <i className="fas fa-star text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}

        {/* Footer start */}
        <Footer />
        {/* footer end */}
      </body>
    </html>
  );
};

export default testimonialPage;
