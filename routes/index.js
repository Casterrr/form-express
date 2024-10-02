var express = require('express');
var router = express.Router();
const { validarFormulario } = require('./validations');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST cadastro de aluno */
router.post('/cadastro', function(req, res, next) {
  const dadosAluno = req.body;
  const erros = validarFormulario(dadosAluno);

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  // Se não houver erros, prossiga com o cadastro
  // Aqui você pode adicionar a lógica para salvar os dados no banco de dados

  res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso!' });
});

module.exports = router;