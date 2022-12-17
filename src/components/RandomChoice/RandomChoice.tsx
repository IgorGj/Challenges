import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/restaurantsContext";

export const RandomChoice = () => {
  const { allRestaurants } = useContext(Context);
  const navigate = useNavigate();
  const clickHandler = () => {
    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomNumber = getRandomInt(0, allRestaurants.length);
    const theRestaurant = allRestaurants[randomNumber];
    console.log(theRestaurant);
    navigate(`/${theRestaurant.id}`);
  };
  return (
    <div
      style={{
        padding: "30px 10px",
        borderTop: "5px solid #f5f5f5",
        borderBottom: "5px solid #f5f5f5",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        DON'T KNOW WHAT TO EAT?
      </h2>
      <button
        style={{
          backgroundColor: "#008001",
          width: "100%",
          color: "white",
          borderRadius: "10px",
          borderColor: "white",
          padding: "10px 0",
        }}
        onClick={clickHandler}
      >
        Surprise Me!
      </button>
    </div>
  );
};
