"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";
import ListingCard from "@/components/Listing/ListingCard";
import { Listing } from "@/types/ListingType";
import { useGetAllListingsQuery } from "../../redux/ListingApi";
import ErrorMessage from "@/components/Common/ErrorMessage";
import Link from "next/link";

const ListingsPage: React.FC = () => {
  const [Loading, setLoading] = useState(true);
  const [domLoad, setDomLoad] = useState(false);
  const [listings, setListings] = useState<any>([]);
  const { data, error, isLoading } = useGetAllListingsQuery();

  useEffect(() => {
    setTimeout(() => {
      setDomLoad(true);
      setLoading(false);
    }, 3000);

    if (data) {
      console.log("API Data:", data);
      setListings(data);
    }

    if (error) {
      console.error("API Error:", error);
    }
  }, [data, error]);

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

            {/* <!-- Single Page Header start --> */}
            <div className="container-fluid page-header py-5">
              <h1 className="text-center text-white display-6">
                Products We Have
              </h1>
            </div>
            {/* <!-- Single Page Header End --> */}

            {/* <!-- Fruits Shop Start--> */}
            <div className="container-fluid fruite py-5">
              <div className="container py-5">
                <h1 className="mb-4">Quality items at Your Display</h1>
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-xl-3">
                        <div className="input-group w-100 mx-auto d-flex">
                          <input
                            type="search"
                            className="form-control p-3"
                            placeholder="keywords"
                            aria-describedby="search-icon-1"
                          />
                          <span
                            id="search-icon-1"
                            className="input-group-text p-3"
                          >
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row g-4 flex">
                       {/* Listing cards start */}
                       <div className="d-flex flex-wrap justify-content-start gap-4">
                        {/* single card start */}
                        {isLoading ? (
                          <div>Loading...</div>
                        ) : error ? (
                          <ErrorMessage message="Error fetching listings" />
                        ) : (
                          <>
                            {listings.map((listing: Listing) => (
                              <Link
                                key={listing.id}
                                href={`/listings/${listing.id}`}
                              >
                                <ListingCard key={listing.id} item={listing} />
                              </Link>
                            ))}
                          </>
                        )}
                        {/* single card end */}
                      </div>
                    </div>
                    {/* Listing cards end */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Fruits Shop End--> */}

            {/* Footer start */}
            <Footer />
            {/* footer end */}
          </body>
        </html>
      )}
    </>
  );
};

export default ListingsPage;
