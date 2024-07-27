"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";
import { useGetListingByIdQuery } from "../../redux/ListingApi";

import { useParams } from "next/navigation";

const ListingDetail: React.FC = () => {
  const [Loading, setLoading] = useState(true);
  const params = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetListingByIdQuery({ listingId: params.id });

  const [listingData, setListingData] = useState<any>({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (data) {
      console.log(data);
      setListingData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading Listing data.</div>;
  }

  if (!data) {
    return <div>No blog data found.</div>;
  }

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

        {/* Single Page Header start*/}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Listing Detail</h1>
        </div>
        {/* Single Page Header End  */}

        {/* <!-- Single Product Start --> */}
        <div className="container-fluid py-5 mt-5">
          <div className="container py-5">
            <div className="row g-4 mb-5">
              <div className="col-lg-8 col-xl-9">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="border rounded">
                      <a href="#">
                        <img
                          src={listingData.image_url}
                          className="img-fluid rounded"
                          alt="Image"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="fw-bold mb-3">{listingData.title}</h4>
                    <p className="mb-3">Category: {listingData.category}</p>
                    <h5 className="fw-bold mb-3">{listingData.price} $</h5>
                    <div className="d-flex mb-4">
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star text-secondary"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <p className="mb-4">
                      {listingData.description}
                    </p>
                    <p>Quantity</p>
                    <div
                      className="input-group quantity mb-5"
                      style={{ width: "100px" }}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        value="1"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                  <div className="col-lg-12">
                    <nav>
                      <div className="nav nav-tabs mb-3">
                        <button
                          className="nav-link active border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-about-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-about"
                          aria-controls="nav-about"
                          aria-selected="true"
                        >
                          Description
                        </button>
                        <button
                          className="nav-link border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-mission-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-mission"
                          aria-controls="nav-mission"
                          aria-selected="false"
                        >
                          Reviews
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mb-5">
                      <div
                        className="tab-pane active"
                        id="nav-about"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                      >
                        <p>
                          {listingData.description}
                        </p>
                    
                        {/* <div className="px-2">
                          <div className="row g-4">
                            <div className="col-6">
                              <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Weight</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">1 kg</p>
                                </div>
                              </div>
                              <div className="row text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Country of Origin</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">Agro Farm</p>
                                </div>
                              </div>
                              <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Quality</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">Organic</p>
                                </div>
                              </div>
                              <div className="row text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Check</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">Healthy</p>
                                </div>
                              </div>
                              <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                <div className="col-6">
                                  <p className="mb-0">Min Weight</p>
                                </div>
                                <div className="col-6">
                                  <p className="mb-0">250 Kg</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      
                    </div>
                  </div>
                  <form action="#">
                    <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="border-bottom rounded">
                          <input
                            type="text"
                            className="form-control border-0 me-4"
                            placeholder="Yur Name *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="border-bottom rounded">
                          <input
                            type="email"
                            className="form-control border-0"
                            placeholder="Your Email *"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="border-bottom rounded my-4">
                          <textarea
                            name=""
                            id=""
                            className="form-control border-0"
                            cols={30}
                            rows={8}
                            placeholder="Your Review *"
                            spellCheck="false"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-between py-3 mb-5">
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-3">Please rate:</p>
                            <div
                              className="d-flex align-items-center"
                              style={{ fontSize: "12px" }}
                            >
                              <i className="fa fa-star text-muted"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                          <a
                            href="#"
                            className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                          >
                            {" "}
                            Post Comment
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Single Product End --> */}

        {/* Footer start */}
        <Footer />
        {/* footer end */}
      </body>
    </html>
  );
};

export default ListingDetail;
