let alunos = [];

document.getElementById('form-aluno').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const endereco = document.getElementById('endereco').value;

    if (nome && cpf && telefone && nascimento && endereco) {
        const aluno = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            nascimento: nascimento,
            endereco: endereco
        };

        alunos.push(aluno);
        exibirAlunos();
        limparCampos();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('nascimento').value = '';
    document.getElementById('endereco').value = '';
}

function exibirAlunos() {
    const listaAlunos = document.getElementById('lista-alunos');
    listaAlunos.innerHTML = '';

    alunos.forEach(aluno => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.cpf}</td>
            <td>${aluno.telefone}</td>
            <td>${aluno.nascimento}</td>
            <td>${aluno.endereco}</td>
        `;
        listaAlunos.appendChild(row);
    });
}
