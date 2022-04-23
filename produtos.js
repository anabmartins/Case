const verificarProcedencia = function(opcao){
    let procedencia = document.getElementById('procedencia')
    let c1 = "Sul"
    let c2 = "Norte"
    let c3 = "Leste"
    let c4 = "Oeste"
    let c5 = "Nordeste"
    let c6 = "Sudeste"
    let c7 = "Centro-oeste"

    switch(opcao){
    case 'pneu':
        procedencia.innerHTML = c1
        break
    case 'oleo':
        procedencia.innerHTML = c5
        break
    case 'alarme':
        procedencia.innerHTML = c2
        break
    case 'capa':
            procedencia.innerHTML = c7
        break
    case 'tapete':
            procedencia.innerHTML = c6
        break       
        
    case 'cinto':
        procedencia.innerHTML = c3
    break       

    case 'lampada':
            procedencia.innerHTML = c4
        break       

    case 'amortecedor':
            procedencia.innerHTML = c7
        break       

            
    default:
        procedencia.innerHTML = "Resultado não existe"
            break
    }
}

const verificarClassificacao = function(opcao){
    let classificacao = document.getElementById('classificacao')
    let cdg1 = "Alimento não-perecível"
    let cdg2 = "Alimento perecível"
    let cdg3 = "Vestuário"
    let cdg4 = "Higiene pessoal"
    let cdg5 = "Limpeza e utensílios domésticos"

    switch(opcao){
    case 'milho':
        procedencia.innerHTML = cdg1
        break
    case 'leite':
        procedencia.innerHTML = cdg2
        break
    case 'macarrao':
        procedencia.innerHTML = cdg1
        break
    case 'vestido':
            procedencia.innerHTML = cdg3
        break
    case 'sabonete':
            procedencia.innerHTML = cdg4
        break       
        
    case 'tenis':
        procedencia.innerHTML = cdg3
    break       

    case 'creme':
            procedencia.innerHTML = cdg4
        break       

    case 'maca':
            procedencia.innerHTML = cdg2
        break       

        case 'detergente':
            procedencia.innerHTML = cdg5
        break       

        case 'desinfetante':
            procedencia.innerHTML = cdg5
        break       

        case 'meia':
            procedencia.innerHTML = cdg3
        break     
        
    case 'farinha':
        procedencia.innerHTML = cdg1
    break       


            
    default:
        procedencia.innerHTML = "Resultado não existe"
            break
    }
}
