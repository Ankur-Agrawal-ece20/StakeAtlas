import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Ratings() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);

  };
 
  return (
    <Rating
      className="flex flex-row justify-center h-9"
      onClick={handleRating}
      allowHover={false}
      disableFillHover={true}
      readonly={rating === 0}
    />
  );
}
export default Ratings;