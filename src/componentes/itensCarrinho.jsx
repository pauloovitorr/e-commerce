import { Link } from "react-router-dom"

export default function Itens_carrinho({ itens, produto }) {
    return (

        <div className="container_carrinho">


            <div className="produtoss">


                {itens.length > 0 ?

                    itens.map((item) => (

                        <div className="card" id={item.id} >
                            <div>
                                <img src={item.thumbnail} alt={item.title}></img>
                            </div>

                            <div>
                                <Link to='/produto' onClick={() => { produto(item) }}><span class="titulo">{item.title}</span></Link>
                                <p>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                <button className="carrinho">Remover <i class="fa-solid fa-cart-plus"></i> </button>
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
                                <img src={prod.thumbnail} alt={prod.title}></img>
                                <p>{prod.title}</p>
                                <p>{prod.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        ))
                    }
                </div> : ''
            }
        </div>
    )
}