export interface ShopDetails {
    id: number;
    name: string;
    shop_owner: string;
  }
  
  export interface Listing {
    id: number;
    shop_details: ShopDetails;
    title: string;
    description: string;
    price: string;
    quantity: number;
    category: string;
    created_at: string;
    updated_at: string;
    image_url: string;
  }
  
  