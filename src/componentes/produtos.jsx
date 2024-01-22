import { useState, useEffect } from "react"


export default function Produtos({ gerencia, categoria }) {

  const [inicia, Setinicia] = useState('')
  const [busca, Setbusca] = useState('')

  const [dados, Setdados] = useState([])

  const [gerencia_cat, Setgerencia_cat] = useState('')
  const [gerencia_cat2, Setgerencia_cat2] = useState('')





  useEffect(() => {
    let lupa = document.querySelector('#lupa')
    let carrega = document.querySelector('#carregando')

    carrega.style.display = 'none'

    


    if (inicia === '') {
      fetch('https://api.mercadolibre.com/sites/MLB/search?q=notbook')
        .then((dados) => {
          return dados.json()
        })
        .then((dados) => {

          Setdados(dados.results)
        })
    }
    else{
      lupa.style.display = 'none'
      carrega.style.display = 'block'

      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inicia}`)
        .then((dados) => {
          return dados.json()
        })
        .then((dados) => {

          Setdados(dados.results)
          carrega.style.display = 'none'
          lupa.style.display = 'block'

        })

    }

   

  }, [inicia])


  useEffect(()=>{
   
    if(busca ===''){
      Setgerencia_cat(categoria)

      if(gerencia_cat !== gerencia_cat2){
        Setgerencia_cat2(gerencia_cat)
        Setinicia(gerencia_cat)
      }
  
    }
    console.log('Categoria1:',gerencia_cat,'Categoria2:',gerencia_cat2,  " Inicia:",inicia)
  })


  function gerencia_Busca(){
    Setinicia(busca)
    
    let input_busca = document.querySelector('#buscas')
    input_busca.value=''
    Setbusca('')
  
  }


  return (
    <main>

      <div className="banner">
        <img src="/banner.webp" alt="banner" />
      </div>
      <div className="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..." onChange={(e) => { Setbusca(e.target.value) }} />
        <img id="lupa" src="./lupa.jpg" alt="pesquisar" onClick={() => { gerencia_Busca() }} />
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
                <button className="carrinho" onClick={(e) => { gerencia(item) }}>Adicionar <i class="fa-solid fa-cart-plus"></i> </button>
              </div>
            </div>
          ))
        }
      </div>

      <div className="flash_msg">
        <p>Produto adicionado ao carinho</p>
      </div>


    </main>
  );
}
