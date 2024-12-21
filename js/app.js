function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if(tipo == "pista") {
        comprarPista(quantidade);
    } else if (tipo == "superior") {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    } 
    document.getElementById("qtd").value = ""
}   

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
    if (quantidade > quantidadePista) {
        alert("Quantidade de ingressos para pista indisponível. Ajuste e tente novamente.");
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById("qtd-pista").textContent = quantidadePista;
        alert("Compra realizada com sucesso!");
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (quantidade > quantidadeSuperior) {
        alert("Quantidade de ingressos para Cadeira Superior indisponível. Ajuste e tente novamente.");
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = quantidadeSuperior;
        alert("Compra realizada com sucesso!");
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (quantidade > quantidadeInferior) {
        alert("Quantidade de ingressos para Cadeira Inferior indisponível. Ajuste e tente novamente.");
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = quantidadeInferior
        alert("Compra realizada com sucesso!");
    }
}