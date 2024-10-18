const cuboV6 = document.getElementById('cubo6');
    let visibilidad6 = cuboV6.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad6) {
        const estiloCubo6 = window.getComputedStyle(cuboV6);
        visibilidad6 = estiloCubo6.visibility;
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


if (visibilidad6 === "visible") {

    console.log('cubo 6 Visible ')

    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp6()

        }else if (event.key === 'm' || event.key === 'M') { 

            m6()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep6()

        }else if (event.key === 'e' || event.key === 'E') { 

            e6()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp6()

        }else if (event.key === 's' || event.key === 'S') { 

            s6()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp6()

        }else if (event.key === 'r' || event.key === 'R') { 

            r6()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp6()

        }else if (event.key === 'l' || event.key === 'L') { 

            l6()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up6()

        }else if (event.key === 'u' || event.key === 'U') { 

            u6()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp6()

        }else if (event.key === 'd' || event.key === 'D') { 

            d6()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp6()

        }else if (event.key === 'f' || event.key === 'F') { 

            f6()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp6()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b6()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m6(); rp6(); l6();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp6(); r6(); lp6();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e6(); up6(); d6();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep6(); u6(); dp6();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp6(); fp6(); b6();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s6(); f6(); bp6();
        }
    });
}else{
    console.log('cubo 6 Oculto ')
}

function m6(){
    moverStickers('6-P-1-1', '6-BS-1-1', '6-GD-1-1', '6-PH-1-1') //mover centros
    moverStickers('6-P-0-1', '6-BS-0-1', '6-GD-0-1', '6-PH-0-1') //mover esquinas
    moverStickers('6-P-2-1', '6-BS-2-1', '6-GD-2-1', '6-PH-2-1') //mover esquinas
}

function mp6() {
    moverStickers('6-PH-1-1', '6-GD-1-1', '6-BS-1-1', '6-P-1-1') //mover centros
    moverStickers('6-PH-0-1', '6-GD-0-1', '6-BS-0-1', '6-P-0-1') //mover esquinas
    moverStickers('6-PH-2-1', '6-GD-2-1', '6-BS-2-1', '6-P-2-1') //mover esquinas
}


function e6(){
    moverStickers('6-G-1-1', '6-PH-1-1', '6-CO-1-1', '6-BS-1-1') //mover centros
    moverStickers('6-G-1-2', '6-PH-1-0', '6-CO-1-2', '6-BS-1-2') //mover esquinas
    moverStickers('6-G-1-0', '6-PH-1-2', '6-CO-1-0', '6-BS-1-0') //mover esquinas
}

function ep6(){
    moverStickers('6-BS-1-1', '6-CO-1-1', '6-PH-1-1', '6-G-1-1') //mover centros
    moverStickers('6-BS-1-2', '6-CO-1-2', '6-PH-1-0', '6-G-1-2') //mover esquinas
    moverStickers('6-BS-1-0', '6-CO-1-0', '6-PH-1-2', '6-G-1-0') //mover esquinas
}


function s6(){
    moverStickers('6-G-1-1', '6-P-1-1', '6-CO-1-1', '6-GD-1-1') //mover centros
    moverStickers('6-G-2-1', '6-P-1-2', '6-CO-0-1', '6-GD-1-0') //mover esquinas
    moverStickers('6-G-0-1', '6-P-1-0', '6-CO-2-1', '6-GD-1-2') //mover esquinas
}

function sp6(){
    moverStickers('6-GD-1-1', '6-CO-1-1', '6-P-1-1', '6-G-1-1') //mover centros
    moverStickers('6-GD-1-0', '6-CO-0-1', '6-P-1-2', '6-G-2-1') //mover esquinas
    moverStickers('6-GD-1-2', '6-CO-2-1', '6-P-1-0', '6-G-0-1') //mover esquinas
}


function r6() {
    moverStickers('6-CO-1-0', '6-CO-2-1', '6-CO-1-2', '6-CO-0-1') //mover esquinas
    moverStickers('6-CO-2-0', '6-CO-2-2', '6-CO-0-2', '6-CO-0-0') //mover aristas

    moverStickers('6-BS-1-2', '6-P-1-2', '6-PH-1-2', '6-GD-1-2') //mover esquinas
    moverStickers('6-P-0-2', '6-PH-0-2', '6-GD-0-2', '6-BS-0-2') //mover aristas
    moverStickers('6-PH-2-2', '6-GD-2-2', '6-BS-2-2', '6-P-2-2') //mover aristas
}

function rp6() {
    moverStickers('6-CO-0-1', '6-CO-1-2', '6-CO-2-1', '6-CO-1-0') //mover esquinas
    moverStickers('6-CO-0-0', '6-CO-0-2', '6-CO-2-2', '6-CO-2-0') //mover aristas
        
    moverStickers('6-GD-1-2', '6-PH-1-2', '6-P-1-2', '6-BS-1-2') //mover esquinas
    moverStickers('6-BS-0-2', '6-GD-0-2', '6-PH-0-2', '6-P-0-2') //mover aristas
    moverStickers('6-GD-2-2', '6-PH-2-2', '6-P-2-2', '6-BS-2-2') //mover aristas
}

function l6() {
    moverStickers('6-G-1-0', '6-G-2-1', '6-G-1-2', '6-G-0-1') //mover esquinas
    moverStickers('6-G-2-0', '6-G-2-2', '6-G-0-2', '6-G-0-0') //mover aristas

    moverStickers('6-PH-1-0', '6-P-1-0', '6-BS-1-0', '6-GD-1-0') //mover esquinas
    moverStickers('6-BS-2-0', '6-GD-2-0', '6-PH-2-0', '6-P-2-0') //mover aristas
    moverStickers('6-P-0-0', '6-BS-0-0', '6-GD-0-0', '6-PH-0-0') //mover aristas
}

function lp6() {
    moverStickers('6-G-0-1', '6-G-1-2', '6-G-2-1', '6-G-1-0') //mover esquinas
    moverStickers('6-G-0-0', '6-G-0-2', '6-G-2-2', '6-G-2-0') //mover aristas

    moverStickers('6-GD-1-0', '6-BS-1-0', '6-P-1-0', '6-PH-1-0') //mover esquinas
    moverStickers('6-P-2-0', '6-PH-2-0', '6-GD-2-0', '6-BS-2-0') //mover aristas
    moverStickers('6-GD-0-0', '6-BS-0-0', '6-P-0-0', '6-PH-0-0') //mover aristas
}


function u6() {
    moverStickers('6-GD-1-0', '6-GD-2-1', '6-GD-1-2', '6-GD-0-1') //mover esquinas
    moverStickers('6-GD-2-0', '6-GD-2-2', '6-GD-0-2', '6-GD-0-0') //mover aristas

    moverStickers('6-G-0-1', '6-BS-0-1', '6-CO-0-1', '6-PH-2-1') //mover esquinas
    moverStickers('6-BS-0-0', '6-CO-0-0', '6-PH-2-2', '6-G-0-0') //mover aristas
    moverStickers('6-G-0-2', '6-BS-0-2', '6-CO-0-2', '6-PH-2-0') //mover aristas
}

function up6() {
    moverStickers('6-GD-0-1', '6-GD-1-2', '6-GD-2-1', '6-GD-1-0') //mover esquinas
    moverStickers('6-GD-0-0', '6-GD-0-2', '6-GD-2-2', '6-GD-2-0') //mover aristas
        
    moverStickers('6-PH-2-1', '6-CO-0-1', '6-BS-0-1', '6-G-0-1') //mover esquinas
    moverStickers('6-G-0-0', '6-PH-2-2', '6-CO-0-0', '6-BS-0-0') //mover aristas
    moverStickers('6-PH-2-0', '6-CO-0-2', '6-BS-0-2', '6-G-0-2') //mover aristas 
}

function d6() {
    moverStickers('6-P-0-1', '6-P-1-0', '6-P-2-1', '6-P-1-2') //mover esquinas
    moverStickers('6-P-0-0', '6-P-2-0', '6-P-2-2', '6-P-0-2') //mover aristas

    moverStickers('6-BS-2-1', '6-G-2-1', '6-PH-0-1', '6-CO-2-1') //mover esquinas
    moverStickers('6-G-2-2', '6-PH-0-0', '6-CO-2-2', '6-BS-2-2') //mover aristas
    moverStickers('6-BS-2-0', '6-G-2-0', '6-PH-0-2', '6-CO-2-0') //mover aristas
}

function dp6() {
    moverStickers('6-P-1-2', '6-P-2-1', '6-P-1-0', '6-P-0-1') //mover esquinas
    moverStickers('6-P-0-2', '6-P-2-2', '6-P-2-0', '6-P-0-0') //mover aristas

    moverStickers('6-CO-2-1', '6-PH-0-1', '6-G-2-1', '6-BS-2-1') //mover esquinas
    moverStickers('6-BS-2-2', '6-CO-2-2', '6-PH-0-0', '6-G-2-2') //mover aristas
    moverStickers('6-CO-2-0', '6-PH-0-2', '6-G-2-0', '6-BS-2-0') //mover aristas
}


function f6() {
    moverStickers('6-BS-1-0', '6-BS-2-1', '6-BS-1-2', '6-BS-0-1') //mover esquinas
    moverStickers('6-BS-2-0', '6-BS-2-2', '6-BS-0-2', '6-BS-0-0') //mover aristas

    moverStickers('6-G-1-2', '6-P-0-1', '6-CO-1-0', '6-GD-2-1') //mover esquinas
    moverStickers('6-P-0-0', '6-CO-2-0', '6-GD-2-2', '6-G-0-2') //mover aristas
    moverStickers('6-G-2-2', '6-P-0-2', '6-CO-0-0', '6-GD-2-0') //mover aristas
}

function fp6() {
    moverStickers('6-BS-0-1', '6-BS-1-2', '6-BS-2-1', '6-BS-1-0') //mover esquinas
    moverStickers('6-BS-0-0', '6-BS-0-2', '6-BS-2-2', '6-BS-2-0') //mover aristas

    moverStickers('6-GD-2-1', '6-CO-1-0', '6-P-0-1', '6-G-1-2') //mover esquinas
    moverStickers('6-G-0-2', '6-GD-2-2', '6-CO-2-0', '6-P-0-0') //mover aristas
    moverStickers('6-GD-2-0', '6-CO-0-0', '6-P-0-2', '6-G-2-2') //mover aristas
}


function b6() {
    moverStickers('6-PH-1-0', '6-PH-2-1', '6-PH-1-2', '6-PH-0-1') //mover esquinas
    moverStickers('6-PH-2-0', '6-PH-2-2', '6-PH-0-2', '6-PH-0-0') //mover aristas

    moverStickers('6-G-1-0', '6-GD-0-1', '6-CO-1-2', '6-P-2-1') //mover esquinas
    moverStickers('6-GD-0-0', '6-CO-0-2', '6-P-2-2', '6-G-2-0') //mover aristas
    moverStickers('6-G-0-0', '6-GD-0-2', '6-CO-2-2', '6-P-2-0') //mover aristas
}

function bp6() {
    moverStickers('6-PH-0-1', '6-PH-1-2', '6-PH-2-1', '6-PH-1-0') //mover esquinas
    moverStickers('6-PH-0-0', '6-PH-0-2', '6-PH-2-2', '6-PH-2-0') //mover aristas

    moverStickers('6-P-2-1', '6-CO-1-2', '6-GD-0-1', '6-G-1-0') //mover esquinas
    moverStickers('6-G-2-0', '6-P-2-2', '6-CO-0-2', '6-GD-0-0') //mover aristas
    moverStickers('6-P-2-0', '6-CO-2-2', '6-GD-0-2', '6-G-0-0') //mover aristas
}