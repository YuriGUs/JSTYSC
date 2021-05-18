function ZeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = ZeroAEsquerda(data.getDate());
    const mes = ZeroAEsquerda(data.getMonth() + 1);
    const ano = ZeroAEsquerda(data.getFullYear());
    const hora = ZeroAEsquerda(data.getHours());
    const min = ZeroAEsquerda(data.getMinutes());
    const seg = ZeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)
