import React, { Component } from 'react';
import ColoredButton from './ColoredButton';
import { useTable } from 'react-table';

const columns = [
  {
    name: 'Dimensión',
    dataIndex: 'dimension',
    width: 100,
  },
  {
    name: 'Contador',
    dataIndex: 'count',
    width: 100,
  },
  {
    name: 'Comprar',
    dataIndex: 'buy',
    width: 100,
  },
];

class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          dimension: '0',
          count: 0,
          buy: 2,
        },
        {
          dimension: '1',
          count: 0,
          buy: 2,
        },
        {
          dimension: '2',
          count: 0,
          buy: 2,
        },
        {
          dimension: '3',
          count: 0,
          buy: 2,
        },
        {
          dimension: '4',
          count: 0,
          buy: 2,
        },
        {
          dimension: '5',
          count: 0,
          buy: 2,
        },
        {
          dimension: '6',
          count: 0,
          buy: 2,
        },
        {
          dimension: '7',
          count: 0,
          buy: 2,
        },
        {
          dimension: '8',
          count: 0,
          buy: 2,
        },
        {
          dimension: '9',
          count: 0,
          buy: 2,
        },
      ],
    };
  }

  render() {
    const { data } = this.state;
    const table = useTable({
      columns,
      data,
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              {table.headers.map((header, i) => (
                <th key={i}>{header.text}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.cells.map((cell, j) => (
                  <td key={j}>{cell.value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;