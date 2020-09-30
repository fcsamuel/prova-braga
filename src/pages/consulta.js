import React from 'react';
import MaterialTable from 'material-table'



const Save = (event) => {
  alert("Salvou!")
  console.log(
    "to string"
  );
  event.preventDefault();
}

const data = require('../cadastros');

var cols = [
  { key: 'nome', label: 'Nome' },
  { key: 'idade', label: 'Idade' },    
  { key: 'peso', label: 'Peso' },
  { key: 'altura', label: 'Altura' }
];

const Consulta = () => (

    <div className="container-page">
         <div style={{ width: '250%' }}>
        <MaterialTable 
          columns={[
            { title: 'Nome', field: 'nome', type: 'string' },
            { title: 'Idade', field: 'idade', type: 'numeric' },
            { title: 'Peso', field: 'peso', type: 'numeric' },
            { title: 'Altura', field: 'altura', type: 'numeric'}
          ]}
          data={data}
          title="Demo Title"
        />
      </div>
    </div>
);

export default Consulta;