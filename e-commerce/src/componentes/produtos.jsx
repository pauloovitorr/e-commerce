export default function Produtos() {

  let buscar = document.getElementById('buscas')


  return (
    <main>

      <div class="buscar">
        <input type="text" id="buscas" placeholder="Buscar produtos, marcas e muito mais..."/>
        <img src="./lupa.jpg" alt="pesquisar" onclick="buscarProduto()" />
      </div>

      <div id="produtos">

      </div>

    </main>
  );
}
