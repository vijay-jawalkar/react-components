import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <h1> Star Rating </h1>

      <div className="container">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <span
              onClick={() => setRating(index)}
              key={index}
              className={`bi  ${index <= rating ? "bi-star-fill" : "bi-star"}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
