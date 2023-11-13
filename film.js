let row = document.getElementById("film");

axios.get("https://api.tvmaze.com/shows")
  .then(datas => {
    datas.data.forEach(film => {
      row.innerHTML += `
        <div class="col md-3">
          <div class="card" style="width: 18rem; display:flex; py-3; margin-bottom: 20px;">
            <img class="card-img-top" src="${film.image.medium}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${film.name}</h5>
              <p class="card-text">Premiere: ${film.premiered}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">IMDB rating: ${film.rating.average}</li>
              <li class="list-group-item">Genres: ${film.genres}</li>
              <li class="list-group-item">Language: ${film.language}</li>
            </ul>
            <div class="card-body d-flex justify-content-between" style="height:50%;">
              <button type="button" class="btn btn-primary" onclick="window.open('${film.officialSite}')">go to officialSite</button>
              <button type="button" class="btn btn-success" onclick="window.open('./filmdetail.html?id=${film.id}')">go to film</button>
            </div>
          </div>
        </div>
      `;
    })
  })

  