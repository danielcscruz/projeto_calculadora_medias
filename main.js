const form= document.getElementById('form-atividade');
const imgAprovado = '<img src="./img/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./img/reprovado.png" alt="emoji chorando" />';
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt('Digite a nota mínima para aprovação: '));

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
    
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert("Atividade já cadastrada");
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
        
    }
    


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMedia(){
    const sum = notas.reduce((acc, value) => acc + parseFloat(value), 0);
    const media = sum / notas.length;
    return media;
}
function atualizaMedia(){
    const m = calculaMedia();
    document.getElementById('media-final').innerText = m;
    document.getElementById('resultado').innerText = m >= notaMinima ? 'Aprovado' : 'Reprovado';
    document.getElementById('resultado').className = m >= notaMinima ? 'resultado aprovado' : 'resultado reprovado';


}