"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import { useAddShopListingsMutation } from "../../redux/shopApi";
import { useParams } from "next/navigation";
import AuthButton from "../Common/AuthButton";
import SuccessMessage from "../Common/SuccessMessage";
import ErrorMessage from "../Common/ErrorMessage";
import { useRouter } from "next/navigation";



const CreateListing: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [addShopListings, { isLoading, error, isSuccess }] = useAddShopListingsMutation();

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState("");
  const router = useRouter();


  const params = useParams<{ id: string }>();
  
  const categoryChoices = [
    "electronics",
    "fashion",
    "home",
    "beauty",
    "books",
    "toys",
    "other",
  ];


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await addShopListings({
        shopId: params.id,
        title,
        description,
        price,
        quantity,
        category,
        image_url: imageUrl,
      }).unwrap();
      setSuccess(res.data.message);
      router.push(`/shops/${params.id}`);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Failed to create listing:", error);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div lang="en">
      <Header />
        <>
          <Navbar />
          <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Add New Listing</h1>
          </div>
          <div className="container py-5">
          {isSuccess && success && <SuccessMessage message={success}></SuccessMessage>}
          {error && <ErrorMessage message="Error creating listing"></ErrorMessage>}

            <div className="card shadow p-5 bg-light rounded">
              <div className="text-center mx-auto mb-4" style={{ maxWidth: "700px" }}>
                <h1 className="text-primary">Create a New Listing</h1>
                <p className="mb-4">
                  Fill in the details below to add a new listing to your shop.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="items-center justify-center">
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control border-0 py-3 bg-gray-200"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control border-0 py-3 bg-gray-200"
                    rows={5}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    className="form-control border-0 py-3 bg-gray-200"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    className="form-control border-0 py-3 bg-gray-200"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    className="form-control border-0 py-3 bg-gray-200"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {categoryChoices.map((choice) => (
                      <option key={choice} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control border-0 py-3 bg-gray-200"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div className= "d-flex justify-content-center mb-3">
                  <AuthButton loading={isLoading} text="Add Listing" action={handleSubmit} />
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </>

    </div>
  );
};

export default CreateListing;
