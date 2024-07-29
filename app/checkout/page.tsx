"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";
import GoogleMapComponent from "@/components/Listing/GoogleMapComponent";
import axios from "axios";
import SuccessMessage from "@/components/Common/SuccessMessage";
import { useRouter } from "next/navigation";

const Checkout: React.FC = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const router = useRouter();
  interface CartItem {
    id: number;
    price: number;
    quantity: number;
    image_url: string;
    name: string;
    total: number;
  }
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [Loading, setLoading] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

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


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  
  const handleLocationChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    
    // Get coordinates for the new location
    if (newLocation) {
      const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(newLocation)}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
      
      try {
        const response = await axios.get(geocodingUrl);
        if (response.data.status === "OK") {
          const { lat, lng } = response.data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          console.error("Geocoding error:", response.data.status);
        }
      } catch (error) {
        console.error("Error fetching geocoding data:", error);
      }
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const orderData = {
        user_id: 17, // Replace with the actual user ID
        delivery_method: deliveryMethod,
        payment_method: paymentMethod,
        address:location,
      };

      const response = await fetch(`${baseUrl}orders/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Order created successfully:", result);
        <SuccessMessage message="Order Placed Successfully" />
        // Optionally, redirect to a success page or clear the cart
        router.push('/listings')
      } else {
        console.error("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <html lang="en">
      <Header />
      <body>
        {/* 0Spinner Start  */}
        {Loading && <SpinnerComponent />}
        {/* Spinner End  */}
        {/* Success Message Start */}
        
        {/* Success Message End */}
        {/* Navbar start and Modal Search Start  */}
        <Navbar />
        {/* Navbar End and Modal Search End */}

        {/* <!-- Single Page Header start --> */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Checkout</h1>
        </div>
        {/* <!-- Single Page Header End --> */}

        {/* <!-- Checkout Page Start --> */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <h1 className="mb-4">Billing details</h1>
            <form action="#">
              <div className="row g-5">
                <div className="col-md-12 col-lg-6 col-xl-7"> 
                <div className="form-item">
                    <label className="form-label my-3">
                      Delivery Method <sup>*</sup>
                    </label>
                    <select 
                      value={deliveryMethod} 
                      onChange={(e) => setDeliveryMethod(e.target.value)} 
                      className="form-control"
                    >
                      <option value="">Select Delivery Method</option>
                      <option value="standard">Standard Delivery - $3.00</option>
                      <option value="express">Express Delivery - $5.00</option>
                    </select>
                  </div>
                  <div className="form-item">
                    <label className="form-label my-3">
                      Payment Method <sup>*</sup>
                    </label>
                    <select 
                      value={paymentMethod} 
                      onChange={(e) => setPaymentMethod(e.target.value)} 
                      className="form-control"
                    >
                      <option value="">Select Payment Method</option>
                      <option value="cash">Cash</option>
                      <option value="momo">Mobile</option>
                    </select>
                  </div>                 
                  <div className="form-item">
                    <label className="form-label my-3">
                      Address <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={handleLocationChange}
                      className="form-control"
                      placeholder="Enter Your Location"
                    />
                  </div>
                
                  <hr />
                  <div className="relative mb-4">
                  <GoogleMapComponent coordinates={coordinates} />
                </div>
                
                </div>
                <div className="col-md-12 col-lg-6 col-xl-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Products</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                        <tr key={item.id}>
                          <th scope="row">
                            <div className="d-flex align-items-center mt-2">
                              <img
                                src={item.image_url}
                                className="img-fluid rounded-circle"
                                style={{ width: "90px", height: "90px" }}
                                alt={item.name}
                              />
                            </div>
                          </th>
                          <td className="py-5">{item.name}</td>
                          <td className="py-5">${item.price}</td>
                          <td className="py-5">{item.quantity}</td>
                          <td className="py-5">${item.total}</td>
                        </tr>
                         )) }
                      </tbody>
                    </table>
                  </div>
              
                  <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                    <button
                      type="button"
                      onClick={handlePlaceOrder}
                      className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- Checkout Page End --> */}

        {/* Footer start */}
        <Footer />
        {/* footer end */}
      </body>
    </html>
  );
};

export default Checkout;
