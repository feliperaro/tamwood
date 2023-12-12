import { useEffect, useState } from "react";
import "./App.css";
import Stars from "./components/Stars";
import Box from "./components/Box";

const INITIAL_REVIEWS = [
  {
    number: 1,
    value: 25,
  },
  {
    number: 2,
    value: 35,
  },
  {
    number: 3,
    value: 45,
  },
];

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(INITIAL_REVIEWS);
  }, []);

  const addReview = (review) => {
    review.value += 1;
    setReviews(
      reviews.map((newReview) =>
        newReview.number === review.number ? review : newReview
      )
    );
  };

  return (
    <>
      <h1>Stars Review</h1>
      <Stars reviews={reviews} onClickReview={(review) => addReview(review)} />
      <br />
      <div onClick={() => alert("div")}>
        <Box
          label={"text box"}
          onClick={() => {
            alert("Clicked on box");
          }}
        />
      </div>
    </>
  );
}

export default App;
