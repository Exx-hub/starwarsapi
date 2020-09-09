import React from "react";
import { Image } from "semantic-ui-react";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>Star Wars API</h1>
      <Image
        src="https://media.comicbook.com/2019/12/star-wars-skywalker-saga-trailer-1200374-1280x0.jpeg"
        fluid
      />
    </div>
  );
}

export default Home;
