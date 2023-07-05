const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '49e8c67adf3bbd50a3fce82777bba341',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w154Image: (imgPath) => `https://image.tmdb.org/t/p/w154/${imgPath}`
}

export default apiConfig;

