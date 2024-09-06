function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "Nada foi encontrado. Insira pelo menos um termo que deseja pesquisar."
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string para armazenar os resultados HTML
  let resultados = "";
  let nome = "";
  let impressoesGerais = "";
  let tags = "";

  // Itera sobre os dados da pesquisa e constrói o HTML
  for (let dado of dados) {
    nome = dado.nome.toLowerCase()
    impressoesGerais = dado.impressoesGerais.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (nome.includes(campoPesquisa) || impressoesGerais.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.nome}</a>
        </h2>
        <p class="descricao-meta">${dado.impressoesGerais}</p>
        <a href="https://www.bjcp.org/style/2015/21/21A/american-ipa/" target="_blank">Mais informações</a>
      </div>
    `;
    }
    console.log(dado.nome.includes(campoPesquisa))
  }
if (!resultados) {
  resultados = "<p>Nenhum resultado foi encontrado.</p>"
}
  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultados;
}