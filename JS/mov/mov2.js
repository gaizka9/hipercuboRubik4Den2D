const cuboV2 = document.getElementById('cubo2');
    let visibilidad2 = cuboV2.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad2) {
        const estiloCubo2 = window.getComputedStyle(cuboV2);
        visibilidad2 = estiloCubo2.visibility;
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


if (visibilidad2 === "visible") {

    console.log('cubo 2 Visible ')

    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp2()

        }else if (event.key === 'm' || event.key === 'M') { 

            m2()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep2()

        }else if (event.key === 'e' || event.key === 'E') { 

            e2()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp2()

        }else if (event.key === 's' || event.key === 'S') { 

            s2()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp2()

        }else if (event.key === 'r' || event.key === 'R') { 

            r2()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp2()

        }else if (event.key === 'l' || event.key === 'L') { 

            l2()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up2()

        }else if (event.key === 'u' || event.key === 'U') { 

            u2()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp2()

        }else if (event.key === 'd' || event.key === 'D') { 

            d2()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp2()

        }else if (event.key === 'f' || event.key === 'F') { 

            f2()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp2()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b2()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m2(); rp2(); l2();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp2(); r2(); lp2();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e2(); up2(); d2();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep2(); u2(); dp2();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp2(); fp2(); b2();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s2(); f2(); bp2();
        }
    });
}else{
    console.log('cubo 2 Oculto ')
}

function m2(){
    moverStickers('2-T-1-1', '2-Y-1-1', '2-BL-1-1', '2-C-1-1') //mover centros
    moverStickers('2-T-0-1', '2-Y-0-1', '2-BL-0-1', '2-C-0-1') //mover esquinas
    moverStickers('2-T-2-1', '2-Y-2-1', '2-BL-2-1', '2-C-2-1') //mover esquinas
}

function mp2() {
    moverStickers('2-C-1-1', '2-BL-1-1', '2-Y-1-1', '2-T-1-1') //mover centros
    moverStickers('2-C-0-1', '2-BL-0-1', '2-Y-0-1', '2-T-0-1') //mover esquinas
    moverStickers('2-C-2-1', '2-BL-2-1', '2-Y-2-1', '2-T-2-1') //mover esquinas
}


function e2(){
    moverStickers('2-L-1-1', '2-C-1-1', '2-PH-1-1', '2-Y-1-1') //mover centros
    moverStickers('2-L-1-2', '2-C-1-0', '2-PH-1-2', '2-Y-1-2') //mover esquinas
    moverStickers('2-L-1-0', '2-C-1-2', '2-PH-1-0', '2-Y-1-0') //mover esquinas
}

function ep2(){
    moverStickers('2-Y-1-1', '2-PH-1-1', '2-C-1-1', '2-L-1-1') //mover centros
    moverStickers('2-Y-1-2', '2-PH-1-2', '2-C-1-0', '2-L-1-2') //mover esquinas
    moverStickers('2-Y-1-0', '2-PH-1-0', '2-C-1-2', '2-L-1-0') //mover esquinas
}


function s2(){
    moverStickers('2-L-1-1', '2-T-1-1', '2-PH-1-1', '2-BL-1-1') //mover centros
    moverStickers('2-L-2-1', '2-T-1-2', '2-PH-0-1', '2-BL-1-0') //mover esquinas
    moverStickers('2-L-0-1', '2-T-1-0', '2-PH-2-1', '2-BL-1-2') //mover esquinas
}

function sp2(){
    moverStickers('2-BL-1-1', '2-PH-1-1', '2-T-1-1', '2-L-1-1') //mover centros
    moverStickers('2-BL-1-0', '2-PH-0-1', '2-T-1-2', '2-L-2-1') //mover esquinas
    moverStickers('2-BL-1-2', '2-PH-2-1', '2-T-1-0', '2-L-0-1') //mover esquinas
}


function r2() {
    moverStickers('2-PH-1-0', '2-PH-2-1', '2-PH-1-2', '2-PH-0-1') //mover esquinas
    moverStickers('2-PH-2-0', '2-PH-2-2', '2-PH-0-2', '2-PH-0-0') //mover aristas

    moverStickers('2-Y-1-2', '2-T-1-2', '2-C-1-2', '2-BL-1-2') //mover esquinas
    moverStickers('2-T-0-2', '2-C-0-2', '2-BL-0-2', '2-Y-0-2') //mover aristas
    moverStickers('2-C-2-2', '2-BL-2-2', '2-Y-2-2', '2-T-2-2') //mover aristas
}

function rp2() {
    moverStickers('2-PH-0-1', '2-PH-1-2', '2-PH-2-1', '2-PH-1-0') //mover esquinas
    moverStickers('2-PH-0-0', '2-PH-0-2', '2-PH-2-2', '2-PH-2-0') //mover aristas
        
    moverStickers('2-BL-1-2', '2-C-1-2', '2-T-1-2', '2-Y-1-2') //mover esquinas
    moverStickers('2-Y-0-2', '2-BL-0-2', '2-C-0-2', '2-T-0-2') //mover aristas
    moverStickers('2-BL-2-2', '2-C-2-2', '2-T-2-2', '2-Y-2-2') //mover aristas
}

function l2() {
    moverStickers('2-L-1-0', '2-L-2-1', '2-L-1-2', '2-L-0-1') //mover esquinas
    moverStickers('2-L-2-0', '2-L-2-2', '2-L-0-2', '2-L-0-0') //mover aristas

    moverStickers('2-C-1-0', '2-T-1-0', '2-Y-1-0', '2-BL-1-0') //mover esquinas
    moverStickers('2-Y-2-0', '2-BL-2-0', '2-C-2-0', '2-T-2-0') //mover aristas
    moverStickers('2-T-0-0', '2-Y-0-0', '2-BL-0-0', '2-C-0-0') //mover aristas
}

function lp2() {
    moverStickers('2-L-0-1', '2-L-1-2', '2-L-2-1', '2-L-1-0') //mover esquinas
    moverStickers('2-L-0-0', '2-L-0-2', '2-L-2-2', '2-L-2-0') //mover aristas

    moverStickers('2-BL-1-0', '2-Y-1-0', '2-T-1-0', '2-C-1-0') //mover esquinas
    moverStickers('2-T-2-0', '2-C-2-0', '2-BL-2-0', '2-Y-2-0') //mover aristas
    moverStickers('2-BL-0-0', '2-Y-0-0', '2-T-0-0', '2-C-0-0') //mover aristas
}


function u2() {
    moverStickers('2-BL-1-0', '2-BL-2-1', '2-BL-1-2', '2-BL-0-1') //mover esquinas
    moverStickers('2-BL-2-0', '2-BL-2-2', '2-BL-0-2', '2-BL-0-0') //mover aristas

    moverStickers('2-L-0-1', '2-Y-0-1', '2-PH-0-1', '2-C-2-1') //mover esquinas
    moverStickers('2-Y-0-0', '2-PH-0-0', '2-C-2-2', '2-L-0-0') //mover aristas
    moverStickers('2-L-0-2', '2-Y-0-2', '2-PH-0-2', '2-C-2-0') //mover aristas
}

function up2() {
    moverStickers('2-BL-0-1', '2-BL-1-2', '2-BL-2-1', '2-BL-1-0') //mover esquinas
    moverStickers('2-BL-0-0', '2-BL-0-2', '2-BL-2-2', '2-BL-2-0') //mover aristas
        
    moverStickers('2-C-2-1', '2-PH-0-1', '2-Y-0-1', '2-L-0-1') //mover esquinas
    moverStickers('2-L-0-0', '2-C-2-2', '2-PH-0-0', '2-Y-0-0') //mover aristas
    moverStickers('2-C-2-0', '2-PH-0-2', '2-Y-0-2', '2-L-0-2') //mover aristas 
}

function d2() {
    moverStickers('2-T-0-1', '2-T-1-0', '2-T-2-1', '2-T-1-2') //mover esquinas
    moverStickers('2-T-0-0', '2-T-2-0', '2-T-2-2', '2-T-0-2') //mover aristas

    moverStickers('2-Y-2-1', '2-L-2-1', '2-C-0-1', '2-PH-2-1') //mover esquinas
    moverStickers('2-L-2-2', '2-C-0-0', '2-PH-2-2', '2-Y-2-2') //mover aristas
    moverStickers('2-Y-2-0', '2-L-2-0', '2-C-0-2', '2-PH-2-0') //mover aristas
}

function dp2() {
    moverStickers('2-T-1-2', '2-T-2-1', '2-T-1-0', '2-T-0-1') //mover esquinas
    moverStickers('2-T-0-2', '2-T-2-2', '2-T-2-0', '2-T-0-0') //mover aristas

    moverStickers('2-PH-2-1', '2-C-0-1', '2-L-2-1', '2-Y-2-1') //mover esquinas
    moverStickers('2-Y-2-2', '2-PH-2-2', '2-C-0-0', '2-L-2-2') //mover aristas
    moverStickers('2-PH-2-0', '2-C-0-2', '2-L-2-0', '2-Y-2-0') //mover aristas
}


function f2() {
    moverStickers('2-Y-1-0', '2-Y-2-1', '2-Y-1-2', '2-Y-0-1') //mover esquinas
    moverStickers('2-Y-2-0', '2-Y-2-2', '2-Y-0-2', '2-Y-0-0') //mover aristas

    moverStickers('2-L-1-2', '2-T-0-1', '2-PH-1-0', '2-BL-2-1') //mover esquinas
    moverStickers('2-T-0-0', '2-PH-2-0', '2-BL-2-2', '2-L-0-2') //mover aristas
    moverStickers('2-L-2-2', '2-T-0-2', '2-PH-0-0', '2-BL-2-0') //mover aristas
}

function fp2() {
    moverStickers('2-Y-0-1', '2-Y-1-2', '2-Y-2-1', '2-Y-1-0') //mover esquinas
    moverStickers('2-Y-0-0', '2-Y-0-2', '2-Y-2-2', '2-Y-2-0') //mover aristas

    moverStickers('2-BL-2-1', '2-PH-1-0', '2-T-0-1', '2-L-1-2') //mover esquinas
    moverStickers('2-L-0-2', '2-BL-2-2', '2-PH-2-0', '2-T-0-0') //mover aristas
    moverStickers('2-BL-2-0', '2-PH-0-0', '2-T-0-2', '2-L-2-2') //mover aristas
}


function b2() {
    moverStickers('2-C-1-0', '2-C-2-1', '2-C-1-2', '2-C-0-1') //mover esquinas
    moverStickers('2-C-2-0', '2-C-2-2', '2-C-0-2', '2-C-0-0') //mover aristas

    moverStickers('2-L-1-0', '2-BL-0-1', '2-PH-1-2', '2-T-2-1') //mover esquinas
    moverStickers('2-BL-0-0', '2-PH-0-2', '2-T-2-2', '2-L-2-0') //mover aristas
    moverStickers('2-L-0-0', '2-BL-0-2', '2-PH-2-2', '2-T-2-0') //mover aristas
}

function bp2() {
    moverStickers('2-C-0-1', '2-C-1-2', '2-C-2-1', '2-C-1-0') //mover esquinas
    moverStickers('2-C-0-0', '2-C-0-2', '2-C-2-2', '2-C-2-0') //mover aristas

    moverStickers('2-T-2-1', '2-PH-1-2', '2-BL-0-1', '2-L-1-0') //mover esquinas
    moverStickers('2-L-2-0', '2-T-2-2', '2-PH-0-2', '2-BL-0-0') //mover aristas
    moverStickers('2-T-2-0', '2-PH-2-2', '2-BL-0-2', '2-L-0-0') //mover aristas
}