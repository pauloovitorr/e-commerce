import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
import './App.css';

import Nav from './componentes/nav';
import Produtos from './componentes/produtos';
import Itens_carrinho from './componentes/itensCarrinho';


function App() {
  const [carrinho, Setcarrinho] = useState([])
  const [categoria,Setcategoria] = useState('')
 
  function gerenciaCarrinho(item) {
    let setItem_carrinho = [...carrinho, item]

    Setcarrinho(setItem_carrinho)
  }

  return (
    <div className="App">


      <Router>
      
        <Nav itens={carrinho.length} categoria = {Setcategoria} ></Nav>

        <Routes>

          <Route path='/' element={<Produtos gerencia={gerenciaCarrinho} categoria={categoria}></Produtos>} />
          <Route path='/carrinho' element={<Itens_carrinho itens={carrinho}></Itens_carrinho>} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
