function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, verifica se a seção foi encontrada
  
    // Inicializa uma string para armazenar os resultados HTML
    let resultados = "";
  
    // Itera sobre os dados da pesquisa e constrói o HTML
    for (let dado of dados) {
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
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }