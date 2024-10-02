const validator = require('validator');

const dddsValidos = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99
];

function validarFormulario(dados) {
  const erros = [];

  // Validar campos obrigatórios
  const camposObrigatorios = ['nome_aluno', 'data_nascimento', 'nome_mae', 'nome_pai', 'telefone', 'email', 'serie_escolar', 'turno'];
  camposObrigatorios.forEach(campo => {
    if (!dados[campo]) {
      erros.push(`O campo ${campo} é obrigatório.`);
    }
  });

  // Validar data de nascimento
  if (dados.data_nascimento && !validator.isDate(dados.data_nascimento)) {
    erros.push('A data de nascimento é inválida.');
  }

  // Validar e-mail
  if (dados.email && !validator.isEmail(dados.email)) {
    erros.push('O e-mail é inválido.');
  }

  // Validar DDD
  if (dados.telefone) {
    const telefoneNumerico = dados.telefone.replace(/\D/g, '');
    if (telefoneNumerico.length !== 10) {
      erros.push('O telefone deve conter exatamente 10 dígitos.');
    } else {
      const ddd = telefoneNumerico.substring(0, 2);
      if (!dddsValidos.includes(parseInt(ddd))) {
        erros.push('O DDD do telefone é inválido.');
      }
    }
  }

  // Validar atividades extracurriculares
  if (dados.atividades_extracurriculares && dados.atividades_extracurriculares.length > 3) {
    erros.push('Você pode selecionar no máximo 3 atividades extracurriculares.');
  }

  return erros;
}

module.exports = { validarFormulario };