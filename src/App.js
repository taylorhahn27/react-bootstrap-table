import React from "react";
import "./App.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";

var products = [
  {
    id: 1,
    name: "Product1",
    price: 120,
  },
  {
    id: 2,
    name: "Product2",
    price: 80,
  },
];

const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default () => (
  <BootstrapTable
    keyField="id"
    data={products}
    columns={columns}
    striped
    hover
    condensed
  />
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
