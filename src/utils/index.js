export const fetchSliderMovies = async (page) => {
  const response = await fetch(
    `https://omdbapi.com/?apikey=36e67ebf&s=disney&type=movie&page=${page}`
  );
  const result = await response.json();
  return result;
};

export const fetchHeroMovieSlider = async () => {
  const response = await fetch(
    "https://omdbapi.com/?apikey=36e67ebf&s=disney&type=movie&page=2"
  );
  const result = await response.json();
  return result;
};
