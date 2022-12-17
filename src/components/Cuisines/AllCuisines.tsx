import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/restaurantsContext";
import { Button } from "./Button";

export const AllCuisines = () => {
  const { allRestaurants } = useContext(Context);
  const [cuisines, setCuisines] = useState<string[]>();
  useEffect(() => {
    const kitchens = allRestaurants.map((el) => el.restauranttype);
    const uniqueCuisines = [...new Set(kitchens)];
    setCuisines(uniqueCuisines);
  }, [allRestaurants]);
  return (
    <div
      className="container-fluid"
      style={{
        padding: "30px 0 ",
        borderTop: "5px solid #f5f5f5",
        borderBottom: "5px solid #f5f5f5",
      }}
    >
      <h2 className="text-center mb-3">CUISINES</h2>
      <div className="row justify-content-around">
        {cuisines?.map((el, index) => {
          return <Button cuisine={el} key={index} />;
        })}
      </div>
    </div>
  );
};
