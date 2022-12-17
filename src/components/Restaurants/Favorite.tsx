import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/restaurantsContext";
import { Restaurant } from "../../interfaces/types";
import { RestaurantCard } from "./RestaurantCard";

export const Favorite = () => {
  const { allRestaurants } = useContext(Context);
  const [favorites, setFavorites] = useState<Restaurant[]>([]);
  useEffect(() => {
    const arr = allRestaurants.filter((el) => el.isFavorite);
    console.log(arr);

    const favoriteRest = JSON.parse(localStorage.getItem("favoriteRest")!);
    console.log(favoriteRest);
    if (favoriteRest) {
      setFavorites(favoriteRest);
    }
  }, [allRestaurants]);

  if (favorites.length === 0) {
    return (
      <h2 style={{ textAlign: "center" }}>
        There is nothing in your favorites restaurants
      </h2>
    );
  }

  return (
    <div className=" py-3">
      <h4 className="text-center">Favorite</h4>
      <div className="grid-container">
        {favorites?.map((el) => {
          return <RestaurantCard el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
