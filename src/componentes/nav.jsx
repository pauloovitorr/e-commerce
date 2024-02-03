import { Link } from "react-router-dom"

export default function Nav({ itens,categoria }) {
    return (
        <nav className="menu">
            <div className="logo">
                <Link to="/"><img src="./logo.jpeg" width="225px" height="120px" alt="mercado livre" /></Link>
            </div>

            <div className="menu_Opcoes">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
    
                    <li id="categoria">
                        <Link to="/" >Categorias</Link>
                        <div className="drop_Menu">
                            <p onClick={()=> categoria('Animais')}>Animais</p>
                            <p onClick={()=> categoria('Arte, Papelaria e Armarinho')}>Arte, Papelaria e Armarinho</p>
                            <p onClick={()=> categoria('Beleza e Cuidado Pessoal')}>Beleza e Cuidado Pessoal</p>
                            <p onClick={()=> categoria('Brinquedos e Hobbies')}>Brinquedos e Hobbies</p>
                            <p onClick={()=> categoria('Calçados, Roupas e Bolsas')}>Calçados, Roupas e Bolsas</p>
                            <p onClick={()=> categoria('Carros, Motos e Outros')}>Carros, Motos e Outros</p>
                            <p onClick={()=> categoria('Celulares e Telefones')}>Celulares e Telefones</p>
                            <p onClick={()=> categoria('Eletrodomésticos')}>Eletrodomésticos</p>
                            <p onClick={()=> categoria('Livros, Revistas e Comics')}>Livros, Revistas e Comics</p>
                            <p onClick={()=> categoria('Video games e jogos')}>Games</p>
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