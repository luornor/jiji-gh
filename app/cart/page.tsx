"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";
import Link from "next/link";
const cartPage: React.FC = () => {
  const [Loading, setLoading] = useState(true);
  interface CartItem {
    id: number;
    price: number;
    quantity: number;
    image_url: string;
    name: string;
    total: number;
  }
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  useEffect(() => {
    // Fetch cart items from the API
    const fetchCartItems = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const user_id = 17;
        const response = await fetch(`${baseUrl}cartItems/${user_id}/`);
        if (response.ok) {
          const result = await response.json();
          const items = result.cart[0].items;
          
          // Fetch listing data for each cart item
          const listingPromises = items.map(async (item: any) => {
            const listingResponse = await fetch(`${baseUrl}listings/${item.listing_id}/`);
            if (listingResponse.ok) {
              const listingData = await listingResponse.json();
              return {
                ...item,
                image_url: listingData.image_url, // Assuming 'image' is the field in the listing data
                name: listingData.title,   // Assuming 'name' is the field in the listing data
                total: item.quantity * item.price,
              };
            } else {
              console.error("Failed to fetch listing data");
              return item;
            }
          });

          const updatedCartItems = await Promise.all(listingPromises);
          setCartItems(updatedCartItems);
        } else {
          console.error("Failed to fetch cart items");
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + change, 1),
              total: item.price * Math.max(item.quantity + change, 1),
            }
          : item
      )
    );
  };
  
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
          <h1 className="text-center text-white display-6">Cart</h1>
        </div>
        {/* <!-- Single Page Header End --> */}

        {/* <!-- Cart Page Start --> */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image_url}
                            className="img-fluid me-5 rounded-circle"
                            style={{ width: "80px", height: "80px" }}
                            alt={item.name}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4">{item.name}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">${item.price}</p>
                      </td>
                      <td>
                        <div
                          className="input-group quantity mt-4"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-sm btn-minus rounded-circle bg-light border"
                             onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-sm text-center border-0"
                            value={item.quantity}
                            readOnly
                          />
                          <div className="input-group-btn">
                            <button className="btn btn-sm btn-plus rounded-circle bg-light border"
                            onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">${item.total}</p>
                      </td>
                      <td>
                        <button className="btn btn-md rounded-circle bg-light border mt-4">
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end">
              <div className="col-8"></div>
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4">
                    <h1 className="display-6 mb-4">
                      Cart <span className="fw-normal">Total</span>
                    </h1>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4">Total Cost:</h5>
                      <p className="mb-0">${cartItems.reduce((sum, item) => sum + item.total, 0).toFixed(2)}</p>
                    </div>
                    <p className="mb-0 text-end">Shipping to Ghana.</p>
                  </div>
                 
                  <Link href ="/checkout" >
                  <button
                    className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Cart Page End --> */}

        {/* <!-- Footer and Copyright --> */}
        <Footer />
      </body>
    </html>
  );
};
export default cartPage;
