import { Accordion } from "./components/Accordion";

import "./styles.css";

export default function App() {
  const list = [
    {
      id: 1,
      question: "Accordion 1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      id: 2,
      question: "Accordion 2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      id: 3,
      question: "Accordion 3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      id: 4,
      question: "Accordion 4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    }
  ];
  return (
    <div className="App">
      <h1>React Accordion Task</h1>

      {list.map((item) => {
        return <Accordion key={item.id} item={item} />;
      })}
    </div>
  );
}
