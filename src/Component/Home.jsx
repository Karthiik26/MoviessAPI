import React, { useEffect, useState } from "react";
import "../App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieModal from "./MovieModal";
import axios from "axios";
import MovieCrads from "./MovieCrads";

const Home = () => {
  // States
  const [PageNumber, setPageNumber] = useState(1);
  const [SearchKey, setSearchKey] = useState("");
  const [MovieArray, setMovieArray] = useState([]);
  const [ShowMovieModal, setShowMovieModal] = useState(null);
  const [HasMore, setHasMore] = useState(true);

  //   CallingApi
  const getAllMovies = async (page) => {
    const API_KEY = "38ea5e7c8561a585923cb35fd520dfa3";
    const BASE_URL = "https://api.themoviedb.org/3";
    try {
      const ResponseAPI = await axios.get(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
      );
      const newMovies = ResponseAPI.data.results;
      setMovieArray((prev) => [...prev, ...newMovies]);
      if (newMovies.length === 0) {
        setHasMore(false);
        setMovieArray([]);
      }
    } catch (error) {
      console.error("Error", error);
      setHasMore(false);
    }
  };

  // Load more movies when scrolled to bottom
  const fetchMoreData = () => {
    if (HasMore) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  //   Rendering
  useEffect(() => {
    getAllMovies(PageNumber);
  }, [PageNumber]);

  //   Looping Movies
  const GettingAllMovies = MovieArray.filter((movie) =>
    movie.title.toLowerCase().includes(SearchKey.toLowerCase())
  );

  return (
    <>
      <div className="App">
        <div>
          <h1>Moviess</h1>
          <input
            type="text"
            name="Search"
            id="Search"
            className="Search_movie"
            value={SearchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Search Movie ......!!"
          />
        </div>

        <div>
          <InfiniteScroll
            hasMore={true}
            dataLength={GettingAllMovies.length}
            next={fetchMoreData}
            loader={<div>Loading</div>}
            endMessage={<div>No more movies to load</div>}
          >
            <div className="Movie-Loop">
              {GettingAllMovies.map((movie) => (
                <MovieCrads
                  movie={movie}
                  onClick={() => setShowMovieModal(movie)}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
        {ShowMovieModal && (
          <div>
            <MovieModal
              movie={ShowMovieModal}
              onClose={() => setShowMovieModal(null)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
