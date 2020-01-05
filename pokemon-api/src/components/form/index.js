import React, { Fragment } from "react";

import Card from "../card/index";
import Modal from "../modal/index";

import api from "../../sevice/index";
import { Formulario } from "./style";

export default class Form extends React.Component {
  state = {
    inputValue: "",
    repositorio: [],
    // tipo: [],
    tipo: "",
    errorLoad: false,
    loading: false,
    result: [],
    card: [],
    colors: [
      { tipo: "fire", cor: "#FDDFDF" },
      { tipo: "grass", cor: "#DEFDE0" },
      { tipo: "electric", cor: "#FCF7DE" },
      { tipo: "water", cor: "#DEF3FD" },
      { tipo: "ground", cor: "#f4e7da" },
      { tipo: "rock", cor: "#d5d5d4" },
      { tipo: "fairy", cor: "#fceaff" },
      { tipo: "poison", cor: "#98d7a5" },
      { tipo: "bug", cor: "#f8d5a3" },
      { tipo: "dragon", cor: "#97b3e6" },
      { tipo: "psychic", cor: "#eaeda1" },
      { tipo: "flying", cor: "#F5F5F5" },
      { tipo: "fighting", cor: "#E6E0D4" },
      { tipo: "normal", cor: "#F5F5F5" },
      { tipo: "ice", cor: "#E0E4E7" },
      { tipo: "ghost", cor: "#88577A" },
      { tipo: "dark", cor: "#3d3938" },
      { tipo: "steel", cor: "#989899" }
    ]
  };

  chosePokemon = async e => {
    this.setState({ loading: true });
    e.preventDefault();

    try {
      const response = await api.get(`${this.state.inputValue}`);

      const idResponse = response.data.id;
      let keyRepositorio = this.state.repositorio.map(chave => chave.id);

      let result = this.verificar(idResponse, keyRepositorio);
      let tipoPoke = response.data.types[0].type.name;

      this.verificaTipo(tipoPoke);

      let name = response.data.name;
      let colors = this.state.tipo;
      let typePokemon = response.data.types.map(item => " " + item.type.name);

      // jeito diferente de criar setState
      // if (result === false) {
      //   this.setState(state => {
      //     return {
      //       card: [...state.card, { idResponse, colors, name, typePokemon }]
      //     };
      //   });
      // }

      if (result === false) {
        this.setState({
          inputValue: "",
          card: [...this.state.card, { idResponse, colors, name, typePokemon }],
          repositorio: [...this.state.repositorio, response.data],
          errorLoad: false,
          contador: 1
        });
      }
    } catch (error) {
      this.setState({ errorLoad: true, loading: true });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  verificar(numero, reposi) {
    if (reposi.indexOf(numero) === -1) {
      return false;
    }
  }

  verificaTipo = tipo => {
    this.state.colors.find(element => {
      if (element.tipo === tipo) {
        // this.setState({ tipo: [...this.state.tipo, element.cor] });
        this.setState({ tipo: element.cor });
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Formulario witherro={this.state.errorLoad}>
          <form onSubmit={this.chosePokemon}>
            <input
              type="text"
              placeholder="Digite o nome/numero do pokemon"
              value={this.state.inputValue}
              onChange={e =>
                this.setState({
                  inputValue: e.target.value.toLocaleLowerCase()
                })
              }
            />
            <button type="submit">
              {this.state.loading ? (
                <i className="fa fa-spinner fa-pulse" />
              ) : (
                "OK"
              )}
            </button>
          </form>
        </Formulario>
        {/* <Card repositorio={this.state.repositorio} tipagem={this.state.tipo} /> */}
        <Card repositorio={this.state.card} />
        <Modal erroInput={this.state.errorLoad} />
      </Fragment>
    );
  }
}
