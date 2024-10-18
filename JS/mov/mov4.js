const cuboV4 = document.getElementById('cubo4');
    let visibilidad4 = cuboV4.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad4) {
        const estiloCubo4 = window.getComputedStyle(cuboV4);
        visibilidad4 = estiloCubo4.visibility;
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


if (visibilidad4 === "visible") {

    console.log('cubo 4 Visible ')

    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp4()

        }else if (event.key === 'm' || event.key === 'M') { 

            m4()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep4()

        }else if (event.key === 'e' || event.key === 'E') { 

            e4()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp4()

        }else if (event.key === 's' || event.key === 'S') { 

            s4()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp4()

        }else if (event.key === 'r' || event.key === 'R') { 

            r4()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp4()

        }else if (event.key === 'l' || event.key === 'L') { 

            l4()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up4()

        }else if (event.key === 'u' || event.key === 'U') { 

            u4()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp4()

        }else if (event.key === 'd' || event.key === 'D') { 

            d4()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp4()

        }else if (event.key === 'f' || event.key === 'F') { 

            f4()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp4()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b4()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m4(); rp4(); l4();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp4(); r4(); lp4();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e4(); up4(); d4();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep4(); u4(); dp4();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp4(); fp4(); b4();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s4(); f4(); bp4();
        }
    });
}else{
    console.log('cubo 4 Oculto ')
}

function m4(){
    moverStickers('4-GO-1-1', '4-RD-1-1', '4-GL-1-1', '4-W-1-1') //mover centros
    moverStickers('4-GO-0-1', '4-RD-0-1', '4-GL-0-1', '4-W-0-1') //mover esquinas
    moverStickers('4-GO-2-1', '4-RD-2-1', '4-GL-2-1', '4-W-2-1') //mover esquinas
}

function mp4() {
    moverStickers('4-W-1-1', '4-GL-1-1', '4-RD-1-1', '4-GO-1-1') //mover centros
    moverStickers('4-W-0-1', '4-GL-0-1', '4-RD-0-1', '4-GO-0-1') //mover esquinas
    moverStickers('4-W-2-1', '4-GL-2-1', '4-RD-2-1', '4-GO-2-1') //mover esquinas
}


function e4(){
    moverStickers('4-PS-1-1', '4-W-1-1', '4-BS-1-1', '4-RD-1-1') //mover centros
    moverStickers('4-PS-1-2', '4-W-1-0', '4-BS-1-2', '4-RD-1-2') //mover esquinas
    moverStickers('4-PS-1-0', '4-W-1-2', '4-BS-1-0', '4-RD-1-0') //mover esquinas
}

function ep4(){
    moverStickers('4-RD-1-1', '4-BS-1-1', '4-W-1-1', '4-PS-1-1') //mover centros
    moverStickers('4-RD-1-2', '4-BS-1-2', '4-W-1-0', '4-PS-1-2') //mover esquinas
    moverStickers('4-RD-1-0', '4-BS-1-0', '4-W-1-2', '4-PS-1-0') //mover esquinas
}


function s4(){
    moverStickers('4-PS-1-1', '4-GO-1-1', '4-BS-1-1', '4-GL-1-1') //mover centros
    moverStickers('4-PS-2-1', '4-GO-1-2', '4-BS-0-1', '4-GL-1-0') //mover esquinas
    moverStickers('4-PS-0-1', '4-GO-1-0', '4-BS-2-1', '4-GL-1-2') //mover esquinas
}

function sp4(){
    moverStickers('4-GL-1-1', '4-BS-1-1', '4-GO-1-1', '4-PS-1-1') //mover centros
    moverStickers('4-GL-1-0', '4-BS-0-1', '4-GO-1-2', '4-PS-2-1') //mover esquinas
    moverStickers('4-GL-1-2', '4-BS-2-1', '4-GO-1-0', '4-PS-0-1') //mover esquinas
}


function r4() {
    moverStickers('4-BS-1-0', '4-BS-2-1', '4-BS-1-2', '4-BS-0-1') //mover esquinas
    moverStickers('4-BS-2-0', '4-BS-2-2', '4-BS-0-2', '4-BS-0-0') //mover aristas

    moverStickers('4-RD-1-2', '4-GO-1-2', '4-W-1-2', '4-GL-1-2') //mover esquinas
    moverStickers('4-GO-0-2', '4-W-0-2', '4-GL-0-2', '4-RD-0-2') //mover aristas
    moverStickers('4-W-2-2', '4-GL-2-2', '4-RD-2-2', '4-GO-2-2') //mover aristas
}

function rp4() {
    moverStickers('4-BS-0-1', '4-BS-1-2', '4-BS-2-1', '4-BS-1-0') //mover esquinas
    moverStickers('4-BS-0-0', '4-BS-0-2', '4-BS-2-2', '4-BS-2-0') //mover aristas
        
    moverStickers('4-GL-1-2', '4-W-1-2', '4-GO-1-2', '4-RD-1-2') //mover esquinas
    moverStickers('4-RD-0-2', '4-GL-0-2', '4-W-0-2', '4-GO-0-2') //mover aristas
    moverStickers('4-GL-2-2', '4-W-2-2', '4-GO-2-2', '4-RD-2-2') //mover aristas
}

function l4() {
    moverStickers('4-PS-1-0', '4-PS-2-1', '4-PS-1-2', '4-PS-0-1') //mover esquinas
    moverStickers('4-PS-2-0', '4-PS-2-2', '4-PS-0-2', '4-PS-0-0') //mover aristas

    moverStickers('4-W-1-0', '4-GO-1-0', '4-RD-1-0', '4-GL-1-0') //mover esquinas
    moverStickers('4-RD-2-0', '4-GL-2-0', '4-W-2-0', '4-GO-2-0') //mover aristas
    moverStickers('4-GO-0-0', '4-RD-0-0', '4-GL-0-0', '4-W-0-0') //mover aristas
}

function lp4() {
    moverStickers('4-PS-0-1', '4-PS-1-2', '4-PS-2-1', '4-PS-1-0') //mover esquinas
    moverStickers('4-PS-0-0', '4-PS-0-2', '4-PS-2-2', '4-PS-2-0') //mover aristas

    moverStickers('4-GL-1-0', '4-RD-1-0', '4-GO-1-0', '4-W-1-0') //mover esquinas
    moverStickers('4-GO-2-0', '4-W-2-0', '4-GL-2-0', '4-RD-2-0') //mover aristas
    moverStickers('4-GL-0-0', '4-RD-0-0', '4-GO-0-0', '4-W-0-0') //mover aristas
}


function u4() {
    moverStickers('4-GL-1-0', '4-GL-2-1', '4-GL-1-2', '4-GL-0-1') //mover esquinas
    moverStickers('4-GL-2-0', '4-GL-2-2', '4-GL-0-2', '4-GL-0-0') //mover aristas

    moverStickers('4-PS-0-1', '4-RD-0-1', '4-BS-0-1', '4-W-2-1') //mover esquinas
    moverStickers('4-RD-0-0', '4-BS-0-0', '4-W-2-2', '4-PS-0-0') //mover aristas
    moverStickers('4-PS-0-2', '4-RD-0-2', '4-BS-0-2', '4-W-2-0') //mover aristas
}

function up4() {
    moverStickers('4-GL-0-1', '4-GL-1-2', '4-GL-2-1', '4-GL-1-0') //mover esquinas
    moverStickers('4-GL-0-0', '4-GL-0-2', '4-GL-2-2', '4-GL-2-0') //mover aristas
        
    moverStickers('4-W-2-1', '4-BS-0-1', '4-RD-0-1', '4-PS-0-1') //mover esquinas
    moverStickers('4-PS-0-0', '4-W-2-2', '4-BS-0-0', '4-RD-0-0') //mover aristas
    moverStickers('4-W-2-0', '4-BS-0-2', '4-RD-0-2', '4-PS-0-2') //mover aristas 
}

function d4() {
    moverStickers('4-GO-0-1', '4-GO-1-0', '4-GO-2-1', '4-GO-1-2') //mover esquinas
    moverStickers('4-GO-0-0', '4-GO-2-0', '4-GO-2-2', '4-GO-0-2') //mover aristas

    moverStickers('4-RD-2-1', '4-PS-2-1', '4-W-0-1', '4-BS-2-1') //mover esquinas
    moverStickers('4-PS-2-2', '4-W-0-0', '4-BS-2-2', '4-RD-2-2') //mover aristas
    moverStickers('4-RD-2-0', '4-PS-2-0', '4-W-0-2', '4-BS-2-0') //mover aristas
}

function dp4() {
    moverStickers('4-GO-1-2', '4-GO-2-1', '4-GO-1-0', '4-GO-0-1') //mover esquinas
    moverStickers('4-GO-0-2', '4-GO-2-2', '4-GO-2-0', '4-GO-0-0') //mover aristas

    moverStickers('4-BS-2-1', '4-W-0-1', '4-PS-2-1', '4-RD-2-1') //mover esquinas
    moverStickers('4-RD-2-2', '4-BS-2-2', '4-W-0-0', '4-PS-2-2') //mover aristas
    moverStickers('4-BS-2-0', '4-W-0-2', '4-PS-2-0', '4-RD-2-0') //mover aristas
}


function f4() {
    moverStickers('4-RD-1-0', '4-RD-2-1', '4-RD-1-2', '4-RD-0-1') //mover esquinas
    moverStickers('4-RD-2-0', '4-RD-2-2', '4-RD-0-2', '4-RD-0-0') //mover aristas

    moverStickers('4-PS-1-2', '4-GO-0-1', '4-BS-1-0', '4-GL-2-1') //mover esquinas
    moverStickers('4-GO-0-0', '4-BS-2-0', '4-GL-2-2', '4-PS-0-2') //mover aristas
    moverStickers('4-PS-2-2', '4-GO-0-2', '4-BS-0-0', '4-GL-2-0') //mover aristas
}

function fp4() {
    moverStickers('4-RD-0-1', '4-RD-1-2', '4-RD-2-1', '4-RD-1-0') //mover esquinas
    moverStickers('4-RD-0-0', '4-RD-0-2', '4-RD-2-2', '4-RD-2-0') //mover aristas

    moverStickers('4-GL-2-1', '4-BS-1-0', '4-GO-0-1', '4-PS-1-2') //mover esquinas
    moverStickers('4-PS-0-2', '4-GL-2-2', '4-BS-2-0', '4-GO-0-0') //mover aristas
    moverStickers('4-GL-2-0', '4-BS-0-0', '4-GO-0-2', '4-PS-2-2') //mover aristas
}


function b4() {
    moverStickers('4-W-1-0', '4-W-2-1', '4-W-1-2', '4-W-0-1') //mover esquinas
    moverStickers('4-W-2-0', '4-W-2-2', '4-W-0-2', '4-W-0-0') //mover aristas

    moverStickers('4-PS-1-0', '4-GL-0-1', '4-BS-1-2', '4-GO-2-1') //mover esquinas
    moverStickers('4-GL-0-0', '4-BS-0-2', '4-GO-2-2', '4-PS-2-0') //mover aristas
    moverStickers('4-PS-0-0', '4-GL-0-2', '4-BS-2-2', '4-GO-2-0') //mover aristas
}

function bp4() {
    moverStickers('4-W-0-1', '4-W-1-2', '4-W-2-1', '4-W-1-0') //mover esquinas
    moverStickers('4-W-0-0', '4-W-0-2', '4-W-2-2', '4-W-2-0') //mover aristas

    moverStickers('4-GO-2-1', '4-BS-1-2', '4-GL-0-1', '4-PS-1-0') //mover esquinas
    moverStickers('4-PS-2-0', '4-GO-2-2', '4-BS-0-2', '4-GL-0-0') //mover aristas
    moverStickers('4-GO-2-0', '4-BS-2-2', '4-GL-0-2', '4-PS-0-0') //mover aristas
}