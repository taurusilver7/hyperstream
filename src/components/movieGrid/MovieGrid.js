import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
import Button, { OutlineButton } from "../button/Button";
import Input from "../input/Input";
import MovieCard from "../movieCard/MovieCard";
import "./movieGrid.scss";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();
  //   console.log(props.category);

  useEffect(() => {
    const getList = async () => {
      let res = null;
      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            res = await tmdbApi.getMoviesList(movieType.upcoming, { params });
            break;
          default:
            res = await tmdbApi.getTvList(tvType.popular, { params });
            break;
        }
      } else {
        const params = {
          query: keyword,
        };
        res = await tmdbApi.search(props.category, { params });
      }
      setItems(res.results);
      // console.log(res)
      setTotalPage(res.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    //  console.log("Load More");
    let res = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          res = await tmdbApi.getMoviesList(movieType.upcoming, { params });
          break;
        default:
          res = await tmdbApi.getTvList(tvType.popular, { params });
          break;
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      res = await tmdbApi.search(category, { params });
    }
    setItems([...items, ...res.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load More
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

const MovieSearch = (props) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    //  console.log(keyword.trim().length);
    if (keyword.trim().length > 0) {
      history.push(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, history]);

  useEffect(() => {
    const enterEvent = (e) => {
      console.log(e);
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};

export default MovieGrid;
