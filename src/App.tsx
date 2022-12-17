import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AllCuisines } from "./components/Cuisines/AllCuisines";
import { CuisineDetail } from "./components/Cuisines/CuisineDetail";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { RandomChoice } from "./components/RandomChoice/RandomChoice";
import { AllRestaurants } from "./components/Restaurants/AllRestaurants";
import { Favorite } from "./components/Restaurants/Favorite";
import { MostPopular } from "./components/Restaurants/MostPopular";
import { RestaurantCardDetail } from "./components/Restaurants/RestaurantCardDetail";
import { Provider } from "./context/restaurantsContext";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Provider>
        <Routes>
          <Route
            path="/"
            element={[
              <RandomChoice />,
              <MostPopular />,
              <AllCuisines />,
              <AllRestaurants />,
            ]}
          />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/:id" element={<RestaurantCardDetail />} />
          <Route path="/cusines/:restaurantType" element={<CuisineDetail />} />
        </Routes>
      </Provider>
      <Footer />
    </div>
  );
};

export default App;
