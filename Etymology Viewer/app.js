const input = document.querySelector(".input")
const rl = `https://en.wiktionary.org/w/api.php?action=parse&page=dog&prop=wikitext&format=json`
const url =`https://en.wiktionary.org/w/api.php?action=parse&format=json&prop=text|revid|displaytitle&callback=?&page=hello`

fetch(url)
    .then(response => {return response.json()})
    .then(response => {console.log(response)})

document.addEventListener("click", ()=> {
      console.log(input.innerText)
})
