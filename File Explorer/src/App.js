import { useState } from "react";

import { Folder } from "./components/Folder";
import { explore } from "./data/FolderData";

import "./styles.css";

export default function App() {
  const [exploreData, setExploreData] = useState(explore);

  return (
    <div className="App">
      <Folder explore={exploreData} />
    </div>
  );
}
