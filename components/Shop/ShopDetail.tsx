"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";
import { useGetShopListingsQuery } from "../../redux/shopApi";
import ItemCard from "./ItemCard";
import { useParams } from "next/navigation";

const ShopDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetShopListingsQuery({ shopId: params.id });

  const [shopData, setShopData] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    if (data) {
      setShopData(data);
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
    <>
      <Header />
      {loading && <SpinnerComponent />}
      <Navbar />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">
          {shopData?.shop_details?.name ?? "Shop Details"}
        </h1>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
            <h1 className="display-4">Products In Your Shop</h1>
          </div>
          <div className="row g-4">
            {shopData && <ItemCard item={shopData} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopDetail;
