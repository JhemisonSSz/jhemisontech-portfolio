// movimento.js — Dá movimento à página enquanto a pessoa rola:
//   - os blocos (cards, planos, passos, perguntas...) sobem e aparecem quando entram na tela, um depois do outro;
//   - os preços dos planos contam de 0 até o valor;
//   - o resto (topo, brilho do plano em destaque, abrir pergunta) é só CSS, no estilo.css.
// Sem JavaScript, ou para quem pediu "reduzir movimento" no aparelho, tudo aparece parado e completo.

// O que aparece ao rolar. Itens irmãos (ex.: os cards de um grid) entram um depois do outro.
export const ALVOS = [
  ".secao > h2", ".secao > .sub",
  ".projeto", ".servico", ".plano", ".incluso", ".obs",
  ".passos li", ".pergunta",
  ".foto-sobre", ".sobre-texto", ".contato .btn-grande", ".contato-item",
];

// "R$ 1.500" -> 1500
export const numeroDoPreco = (texto) => Number(String(texto).replace(/\D/g, ""));
// 1500 -> "R$ 1.500"
export const formatarPreco = (n) => "R$ " + Math.round(n).toLocaleString("pt-BR");

const ATRASO_MS = 90;      // tempo entre um item e o próximo do mesmo grupo
const CONTAGEM_MS = 1100;  // duração da contagem dos preços

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
      entrada.target.querySelectorAll(".preco strong").forEach(contar);
      observador.unobserve(entrada.target);
    }
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  elementos.forEach((el) => observador.observe(el));
}

// Conta de 0 até o valor do preço, desacelerando no fim
function contar(el) {
  const alvo = numeroDoPreco(el.textContent);
  if (!alvo) return;
  const inicio = performance.now();
  const passo = (agora) => {
    const t = Math.min(1, (agora - inicio) / CONTAGEM_MS);
    const suave = 1 - Math.pow(1 - t, 3);
    el.textContent = formatarPreco(alvo * suave);
    if (t < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

// Só roda no navegador (os testes importam as funções acima no Node)
if (typeof document !== "undefined") iniciar();
