const cuboV7 = document.getElementById('cubo7');
    let visibilidad7 = cuboV7.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad7) {
        const estiloCubo7 = window.getComputedStyle(cuboV7);
        visibilidad7 = estiloCubo7.visibility;
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


if (visibilidad7 === "visible") {

    console.log('cubo 7 Visible ')

    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp7()

        }else if (event.key === 'm' || event.key === 'M') { 

            m7()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep7()

        }else if (event.key === 'e' || event.key === 'E') { 

            e7()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp7()

        }else if (event.key === 's' || event.key === 'S') { 

            s7()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp7()

        }else if (event.key === 'r' || event.key === 'R') { 

            r7()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp7()

        }else if (event.key === 'l' || event.key === 'L') { 

            l7()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up7()

        }else if (event.key === 'u' || event.key === 'U') { 

            u7()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp7()

        }else if (event.key === 'd' || event.key === 'D') { 

            d7()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp7()

        }else if (event.key === 'f' || event.key === 'F') { 

            f7()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp7()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b7()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m7(); rp7(); l7();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp7(); r7(); lp7();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e7(); up7(); d7();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep7(); u7(); dp7();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp7(); fp7(); b7();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s7(); f7(); bp7();
        }
    });
}else{
    console.log('cubo 7 Oculto ')
}

function m7(){
    moverStickers('7-S-1-1', '7-PS-1-1', '7-BR-1-1', '7-L-1-1') //mover centros
    moverStickers('7-S-0-1', '7-PS-0-1', '7-BR-0-1', '7-L-0-1') //mover esquinas
    moverStickers('7-S-2-1', '7-PS-2-1', '7-BR-2-1', '7-L-2-1') //mover esquinas
}

function mp7() {
    moverStickers('7-L-1-1', '7-BR-1-1', '7-PS-1-1', '7-S-1-1') //mover centros
    moverStickers('7-L-0-1', '7-BR-0-1', '7-PS-0-1', '7-S-0-1') //mover esquinas
    moverStickers('7-L-2-1', '7-BR-2-1', '7-PS-2-1', '7-S-2-1') //mover esquinas
}


function e7(){
    moverStickers('7-MO-1-1', '7-L-1-1', '7-B-1-1', '7-PS-1-1') //mover centros
    moverStickers('7-MO-1-2', '7-L-1-0', '7-B-1-2', '7-PS-1-2') //mover esquinas
    moverStickers('7-MO-1-0', '7-L-1-2', '7-B-1-0', '7-PS-1-0') //mover esquinas
}

function ep7(){
    moverStickers('7-PS-1-1', '7-B-1-1', '7-L-1-1', '7-MO-1-1') //mover centros
    moverStickers('7-PS-1-2', '7-B-1-2', '7-L-1-0', '7-MO-1-2') //mover esquinas
    moverStickers('7-PS-1-0', '7-B-1-0', '7-L-1-2', '7-MO-1-0') //mover esquinas
}


function s7(){
    moverStickers('7-MO-1-1', '7-S-1-1', '7-B-1-1', '7-BR-1-1') //mover centros
    moverStickers('7-MO-2-1', '7-S-1-2', '7-B-0-1', '7-BR-1-0') //mover esquinas
    moverStickers('7-MO-0-1', '7-S-1-0', '7-B-2-1', '7-BR-1-2') //mover esquinas
}

function sp7(){
    moverStickers('7-BR-1-1', '7-B-1-1', '7-S-1-1', '7-MO-1-1') //mover centros
    moverStickers('7-BR-1-0', '7-B-0-1', '7-S-1-2', '7-MO-2-1') //mover esquinas
    moverStickers('7-BR-1-2', '7-B-2-1', '7-S-1-0', '7-MO-0-1') //mover esquinas
}


function r7() {
    moverStickers('7-B-1-0', '7-B-2-1', '7-B-1-2', '7-B-0-1') //mover esquinas
    moverStickers('7-B-2-0', '7-B-2-2', '7-B-0-2', '7-B-0-0') //mover aristas

    moverStickers('7-PS-1-2', '7-S-1-2', '7-L-1-2', '7-BR-1-2') //mover esquinas
    moverStickers('7-S-0-2', '7-L-0-2', '7-BR-0-2', '7-PS-0-2') //mover aristas
    moverStickers('7-L-2-2', '7-BR-2-2', '7-PS-2-2', '7-S-2-2') //mover aristas
}

function rp7() {
    moverStickers('7-B-0-1', '7-B-1-2', '7-B-2-1', '7-B-1-0') //mover esquinas
    moverStickers('7-B-0-0', '7-B-0-2', '7-B-2-2', '7-B-2-0') //mover aristas
        
    moverStickers('7-BR-1-2', '7-L-1-2', '7-S-1-2', '7-PS-1-2') //mover esquinas
    moverStickers('7-PS-0-2', '7-BR-0-2', '7-L-0-2', '7-S-0-2') //mover aristas
    moverStickers('7-BR-2-2', '7-L-2-2', '7-S-2-2', '7-PS-2-2') //mover aristas
}

function l7() {
    moverStickers('7-MO-1-0', '7-MO-2-1', '7-MO-1-2', '7-MO-0-1') //mover esquinas
    moverStickers('7-MO-2-0', '7-MO-2-2', '7-MO-0-2', '7-MO-0-0') //mover aristas

    moverStickers('7-L-1-0', '7-S-1-0', '7-PS-1-0', '7-BR-1-0') //mover esquinas
    moverStickers('7-PS-2-0', '7-BR-2-0', '7-L-2-0', '7-S-2-0') //mover aristas
    moverStickers('7-S-0-0', '7-PS-0-0', '7-BR-0-0', '7-L-0-0') //mover aristas
}

function lp7() {
    moverStickers('7-MO-0-1', '7-MO-1-2', '7-MO-2-1', '7-MO-1-0') //mover esquinas
    moverStickers('7-MO-0-0', '7-MO-0-2', '7-MO-2-2', '7-MO-2-0') //mover aristas

    moverStickers('7-BR-1-0', '7-PS-1-0', '7-S-1-0', '7-L-1-0') //mover esquinas
    moverStickers('7-S-2-0', '7-L-2-0', '7-BR-2-0', '7-PS-2-0') //mover aristas
    moverStickers('7-BR-0-0', '7-PS-0-0', '7-S-0-0', '7-L-0-0') //mover aristas
}


function u7() {
    moverStickers('7-BR-1-0', '7-BR-2-1', '7-BR-1-2', '7-BR-0-1') //mover esquinas
    moverStickers('7-BR-2-0', '7-BR-2-2', '7-BR-0-2', '7-BR-0-0') //mover aristas

    moverStickers('7-MO-0-1', '7-PS-0-1', '7-B-0-1', '7-L-2-1') //mover esquinas
    moverStickers('7-PS-0-0', '7-B-0-0', '7-L-2-2', '7-MO-0-0') //mover aristas
    moverStickers('7-MO-0-2', '7-PS-0-2', '7-B-0-2', '7-L-2-0') //mover aristas
}

function up7() {
    moverStickers('7-BR-0-1', '7-BR-1-2', '7-BR-2-1', '7-BR-1-0') //mover esquinas
    moverStickers('7-BR-0-0', '7-BR-0-2', '7-BR-2-2', '7-BR-2-0') //mover aristas
        
    moverStickers('7-L-2-1', '7-B-0-1', '7-PS-0-1', '7-MO-0-1') //mover esquinas
    moverStickers('7-MO-0-0', '7-L-2-2', '7-B-0-0', '7-PS-0-0') //mover aristas
    moverStickers('7-L-2-0', '7-B-0-2', '7-PS-0-2', '7-MO-0-2') //mover aristas 
}

function d7() {
    moverStickers('7-S-0-1', '7-S-1-0', '7-S-2-1', '7-S-1-2') //mover esquinas
    moverStickers('7-S-0-0', '7-S-2-0', '7-S-2-2', '7-S-0-2') //mover aristas

    moverStickers('7-PS-2-1', '7-MO-2-1', '7-L-0-1', '7-B-2-1') //mover esquinas
    moverStickers('7-MO-2-2', '7-L-0-0', '7-B-2-2', '7-PS-2-2') //mover aristas
    moverStickers('7-PS-2-0', '7-MO-2-0', '7-L-0-2', '7-B-2-0') //mover aristas
}

function dp7() {
    moverStickers('7-S-1-2', '7-S-2-1', '7-S-1-0', '7-S-0-1') //mover esquinas
    moverStickers('7-S-0-2', '7-S-2-2', '7-S-2-0', '7-S-0-0') //mover aristas

    moverStickers('7-B-2-1', '7-L-0-1', '7-MO-2-1', '7-PS-2-1') //mover esquinas
    moverStickers('7-PS-2-2', '7-B-2-2', '7-L-0-0', '7-MO-2-2') //mover aristas
    moverStickers('7-B-2-0', '7-L-0-2', '7-MO-2-0', '7-PS-2-0') //mover aristas
}


function f7() {
    moverStickers('7-PS-1-0', '7-PS-2-1', '7-PS-1-2', '7-PS-0-1') //mover esquinas
    moverStickers('7-PS-2-0', '7-PS-2-2', '7-PS-0-2', '7-PS-0-0') //mover aristas

    moverStickers('7-MO-1-2', '7-S-0-1', '7-B-1-0', '7-BR-2-1') //mover esquinas
    moverStickers('7-S-0-0', '7-B-2-0', '7-BR-2-2', '7-MO-0-2') //mover aristas
    moverStickers('7-MO-2-2', '7-S-0-2', '7-B-0-0', '7-BR-2-0') //mover aristas
}

function fp7() {
    moverStickers('7-PS-0-1', '7-PS-1-2', '7-PS-2-1', '7-PS-1-0') //mover esquinas
    moverStickers('7-PS-0-0', '7-PS-0-2', '7-PS-2-2', '7-PS-2-0') //mover aristas

    moverStickers('7-BR-2-1', '7-B-1-0', '7-S-0-1', '7-MO-1-2') //mover esquinas
    moverStickers('7-MO-0-2', '7-BR-2-2', '7-B-2-0', '7-S-0-0') //mover aristas
    moverStickers('7-BR-2-0', '7-B-0-0', '7-S-0-2', '7-MO-2-2') //mover aristas
}


function b7() {
    moverStickers('7-L-1-0', '7-L-2-1', '7-L-1-2', '7-L-0-1') //mover esquinas
    moverStickers('7-L-2-0', '7-L-2-2', '7-L-0-2', '7-L-0-0') //mover aristas

    moverStickers('7-MO-1-0', '7-BR-0-1', '7-B-1-2', '7-S-2-1') //mover esquinas
    moverStickers('7-BR-0-0', '7-B-0-2', '7-S-2-2', '7-MO-2-0') //mover aristas
    moverStickers('7-MO-0-0', '7-BR-0-2', '7-B-2-2', '7-S-2-0') //mover aristas
}

function bp7() {
    moverStickers('7-L-0-1', '7-L-1-2', '7-L-2-1', '7-L-1-0') //mover esquinas
    moverStickers('7-L-0-0', '7-L-0-2', '7-L-2-2', '7-L-2-0') //mover aristas

    moverStickers('7-S-2-1', '7-B-1-2', '7-BR-0-1', '7-MO-1-0') //mover esquinas
    moverStickers('7-MO-2-0', '7-S-2-2', '7-B-0-2', '7-BR-0-0') //mover aristas
    moverStickers('7-S-2-0', '7-B-2-2', '7-BR-0-2', '7-MO-0-0') //mover aristas
}