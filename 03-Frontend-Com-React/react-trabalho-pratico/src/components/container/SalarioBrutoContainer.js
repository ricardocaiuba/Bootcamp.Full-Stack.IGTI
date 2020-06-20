import React, { Component } from "react";
import InputText from "../inputs/InputText";
import { formatNumber } from "../../helpers/formatNumber";
import { calculatePercent } from "../../helpers/calculatePercent";
import ProgressBar from "../progressbar/ProgressBar";

import { calculateSalaryFrom } from "../../helpers/salary";
import css from "./salarioBrutoContainer.module.css";

const INITIAL_STATE = {
  salarioBruto: 1000,
};
class SalarioBrutoContainer extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChangeSalarioBrtuto = (newText) => {
    this.setState({
      salarioBruto: newText,
    });
  };

  handleFormatterField = (value, salarioBruto) => {
    let percentual = 0;
    let persentualResult = "";
    if (salarioBruto !== "0") {
      percentual = calculatePercent(value, salarioBruto);
      if (percentual > 0)
        persentualResult = `(${formatNumber(percentual, false)}%)`;
    }

    const numberValue = formatNumber(value, true);
    return `${numberValue} ${persentualResult}`;
  };

  render() {
    const { salarioBruto } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(salarioBruto);
    return (
      <div style={{ margin: "20px" }}>
        <div className="row">
          <div className="col">
            <div className="card">
              <h4 class="card-header bg-info">
                <span className={css.titleCard}>React Salário</span>
              </h4>
              <div className="card-body" style={{ backgroundColor: "#fafafa" }}>
                <InputText
                  label="Salário Bruto"
                  formatNumber={salarioBruto}
                  handleChangeSalarioBrtuto={this.handleChangeSalarioBrtuto}
                  typeInput="number"
                  step={100}
                />
                <div className="row">
                  <div className="col">
                    <InputText
                      label="Base INSS:"
                      isDisabled={true}
                      formatNumber={formatNumber(baseINSS, true)}
                      typeInput="text"
                      className={css.inputAlignRight}
                    />
                  </div>
                  <div className="col">
                    <InputText
                      label="Desconto INSS:"
                      isDisabled={true}
                      formatNumber={this.handleFormatterField(
                        discountINSS,
                        salarioBruto
                      )}
                      className={`text-warning ${css.inputAlignRight}`}
                    />
                  </div>
                  <div className="col">
                    <InputText
                      label="Base IRPF:"
                      isDisabled={true}
                      formatNumber={formatNumber(baseIRPF, true)}
                      className={css.inputAlignRight}
                    />
                  </div>
                  <div className="col">
                    <InputText
                      label="Desconto IRPF:"
                      isDisabled={true}
                      formatNumber={this.handleFormatterField(
                        discountIRPF,
                        salarioBruto
                      )}
                      className={`text-danger ${css.inputAlignRight}`}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <InputText
                      label="Salário Líquido:"
                      isDisabled={true}
                      formatNumber={this.handleFormatterField(
                        netSalary,
                        salarioBruto
                      )}
                      className={`text-success ${css.inputAlignRight}`}
                    ></InputText>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <ProgressBar
                      valueDiscontINSS={calculatePercent(
                        discountINSS,
                        salarioBruto
                      )}
                      valueDiscountIRPF={calculatePercent(
                        discountIRPF,
                        salarioBruto
                      )}
                      valueLiquidSalary={calculatePercent(
                        netSalary,
                        salarioBruto
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SalarioBrutoContainer;
