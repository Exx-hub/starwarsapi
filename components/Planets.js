import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContextProvider";
import Loading from "./Loading";

import { Card, Grid } from "semantic-ui-react";

function Planets() {
  const { planets, loading } = useContext(GlobalContext);
  console.log(planets);
  return (
    <>
      {loading && <Loading />}
      <h1 style={{ textAlign: "center", margin: "20px" }}>Planets</h1>
      <Grid columns={3}>
        {planets.map((item, index) => (
          <Grid.Column key={index}>
            <Card>
              <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>
                  <strong>Population</strong>
                  <p>{item.population}</p>
                  <strong>Terrain</strong>
                  <p>{item.terrain}</p>
                  <strong>Gravity</strong>
                  <p>{item.gravity}</p>
                  <strong>Diameter</strong>
                  <p>{item.diameter}</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
}

export default Planets;
