import { Link } from "react-router-dom"

export default function Nav() {
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/carrinho"><span id="qtd_carrinho"></span><i class="fa-solid fa-cart-shopping"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}