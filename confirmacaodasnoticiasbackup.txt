// noticias.js

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

  const container = document.getElementById('noticias');

  noticias.forEach(noticia => {
    const artigo = document.createElement('article');
    artigo.className = 'noticia';
    artigo.innerHTML = `
      <h2>${noticia.titulo}</h2>
      <time datetime="${noticia.data}">${new Date(noticia.data).toLocaleDateString('pt-BR')}</time>
      <p>${noticia.conteudo}</p>
    `;
    container.appendChild(artigo);
  });
});
