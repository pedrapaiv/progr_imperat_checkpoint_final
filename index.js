function Alunos(nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;


    this.Cmedia = function(){
        const soma = this.notas.reduce(function(acc,valorAtual){
            return (acc + valorAtual)
        })
        let div = soma / this.notas.length;
        return (div)
    }
    this.Addfalta = function (){
        this.faltas ++;
    }    
}

const A1 = new Alunos('Maria', 10, [6,5,8,6]);
const A2 = new Alunos('Paulo', 5, [9,8,8,9]);
const A3 = new Alunos('Pedro', 15, [5,5,3,7]);
const A4 = new Alunos('Marcos', 2, [6,5,5,7]);
const A5 = new Alunos('Julia', 6, [3,8,5,6]);
const A6 = new Alunos('Diego', 12, [6,4,5,6]);


// console.log("*************MÉDIA DOS ALUNOS******************")
// console.log(A1.Cmedia())
// console.log(A2.Cmedia())
// console.log(A3.Cmedia())
// console.log(A4.Cmedia())
// console.log(A5.Cmedia())
// console.log(A6.Cmedia())
// console.log("*************MÉDIA DOS ALUNOS******************")

const Curso = {

    curso: 'ingles',
    notaAprovacao: 7,
    numeroFaltas: 5,
    listaAlunos:[A1,A2,A3,A4,A5,A6],
    
    adicionarEstudante(nome, notas, faltas) {
        const aluno = new Alunos(nome, notas, faltas);
        this.listaAlunos.push(aluno)
    },
    //******************************************************************* */
    verificaAprovacao(aluno) {
        let media = this.listaAlunos[aluno].Cmedia()
        let faltaMais1 = this.listaAlunos[aluno].Addfalta()
        if (media >= this.notaAprovacao && faltaMais1 < this.numeroFaltas) {
            return this.listaAlunos[aluno].nome + ' esta aprovado(a)';
        } else if (faltaMais1 == this.numeroFaltas && this.notaAprovacao * 1.1 < media) {
            return this.listaAlunos[aluno].nome + ' esta aprovado(a)';
        } else {
            return this.listaAlunos[aluno]['nome'] + ' esta reprovado(a)'
        }
    },
    verificaAprovacoes() {
        let alunosAprovados = []
        for (let i = 0; i < this.listaAlunos.length; i++) {
            let media = this.listaAlunos[i].Cmedia()
            let faltaMais1 = this.listaAlunos[i].Addfalta()
            if (media >= this.notaAprovacao && faltaMais1 < this.numeroFaltas) {
                alunosAprovados.push(this.listaAlunos[i].nome + ': ' + true);
            } else if (faltaMais1 == this.numeroFaltas && this.notaAprovacao * 1.1 < media) {
                alunosAprovados.push(this.listaAlunos[i].nome + ': ' + true);
            } else {
                alunosAprovados.push(this.listaAlunos[i]['nome'] + ': ' + false);
            }
        }
        return alunosAprovados
    }
}

Curso.adicionarEstudante('carminha', 5, [5,6,5,3])

console.log(Curso.listaAlunos)
console.log(Curso.verificaAprovacao(3))