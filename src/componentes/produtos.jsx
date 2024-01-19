import { useState, useEffect } from "react"

export default function Produtos() {

  const [inicia, Setinicia] = useState('')
  const [busca, Setbusca] = useState('')


  useEffect(() => {

    if (inicia == '') {
      fetch('https://api.mercadolibre.com/sites/MLB/search?q=notbook')
        .then((dados) => {
          return dados.json()
        })
        .then((dados) => {

          preenche(dados.results)
        })
    }
    else {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`)
        .then((dados) => {
          return dados.json()
        })
        .then((dados) => {
          preenche(dados.results)
        })
    }

  }, [inicia])



  function preenche(pcx) {

    let divPai = document.querySelector('#produtos')

    divPai.innerHTML = ''


    for (let chave in pcx) {

      let pc = pcx[chave]

      let div = `
        <div class="card" id="${pc.id}">
            <div>
                <img src="${pc.thumbnail}" alt="${pc.title}">
            </div>

            <div>
            <a href="${pc.permalink}"target="_blank"><span class="titulo">${pc.title}</span></a>
                <p>${pc.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                <button class="carrinho"> <i class="fa-solid fa-cart-plus"></i> </button>
            </div>
        </div>`

      divPai.innerHTML += div
    }
  }



  return (
    <main>

      <div className="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..." onChange={(e) => { Setbusca(e.target.value) }} />
        <img src="./lupa.jpg" alt="pesquisar" onClick={() => { Setinicia(busca) }} />
      </div>

      <div id="produtos">

      </div>

    </main>
  );
}
