export interface Product {
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export interface UserSession {
  email: string;
  img: string;
  logged: boolean;
  name: string;
}
