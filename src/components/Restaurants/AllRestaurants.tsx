import { useContext } from "react";
import { Context } from "../../context/restaurantsContext";

import { RestaurantCard } from "./RestaurantCard";

export const AllRestaurants = () => {
  const { allRestaurants } = useContext(Context);
  return (
    <div className=" py-3">
      <h4 className="text-center">All Restaurants</h4>
      <div className="grid-container">
        {allRestaurants?.map((el) => {
          return <RestaurantCard el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
