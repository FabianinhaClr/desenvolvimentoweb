function adicionar() {
    var tarefas = [];
  
    var nome = document.getElementById("nome").value;
    var atividade = document.getElementById("atividade").value;
    var cargah = document.getElementById("cargah").value;
    var inicio_hora = document.getElementById("inicio_hora").value;
    var fim_hora = document.getElementById("fim_hora").value;
    var dias = document.getElementById("dias").value;
  
    var novaTarefa = {
      atividade: atividade,
      cargah: cargah,
      nome: nome,
      dias: dias,
      fim_hora: fim_hora,
      inicio_hora: inicio_hora
    };
  
    tarefas.push(novaTarefa);
  
    console.log(tarefas);
  }
  