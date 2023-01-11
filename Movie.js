const icons = document.querySelectorAll('.icon');
const movie = document.querySelector('#movie');

fetch('http://localhost:4000/movieListResult')
  .then((reponse) => reponse.json())
  .then((data) => {
    console.log(data);
    render(data);
  })
  .catch((error) => console.log(error));

function render(data) {
  let display = [];
  let img;
  let pro;
  let key;
  let keyThird;

  icons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
      //   console.dir(event.target.id);

      data.forEach((item) => {
        if (item.genreAlt === event.target.id) {
          display.push(item);
        }
      });
      console.log(display);

      let random = Math.floor(Math.random() * display.length);

      img = display[random].images;
      pro = display[random].produce;
      key = display[random].keyTwo;
      keyThird = display[random].keyThree;

      display = [];

      movie.innerHTML = `<div id="parent"><img class="images" src ="${img}"/><div class ="keywords"><div class="word one"><div class="key first">${pro}</div></div><div class="word two"><div class="key second">${key}</div></div><div class="word three"><div class="key Third">${keyThird}</div></div></div>
      </div>`;
    });
  });
}
