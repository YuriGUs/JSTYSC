// ? : Operador ternario

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 100 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Branca';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)