"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";
import { useGetShopListingsQuery } from "../../redux/shopApi";
import ItemCard from "./ItemCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Listing } from "@/types/ListingType";
import ErrorMessage from "../Common/ErrorMessage";

const ShopDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetShopListingsQuery({
    shopId: params.id,
  });

  const [shopData, setShopData] = useState<Listing[]>([]);

  useEffect(() => {
    if (data) {
      setShopData(data);
      setLoading(false);
    }
  }, [data]);
  const shop_id = shopData[0]?.shop_details?.id;

  if (isLoading || loading) {
    return (
      <>
        <Header />
        <SpinnerComponent />
        <Navbar />
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Loading...</h1>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Error</h1>
        </div>
        <ErrorMessage message="Error loading listing data" />
      </>
    );
  }

  if (!shopData.length) {
    return (
      <>
        <Header />
        <Navbar />
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">No Listings Found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">
          {shopData[0]?.shop_details?.name ?? "Shop Details"}
        </h1>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="d-flex justify-content-between align-items-center mx-auto mb-5"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-5">Products In Your Shop</h1>
            <Link href={`/shops/${shop_id}/addListing`}>
              <p className="btn btn-primary">Add Listing</p>
            </Link>
          </div>
          <div className="row g-4 flex">
            {shopData.map((shopItem: Listing) => (
              <div key={shopItem.id} className="col-md-6 col-lg-4 col-xl-3">
                <Link href={`/listings/${shopItem.id}`}>
                  <ItemCard key={shopItem.id} item={shopItem} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopDetail;
