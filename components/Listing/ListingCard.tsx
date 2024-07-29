"use client";
import React from "react";
import { Listing } from "@/types/ListingType";
import Image from "next/image"; 
import {useRouter} from "next/navigation";

interface ListingCardProps {
  item: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ item }) => {
  const router = useRouter();

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };

  const handleAddToCart = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/cart/add/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          listing_id: item.id,
          quantity: 1,
          user_id: 17,
          price: item.price,
        }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message or update the UI)
        console.log('Item added to cart successfully');
        router.push('/cart');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('An error occurred while adding item to cart:', error);
    }
  };

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
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
          <p>{truncateText(item.description, 50)}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">${item.price}</p>
            <button 
              className="btn border border-secondary rounded-pill px-3 text-primary"
              onClick={handleAddToCart}
            >
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
