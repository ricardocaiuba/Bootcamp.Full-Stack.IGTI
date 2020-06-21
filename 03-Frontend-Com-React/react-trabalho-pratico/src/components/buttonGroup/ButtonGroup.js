import React, { Component, StrictMode } from "react";
import Button from "../buttons/Button";
import TableINSS from "../tableINSS/TableINSS";

class ButtonGroup extends Component {
  handleModalTabelaINSS = () => {
    return (
      <div
        className="modal fade"
        id="modalTabelaINSS"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ color: "#fff" }}
              >
                Tabela de contribuição INSS 2020
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <TableINSS />
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <StrictMode>
        <div style={{ margin: "20px" }}>
          <div className="row">
            <div className="col">
              <div className="card">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <Button
                    className="btn btn-outline-info"
                    toggle="modal"
                    target="#modalTabelaINSS"
                    showModal={this.handleModalTabelaINSS}
                  >
                    Tabela de INSS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StrictMode>
    );
  }
}
export default ButtonGroup;
