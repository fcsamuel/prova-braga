import React from 'react';
import ReactDOM from 'react-dom';

const data = require('../cadastros');

var cols = [
  { key: 'nome', label: 'Nome' },
  { key: 'idade', label: 'Idade' },    
  { key: 'peso', label: 'Peso' },
  { key: 'altura', label: 'Altura' }
];

var Table = React.Component({

  render: function() {
      var headerComponents = this.generateHeaders(),
          rowComponents = this.generateRows();
  
      return (
          <table>
              <thead> {headerComponents} </thead>
              <tbody> {rowComponents} </tbody>
          </table>
      );
  },
  
  generateHeaders: function() {
      var cols = this.props.cols;  // [{key, label}]
  
      // generate our header (th) cell components
      return cols.map(function(colData) {
          return <th key={colData.key}> {colData.label} </th>;
      });
  },
  
  generateRows: function() {
      var cols = this.props.cols,  // [{key, label}]
          data = this.props.data;
  
      return data.map(function(item) {
          // handle the column data within each row
          var cells = cols.map(function(colData) {
  
              // colData.key might be "firstName"
              return <td> {item[colData.key]} </td>;
          });
          return <tr key={item.id}> {cells} </tr>;
      });
  }
  });
    
  //ReactDOM.render(<Table cols={cols} data={data}/>,  document.getElementById('example'));

  export default Table;