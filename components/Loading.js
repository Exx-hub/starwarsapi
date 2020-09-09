import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

function Loading() {
  return (
    <Dimmer active inverted>
      <Loader>Loading...</Loader>
    </Dimmer>
  );
}

export default Loading;
