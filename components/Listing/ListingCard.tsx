"use client";
import React from "react";
import { Listing } from "@/types/ListingType";
import Image from "next/image"; 

interface ListingCardProps {
    item: Listing;
  }

const ListingCard: React.FC<ListingCardProps> = ({item}) => {
  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };
  return (
      <div className="col-md-6 col-lg-6 col-xl-4">
        <div className="rounded position-relative fruite-item">
          <div className="fruite-img">
          {item.image_url ? (
            <Image
              src={item.image_url}
              alt="product-image"
              layout="responsive"
              width={500}
              height={500}
              className="img-fluid w-100 rounded-top"
            />
          ) : (
            <p>No image available</p>
          )}
          </div>
          <div
            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
            style={{ top: "10px", left: "10px" }}
          >
            {item.category}
          </div>
          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>{item.title}</h4>
            <p>
            {truncateText(item.description, 50)}
            </p>
            <div className="d-flex justify-content-between flex-lg-wrap">
              <p className="text-dark fs-5 fw-bold mb-0">${item.price}</p>
              <a
                href="#"
                className="btn border border-secondary rounded-pill px-3 text-primary"
              >
                <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
                cart
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ListingCard;
