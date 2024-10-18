const cuboV8 = document.getElementById('cubo8');
    let visibilidad8 = cuboV8.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad8) {
        const estiloCubo8 = window.getComputedStyle(cuboV8);
        visibilidad8 = estiloCubo8.visibility;
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


if (visibilidad8 === "visible") {

    console.log('cubo 8 Visible ')

    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp8()

        }else if (event.key === 'm' || event.key === 'M') { 

            m8()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep8()

        }else if (event.key === 'e' || event.key === 'E') { 

            e8()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp8()

        }else if (event.key === 's' || event.key === 'S') { 

            s8()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp8()

        }else if (event.key === 'r' || event.key === 'R') { 

            r8()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp8()

        }else if (event.key === 'l' || event.key === 'L') { 

            l8()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up8()

        }else if (event.key === 'u' || event.key === 'U') { 

            u8()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp8()

        }else if (event.key === 'd' || event.key === 'D') { 

            d8()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp8()

        }else if (event.key === 'f' || event.key === 'F') { 

            f8()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp8()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b8()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m8(); rp8(); l8();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp8(); r8(); lp8();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e8(); up8(); d8();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep8(); u8(); dp8();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp8(); fp8(); b8();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s8(); f8(); bp8();
        }
    });
}else{
    console.log('cubo 8 Oculto ')
}

function m8(){
    moverStickers('8-GM-1-1', '8-RD-1-1', '8-V-1-1', '8-C-1-1') //mover centros
    moverStickers('8-GM-0-1', '8-RD-0-1', '8-V-0-1', '8-C-0-1') //mover esquinas
    moverStickers('8-GM-2-1', '8-RD-2-1', '8-V-2-1', '8-C-2-1') //mover esquinas
}

function mp8() {
    moverStickers('8-C-1-1', '8-V-1-1', '8-RD-1-1', '8-GM-1-1') //mover centros
    moverStickers('8-C-0-1', '8-V-0-1', '8-RD-0-1', '8-GM-0-1') //mover esquinas
    moverStickers('8-C-2-1', '8-V-2-1', '8-RD-2-1', '8-GM-2-1') //mover esquinas
}


function e8(){
    moverStickers('8-MO-1-1', '8-C-1-1', '8-CO-1-1', '8-RD-1-1') //mover centros
    moverStickers('8-MO-1-2', '8-C-1-0', '8-CO-1-2', '8-RD-1-2') //mover esquinas
    moverStickers('8-MO-1-0', '8-C-1-2', '8-CO-1-0', '8-RD-1-0') //mover esquinas
}

function ep8(){
    moverStickers('8-RD-1-1', '8-CO-1-1', '8-C-1-1', '8-MO-1-1') //mover centros
    moverStickers('8-RD-1-2', '8-CO-1-2', '8-C-1-0', '8-MO-1-2') //mover esquinas
    moverStickers('8-RD-1-0', '8-CO-1-0', '8-C-1-2', '8-MO-1-0') //mover esquinas
}


function s8(){
    moverStickers('8-MO-1-1', '8-GM-1-1', '8-CO-1-1', '8-V-1-1') //mover centros
    moverStickers('8-MO-2-1', '8-GM-1-2', '8-CO-0-1', '8-V-1-0') //mover esquinas
    moverStickers('8-MO-0-1', '8-GM-1-0', '8-CO-2-1', '8-V-1-2') //mover esquinas
}

function sp8(){
    moverStickers('8-V-1-1', '8-CO-1-1', '8-GM-1-1', '8-MO-1-1') //mover centros
    moverStickers('8-V-1-0', '8-CO-0-1', '8-GM-1-2', '8-MO-2-1') //mover esquinas
    moverStickers('8-V-1-2', '8-CO-2-1', '8-GM-1-0', '8-MO-0-1') //mover esquinas
}


function r8() {
    moverStickers('8-CO-1-0', '8-CO-2-1', '8-CO-1-2', '8-CO-0-1') //mover esquinas
    moverStickers('8-CO-2-0', '8-CO-2-2', '8-CO-0-2', '8-CO-0-0') //mover aristas

    moverStickers('8-RD-1-2', '8-GM-1-2', '8-C-1-2', '8-V-1-2') //mover esquinas
    moverStickers('8-GM-0-2', '8-C-0-2', '8-V-0-2', '8-RD-0-2') //mover aristas
    moverStickers('8-C-2-2', '8-V-2-2', '8-RD-2-2', '8-GM-2-2') //mover aristas
}

function rp8() {
    moverStickers('8-CO-0-1', '8-CO-1-2', '8-CO-2-1', '8-CO-1-0') //mover esquinas
    moverStickers('8-CO-0-0', '8-CO-0-2', '8-CO-2-2', '8-CO-2-0') //mover aristas
        
    moverStickers('8-V-1-2', '8-C-1-2', '8-GM-1-2', '8-RD-1-2') //mover esquinas
    moverStickers('8-RD-0-2', '8-V-0-2', '8-C-0-2', '8-GM-0-2') //mover aristas
    moverStickers('8-V-2-2', '8-C-2-2', '8-GM-2-2', '8-RD-2-2') //mover aristas
}

function l8() {
    moverStickers('8-MO-1-0', '8-MO-2-1', '8-MO-1-2', '8-MO-0-1') //mover esquinas
    moverStickers('8-MO-2-0', '8-MO-2-2', '8-MO-0-2', '8-MO-0-0') //mover aristas

    moverStickers('8-C-1-0', '8-GM-1-0', '8-RD-1-0', '8-V-1-0') //mover esquinas
    moverStickers('8-RD-2-0', '8-V-2-0', '8-C-2-0', '8-GM-2-0') //mover aristas
    moverStickers('8-GM-0-0', '8-RD-0-0', '8-V-0-0', '8-C-0-0') //mover aristas
}

function lp8() {
    moverStickers('8-MO-0-1', '8-MO-1-2', '8-MO-2-1', '8-MO-1-0') //mover esquinas
    moverStickers('8-MO-0-0', '8-MO-0-2', '8-MO-2-2', '8-MO-2-0') //mover aristas

    moverStickers('8-V-1-0', '8-RD-1-0', '8-GM-1-0', '8-C-1-0') //mover esquinas
    moverStickers('8-GM-2-0', '8-C-2-0', '8-V-2-0', '8-RD-2-0') //mover aristas
    moverStickers('8-V-0-0', '8-RD-0-0', '8-GM-0-0', '8-C-0-0') //mover aristas
}


function u8() {
    moverStickers('8-V-1-0', '8-V-2-1', '8-V-1-2', '8-V-0-1') //mover esquinas
    moverStickers('8-V-2-0', '8-V-2-2', '8-V-0-2', '8-V-0-0') //mover aristas

    moverStickers('8-MO-0-1', '8-RD-0-1', '8-CO-0-1', '8-C-2-1') //mover esquinas
    moverStickers('8-RD-0-0', '8-CO-0-0', '8-C-2-2', '8-MO-0-0') //mover aristas
    moverStickers('8-MO-0-2', '8-RD-0-2', '8-CO-0-2', '8-C-2-0') //mover aristas
}

function up8() {
    moverStickers('8-V-0-1', '8-V-1-2', '8-V-2-1', '8-V-1-0') //mover esquinas
    moverStickers('8-V-0-0', '8-V-0-2', '8-V-2-2', '8-V-2-0') //mover aristas
        
    moverStickers('8-C-2-1', '8-CO-0-1', '8-RD-0-1', '8-MO-0-1') //mover esquinas
    moverStickers('8-MO-0-0', '8-C-2-2', '8-CO-0-0', '8-RD-0-0') //mover aristas
    moverStickers('8-C-2-0', '8-CO-0-2', '8-RD-0-2', '8-MO-0-2') //mover aristas 
}

function d8() {
    moverStickers('8-GM-0-1', '8-GM-1-0', '8-GM-2-1', '8-GM-1-2') //mover esquinas
    moverStickers('8-GM-0-0', '8-GM-2-0', '8-GM-2-2', '8-GM-0-2') //mover aristas

    moverStickers('8-RD-2-1', '8-MO-2-1', '8-C-0-1', '8-CO-2-1') //mover esquinas
    moverStickers('8-MO-2-2', '8-C-0-0', '8-CO-2-2', '8-RD-2-2') //mover aristas
    moverStickers('8-RD-2-0', '8-MO-2-0', '8-C-0-2', '8-CO-2-0') //mover aristas
}

function dp8() {
    moverStickers('8-GM-1-2', '8-GM-2-1', '8-GM-1-0', '8-GM-0-1') //mover esquinas
    moverStickers('8-GM-0-2', '8-GM-2-2', '8-GM-2-0', '8-GM-0-0') //mover aristas

    moverStickers('8-CO-2-1', '8-C-0-1', '8-MO-2-1', '8-RD-2-1') //mover esquinas
    moverStickers('8-RD-2-2', '8-CO-2-2', '8-C-0-0', '8-MO-2-2') //mover aristas
    moverStickers('8-CO-2-0', '8-C-0-2', '8-MO-2-0', '8-RD-2-0') //mover aristas
}


function f8() {
    moverStickers('8-RD-1-0', '8-RD-2-1', '8-RD-1-2', '8-RD-0-1') //mover esquinas
    moverStickers('8-RD-2-0', '8-RD-2-2', '8-RD-0-2', '8-RD-0-0') //mover aristas

    moverStickers('8-MO-1-2', '8-GM-0-1', '8-CO-1-0', '8-V-2-1') //mover esquinas
    moverStickers('8-GM-0-0', '8-CO-2-0', '8-V-2-2', '8-MO-0-2') //mover aristas
    moverStickers('8-MO-2-2', '8-GM-0-2', '8-CO-0-0', '8-V-2-0') //mover aristas
}

function fp8() {
    moverStickers('8-RD-0-1', '8-RD-1-2', '8-RD-2-1', '8-RD-1-0') //mover esquinas
    moverStickers('8-RD-0-0', '8-RD-0-2', '8-RD-2-2', '8-RD-2-0') //mover aristas

    moverStickers('8-V-2-1', '8-CO-1-0', '8-GM-0-1', '8-MO-1-2') //mover esquinas
    moverStickers('8-MO-0-2', '8-V-2-2', '8-CO-2-0', '8-GM-0-0') //mover aristas
    moverStickers('8-V-2-0', '8-CO-0-0', '8-GM-0-2', '8-MO-2-2') //mover aristas
}


function b8() {
    moverStickers('8-C-1-0', '8-C-2-1', '8-C-1-2', '8-C-0-1') //mover esquinas
    moverStickers('8-C-2-0', '8-C-2-2', '8-C-0-2', '8-C-0-0') //mover aristas

    moverStickers('8-MO-1-0', '8-V-0-1', '8-CO-1-2', '8-GM-2-1') //mover esquinas
    moverStickers('8-V-0-0', '8-CO-0-2', '8-GM-2-2', '8-MO-2-0') //mover aristas
    moverStickers('8-MO-0-0', '8-V-0-2', '8-CO-2-2', '8-GM-2-0') //mover aristas
}

function bp8() {
    moverStickers('8-C-0-1', '8-C-1-2', '8-C-2-1', '8-C-1-0') //mover esquinas
    moverStickers('8-C-0-0', '8-C-0-2', '8-C-2-2', '8-C-2-0') //mover aristas

    moverStickers('8-GM-2-1', '8-CO-1-2', '8-V-0-1', '8-MO-1-0') //mover esquinas
    moverStickers('8-MO-2-0', '8-GM-2-2', '8-CO-0-2', '8-V-0-0') //mover aristas
    moverStickers('8-GM-2-0', '8-CO-2-2', '8-V-0-2', '8-MO-0-0') //mover aristas
}