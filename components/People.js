import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContextProvider";
import Loading from "./Loading";

import { Card, Grid } from "semantic-ui-react";

function People() {
  const { people, loading } = useContext(GlobalContext);
  //   console.log(people);

  return (
    <>
      {loading && <Loading />}
      <h1 style={{ textAlign: "center", margin: "20px" }}>Characters</h1>
      <Grid columns={3}>
        {people.map((item, index) => (
          <Grid.Column key={index}>
            <Card>
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>Birth Year: {item.birth_year}</Card.Meta>
                <Card.Meta>{item.gender}</Card.Meta>
                <Card.Meta>height: {item.height}cm</Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}

export default People;
