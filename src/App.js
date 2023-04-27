import { useState } from "react";
import "./App.css";
import ImageBody from "./pages/ImageBody";
import "./pages/SearchBar";
import SearchBar from "./pages/SearchBar";
import axios from "axios";

function App() {

  const [image, setImage] = useState([])

  const searchImage = async (e) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID k8ljl7bhBeUyfNP9-UhTO4r3Br5zzXXpE3QJOBdKBbQ",
      },
      params: {
        query: e,
      },
    });
    console.log(response.data.results)
    setImage(response.data.results)
    return response.data.results;
  };

  const onsubmitEvent = (event) => {
    console.log(event);
    searchImage(event);
  };

  return (
    <div className="App">
      <SearchBar data={onsubmitEvent} />
      <ImageBody image={image}></ImageBody>
    </div>
  );
}

export default App;
