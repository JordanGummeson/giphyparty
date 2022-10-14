const input = document.querySelector('#search');
const gifs = document.querySelector('#gifs');
const form = document.querySelector('#form');
const del = document.querySelector('#delete');

form.addEventListener("submit", addGif);
del.addEventListener("click", delGifs)

//adds a random gif to page from the data retreived from giphy
function randomGif(res){
  let numres = res.data.data.length;
  console.log(numres);
  if (numres){
    let index = Math.floor(Math.random() * numres);
    let newcont = document.createElement("div");
    let newgif = document.createElement("img");

    newcont.classList.add("gif");

    newgif.src = res.data.data[index].images.original.url;

    newcont.append(newgif);
    gifs.append(newcont);
  }

}

//function for form submit and request from giphy
async function addGif(event){

event.preventDefault();

let search = input.value;
input.value = "";

const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: search,
      api_key: "0nxAqZMpoMX9vShuLDDA6gJetAGYGCf2"
    }
  });
  randomGif(res);
}

//clears the gif container when delete button is clicked
function delGifs(event){

event.preventDefault();
gifs.innerHTML = '';
}