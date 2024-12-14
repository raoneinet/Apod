async function getApiData(){
    const url = "https://api.nasa.gov/planetary/apod?api_key=tRT8rA7wKrwgLSdMLniElcHx8hHVd7XYyV9bEJtQ";
    const res = await fetch(url)
    const json = await res.json()

    const main = document.querySelector("#main")

    main.innerHTML = `
        <h1 class="title">${json.title}</h1>
        <h2 class="date">${json.date}</h2>
        <img class="img" alt="${json.title}" src="${json.url}">
        <p class="p">${json.explanation}</p>
    `
};

getApiData();