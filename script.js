let carrinho = [];
let quantidades = [1, 1];

function alterarQtd(index, valor) {
  quantidades[index] += valor;
  if (quantidades[index] < 1) quantidades[index] = 1;
  document.getElementById(`qtd-${index}`).innerText = quantidades[index];
}

function addCarrinho(index, nome, preco) {
  carrinho.push({
    nome,
    preco,
    qtd: quantidades[index]
  });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  let lista = document.getElementById("listaCarrinho");
  let total = 0;
  lista.innerHTML = "";

  carrinho.forEach(item => {
    let subtotal = item.preco * item.qtd;
    total += subtotal;
    lista.innerHTML += `<li>${item.qtd}x ${item.nome} — R$ ${subtotal}</li>`;
  });

  document.getElementById("total").innerText = `💰 Total: R$ ${total}`;
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio");
    return;
  }

  let msg = "Olá! Gostaria de fazer um pedido:%0A%0A";
  let total = 0;

  carrinho.forEach(item => {
    let subtotal = item.preco * item.qtd;
    total += subtotal;
    msg += `${item.qtd}x ${item.nome} — R$ ${subtotal}%0A`;
  });

  msg += `%0A💰 Total: R$ ${total}%0A`;
  msg += `🛵 Motoboy sábado | 📦 Correios%0A`;

  let obs = document.getElementById("obs").value;
  if (obs) msg += `%0A📝 Obs: ${obs}`;

  let telefone = "5519988881157";
  window.open(`https://wa.me/${telefone}?text=${msg}`, "_blank");
}