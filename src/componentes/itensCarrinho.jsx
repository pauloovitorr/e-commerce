import { Link } from "react-router-dom"

export default function Itens_carrinho({ itens, produto , remove}) {

    let valor = 0

itens.forEach(element => {
    valor+=element.price
})



    return (

        <div className="container_carrinho">


            <div className="produtoss">


                {itens.length > 0 ?

                    itens.map((item, indice) => (

                        <div className="card" id={indice} >
                            <div>
                                <img src={item.thumbnail} alt={item.title}></img>
                            </div>

                            <div>
                                <Link to='/produto' onClick={() => { produto(item) }}><span class="titulo">{item.title}</span></Link>
                                <p>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                <button className="remove" onClick={()=> {remove(indice)}}>Remover <i class="fa-solid fa-trash"></i> </button>
                            </div>
                        </div>
                    ))
                    : <div className="imgCarrinho">
                        <h2>Sem itens</h2>
                        <img src="/carrinho.png" alt="Carrinho vazio"></img>
                    </div>
                }

            </div>
            {
                itens.length > 0 ? <div className="preco">
                    {
                        itens.map((prod) => (
                            <div className="conta">

                                <img src={prod.thumbnail} width='100px' height='110px' alt={prod.title}></img>
                                <p>{prod.title}</p>
                                <p>{prod.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                
                            </div>
                        ))
                    }
                    <hr />
                <div className="finaliza">
                    <p className="valor_total">{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                    <button className="btn_finaliza"> Finalizar <i class="fa-solid fa-check"></i> </button>
                </div>

                </div> : ''
            }
        </div>
    )
}