export const fetchSliderMovies = async (page, type) => {
  const response = await fetch(
    `https://omdbapi.com/?apikey=36e67ebf&s=marvel&type=${type}&page=${page}`
  );
  const result = await response.json();
  return result;
};

export const fetchHeroMovieSlider = async () => {
  const response = await fetch(
    "https://omdbapi.com/?apikey=36e67ebf&s=disney&type=movie&page=1"
  );
  const result = await response.json();
  return result;
};

export const fetchSeriesSlider = async () => {
  const response = await fetch(
    "https://omdbapi.com/?apikey=36e67ebf&s=disney&type=series&page=1"
  );
  const result = await response.json();
  return result;
};

export const fetchEpisodeSlider = async () => {
  const response = await fetch(
    "https://omdbapi.com/?apikey=36e67ebf&s=disney&type=series&page=2"
  );
  const result = await response.json();
  return result;
};
