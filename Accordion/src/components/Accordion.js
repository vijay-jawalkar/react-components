import { useState } from "react";

export function Accordion({ item }) {
  const { question, answer } = item;
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <section onClick={() => setShow(!show)} className="question">
        <h3> {question} </h3>

        {show ? (
          <span class="bi bi-chevron-up"></span>
        ) : (
          <span class="bi bi-chevron-down"></span>
        )}
      </section>

      {show && (
        <section className="answer">
          <p>{answer}</p>
        </section>
      )}
    </div>
  );
}
