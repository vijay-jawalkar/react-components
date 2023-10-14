import { useState } from "react";

export const Folder = ({ explore }) => {
  const [show, setShow] = useState(false);

  if (explore.isFolder) {
    return (
      <div>
        <div onClick={() => setShow(!show)}>
          <span> 📂 </span>
          <span> {explore.name} </span>
        </div>

        {show && (
          <div className="subChild">
            {explore.items.map((item) => {
              return <Folder key={item.key} explore={item} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <span> 📄 </span>
        <span> {explore.name} </span>
      </div>
    );
  }
};
