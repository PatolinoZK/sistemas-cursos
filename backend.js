let cursos = [];
function adicionarCurso(nome, carga, descricao) {
  if (!nome || !carga || !descricao){
  alert("Preencha todos os campos!");
  return;
  }
  
  let curso = {
    nome,
    carga,
    descricao,
  };

  cursos.push(curso);
}

function listarCursos(){
  return cursos;
}

function removerCurso(index) {
  cursos.splice(index, 1);
}

adicionarCurso("Design Gráfico", 360, "Curso de edição");
adicionarCurso("Programação de Jogos", 1200, "Curso de programação");
adicionarCurso("Python", 200,"Linguagem de programação")
adicionarCurso("C#", 200,"Linguagem de programação")

listarCursos()
