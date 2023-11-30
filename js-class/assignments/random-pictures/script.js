const pictures = [
  {
    picture: "./imgs/picture1.jpg",
    description: "First picture",
    isLiked: false,
  },
  {
    picture: "./imgs/picture2.jpg",
    description: "Second picture",
    isLiked: false,
  },
  {
    picture: "./imgs/picture3.jpg",
    description: "Third picture",
    isLiked: false,
  },
  {
    picture: "./imgs/picture4.jpg",
    description: "Fourth picture",
    isLiked: false,
  },
  {
    picture: "./imgs/picture5.jpg",
    description: "Fifth picture",
    isLiked: false,
  },
];

let picturePosition = Math.floor(Math.random() * pictures.length);
let previousPosition = picturePosition;

const container = document.querySelector(".pictures-container");
const image = document.createElement("img");

image.className = "picture";
image.setAttribute("src", pictures[picturePosition].picture);
image.setAttribute("alt", pictures[picturePosition].description);
container.appendChild(image);

const ulElement = document.createElement("ul");
for (let i = 0; i < pictures.length; i++) {
  const liElement = document.createElement("li");
  if (i === picturePosition) {
    liElement.style.backgroundColor = "red";
  }

  liElement.addEventListener("click", () => {
    previousPosition = picturePosition;
    picturePosition = i;
    applyChanges(previousPosition, picturePosition);
  });

  ulElement.appendChild(liElement);
}

const positionPictureDiv = document.querySelector(".index-picture");
positionPictureDiv.appendChild(ulElement);

const leftPictureButton = document.querySelector(".left-picture");
leftPictureButton.addEventListener("click", () => {
  previousPosition = picturePosition;
  picturePosition =
    picturePosition === 0 ? pictures.length - 1 : picturePosition - 1;
  applyChanges(previousPosition, picturePosition);
});

const rightPictureButton = document.querySelector(".right-picture");
rightPictureButton.addEventListener("click", () => {
  previousPosition = picturePosition;
  picturePosition =
    picturePosition === pictures.length - 1 ? 0 : picturePosition + 1;
  applyChanges(previousPosition, picturePosition);
});

const likePictureButton = document.querySelector(".like-picture");
likePictureButton.addEventListener("click", () => {
  pictures[picturePosition].isLiked = !pictures[picturePosition].isLiked;
  applyChanges(previousPosition, picturePosition);
});

function applyChanges(previousPosition, picturePosition) {
  const pictureDiv = document.querySelector(".picture");

  pictureDiv.setAttribute("src", pictures[picturePosition].picture);
  pictureDiv.setAttribute("alt", pictures[picturePosition].description);

  let positionPictureDiv = document.querySelectorAll("li")[previousPosition];
  positionPictureDiv.style.backgroundColor = "black";

  positionPictureDiv = document.querySelectorAll("li")[picturePosition];
  positionPictureDiv.style.backgroundColor = "red";

  if (pictures[picturePosition].isLiked) likePicture(picturePosition);
  else dislikePicture(picturePosition);
}

function likePicture(picturePosition) {
  pictures[picturePosition].isLiked = true;
  document.querySelector(".likes-container").textContent = "❤️";
}

function dislikePicture(picturePosition) {
  pictures[picturePosition].isLiked = false;
  document.querySelector(".likes-container").textContent = "";
}
