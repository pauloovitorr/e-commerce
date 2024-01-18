export default function Produtos() {

  fetch('https://api.mercadolibre.com/sites/MLB/search?q=notbook')
  .then((dados) => {
      return dados.json()
  })
  .then((dados)=>{
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
            </div>
        </div>`
    
        divPai.innerHTML += div
    }
}
 


  return (
    <main>

      <div class="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..."/>
        <img src="./lupa.jpg" alt="pesquisar" onclick="buscarProduto()" />
      </div>

      <div id="produtos">

      </div>

    </main>
  );
}
