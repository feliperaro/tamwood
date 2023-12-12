/* eslint-disable react/prop-types */
import Button from "../Button";
import ProgressBar from "../ProgressBar";

export default function Stars({ reviews, onClickReview }) {
  return (
    <>
      {reviews.map((review) => (
        <ProgressBar
          key={review.number}
          number={review.number}
          value={review.value}
          max={100}
        />
      ))}

      {reviews.map((review) => (
        <Button key={review.number} onClick={() => onClickReview(review)}>
          {"Review for " + review.number}
        </Button>
      ))}
    </>
  );
}
