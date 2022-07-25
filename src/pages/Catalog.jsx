import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/pageHeader/PageHeader";
import { category } from "../api/tmdbApi";
import MovieGrid from "../components/movieGrid/MovieGrid";

const Catalog = () => {
  const { catagory } = useParams();
  // console.log(catagory);
  window.scrollTo(0, 0);

  return (
    <>
      <PageHeader>
        {catagory === category.movie ? "Movie" : "Tv Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={catagory} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
