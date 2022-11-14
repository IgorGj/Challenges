import { Card, CardPropsType } from "./Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiltersList } from "../Filters/FiltersList";
import "../Filters/Filter.css";

export type FilterType = {
  filter: string;
  isActive: boolean;
};

export const CardList = () => {
  const [posts, setPosts] = useState<CardPropsType[]>([]);
  const [filter, setFilter] = useState<FilterType>({
    filter: "Show All",
    isActive: false,
  });
  const [filteredArray, setFilteredArray] = useState<CardPropsType[]>([]);
  useEffect(() => {
    axios.get("https://json-project3.herokuapp.com/products").then((res) => {
      setPosts(res.data);
      setFilteredArray(res.data);
    });
  }, []);

  useEffect(() => {
    if (
      filter?.filter.toLowerCase() === "male" ||
      filter?.filter.toLowerCase() === "female"
    ) {
      const newArray = posts.filter(
        (el) => el.gender?.toLowerCase() === filter.filter.toLowerCase()
      );
      setFilteredArray(newArray);
    } else if (
      filter?.filter !== "MALE" &&
      filter?.filter !== "FEMALE" &&
      filter?.filter !== "Show All"
    ) {
      const newArray = posts.filter((el) => el.brand === filter?.filter);
      setFilteredArray(newArray);
    } else if (filter.filter === "Show All") {
      setFilteredArray(posts);
    }
  }, [filter]);

  const clickHandlerForFilter = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (filter?.isActive) {
      target.classList.add("text-yellow");
    }
    setFilter({ filter: target.innerHTML, isActive: true });
  };

  return (
    <div className="row align-items-stretch">
      <FiltersList
        clickHandlerForFilter={clickHandlerForFilter}
        posts={posts}
        isActive={filter}
      />
      <div className="col-9">
        <div className="row">
          {filteredArray.map((el, index) => (
            <Card
              key={index}
              name={el.name}
              price={el.price}
              image={el.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
