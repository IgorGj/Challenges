import React, { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { RangeSlider } from "./Slider";
import { Restaurant, ReviewsListType } from "../../interfaces/types";

type Props = {
  id?: number;
  uuid?: string;
  restaurantsBeforeReview: Restaurant[];
  setAllRestaurants: React.Dispatch<SetStateAction<Restaurant[]>>;
  allRestaurants: Restaurant[];
};

export const ReviewForm = ({
  id,
  uuid,
  restaurantsBeforeReview,
  setAllRestaurants,
  allRestaurants,
}: Props) => {
  const initialValue = { max: 100 };
  const initialReview = {
    id: 0,
    author: "",
    comment: "",
    stars: initialValue.max / 20,
  };
  const [value, setValue] = useState(initialValue);
  const [review, setReview] = useState<ReviewsListType>(initialReview);
  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant>();
  useEffect(() => {
    // fetch(`http://localhost:5001/restaurants/${uuid}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCurrentRestaurant(data);
    //     setReview({ ...review, id: parseInt(data.reviewsList.length) });
    //   });
    const curRest = allRestaurants.find((el) => el.id === uuid);
    console.log(curRest);

    setCurrentRestaurant(curRest);
  }, [uuid, review]);

  const sliderChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxToNum = parseInt(e.target.value);
    setValue({ max: maxToNum });
    setReview({ ...review, stars: maxToNum / 20 });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
      id: currentRestaurant?.reviewsList?.length,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newReview = { ...currentRestaurant };
    if (newReview.reviews) {
      newReview.reviews = newReview.reviews + 1;
    } else {
      newReview.reviews = 1;
    }
    console.log(newReview);
    if(newReview.isFavorite){
      delete newReview.isFavorite
    }
    newReview.reviewsList!.push(review);

    const addedReview: Restaurant[] = restaurantsBeforeReview.map(
      (restaurant) => {
        if (restaurant.id === uuid) {
          let reviewsCount = 0;
          if (newReview.reviewsList) {
            reviewsCount = newReview.reviewsList?.length;
          }
          return {
            ...restaurant,
            reviews: reviewsCount,
            reviewsList: newReview.reviewsList,
          };
        }
        return { ...restaurant };
      }
    );

    setAllRestaurants(addedReview);
    axios
      .put(`http://localhost:5001/restaurants/${uuid}`, newReview)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setValue(initialValue);
    setReview(initialReview);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "10px 0" }}>REVIEW FORM</h2>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="name" style={{ display: "block" }}>
          Name
        </label>
        <textarea
          id="name"
          style={{ width: "100%", fontSize: "0.75rem" }}
          name="author"
          value={review.author}
          onChange={changeHandler}
        ></textarea>
        <label htmlFor="comment" style={{ display: "block" }}>
          Comment
        </label>
        <textarea
          id="comment"
          style={{ width: "100%", fontSize: "0.75rem" }}
          name="comment"
          onChange={changeHandler}
          value={review.comment}
        ></textarea>
        <label style={{ margin: "0" }}>Stars</label>
        <RangeSlider
          min={0}
          max={100}
          step={10}
          value={value}
          sliderChange={sliderChangeHandler}
        />
        <button
          style={{
            width: "100%",
            margin: "10px 0",
            backgroundColor: "#008000",
            color: "white",
          }}
        >
          Leave a review
        </button>
      </form>
    </div>
  );
};
