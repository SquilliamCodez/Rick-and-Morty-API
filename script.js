let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://rickandmortyapi.com/api/character/`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
document.querySelector("#content").innerHTML = `<div class="card-group">
  <div class="card">
    <img src="${data.results[0].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.results[0].name}</h5>
      <p class="card-text">Rick Sanchez from Earth dimension C-137 is the father of Beth Smith, and the grandfather of Morty Smith and Summer Smith. He is said to have been away from the family for several years prior to the events of the show. He frequently travels on adventures through space and other planets and dimensions with his grandson Morty. In the third season of the show, it is revealed that he is 70 years old</p>
      <p class="card-text"><small class="text-muted">Origin: ${data.results[0].origin.name}</small></p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[1].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.results[1].name}</h5>
      <p class="card-text">Known for his awkward, anxious, low self-esteem, second-guessing, and doubtful personality, the character has been well-received. He is the good-natured, and impressionable grandson of alcoholic mad scientist Rick Sanchez who can be somewhat easily manipulated.</p>
      <p class="card-text"><small class="text-muted">Origin: ${data.results[1].origin.name}</small></p>
    </div>
  </div>
  <div class="card">
    <img src="${data.results[2].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.results[2].name}</h5>
      <p class="card-text">Summer has some personality traits of a typical American teenager as she wishes to be popular among her peers, and finds the antics of her family to be dysfunctional; she genuinely cares about them, however. She's very attached to her phone and social media, taking videos of her dog Snuffles when he became super-smart, and shuddering at the thought of her father Jerry joining Facebook.</p>
      <p class="card-text"><small class="text-muted">Origin: ${data.results[2].origin.name}</small></p>
    </div>
  </div>
</div>`

}

