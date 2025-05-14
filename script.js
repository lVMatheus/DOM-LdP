document.addEventListener("DOMContentLoaded", () => {
    // Botão 1 - altera o título
    document.getElementById("btn0").addEventListener("click", () => {
      const titulo = document.querySelector("h1");
      titulo.textContent = "Título Alterado!";
      titulo.style.color = "yellow";
    });
  
    // Botão 2
    document.getElementById("btn1").addEventListener("click", () => {
      const img = document.querySelector(".animal");
      img.src = "960px-Canis_lupus_265b.jpg"; // troque por uma imagem válida
      img.style.width = "400px";
      img.style.height = "300px";
    });
  
    // Botão 3
    document.getElementById("btn2").addEventListener("click", () => {
      const texto1 = document.querySelectorAll("h4")[0];
      texto1.textContent = "Texto 1 Alterado!";
      texto1.style.backgroundColor = "yellow";
      texto1.style.color = "black"
    });
  
    // Botões 4, 5, 6 - colocam texto no texto2
    const texto2 = document.querySelectorAll("h4")[1];
  
    for (let i = 3; i <= 5; i++) {
      const btn = document.getElementById(`btn${i}`);
      btn.textContent = `Botão ${i - 2}`;
      btn.addEventListener("click", () => {
        texto2.textContent = btn.textContent;
      });
    }
  });
  