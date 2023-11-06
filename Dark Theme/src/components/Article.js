import { Form } from "./Form";
import { darkContext } from "../context/DarkContext";

export const Article = () => {
  const { isDark, toggleDarkTheme } = darkContext();
  return (
    <div className={` container ${isDark ? "dark-background" : ""}  `}>
      <h1>Dark Mode Challenge</h1>

      <div onClick={() => toggleDarkTheme()}>
        {isDark ? (
          <i class="bi bi-brightness-high-fill"></i>
        ) : (
          <i class="bi bi-moon-stars-fill"></i>
        )}
      </div>
      <div>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.{" "}
        </p>

        <p>
          {" "}
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.{" "}
        </p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};
