fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then((dados) => {
        return dados.json()
    })
    .then((x) => {
         pc = x.results

        preenche(pc)
    })



function preenche(pcx) {

    let divPai = document.querySelector('#produtos')
    

    for(let chave in pcx){

        let pc = pcx[chave]

        let div = `
        <div class="card" id="${pc.id}">
        <img src="${pc.thumbnail}" alt="${pc.title}">
            <p>Titulo: ${pc.title} </p>
            
            <p>Condição: ${pc.condition}</p>
            <p>Quantidade: ${pc.available_quantity}</p>
            <p>Preço: ${pc.price}</p>
        </div>`
    
        divPai.innerHTML += div
    }
   
}



