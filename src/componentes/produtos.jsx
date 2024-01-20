import { useState, useEffect } from "react"

export default function Produtos() {

  const [inicia, Setinicia] = useState('')
  const [busca, Setbusca] = useState('')
  const [carrinho, Setcarrinho] = useState([])
  const [dados,Setdados] = useState([])


  useEffect(() => {

    if (inicia === '') {
      fetch('https://api.mercadolibre.com/sites/MLB/search?q=notbook')
        .then((dados) => {
          return dados.json()
        })
        .then((dados) => { 

          Setdados(dados.results)
        })
    }
    else {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`)
        .then((dados) => {
          return dados.json()
        })
        .then((dados) => {

          Setdados(dados.results)

        })
    }

  }, [inicia])

  function gerenciaCarrinho(item){
      let setItem_carrinho = [...carrinho,item]

      Setcarrinho(setItem_carrinho)
  }


  return (
    <main>

      <div className="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..." onChange={(e) => { Setbusca(e.target.value) }} />
        <img src="./lupa.jpg" alt="pesquisar" onClick={() => { Setinicia(busca) }} />
      </div>

      <div id="produtos">
      {
        dados.map((item)=>(
            
              <div class="card" id={item.id} >
                  <div>
                      <img src={item.thumbnail} alt={item.title}></img>
                  </div>
      
                  <div>
                      <a href={item.permalink} target="_blank"><span class="titulo">{item.title}</span></a>
                      <p>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                      <button onClick={()=> { gerenciaCarrinho(item) }} class="carrinho">Adicionar <i class="fa-solid fa-cart-plus"></i> </button>
                  </div>
              </div>
        ))
      }
      </div>
<div>
  {
    carrinho.map((dados)=>(
      <p>{dados.title}</p>
    ))
  }
</div>
    
<br /><br /><br /><br />
    </main>
  );
}
