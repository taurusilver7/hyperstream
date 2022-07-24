const apiConfig = {
  baseUrl: `https://api.themoviedb.org/3/`,
  apiKey: "f74ccdd76a7932d4705499b7725a338c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;


