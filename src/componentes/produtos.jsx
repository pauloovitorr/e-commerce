import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Produtos({gerencia}) {

  const [inicia, Setinicia] = useState('')
  const [busca, Setbusca] = useState('')
  
  const [dados, Setdados] = useState([])


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

 


  return (
    <main>


      <div className="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..." onChange={(e) => { Setbusca(e.target.value) }} />
        <img src="./lupa.jpg" alt="pesquisar" onClick={() => { Setinicia(busca) }} />
      </div>

      <div className="produtos">
        {
          dados.map((item) => (

            <div className="card" id={item.id} >
              <div>
                <img src={item.thumbnail} alt={item.title}></img>
              </div>

              <div>
                <a href={item.permalink} target="_blank"><span class="titulo">{item.title}</span></a>
                <p>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                <button className="carrinho" onClick={(e)=>{ gerencia(item)}}>Adicionar <i class="fa-solid fa-cart-plus"></i> </button>
              </div>
            </div>
          ))
        }
      </div>


    </main>
  );
}
