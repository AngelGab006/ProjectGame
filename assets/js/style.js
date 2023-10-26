let visibilidad = false;
let modalView = false;
let Activado = false;
let timer = 2000;
let button = document.getElementById('menu-button');
let button2 = document.getElementById('cerrar');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let flecha1 = document.getElementById('flecha1');
let flecha2 = document.getElementById('flecha2');
let desplegable = false;
let desplegable2 = false;
const elemento = document.getElementById('control'); 
const modal = document.getElementById('modal');
function  mostrar(){
    switch(visibilidad){
        case false:
            elemento.style.visibility = 'visible';
            elemento.style.cssText = 'animation-name: slidein;';
            visibilidad = true;
            break;
        case true:
            elemento.style.cssText = 'animation-name: slideout;';
            setTimeout(function(){
                elemento.style.visibility = 'hidden';
                visibilidad = false; 
            }, 2000);

            break;
    }
};
function abrirModal(){
    if (Activado == false){
        switch(modalView){
            case false:
                modal.style.visibility = 'visible';
                document.getElementById('displaybox1').style.visibility = 'visible';
                document.getElementById('displaybox2').style.visibility = 'visible';
                button2.style.visibility = 'visible'
                modal.style.cssText = 'animation-name: updown;';
                modalView = true;
                Activado = true;
                timer = 0;
                break;
            case true:
                modal.style.cssText = 'animation-name: downup;';
                setTimeout(function(){
                    document.getElementById('displaybox1').style.visibility = 'hidden';
                    document.getElementById('displaybox2').style.visibility = 'hidden';
                    button2.style.visibility = 'hidden'
                    modal.style.visibility = 'hidden';
                    modalView = false;
                }, 1900);
                Activado = true;
                timer = 0;
                break;
        };
    };
    do{
        if(Activado == true){
            button.className = 'desactivado'
            button2.className = 'desactivado2'
            timer++
        }
        }while(timer < 2000);
        setTimeout(function (){
        Activado = false;
        button2.className = 'activado2'
        button.className = 'activado'
    }, 2000) 
};
// .displaybox:hover .flecha{
//     animation-duration: 2s;
//     animation-name: rotate;
// }
function desplegarbox1 (){
    switch(desplegable){
    case false:
        document.getElementById('displaybox1').style.cssText = 'margin-bottom: 0px;';
        flecha1.style.cssText = 'transform: rotate(-180deg);'
        setTimeout(function(){
            box1.style.cssText = 'transform: scaleY(1);';
        }, 200);

        desplegable = true;
        break;
    case true:
        box1.style.cssText = 'transform: scaleY(0);';
        flecha1.style.cssText = 'transform: rotate(0deg);';

        setTimeout(function(){
            document.getElementById('displaybox1').style.cssText = 'margin-bottom: -35px;';
        }, 400);

        desplegable = false;
        break;
    }
}
function desplegarbox2 (){
    switch(desplegable2){
        case false:
            document.getElementById('displaybox2').style.cssText = 'margin-bottom: 0px;';
            flecha2.style.cssText = 'transform: rotate(-180deg);';

            setTimeout(function(){
                box2.style.cssText = 'transform: scaleY(1);';
            }, 200);

            desplegable2 = true;
            break;
        case true:
            box2.style.cssText = 'transform: scaleY(0);';
            flecha2.style.cssText = 'transform: rotate(0deg);';

            setTimeout(function(){
                document.getElementById('displaybox2').style.cssText = 'margin-bottom: -35px;';
            }, 400);

            desplegable2 = false;
            break;
        }
};