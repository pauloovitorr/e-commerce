export default function Especifico({ dado, gerencia }) {
    console.log(dado)
    return (
        <>
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
            <footer>
                <p>Copyright 2024</p>
                <p>Autor do projeto: Paulo Vitor</p>
                <p><a href="https://www.linkedin.com/in/paulo-vitor-b98332253/" target="_blank">Linkedin do autor</a></p>
                <p>Projeto desenvolvido com API do mercado Livre</p>
            </footer>

        </>
    )
}