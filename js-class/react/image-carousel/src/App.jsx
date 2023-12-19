import { useState } from "react";
import "./App.css";

import image1 from "./assets/picture1.jpg";
import image2 from "./assets/picture2.jpg";
import image3 from "./assets/picture3.jpg";

const images = [
  {
    source: image1,
    name: "image1",
  },
  {
    source: image2,
    name: "image2",
  },
  {
    source: image3,
    name: "image3",
  },
];

function App() {
  const [image, setImage] = useState(images[0]);
  const imgIndex = images.findIndex((img) => img.source === image.source);

  const nextIndex = imgIndex === images.length - 1 ? 0 : imgIndex + 1;
  const nextImage = images.find((_, i) => i === nextIndex);
  const handleNextImage = () => setImage(nextImage);

  const previousIndex = imgIndex === 0 ? images.length - 1 : imgIndex - 1;
  const previousImage = images.find((_, i) => i === previousIndex);
  const handlePreviousImage = () => setImage(previousImage);

  return (
    <>
      <div className="img-container" style={{ height: 500, width: 500 }}>
        <img
          src={image.source}
          alt={image.name}
          height={"100%"}
          width={"100%"}
        />
      </div>
      <br />
      <div className="actions">
        <button type="button" onClick={handlePreviousImage}>
          Previous
        </button>
        <button type="button" onClick={handleNextImage}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
