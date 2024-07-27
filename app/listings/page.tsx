"use client";
import React,{useState,useEffect} from "react";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import SpinnerComponent from "@/components/Common/SpinnerComponent";
import ListingCard from "@/components/Listing/ListingCard";
import { Listing } from "@/types/ListingType";
import { useGetAllListingsQuery } from "../../redux/getAllListingApi";
import ErrorMessage from "@/components/Common/ErrorMessage";


const ListingsPage: React.FC=()=> {
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
    

    return(
        <>
        {domLoad && (
        <html lang="en">
        <Header/>
        <body>
            {/* 0Spinner Start  */}
        {Loading &&
          <SpinnerComponent/>
         }
        {/* Spinner End  */}
    
    
            {/* Navbar start and Modal Search Start  */}
            <Navbar/>
        {/* Navbar End and Modal Search End */}
    
    
            {/* <!-- Single Page Header start --> */}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Products We Have</h1>
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
                                        <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1"/>
                                        <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                    </div>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Default Sorting:</label>
                                        <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                            <option value="volvo">Nothing</option>
                                            <option value="saab">Popularity</option>
                                            <option value="opel">Organic</option>
                                            <option value="audi">Fantastic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Apples</a>
                                                            <span>(3)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Oranges</a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Strawbery</a>
                                                            <span>(2)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Banana</a>
                                                            <span>(8)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex justify-content-between fruite-name">
                                                            <a href="#"><i className="fas fa-apple-alt me-2"></i>Pumpkin</a>
                                                            <span>(5)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4 className="mb-2">Price</h4>
                                                <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min="0" max="500" value="0"/>
                                                <output id="amount" name="amount" min-velue="0" max-value="500" htmlFor="rangeInput">0</output>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Additional</h4>
                                                <div className="mb-2">
                                                    <input type="radio" className="me-2" id="Categories-1" name="Categories-1" value="Beverages"/>
                                                    <label htmlFor="Categories-1"> Organic</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input type="radio" className="me-2" id="Categories-2" name="Categories-1" value="Beverages"/>
                                                    <label htmlFor="Categories-2"> Fresh</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input type="radio" className="me-2" id="Categories-3" name="Categories-1" value="Beverages"/>
                                                    <label htmlFor="Categories-3"> Sales</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input type="radio" className="me-2" id="Categories-4" name="Categories-1" value="Beverages"/>
                                                    <label htmlFor="Categories-4"> Discount</label>
                                                </div>
                                                <div className="mb-2">
                                                    <input type="radio" className="me-2" id="Categories-5" name="Categories-1" value="Beverages"/>
                                                    <label htmlFor="Categories-5"> Expired</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <h4 className="mb-3">Featured products</h4>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div className="rounded me-4" style={{width: "100px", height: "100px"}}>
                                                    <img src="./assets/img/featur-1.jpg" className="img-fluid rounded" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div className="rounded me-4" style={{width: '100px', height: "100px"}}>
                                                    <img src="./assets/img/featur-2.jpg" className="img-fluid rounded" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-start">
                                                <div className="rounded me-4" style={{width: '100px', height: '100px'}}>
                                                    <img src="./assets/img/featur-3.jpg" className="img-fluid rounded" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="mb-2">Big Banana</h6>
                                                    <div className="d-flex mb-2">
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star text-secondary"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                    <div className="d-flex mb-2">
                                                        <h5 className="fw-bold me-2">2.99 $</h5>
                                                        <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center my-4">
                                                <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">Vew More</a>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="position-relative">
                                                <img src="./assets/img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt=""/>
                                                <div className="position-absolute" style={{top: '50%', right: '10px', transform: 'translateY(-50%)'}}>
                                                    <h3 className="text-secondary fw-bold">Fresh <br/> Fruits <br/> Banner</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Listing cards start */}
                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                        {/* single card start */}
                                        {isLoading ? (
                                            <div>Loading...</div>
                                            ) : error ? (
                                            <ErrorMessage message="Error fetching listings" />
                                            ) : (
                                            <div className="flex flex-wrap justify-center gap-[40px]">
                                                {listings.map((listing: Listing) => (
                                                <ListingCard key={listing.id} item={listing} />
                                                ))}
                                            </div>
                                            )}
                                        </div>
                                        {/* single card end */}
                      
                                        <div className="col-12">
                                            <div className="pagination d-flex justify-content-center mt-5">
                                                <a href="#" className="rounded">&laquo;</a>
                                                <a href="#" className="active rounded">1</a>
                                                <a href="#" className="rounded">2</a>
                                                <a href="#" className="rounded">3</a>
                                                <a href="#" className="rounded">4</a>
                                                <a href="#" className="rounded">5</a>
                                                <a href="#" className="rounded">6</a>
                                                <a href="#" className="rounded">&raquo;</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Listing cards end */}
                            </div>
                        </div>
                    </div>
            </div>
            {/* <!-- Fruits Shop End--> */}

            {/* Footer start */}
            <Footer/>
            {/* footer end */}
    
        </body>
        </html>
    )}
    </>
    );
};

export default ListingsPage;