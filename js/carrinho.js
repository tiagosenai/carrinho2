var lista = [
    {"descricao":"Farm Simulator", "qtde":"1", "valor":"129.90"},
    {"descricao":"PES 2022", "qtde":"1", "valor":"69.90"}
];

//Tabela de Produtos do Carrinho
function mostraProduto(lista){
    var table = '<thead><tr><td>Descrição</td><td>Quantidade</td><td>Valor</td><td>Ação</td></tr></thead><tbody>';
    for (var key in lista){
        table += '<tr><td>'+ lista[key].descricao +'</td><td>'+ lista[key].qtde +'</td><td>'+ lista[key].valor +'</td><td>Ação</td></tr>';
    }
    table += '</tbody>';
    document.getElementById('tabelaProdutos').innerHTML = table;
    totalValor(lista);
}

function totalValor(lista){
    var total = 0;
    for(var key in lista){
        total += lista[key].valor * lista[key].qtde;
    }
    document.getElementById("valorTotal").innerHTML = total;
}

function iniciaLista(){
    mostraProduto(lista);
}

iniciaLista();