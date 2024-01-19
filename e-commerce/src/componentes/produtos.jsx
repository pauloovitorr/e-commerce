import {useState, useEffect } from "react"

export default function Produtos() {

  
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=notbook')
  .then((dados) => {
      return dados.json()
  })
  .then((dados)=>{
    console.log(dados)
    preenche(dados.results)
  })
 
 

  
  function preenche(pcx) {

    let divPai = document.querySelector('#produtos')

    divPai.innerHTML =''
    

    for(let chave in pcx){

        let pc = pcx[chave]

        let div = `
        <div class="card" id="${pc.id}">
            <div>
                <img src="${pc.thumbnail}" alt="${pc.title}">
            </div>

            <div>
            <a href="${pc.permalink}"target="_blank"><span class="titulo">${pc.title}</span></a>
                <p>${pc.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                <button class="carrinho"> <i class="fa-solid fa-cart-plus"></i> </button>
            </div>
        </div>`
    
        divPai.innerHTML += div
    }
}
 

function buscarProduto(){
  let inputBusca = document.getElementById('buscas')

  if(inputBusca.value!=''){

    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputBusca.value}`)
    .then((dados) => {
        return dados.json()
    })
    .then((dados) => {
      preenche(dados.results)
    })
}
else{

    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=notbook`)
    .then((dados) => {
        return dados.json()
    })
    .then((dados) => {
         
        preenche(dados.results)

    })
}

}


  return (
    <main>

      <div className="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..."/>
        <img src="./lupa.jpg" alt="pesquisar" onClick={buscarProduto} />
      </div>

      <div id="produtos">

      </div>

    </main>
  );
}
