import React from "react";

import { Cards } from "./estilo";

const Card = ({ repositorio }) => (
  // <Cards typeColor={repositorio.map(color => color.type)}>
  <Cards>
    {/* {repositorio.map(repo => (
      <div className="card" key={repo.id}>
        <div className="header-img">
          <img
            src={
              "https://pokeres.bastionbot.org/images/pokemon/" +
              repo.id +
              ".png"
            }
            alt=""
          />
        </div>

        <div className="number">
          <h3>#{repo.id}</h3>
        </div>

        <div className="body-card">
          <h3>{repo.name}</h3>
        </div>

        <div className="tipo">
          <h3>
            Tipo:{repo.types.map(item => " " + item.type.name).toString()}
          </h3>
        </div>
      </div>
    ))} */}
    {repositorio.map(repo => (
      <div
        className="card"
        key={repo.idResponse}
        style={{ background: repo.colors }}
      >
        <div className="header-img">
          <img
            src={
              "https://pokeres.bastionbot.org/images/pokemon/" +
              repo.idResponse +
              ".png"
            }
            alt=""
          />
        </div>

        <div className="number">
          <h3>#{repo.idResponse}</h3>
        </div>

        <div className="body-card">
          <h3>{repo.name}</h3>
        </div>

        <div className="tipo">
          <h3>Tipo:{repo.typePokemon}</h3>
        </div>
      </div>
    ))}
  </Cards>
);

export default Card;
