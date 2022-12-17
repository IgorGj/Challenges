import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/restaurantsContext";
import { Restaurant } from "../../interfaces/types";
import { RestaurantCard } from "../Restaurants/RestaurantCard";

export const CuisineDetail = () => {
  const [cuisines, setCuisines] = useState<Restaurant[]>([]);

  const { restaurantType } = useParams();
  const { allRestaurants } = useContext(Context);
  useEffect(() => {
    const theCuisines = allRestaurants.filter(
      (el) => el.restauranttype === restaurantType
    );
    setCuisines(theCuisines);
  }, [allRestaurants, restaurantType]);

  return (
    <div className=" py-3">
      <h4 className="text-center" style={{ textTransform: "uppercase" }}>
        {restaurantType}
      </h4>
      <div className="grid-container">
        {cuisines?.map((el) => {
          return <RestaurantCard el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
