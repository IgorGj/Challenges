import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/restaurantsContext";
import { Review } from "../Review/Review";
import { ReviewForm } from "../Review/ReviewForm";

export const RestaurantCardDetail = () => {
  const { id } = useParams();
  const { allRestaurants } = useContext(Context);
  const { setAllRestaurants } = useContext(Context);
  let theRestaurant = allRestaurants.find((el) => el.id === id);

  const [rating, setRating] = useState<number>(0);
  const [howManyRatings, setHowManyRatings] = useState<number>(
    theRestaurant!.reviews
  );
  let num: number = 0;
  useEffect(() => {
    theRestaurant!.reviewsList!.forEach((element) => {
      num += element.stars;
    });
    setRating(num);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "75%",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          color: "black",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {theRestaurant!.businessname}
      </h2>
      <img
        src={theRestaurant!.image}
        className="card-img-top"
        alt={theRestaurant!.businessname + "-restaurant"}
        style={{ height: !id ? "300px" : "auto", borderRadius: "15px" }}
      />
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "15px",
          flexGrow: 1,
          flexShrink: 1,
        }}
      >
        {/* <i
          className={
            theRestaurant!.isFavorite ? "fas fa-heart" : "far fa-heart"
          }
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "red",
            fontSize: "30px",
          }}
        /> */}

        {howManyRatings !== 0 ? (
          <>
            <p
              style={{
                fontWeight: "bolder",
                marginBottom: "10px",
                color: "#ff6247",
              }}
            >
              Rating: {rating / howManyRatings}
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bolder",
                marginBottom: "10px",
                color: "#ff6247",
              }}
            >
              Based On: {howManyRatings} reviews
            </p>
          </>
        ) : (
          ""
        )}
        <p>{theRestaurant?.phone}</p>
        <p>{theRestaurant?.email}</p>
        <p>{theRestaurant?.address}</p>
        {theRestaurant?.parkinglot ? (
          <p>
            We{" "}
            <span style={{ fontWeight: "bolder", color: "#ff6247" }}>DO</span>{" "}
            have a{" "}
            <span style={{ fontWeight: "bolder", color: "#ff6247" }}>
              Parking Lot
            </span>{" "}
          </p>
        ) : (
          <p>
            We{" "}
            <span style={{ fontWeight: "bolder", color: "#ff6247" }}>
              DON'T
            </span>{" "}
            have a{" "}
            <span style={{ fontWeight: "bolder", color: "#ff6247" }}>
              Parking Lot
            </span>{" "}
          </p>
        )}
      </div>
      {theRestaurant!.reviewsList!.length > 0 ? (
        <h2 style={{ textAlign: "center", margin: "10px 0" }}>REVIEWS</h2>
      ) : (
        ""
      )}
      {theRestaurant?.reviewsList!.map((element) => {
        return (
          <Review
            author={element.author}
            message={element.comment}
            stars={element.stars}
            key={element.id}
          />
        );
      })}
      <ReviewForm
        uuid={theRestaurant?.id}
        id={theRestaurant?.reviewsList!.length}
        restaurantsBeforeReview={allRestaurants}
        setAllRestaurants={setAllRestaurants}
        allRestaurants={allRestaurants}
      />
    </div>
  );
};
