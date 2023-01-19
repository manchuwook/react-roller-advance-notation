import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const CharacterDropdownComponent = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select a Character
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/player-1">Theodore Coughlin, Jr.</Dropdown.Item>
        <Dropdown.Item href="#/player-2">Akila Goldenbough</Dropdown.Item>
        <Dropdown.Item href="#/player-3">Tiberius G. Severan</Dropdown.Item>
        <Dropdown.Item href="#/player-4">
          Rhett Daleson D&#39; Arnar
        </Dropdown.Item>
        <Dropdown.Item href="#/player-5">Tiberius GIaus Severan</Dropdown.Item>
        <Dropdown.Item href="#/player-6">Sera of the West Wind</Dropdown.Item>
        <Dropdown.Item href="#/player-7">
          Seigneur Guy Henri de Laval IV
        </Dropdown.Item>
        <Dropdown.Item href="#/player-8">Arzhael Ymbert</Dropdown.Item>
        <Dropdown.Item href="#/player-9">Onfroi Baudelaire</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CharacterDropdownComponent;
