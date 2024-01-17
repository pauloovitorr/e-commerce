
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

    let inputBusca = document.getElementById('buscas')

    if(inputBusca.value!=''){

        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${buscar.value}`)
        .then((dados) => {
            return dados.json()
        })
        .then((x) => {
             ppc = x.results
            preenche(ppc)
        })
    }
    else{

        fetch(`https://api.mercadolibre.com/sites/MLB/search?q=notbook`)
        .then((dados) => {
            return dados.json()
        })
        .then((x) => {
             ppc = x.results
            preenche(ppc)
        })
    }
}


function preenche(pcx) {

    let divPai = document.querySelector('#produtos')

    console.log(pcx)

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





