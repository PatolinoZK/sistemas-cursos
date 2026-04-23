let cursos = [];
function adicionarCurso(nome, carga, descricao) {
  if (!nome || !carga || !descricao){
  alert("Preencha todos os campos!");
  return
  }
  
  let curso = {
    Design Gráfico,
    360,
    Curso que visa capacitar e aperfeiçoar os alunos na edição de imagens e vídeos,
  };

  cursos.push(curso);
}

function listarCursos(){
  return cursos;
}