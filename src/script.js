const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]');

const newsApiService = new NewsApiService()
console.log(newsApiService)

loadMoreBtnRef.addEventListener('click', onLoadMore)

let page = 1;
let searchQuery;

    
function createArticleCards(articles) {
  return articles.map(article => {
    return `
    <li>
      <a href="${article.description}" target="_blank" rel="noopener noreferrer">
      <article>
        <img src="${article.urlToImage}" alt="" width="480">
        <h2>${article.title}</h2>
        <p>Posted by: ${article.author}</p>
        <p>${article.description}</p>
      </article>
      </a>
    </li>`
  })
}

formRef.addEventListener('submit', onSearch)
function onSearch(e){
  e.event.preventDefault()
  const form = e.currentTarget;
  searchQuery = form.elements.query.value;
  newsApiService.searchArticles()
  searchArticles(searchQuery)
  .then(res => res.articles)
  .then(articles => {
    const markup = createArticleCards(articles)
    articlesContainerRef.insertAdjacentHTML('beforeEnd', markup)
    page += 1
  })
  form.reset()
}

function onLoadMore() {
  searchArticles (searchQuery)
  .then(res => res.articles)
  .then(articles => {
    const markup = createArticleCards (articles)
    articlesContainerRef.insertAdjacentHTML('beforeend', markup)
    page += 1
  })
}

