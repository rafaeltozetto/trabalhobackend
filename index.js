function inserirDados() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var media = (nota1 + nota2 + nota3) / 3;
    var situacao = media >= 60 ? "Aprovado" : "Reprovado";
    
    var tabela = document.getElementById("tbody");
    var newRow = tabela.insertRow();
    var cellNome = newRow.insertCell(0);
    var cellNota1 = newRow.insertCell(1);
    var cellNota2 = newRow.insertCell(2);
    var cellNota3 = newRow.insertCell(3);
    var cellMedia = newRow.insertCell(4);
    var cellSituacao = newRow.insertCell(5);
    
    cellNome.innerHTML = nome;
    cellNota1.innerHTML = nota1.toFixed(1);
    cellNota2.innerHTML = nota2.toFixed(1);
    cellNota3.innerHTML = nota3.toFixed(1);
    cellMedia.innerHTML = media.toFixed(1);
    cellSituacao.innerHTML = situacao;
}