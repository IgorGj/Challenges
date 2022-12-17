export type Restaurant = {
  isFavorite?: boolean;
  reviews: number;
  parkinglot: boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: ReviewsListType[] | undefined;
};

export type ReviewsListType = {
  id?: number;
  author: string;
  comment: string;
  stars: number;
};
