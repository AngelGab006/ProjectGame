let cartas = ['AC','AD','AH','AS','JC','JD','JH','JS','KC','KD','KH','KS','QC','QD','QH','QS'];
let numero = [];
let carta = 0;
let puntos = 0;
let cartaPC = 0;
let puntosPC = 0;
let terminado = false;
let limite = 21;
let tomada = 0;
let atrasHabilitado = true;
let atrasHabilitadoPC = true;
let necesarioReiniciar = false;
let scoreP1 = 0;
let scoreP2 = 0;
let dificultadPC = 17;
let seleccionManualDeA = false;
let dificultadVariableActivada = false;
function dificultad1 (){
    let button = document.getElementById('dificultad1button');
    button.style.cssText = 'border-left: white solid 2px;';
    button.onmouseleave = function (e) {
        e.target.style.cssText = 'border-left: white solid 0px;';
    }
    dificultadPC = 14;
    dificultadVariableActivada = false;
};
function dificultad2 (){
    let button = document.getElementById('dificultad2button');
    button.style.cssText = 'border-left: white solid 2px;';
    button.onmouseleave = function (e) {
        e.target.style.cssText = 'border-left: white solid 0px;';
    }
    dificultadPC = 17;
    dificultadVariableActivada = false;
};
function dificultad3 (){
    let button = document.getElementById('dificultad3button');
    button.style.cssText = 'border-left: white solid 2px;';
    button.onmouseleave = function (e) {
        e.target.style.cssText = 'border-left: white solid 0px;';
    }
    dificultadPC = 19;
    dificultadVariableActivada = false;
};
function dificultad4 (){
    let button = document.getElementById('dificultad4button');
    button.style.cssText = 'border-left: white solid 2px;';
    button.onmouseleave = function (e) {
        e.target.style.cssText = 'border-left: white solid 0px;';
    }
    dificultadPC = puntos;
    dificultadVariableActivada = true;
};
function seleccionAutomatica (){
    let button = document.getElementById('seleccionAuto');
    button.style.cssText = 'border-left: white solid 2px;';
    button.onmouseleave = function (e) {
        e.target.style.cssText = 'border-left: white solid 0px;';
    }
    seleccionManualDeA = false;
}
function seleccionManual (){
    let button = document.getElementById('seleccionManual');
    button.style.cssText = 'border-left: white solid 2px;';
    button.onmouseleave = function (e) {
        e.target.style.cssText = 'border-left: white solid 0px;';
    }
    seleccionManualDeA = true;
}
for(let i = 0; i < 51; i++){
    numero.push(i);
}
for(let i = 2; i < 11; i++){
    cartas.push(i + 'C');
    cartas.push(i + 'D');
    cartas.push(i + 'H');
    cartas.push(i + 'S');
}
cartas.sort(function() { return Math.random() - 0.5 });

document.addEventListener('keyup', (event) => {
    teclaPresionada = event.key;
    if(teclaPresionada == 'k' || teclaPresionada == 'K' || terminado === true){
        terminado = true;
        if (dificultadVariableActivada === true){
                if (puntos >= 22) {
                    dificultadPC = 0;
                }else if(puntos <= 21){
                    dificultadPC = puntos;
                }
            };
        if(necesarioReiniciar == false){
                if (dificultadVariableActivada === true){
                    if (puntos >= 22) {
                        dificultadPC = 0;
                    }else if(puntos <= 21){
                        dificultadPC = puntos;
                    }
                };
            do {
                if(atrasHabilitadoPC == true){
                    document.getElementById('Atras-compu').remove();
                    atrasHabilitadoPC = false;
                }
    
                let numeroAleatorio = numero.slice();
                numeroAleatorio.sort(function() { return Math.random() - 0.5 });
                cartaPC = cartas[numeroAleatorio[0]]; 
                let valor = cartaPC.substring(0, cartaPC.length -1);
                if(!isNaN(valor)){
                    puntosPC = puntosPC + Number(valor);
                }else{
                    switch(valor){
                        case 'A':
                            if(puntos > 10){
                                valor = 1;
                            }else{
                                valor = 11;
                        }
                            break;
                        case 'J':
                            valor = 10;
                            break;
                        case 'K':
                            valor = 10;
                            break;
                        case 'Q':
                            valor = 10;
                            break;
                    }
                    puntosPC = puntosPC + valor;
                }
    
                document.getElementById('puntuacion-compu').innerHTML = puntosPC;
                document.getElementById('Player2').innerHTML += `<img src="./assets/img/card/${cartaPC}.png" alt="Carta" id="Carta">`
        
                cartas.splice(numeroAleatorio[0], 1);
                numero.pop();
                tomada ++;
            } while (puntosPC < dificultadPC);
            if(puntos <= 21){
                if(puntosPC > 21){
                    document.getElementById('ganarPerder').innerHTML = 'Ganaste';
                    scoreP1 = scoreP1 + 1;
                    document.getElementById('ScoreP1').innerHTML = scoreP1;
                }else if(puntos > puntosPC){
                    document.getElementById('ganarPerder').innerHTML = 'Ganaste';
                    scoreP1 = scoreP1 + 1;
                    document.getElementById('ScoreP1').innerHTML = scoreP1;
                }else if(puntos === puntosPC){
                    document.getElementById('ganarPerder').innerHTML = 'Empate';
                }else{
                    document.getElementById('ganarPerder').innerHTML = 'Perdiste';
                    scoreP2 = scoreP2 + 1;
                    document.getElementById('ScoreP2').innerHTML = scoreP2;
                }
            }else if(puntos > 21){
                if(puntosPC <= 21){
                    document.getElementById('ganarPerder').innerHTML = 'Perdiste';
                    scoreP2 = scoreP2 + 1;
                    document.getElementById('ScoreP2').innerHTML = scoreP2;
                }else{
                    document.getElementById('ganarPerder').innerHTML = 'Empate';
                }
            }
            const elemento = document.getElementById('estado');
            elemento.style.visibility = 'visible';
            elemento.style.cssText = 'animation-name: slidein;';
        }else{
            document.getElementById('ganarPerder').innerHTML = 'Reinicie para continuar';
        }
        necesarioReiniciar = true;
    }else if(terminado == false && teclaPresionada == 'j' || teclaPresionada == 'J'){
            if(atrasHabilitado == true){
                document.getElementById('Atras').remove();
                atrasHabilitado = false;
            }

            let numeroAleatorio = numero.slice();
            numeroAleatorio.sort(function() { return Math.random() - 0.5 });
            carta = cartas[numeroAleatorio[0]]; 
            let valor = carta.substring(0, carta.length -1);
            if(!isNaN(valor)){
                puntos = puntos + Number(valor);
            }else{
                switch(valor){
                    case 'A':
                        if(seleccionManualDeA == false){
                            if(puntos > 10){
                                valor = 1;
                            }else{
                                valor = 11;
                            }
                        }else if (seleccionManualDeA == true){
                            let valorDeA = confirm("Quiere que su A valga uno de no ser asi esta carta valdra 11");
                            if(valorDeA){
                                valor = 1;
                            }else {
                                valor = 11;
                            }
                        }
                        break;
                    case 'J':
                        valor = 10;
                        break;
                    case 'K':
                        valor = 10;
                        break;
                    case 'Q':
                        valor = 10;
                        break;
                }
                puntos = puntos + valor;
            }

            document.getElementById('puntuacion').innerHTML = puntos;
            document.getElementById('Player').innerHTML += `<img src="./assets/img/card/${carta}.png" alt="Carta" id="Carta">`
            
            cartas.splice(numeroAleatorio[0], 1);
            numero.pop();
            tomada ++;
            if(puntos >= 21){
                terminado = true;
            }
        };
    if(teclaPresionada == 'r' || teclaPresionada == 'R' && necesarioReiniciar == true){
        necesarioReiniciar = false;
        const elemento = document.getElementById('estado');
        elemento.style.cssText = 'animation-name: slideout;';
        elemento.style.visibility = 'hidden';
        cartas = ['AC','AD','AH','AS','JC','JD','JH','JS','KC','KD','KH','KS','QC','QD','QH','QS'];
        numero = [];
        terminado = false;
        puntos = 0;
        cartaPC = 0;
        puntosPC = 0;
        document.getElementById('puntuacion').innerHTML = puntos;
        document.getElementById('puntuacion-compu').innerHTML = puntosPC;
        if(atrasHabilitado == false){
            document.getElementById('Player').innerHTML += '<img src="./assets/img/card/grey_back.png" alt="Carta" id="Atras">'
            atrasHabilitado = true;
        }
        if(atrasHabilitadoPC == false){
            document.getElementById('Player2').innerHTML += '<img src="./assets/img/card/grey_back.png" alt="Carta" id="Atras-compu">'
            atrasHabilitadoPC = true;
        }
        for(let i = 0; i < 51; i++){
            numero.push(i);
        }
        for(let i = 2; i < 11; i++){
            cartas.push(i + 'C');
            cartas.push(i + 'D');
            cartas.push(i + 'H');
            cartas.push(i + 'S');
        }
        cartas.sort(function() { return Math.random() - 0.5 });
        if (tomada >= 1){
            for(let i = 1; i <= tomada; i++){
                document.getElementById('Carta').remove();
            }
            tomada = 0;
        }
    }

});