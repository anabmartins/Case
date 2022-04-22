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
