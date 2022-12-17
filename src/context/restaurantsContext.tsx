import { createContext, SetStateAction, useEffect, useState } from "react";
import { Restaurant } from "../interfaces/types";

interface ContextData {
  allRestaurants: Restaurant[];
  makeFavorite: (id: string) => void;
  mostPopular?: Restaurant[];
  setAllRestaurants: React.Dispatch<SetStateAction<Restaurant[]>>;
}

type Props = {
  children: React.ReactNode;
};

export const Context = createContext({} as ContextData);

export const Provider = ({ children }: Props) => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [mostPopular, setMostPopular] = useState<Restaurant[]>([]);
  useEffect(() => {
    fetch("http://localhost:5001/restaurants")
      .then((res) => res.json())
      .then((data) => {
        const favoriteRest = JSON.parse(localStorage.getItem("favoriteRest")!);
        if (favoriteRest !== null && favoriteRest.length > 0) {
          let ids: string[] = [];
          favoriteRest.forEach((el: Restaurant) => ids.push(el.id));
          let newArr = data;

          favoriteRest.forEach((el: Restaurant) => {
            data.forEach((element: Restaurant, index: number) => {
              if (el.id === element.id) {
                newArr[index].isFavorite = true;
              }
            });
          });
          setAllRestaurants(newArr);
        } else {
          setAllRestaurants(data);
        }
      });
  }, []);

  useEffect(() => {
    const arr = allRestaurants.sort(
      (a: Restaurant, b: Restaurant) => b.reviews - a.reviews
    );

    const newArr = arr.slice(0, 10);
    newArr.sort((a: Restaurant, b: Restaurant) => b.reviews - a.reviews);
    setMostPopular(newArr);
  }, [allRestaurants]);

  const makeFavorite = (id: string) => {
    const arr = allRestaurants.map((element) => {
      if (element.id === id) {
        if (!element.isFavorite) {
          return { ...element, isFavorite: true };
        }
        return { ...element, isFavorite: false };
      }
      return { ...element };
    });
    const storageArr = arr.filter((el) => el.isFavorite);
    localStorage.setItem("favoriteRest", JSON.stringify(storageArr));
    setAllRestaurants(arr);
  };

  const obj = {
    allRestaurants,
    makeFavorite,
    mostPopular,
    setAllRestaurants,
  };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
};
