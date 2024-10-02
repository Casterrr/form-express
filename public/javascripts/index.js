document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('matriculaForm');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      
      // Combinar os campos de telefone
      const ddd = formData.get('telefone_ddd') || '';
      const prefixo = formData.get('telefone_prefixo') || '';
      const ramal = formData.get('telefone_ramal') || '';
      data.telefone = `${ddd}${prefixo}${ramal}`;

      // Remover os campos individuais de telefone
      delete data.telefone_ddd;
      delete data.telefone_prefixo;
      delete data.telefone_ramal;
      
      // Tratar as atividades extracurriculares como um array
      data.atividades_extracurriculares = formData.getAll('atividades_extracurriculares[]');

      console.log(data);

      fetch('/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
        if (result.erros) {
          alert('Erros de validação:\n' + result.erros.join('\n'));
        } else {
          alert(result.mensagem);
          this.reset(); // Limpa o formulário após o sucesso
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        let mensagemErro = 'Ocorreu um erro ao enviar o formulário:';
        if (error.message) {
          mensagemErro += '\n' + error.message;
        }
        if (error.erros && Array.isArray(error.erros)) {
          mensagemErro += '\n\nErros detalhados:\n' + error.erros.join('\n');
        }
        alert(mensagemErro + '\n\nPor favor, tente novamente.');
      });
    });
  } else {
    console.error('Formulário não encontrado');
  }
});