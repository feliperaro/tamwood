let myButton = document.querySelector("#btn");
myButton.addEventListener("click", showAndHide);

function showAndHide(event) {
  myButton.textContent = myButton.textContent == "Show" ? "Hide" : "Show";

  const date = Date.now();
  const date_time = new Date(date);

  const day = date_time.getDate();
  const month = date_time.getMonth() + 1;
  const year = date_time.getFullYear();
  const output = month + "-" + day + "-" + year;

  let content = document.querySelector(".content");
  content.innerHTML = myButton.textContent == "Hide" ? output : null;
}

const divContents = [".content1", ".content2", ".content3", ".content4"];
for (const div of divContents) {
  let element = document.querySelector(div);
  element.addEventListener("click", (e) => {
    let outputDiv = document.querySelector(".output-content");
    outputDiv.innerHTML = element.innerHTML;
  });
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(`sum: ${sum}`);

const user = {
  name: "John",
};
console.log("user", user);

let admin = user;
console.log("admin", admin);

admin.name = "Felps";
console.log("admin", admin);

console.log("user", user);

const wikiArticle = {
  bestFilm: "Harry Potter",
  bestActor: "Daniel ",
  bestActress: "Emma",
};
console.log("wikiArticle", wikiArticle);

let clone = {};
for (let key in wikiArticle) {
  clone[key] = wikiArticle[key];
}

console.log("clone", clone);
clone.bestFilm = "Chinatown";

console.log("clone", clone);
console.log("wikiArticle", wikiArticle);
