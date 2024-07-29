"use client";
import React from "react";
import { Listing } from "@/types/ListingType";
import Image from "next/image";

interface ListingCardProps {
  item: Listing;
}

const ItemCard: React.FC<ListingCardProps> = ({ item }) => {
  return (
    <div className="card shadow-lg fruite-item">
      <div className="text-center fruite-img">
        <Image
          src={item.image_url}
          alt="product-image"
          layout="responsive"
          width={500}
          height={500}
          className="img-fluid w-100 rounded-top"
        />
        <div className="py-4">
          <a href="#" className="h5">
            {item.title}
          </a>
          <div className="d-flex my-3 justify-content-center">
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star text-primary"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4 className="mb-3"> {item.price} $</h4>
          <a
            href="#"
            className="btn border border-secondary rounded-pill px-3 text-primary"
          >
            View Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
