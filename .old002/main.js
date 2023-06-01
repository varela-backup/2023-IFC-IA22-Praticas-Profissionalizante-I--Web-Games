
const domText = document.querySelector("p.text")
let text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, at repellendus totam magni quaerat, quod, sit ullam animi reprehenderit omnis fuga unde. Voluptas exercitationem vero cumque id iure minima esse.`
let palavra = "<span class='word'>"
text += " " // IMPORTANTE, LEMBRE-SE PQ ISSO EXISTE! #PAZ

text.split("").forEach(letra => {
  if (letra != " ") {
    palavra += "<span class='letter'>" + letra + "</span>"
    return
  } 
  palavra += "</span><span class='space'> </span>"
  domText.innerHTML += palavra
  palavra = "<span class='word'>"
})