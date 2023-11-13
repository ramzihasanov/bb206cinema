let filmId = window.location.href.split("=")[1];
let DetailContainer = document.getElementById("film-detail");

axios.get(`https://api.tvmaze.com/shows/${filmId}`)
    .then(response => {
        DetailContainer.innerHTML = `
        <div class="d-flex justify-content-evenly">
        <img src="${response.data.image.medium}"  style="width: 850px; border-radius: 10px; margin-top: 100px; margin-bottom: 100px">
        <div class="p-4">
            <h1 class="display-2">${response.data.name}</h1>
            <p>Summary: ${response.data.summary}</p>
            <p>Premiered-Ended: ${response.data.premiered} | ${response.data.ended}</p>
            <p>IMDB Rating: ${response.data.rating.average}</p>
            <p>Show type: ${response.data.type}</p>
            <p>Genres: ${response.data.genres}</p>
            <p>Language: ${response.data.language}</p>
            <p>Show time: ${response.data.weight}</p>
        </div>
        </div>
           
        `
    })




