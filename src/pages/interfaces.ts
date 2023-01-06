export interface Product {
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}

export interface FeaturedBlog {
  author: string;
  category: string;
  date: string;
  excerpt: string;
  first_content: string;
  id: string;
  img: string;
  second_content: string;
  title: string;
}

export interface About {
  title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  first_image: string;
  second_image: string;
  second_title: string;
  fourth_content: string;
  fifth_content: string;
  author: string;
}
