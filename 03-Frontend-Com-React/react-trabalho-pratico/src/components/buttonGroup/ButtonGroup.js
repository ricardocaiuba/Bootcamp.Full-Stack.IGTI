import React, { Component } from "react";
import Button from "../buttons/Button";

class ButtonGroup extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: "20px" }}>
          <div className="row">
            <div className="col">
              <div className="card">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <Button className="btn btn-outline-info">
                    Tabela de INSS
                  </Button>
                  <Button className="btn btn-outline-info">
                    Tabela de IRPF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonGroup;
