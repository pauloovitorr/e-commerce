import { Link } from "react-router-dom"

export default function Nav({ itens,categoria }) {
    return (
        <nav className="menu">
            <div className="logo">
                <img src="./logo.jpeg" width="225px" height="120px" alt="mercado livre" />
            </div>

            <div className="menu_Opcoes">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li id="categoria">
                        <Link to="/" >Categorias</Link>
                        <div className="drop_Menu">
                            <p onClick={()=> categoria('Alimentos e Bebidas')}>Alimentos e Bebidas</p>
                            <p onClick={()=> categoria('Animais')}>Animais</p>
                            <p onClick={()=> categoria('Beleza e Cuidado Pessoal')}>Beleza e Cuidado Pessoal</p>
                            <p onClick={()=> categoria('Brinquedos e Hobbies')}>Brinquedos e Hobbies</p>
                            <p onClick={()=> categoria('Alimentos e Bebidas')}>Alimentos e Bebidas</p>
                            <p onClick={()=> categoria('Eletrônicos, Áudio e Vídeo')}>Eletrônicos, Áudio e Vídeo</p>
                            <p onClick={()=> categoria('Esportes e Fitness')}>Esportes e Fitness</p>
                            <p onClick={()=> categoria('Ferramentas')}>Ferramentas</p>
                            <p onClick={()=> categoria('Games')}>Games</p>
                        </div>
                    </li>
                    <li>
                        <Link to="/carrinho">{itens > 0 ? <span id="qtd_carrinho">{itens}</span> : ""}<i class="fa-solid fa-cart-shopping"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}