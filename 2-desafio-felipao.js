//Basta Manipular o resultado de vitória e derrota na função mediaPorPartida para encontrar seu rank
let mediaDoJogador = mediaPorPartida(10, 5) //vitória e derrota
let rankDoJogador

function mediaPorPartida(vitorias, derrotas){
    media = vitorias - derrotas
    return media
}

switch (true) {
    case mediaDoJogador <= 10:
        rankDoJogador = 'Ferro'
        break
    case  mediaDoJogador >= 11 && mediaDoJogador <= 20:
        rankDoJogador = 'Bronze'
        break
    case  mediaDoJogador >= 21 && mediaDoJogador <= 50:
        rankDoJogador = 'Prata'
        break
    case  mediaDoJogador >= 51 && mediaDoJogador <= 80:
        rankDoJogador = 'Ouro'
        break
    case  mediaDoJogador >= 81 && mediaDoJogador <= 90:
        rankDoJogador = 'Diamante'
        break
    case  mediaDoJogador >= 91 && mediaDoJogador <= 100:
        rankDoJogador = 'Lendário'
        break
    case  mediaDoJogador >= 101:
        rankDoJogador = 'Imortal'
        break
    default:
        rankDoJogador = 'Desconhecido'
}

console.log(`O Herói tem de saldo de ${mediaDoJogador} e está no nível de ${rankDoJogador}.`)
