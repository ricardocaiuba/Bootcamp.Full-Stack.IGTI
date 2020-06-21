import React, { Component } from "react";

class TableINSS extends Component {
  render() {
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Salário de contribuição</th>
            <th scope="col">Alíquota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário mínimo: R$ 1.045,00</td>
            <td>7,5%</td>
          </tr>
          <tr>
            <td>De R$ 1.045,01 a R$ 2.089,60</td>
            <td>9%</td>
          </tr>
          <tr>
            <td>De R$ 2.089,61 a R$ 3.134,40</td>
            <td>12%</td>
          </tr>
          <tr>
            <td>De R$ 3.134,41 a R$ 6.101.06</td>
            <td>14%</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableINSS;
