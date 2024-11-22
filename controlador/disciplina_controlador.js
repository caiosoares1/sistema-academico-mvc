class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nome");
        try{
            const disciplinaInserida = this.servico.inserir(Number(codElemento.value),
            nomeElemento.value);
            const listaDisciplinaElemento = document.querySelector("#listaDisciplinas");
            if (disciplinaInserida) {
                this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinaElemento);
            }
        } catch (erro) {
            alert(erro.message);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Codigo: ${disciplina.codigo} - nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    
}
