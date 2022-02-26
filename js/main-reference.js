// api-key=actz63s1alqge49Tjibes7zMWgMJLRau

async function getReviews () {
  const type = '';
  const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=actz63s1alqge49Tjibes7zMWgMJLRau';
  try {
    let response = await fetch(url);
    return await response.json()
  } catch (e) {
    console.log(e);
  }
}
const result = getReviews();

async function getArticles() {
  const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=actz63s1alqge49Tjibes7zMWgMJLRau';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}


async function renderArticles() {
  let data = await getArticles();
  // log the data we get back
  console.log('data', data);
  console.log('data-results', data.results);
  console.log('data-results-title', data.results[0].title);

 
  let html = '';
  data.results.forEach(data => {

    // console.log('data.title', data.title)
      let htmlSegment = `<div class="data">
                      <a target="_blank" href="${data.url}"><img src="${data.multimedia[1].url}"></a>
                      <a target="_blank" href="${data.url}"> <h2>${data.title}</h2></a>
                      <h3>${data.abstract}</h3>

                      <h4>${data.byline}</h4>
                           
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderArticles();