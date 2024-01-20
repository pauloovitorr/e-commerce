import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
import './App.css';

import Produtos from './componentes/produtos';
import Nav from './componentes/nav';

function App() {
  const [carrinho, Setcarrinho] = useState([])

  function gerenciaCarrinho(item) {
    let setItem_carrinho = [...carrinho, item]

    Setcarrinho(setItem_carrinho)
  }




  return (
    <div className="App">


      <Router>
      
        <Nav></Nav>

        <Routes>

          <Route path='/' element={<Produtos gerencia={gerenciaCarrinho}></Produtos>} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
