import { useContext } from "react";
import { Context } from "../../context/restaurantsContext";
import { Restaurant } from "../../interfaces/types";
import { RestaurantCard } from "./RestaurantCard";

export const MostPopular = () => {
  const { mostPopular } = useContext(Context);

  return (
    <div className=" py-3">
      <h4 className="text-center">Most Popular</h4>
      <div className="grid-container">
        {mostPopular?.map((el: Restaurant) => {
          return <RestaurantCard el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
};
