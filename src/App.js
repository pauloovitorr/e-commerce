import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState} from 'react';
import './App.css';

import Nav from './componentes/nav';
import Produtos from './componentes/produtos';
import Itens_carrinho from './componentes/itensCarrinho';
import Especifico from './componentes/detalhe';
import Rodape from './componentes/footer';


function App() {

  const [carrinho, Setcarrinho] = useState([])
  const [categoria,Setcategoria] = useState('')
  const [produto, Setproduto] = useState('')
 
  function gerenciaCarrinho(item) {
    let setItem_carrinho = [...carrinho, item]
    Setcarrinho(setItem_carrinho)

    let flash = document.querySelector('.flash_msg')

    flash.style.opacity = '1'

    setTimeout(()=>{
      flash.style.opacity = '0'
    },2000)
  }

  function remove_Carrinho(id){
  
    let lista_remove = [...carrinho]
    lista_remove.pop(id)
    Setcarrinho(lista_remove)
  }



  return (
    <div className="App">


      <Router>
      
        <Nav itens={carrinho.length} categoria = {Setcategoria} ></Nav>

        <Routes>

          <Route path='/' element={<Produtos gerencia={gerenciaCarrinho} categoria={categoria} produto={Setproduto}></Produtos>} />
          <Route path='/carrinho' element={<Itens_carrinho itens={carrinho} produto={Setproduto} remove={remove_Carrinho}></Itens_carrinho>} />
          <Route path='/produto' element={<Especifico gerencia={gerenciaCarrinho} dado = {produto}></Especifico>} />

        </Routes>

          <Rodape></Rodape>

      </Router>

    </div>
  );
}

export default App;
