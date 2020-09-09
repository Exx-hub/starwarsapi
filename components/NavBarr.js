import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

function NavBarr() {
  return (
    <>
      <Menu pointing inverted>
        <Container>
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
          <Link to="/people">
            <Menu.Item name="People" />
          </Link>
          <Link to="/planets">
            <Menu.Item name="Planets" />
          </Link>
          <Link to="/films">
            <Menu.Item name="Films" />
          </Link>
        </Container>
      </Menu>
    </>
  );
}

export default NavBarr;
