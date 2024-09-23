const BASE_URL = 'https://newsapi.org/v2/everything'
const API_KEY = '29fa33c5923d4b1e83cabe43635e8a47'

const options = {
    header: {
      Autorization: API_KEY
    }
  }

export class newsApiService {
    constructor(parameters) {
        this.page = 1;
        this.searchQuery = '';
    }
}

const searchArticles = (query) => {
    return fetch(`${BASE_URL}?q=${query}&apiKey=${API_KEY}&pageSize=5&page=${page}`)
        .then(response => response.json())
        .then(res => res.articles())
      }

