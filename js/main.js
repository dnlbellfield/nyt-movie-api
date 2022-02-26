// api-key=actz63s1alqge49Tjibes7zMWgMJLRau

async function getReviews () {
  const type = 'all';
  const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=actz63s1alqge49Tjibes7zMWgMJLRau`;
  try {
    let response = await fetch(url);
    return await response.json()
  } catch (e) {
    console.log(e);
  }
}

async function renderReviews() {
  let data = await getReviews();
  console.log('data', data);

  let html = '';
  data.results.forEach(data => {
      let htmlSegment = 
      `<div class="data">
      <a class="small" target="_blank" href="${data.link.url}"> <h2>${data.headline}</h2></a>
      <a class="small" target="_blank" href="${data.link.url}"><img src="${data.multimedia.src}"></a>
        <h4 class="small">${data.summary_short}</h4> 
        <h4 class="small">${data.byline} | ${data.publication_date}</h4> 
      </div>`;
      

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;

}

renderReviews();
