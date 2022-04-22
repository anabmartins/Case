const verificarProcedencia = function(opcao){
    let procedencia = document.getElementById('procedencia')
    switch(opcao){
        case 'uva':
        procedencia.innerHTML = "Preço da uva é R$1,70"
        break
    case 'laranja':
        procedencia.innerHTML = "Preço da laranja é R$2,50"
        break
    case 'maça':
        procedencia.innerHTML = "Preço da maçã é R$3,09"
        break
        case 'pera':
            procedencia.innerHTML = "Preço da pera é R$4,05"
            break
    default:
        procedencia.innerHTML = "Resultado não existe"
            break
    }
}