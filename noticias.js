document.addEventListener('DOMContentLoaded', () => {
  const noticias = [
    {
      titulo: "Chuvas fortes atingem Vitória",
      data: "2025-07-22",
      conteudo: "Defesa Civil está em alerta com as fortes chuvas que atingem a capital capixaba."
    },
    {
      titulo: "Vitória estreia com vitória no Capixabão",
      data: "2025-07-21",
      conteudo: "O time da capital venceu o Serra por 2 a 0 no Kleber Andrade."
    },
    {
      titulo: "Feira cultural movimenta o centro da cidade",
      data: "2025-07-20",
      conteudo: "Evento reúne artistas, expositores e público em clima de festa e cultura."
    }
  ];

  let indexAtual = 0;
  const container = document.getElementById('noticias');

  // Cria o botão dinamicamente
  const botao = document.createElement('button');
  botao.id = 'carregarMais';
  botao.textContent = 'Carregar próxima notícia';
  botao.style.marginTop = '20px';
  botao.style.padding = '10px 20px';
  botao.style.fontSize = '16px';

  // Adiciona o botão logo após o container de notícias
  container.insertAdjacentElement('afterend', botao);

  function carregarNoticia() {
    if (indexAtual < noticias.length) {
      const noticia = noticias[indexAtual];
      const artigo = document.createElement('article');
      artigo.className = 'noticia';
      artigo.innerHTML = `
        <h2>${noticia.titulo}</h2>
        <time datetime="${noticia.data}">${new Date(noticia.data).toLocaleDateString('pt-BR')}</time>
        <p>${noticia.conteudo}</p>
      `;
      container.appendChild(artigo);
      indexAtual++;
    }

    if (indexAtual >= noticias.length) {
      botao.style.display = 'none';
    }
  }

  botao.addEventListener('click', carregarNoticia);

  // Carrega a primeira notícia automaticamente
  carregarNoticia();
});
