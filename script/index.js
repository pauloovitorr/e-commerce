
let buscar = document.getElementById('buscas')


window.onload = ()=>{

    if(buscar.value==''){
        fetch('https://api.mercadolibre.com/sites/MLB/search?q=notbook')
        .then((dados) => {
            return dados.json()
        })
        .then((x) => {
             pc = x.results
    
            preenche(pc)
        })
    }
}


function buscarProduto(){


    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${buscar.value}`)
    .then((dados) => {
        return dados.json()
    })
    .then((x) => {
         ppc = x.results

        preenche(ppc)
    })
}






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
                <span class="titulo">${pc.title}</span>
                <p>R$ ${pc.price}</p>
            </div>
        </div>`
    
        divPai.innerHTML += div
    }
}




