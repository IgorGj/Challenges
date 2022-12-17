import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../context/restaurantsContext";
import { Restaurant } from "../../interfaces/types";
import "./allRestaurant.css";

interface Props {
  el: Restaurant;
}

export const RestaurantCard = ({ el }: Props) => {
  const { id } = useParams();
  const { makeFavorite } = useContext(Context);
  const [rating, setRating] = useState<number>(0);
  const [howManyRatings, setHowManyRatings] = useState<number>(0);

  let num: number = 0;
  useEffect(() => {
    if (el.reviewsList) {
      setHowManyRatings(el!.reviewsList.length);
      el!.reviewsList.forEach((element) => {
        num += element.stars;
      });
    }
    setRating(num);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        flex: "1",
      }}
    >
      <i
        className={el.isFavorite ? "fas fa-heart" : "far fa-heart"}
        onClick={(e) => {
          makeFavorite(el.id);
        }}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "red",
          fontSize: "30px",
        }}
      />
      <Link
        to={`/${el.id}`}
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          textDecoration: "none",
        }}
      >
        <img
          src={el.image}
          className="card-img-top"
          alt={el.businessname + "-restaurant"}
          style={{ height: !id ? "300px" : "auto", borderRadius: "15px" }}
        />
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            borderRadius: "15px",
            flexGrow: 1,
          }}
        >
          <h5 style={{ marginBottom: "10px", color: "black" }}>
            {el.businessname}
          </h5>
          <span
            style={{
              fontWeight: "bolder",
              marginBottom: "10px",
              color: "#ff6247",
            }}
          >
            {el.restauranttype}
          </span>
          {howManyRatings !== 0 ? (
            <>
              <p style={{ marginBottom: "0", color: "black" }}>
                Rating: {(rating / howManyRatings).toFixed(1)}
              </p>
              <p style={{ color: "black" }}>
                Based On: {howManyRatings} reviews
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};
