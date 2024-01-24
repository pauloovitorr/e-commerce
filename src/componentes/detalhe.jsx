export default function Especifico({ dado, gerencia }) {
    console.log(dado)
    return (
        <div className="prod">
            <div className="img">
                <img src={dado.thumbnail} width='250px' alt={dado.title} />
            </div>

            <div className="descricao">
                <h2>{dado.title}</h2>


                <div>
                    {
                        dado.attributes.map((item) => (
                            <p><span>{item.name}</span>: {item.value_name}</p>

                        ))
                    }
                    <button className="carrinho" onClick={() => gerencia(dado)} >Adicionar <i class="fa-solid fa-cart-plus"></i> </button>
                </div>

            </div>

            <div className="flash_msg">
                <p>Produto adicionado ao carinho</p>
            </div>
        </div>
    )
}