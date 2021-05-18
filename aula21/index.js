const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Bom tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Bom noite') 
} else {
    return console.log('Erro: Impossivel identificar este horário! Por favor digite um Horário correto.')
}
