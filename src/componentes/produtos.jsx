import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Produtos({gerencia}) {

  const [inicia, Setinicia] = useState('')
  const [busca, Setbusca] = useState('')
  
  const [dados, Setdados] = useState([])


  useEffect(() => {
    let lupa = document.querySelector('#lupa')
    let carrega = document.querySelector('#carregando')

    carrega.style.display='none'

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

      
      lupa.style.display='none'
      carrega.style.display='block'
      
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`)
        .then((dados) => {
          return dados.json()
        })
        .then((dados) => {

          Setdados(dados.results)
          carrega.style.display='none'
          lupa.style.display='block'
          
        })
    }

  }, [inicia])

 


  return (
    <main>


      <div className="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..." onChange={(e) => { Setbusca(e.target.value) }} />
        <img id="lupa" src="./lupa.jpg" alt="pesquisar" onClick={() => { Setinicia(busca) }} />
        <img src="./carregando.png" id="carregando" alt="carregando" />
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
