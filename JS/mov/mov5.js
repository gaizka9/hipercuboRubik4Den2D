const cuboV5 = document.getElementById('cubo5');
    let visibilidad5 = cuboV5.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad5) {
        const estiloCubo5 = window.getComputedStyle(cuboV5);
        visibilidad5 = estiloCubo5.visibility;
    }


function moverStickers(coor1, coor2, coor3, coor4) {
    const c1 = document.getElementById(coor1);
    const c2 = document.getElementById(coor2);
    const c3 = document.getElementById(coor3);
    const c4 = document.getElementById(coor4);

    let aux = c1.getAttribute('data-color')

    c1.removeAttribute('data-color')
    c1.setAttribute('data-color', c2.getAttribute('data-color'));

    c2.removeAttribute('data-color')
    c2.setAttribute('data-color', c3.getAttribute('data-color'));

    c3.removeAttribute('data-color')
    c3.setAttribute('data-color', c4.getAttribute('data-color'));

    c4.removeAttribute('data-color')
    c4.setAttribute('data-color', aux);
}


if (visibilidad5 === "visible") {

    console.log('cubo 5 Visible ')

    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp5()

        }else if (event.key === 'm' || event.key === 'M') { 

            m5()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep5()

        }else if (event.key === 'e' || event.key === 'E') { 

            e5()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp5()

        }else if (event.key === 's' || event.key === 'S') { 

            s5()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp5()

        }else if (event.key === 'r' || event.key === 'R') { 

            r5()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp5()

        }else if (event.key === 'l' || event.key === 'L') { 

            l5()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up5()

        }else if (event.key === 'u' || event.key === 'U') { 

            u5()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp5()

        }else if (event.key === 'd' || event.key === 'D') { 

            d5()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp5()

        }else if (event.key === 'f' || event.key === 'F') { 

            f5()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp5()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b5()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m5(); rp5(); l5();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp5(); r5(); lp5();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e5(); up5(); d5();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep5(); u5(); dp5();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp5(); fp5(); b5();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s5(); f5(); bp5();
        }
    });
}else{
    console.log('cubo 5 Oculto ')
}

function m5(){
    moverStickers('5-GM-1-1', '5-GO-1-1', '5-O-1-1', '5-T-1-1') //mover centros
    moverStickers('5-GM-0-1', '5-GO-0-1', '5-O-0-1', '5-T-0-1') //mover esquinas
    moverStickers('5-GM-2-1', '5-GO-2-1', '5-O-2-1', '5-T-2-1') //mover esquinas
}

function mp5() {
    moverStickers('5-T-1-1', '5-O-1-1', '5-GO-1-1', '5-GM-1-1') //mover centros
    moverStickers('5-T-0-1', '5-O-0-1', '5-GO-0-1', '5-GM-0-1') //mover esquinas
    moverStickers('5-T-2-1', '5-O-2-1', '5-GO-2-1', '5-GM-2-1') //mover esquinas
}


function e5(){
    moverStickers('5-S-1-1', '5-T-1-1', '5-P-1-1', '5-GO-1-1') //mover centros
    moverStickers('5-S-1-2', '5-T-1-0', '5-P-1-2', '5-GO-1-2') //mover esquinas
    moverStickers('5-S-1-0', '5-T-1-2', '5-P-1-0', '5-GO-1-0') //mover esquinas
}

function ep5(){
    moverStickers('5-GO-1-1', '5-P-1-1', '5-T-1-1', '5-S-1-1') //mover centros
    moverStickers('5-GO-1-2', '5-P-1-2', '5-T-1-0', '5-S-1-2') //mover esquinas
    moverStickers('5-GO-1-0', '5-P-1-0', '5-T-1-2', '5-S-1-0') //mover esquinas
}


function s5(){
    moverStickers('5-S-1-1', '5-GM-1-1', '5-P-1-1', '5-O-1-1') //mover centros
    moverStickers('5-S-2-1', '5-GM-1-2', '5-P-0-1', '5-O-1-0') //mover esquinas
    moverStickers('5-S-0-1', '5-GM-1-0', '5-P-2-1', '5-O-1-2') //mover esquinas
}

function sp5(){
    moverStickers('5-O-1-1', '5-P-1-1', '5-GM-1-1', '5-S-1-1') //mover centros
    moverStickers('5-O-1-0', '5-P-0-1', '5-GM-1-2', '5-S-2-1') //mover esquinas
    moverStickers('5-O-1-2', '5-P-2-1', '5-GM-1-0', '5-S-0-1') //mover esquinas
}


function r5() {
    moverStickers('5-P-1-0', '5-P-2-1', '5-P-1-2', '5-P-0-1') //mover esquinas
    moverStickers('5-P-2-0', '5-P-2-2', '5-P-0-2', '5-P-0-0') //mover aristas

    moverStickers('5-GO-1-2', '5-GM-1-2', '5-T-1-2', '5-O-1-2') //mover esquinas
    moverStickers('5-GM-0-2', '5-T-0-2', '5-O-0-2', '5-GO-0-2') //mover aristas
    moverStickers('5-T-2-2', '5-O-2-2', '5-GO-2-2', '5-GM-2-2') //mover aristas
}

function rp5() {
    moverStickers('5-P-0-1', '5-P-1-2', '5-P-2-1', '5-P-1-0') //mover esquinas
    moverStickers('5-P-0-0', '5-P-0-2', '5-P-2-2', '5-P-2-0') //mover aristas
        
    moverStickers('5-O-1-2', '5-T-1-2', '5-GM-1-2', '5-GO-1-2') //mover esquinas
    moverStickers('5-GO-0-2', '5-O-0-2', '5-T-0-2', '5-GM-0-2') //mover aristas
    moverStickers('5-O-2-2', '5-T-2-2', '5-GM-2-2', '5-GO-2-2') //mover aristas
}

function l5() {
    moverStickers('5-S-1-0', '5-S-2-1', '5-S-1-2', '5-S-0-1') //mover esquinas
    moverStickers('5-S-2-0', '5-S-2-2', '5-S-0-2', '5-S-0-0') //mover aristas

    moverStickers('5-T-1-0', '5-GM-1-0', '5-GO-1-0', '5-O-1-0') //mover esquinas
    moverStickers('5-GO-2-0', '5-O-2-0', '5-T-2-0', '5-GM-2-0') //mover aristas
    moverStickers('5-GM-0-0', '5-GO-0-0', '5-O-0-0', '5-T-0-0') //mover aristas
}

function lp5() {
    moverStickers('5-S-0-1', '5-S-1-2', '5-S-2-1', '5-S-1-0') //mover esquinas
    moverStickers('5-S-0-0', '5-S-0-2', '5-S-2-2', '5-S-2-0') //mover aristas

    moverStickers('5-O-1-0', '5-GO-1-0', '5-GM-1-0', '5-T-1-0') //mover esquinas
    moverStickers('5-GM-2-0', '5-T-2-0', '5-O-2-0', '5-GO-2-0') //mover aristas
    moverStickers('5-O-0-0', '5-GO-0-0', '5-GM-0-0', '5-T-0-0') //mover aristas
}


function u5() {
    moverStickers('5-O-1-0', '5-O-2-1', '5-O-1-2', '5-O-0-1') //mover esquinas
    moverStickers('5-O-2-0', '5-O-2-2', '5-O-0-2', '5-O-0-0') //mover aristas

    moverStickers('5-S-0-1', '5-GO-0-1', '5-P-0-1', '5-T-2-1') //mover esquinas
    moverStickers('5-GO-0-0', '5-P-0-0', '5-T-2-2', '5-S-0-0') //mover aristas
    moverStickers('5-S-0-2', '5-GO-0-2', '5-P-0-2', '5-T-2-0') //mover aristas
}

function up5() {
    moverStickers('5-O-0-1', '5-O-1-2', '5-O-2-1', '5-O-1-0') //mover esquinas
    moverStickers('5-O-0-0', '5-O-0-2', '5-O-2-2', '5-O-2-0') //mover aristas
        
    moverStickers('5-T-2-1', '5-P-0-1', '5-GO-0-1', '5-S-0-1') //mover esquinas
    moverStickers('5-S-0-0', '5-T-2-2', '5-P-0-0', '5-GO-0-0') //mover aristas
    moverStickers('5-T-2-0', '5-P-0-2', '5-GO-0-2', '5-S-0-2') //mover aristas 
}

function d5() {
    moverStickers('5-GM-0-1', '5-GM-1-0', '5-GM-2-1', '5-GM-1-2') //mover esquinas
    moverStickers('5-GM-0-0', '5-GM-2-0', '5-GM-2-2', '5-GM-0-2') //mover aristas

    moverStickers('5-GO-2-1', '5-S-2-1', '5-T-0-1', '5-P-2-1') //mover esquinas
    moverStickers('5-S-2-2', '5-T-0-0', '5-P-2-2', '5-GO-2-2') //mover aristas
    moverStickers('5-GO-2-0', '5-S-2-0', '5-T-0-2', '5-P-2-0') //mover aristas
}

function dp5() {
    moverStickers('5-GM-1-2', '5-GM-2-1', '5-GM-1-0', '5-GM-0-1') //mover esquinas
    moverStickers('5-GM-0-2', '5-GM-2-2', '5-GM-2-0', '5-GM-0-0') //mover aristas

    moverStickers('5-P-2-1', '5-T-0-1', '5-S-2-1', '5-GO-2-1') //mover esquinas
    moverStickers('5-GO-2-2', '5-P-2-2', '5-T-0-0', '5-S-2-2') //mover aristas
    moverStickers('5-P-2-0', '5-T-0-2', '5-S-2-0', '5-GO-2-0') //mover aristas
}


function f5() {
    moverStickers('5-GO-1-0', '5-GO-2-1', '5-GO-1-2', '5-GO-0-1') //mover esquinas
    moverStickers('5-GO-2-0', '5-GO-2-2', '5-GO-0-2', '5-GO-0-0') //mover aristas

    moverStickers('5-S-1-2', '5-GM-0-1', '5-P-1-0', '5-O-2-1') //mover esquinas
    moverStickers('5-GM-0-0', '5-P-2-0', '5-O-2-2', '5-S-0-2') //mover aristas
    moverStickers('5-S-2-2', '5-GM-0-2', '5-P-0-0', '5-O-2-0') //mover aristas
}

function fp5() {
    moverStickers('5-GO-0-1', '5-GO-1-2', '5-GO-2-1', '5-GO-1-0') //mover esquinas
    moverStickers('5-GO-0-0', '5-GO-0-2', '5-GO-2-2', '5-GO-2-0') //mover aristas

    moverStickers('5-O-2-1', '5-P-1-0', '5-GM-0-1', '5-S-1-2') //mover esquinas
    moverStickers('5-S-0-2', '5-O-2-2', '5-P-2-0', '5-GM-0-0') //mover aristas
    moverStickers('5-O-2-0', '5-P-0-0', '5-GM-0-2', '5-S-2-2') //mover aristas
}


function b5() {
    moverStickers('5-T-1-0', '5-T-2-1', '5-T-1-2', '5-T-0-1') //mover esquinas
    moverStickers('5-T-2-0', '5-T-2-2', '5-T-0-2', '5-T-0-0') //mover aristas

    moverStickers('5-S-1-0', '5-O-0-1', '5-P-1-2', '5-GM-2-1') //mover esquinas
    moverStickers('5-O-0-0', '5-P-0-2', '5-GM-2-2', '5-S-2-0') //mover aristas
    moverStickers('5-S-0-0', '5-O-0-2', '5-P-2-2', '5-GM-2-0') //mover aristas
}

function bp5() {
    moverStickers('5-T-0-1', '5-T-1-2', '5-T-2-1', '5-T-1-0') //mover esquinas
    moverStickers('5-T-0-0', '5-T-0-2', '5-T-2-2', '5-T-2-0') //mover aristas

    moverStickers('5-GM-2-1', '5-P-1-2', '5-O-0-1', '5-S-1-0') //mover esquinas
    moverStickers('5-S-2-0', '5-GM-2-2', '5-P-0-2', '5-O-0-0') //mover aristas
    moverStickers('5-GM-2-0', '5-P-2-2', '5-O-0-2', '5-S-0-0') //mover aristas
}