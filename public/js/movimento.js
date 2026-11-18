// movimento.js — Dá movimento à página enquanto a pessoa rola:
//   - os blocos (cards, passos, perguntas...) sobem e aparecem quando entram na tela, um depois do outro;
//   - o resto (topo, brilho do serviço em destaque, abrir pergunta) é só CSS, no estilo.css.
// Sem JavaScript, ou para quem pediu "reduzir movimento" no aparelho, tudo aparece parado e completo.

// O que aparece ao rolar. Itens irmãos (ex.: os cards de um grid) entram um depois do outro.
export const ALVOS = [
  ".secao > h2", ".secao > .sub",
  ".dores li", ".beneficio", ".projeto", ".servico", ".bloco-contratacao", ".aviso",
  ".passos li", ".confianca-lista li", ".pergunta", ".frase-destaque",
  ".foto-sobre", ".sobre-texto", ".contato .btn-grande", ".contato-item",
];

const ATRASO_MS = 90;      // tempo entre um item e o próximo do mesmo grupo

function iniciar() {
  const parado = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (parado || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("com-movimento");

  // Marca os alvos e calcula o atraso de cada um dentro do seu grupo de irmãos
  const elementos = document.querySelectorAll(ALVOS.join(","));
  const grupos = new Map();
  for (const el of elementos) {
    const pai = el.parentElement;
    const posicao = grupos.get(pai) || 0;
    grupos.set(pai, posicao + 1);
    el.dataset.revela = "";
    el.style.setProperty("--atraso", `${Math.min(posicao, 6) * ATRASO_MS}ms`);
  }

  const observador = new IntersectionObserver((entradas) => {
    for (const entrada of entradas) {
      if (!entrada.isIntersecting) continue;
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  elementos.forEach((el) => observador.observe(el));
}

// Só roda no navegador (os testes importam as funções acima no Node)
if (typeof document !== "undefined") iniciar();
