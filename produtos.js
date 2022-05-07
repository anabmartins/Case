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

    case 'airbag':
            procedencia.innerHTML = c4
        break       

    case 'camera':
            procedencia.innerHTML = c7
        break       

    case 'volante':
            procedencia.innerHTML = c6
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
        classificacao.innerHTML = cdg1
        break
    case 'leite':
        classificacao.innerHTML = cdg2
        break
    case 'macarrao':
        classificacao.innerHTML = cdg1
        break
    case 'vestido':
            classificacao.innerHTML = cdg3
        break
    case 'sabonete':
            classificacao.innerHTML = cdg4
        break       
        
    case 'tenis':
        classificacao.innerHTML = cdg3
    break       

    case 'creme':
            classificacao.innerHTML = cdg4
        break       

    case 'maca':
            classificacao.innerHTML = cdg2
        break       

        case 'detergente':
            classificacao.innerHTML = cdg5
        break       

        case 'desinfetante':
            classificacao.innerHTML = cdg5
        break       

        case 'meia':
            classificacao.innerHTML = cdg3
        break     
        
    case 'farinha':
        classificacao.innerHTML = cdg1
    break       


            
    default:
        classificacao.innerHTML = "Resultado não existe"
            break
    }
}
