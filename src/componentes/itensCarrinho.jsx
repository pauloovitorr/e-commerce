export default function Itens_carrinho({ itens }) {
    return (

        <div>

            <h1>Meu carrinho</h1>
            <div className="produtoss">

                {itens.length > 0 ?

                    itens.map((item) => (

                        <div className="card" id={item.id} >
                            <div>
                                <img src={item.thumbnail} alt={item.title}></img>
                            </div>

                            <div>
                                <a href={item.permalink} target="_blank"><span class="titulo">{item.title}</span></a>
                                <p>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                                <button className="carrinho">Adicionar <i class="fa-solid fa-cart-plus"></i> </button>
                            </div>
                        </div>
                    ))
                    : <div className="imgCarrinho">
                        <h2>Sem itens</h2>
                        <img src="/carrinho.png" alt="Carrinho vazio"></img>
                    </div>
                }

            </div>
        </div>
    )
}