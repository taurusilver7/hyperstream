import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import "./detail.scss";

const Detail = () => {
  const { catagory, id } = useParams();
  // console.log(catagory, id)
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const res = await tmdbApi.details(catagory, id, { params: {} });
      setItem(res);
      console.log(res);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [catagory, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item?.poster_path || item?.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
