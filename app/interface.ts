export interface simplifiedProduct {
  CategoryName: string;
  _id: string;
  price: number;
  slug: string;
  imageUrl: string;
  name: string;
}

export interface fullProduct {
  categoryName: string;
  _id: string;
  price: number;
  slug: string;
  images: any;
  name: string;
  description: string;
  price_id: string;
}
