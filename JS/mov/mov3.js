const cuboV3 = document.getElementById('cubo3');
    let visibilidad3 = cuboV3.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad3) {
        const estiloCubo3 = window.getComputedStyle(cuboV3);
        visibilidad3 = estiloCubo3.visibility;
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


if (visibilidad3 === "visible") {

    console.log('cubo 3 Visible ')

    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp3()

        }else if (event.key === 'm' || event.key === 'M') { 

            m3()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep3()

        }else if (event.key === 'e' || event.key === 'E') { 

            e3()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp3()

        }else if (event.key === 's' || event.key === 'S') { 

            s3()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp3()

        }else if (event.key === 'r' || event.key === 'R') { 

            r3()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp3()

        }else if (event.key === 'l' || event.key === 'L') { 

            l3()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up3()

        }else if (event.key === 'u' || event.key === 'U') { 

            u3()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp3()

        }else if (event.key === 'd' || event.key === 'D') { 

            d3()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp3()

        }else if (event.key === 'f' || event.key === 'F') { 

            f3()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp3()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b3()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m3(); rp3(); l3();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp3(); r3(); lp3();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e3(); up3(); d3();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep3(); u3(); dp3();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp3(); fp3(); b3();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s3(); f3(); bp3();
        }
    });
}else{
    console.log('cubo 3 Oculto ')
}

function m3(){
    moverStickers('3-R-1-1', '3-GL-1-1', '3-V-1-1', '3-BL-1-1') //mover centros
    moverStickers('3-R-0-1', '3-GL-0-1', '3-V-0-1', '3-BL-0-1') //mover esquinas
    moverStickers('3-R-2-1', '3-GL-2-1', '3-V-2-1', '3-BL-2-1') //mover esquinas
}

function mp3() {
    moverStickers('3-BL-1-1', '3-V-1-1', '3-GL-1-1', '3-R-1-1') //mover centros
    moverStickers('3-BL-0-1', '3-V-0-1', '3-GL-0-1', '3-R-0-1') //mover esquinas
    moverStickers('3-BL-2-1', '3-V-2-1', '3-GL-2-1', '3-R-2-1') //mover esquinas
}


function e3(){
    moverStickers('3-BR-1-1', '3-BL-1-1', '3-GD-1-1', '3-GL-1-1') //mover centros
    moverStickers('3-BR-1-2', '3-BL-1-0', '3-GD-1-2', '3-GL-1-2') //mover esquinas
    moverStickers('3-BR-1-0', '3-BL-1-2', '3-GD-1-0', '3-GL-1-0') //mover esquinas
}

function ep3(){
    moverStickers('3-GL-1-1', '3-GD-1-1', '3-BL-1-1', '3-BR-1-1') //mover centros
    moverStickers('3-GL-1-2', '3-GD-1-2', '3-BL-1-0', '3-BR-1-2') //mover esquinas
    moverStickers('3-GL-1-0', '3-GD-1-0', '3-BL-1-2', '3-BR-1-0') //mover esquinas
}


function s3(){
    moverStickers('3-BR-1-1', '3-R-1-1', '3-GD-1-1', '3-V-1-1') //mover centros
    moverStickers('3-BR-2-1', '3-R-1-2', '3-GD-0-1', '3-V-1-0') //mover esquinas
    moverStickers('3-BR-0-1', '3-R-1-0', '3-GD-2-1', '3-V-1-2') //mover esquinas
}

function sp3(){
    moverStickers('3-V-1-1', '3-GD-1-1', '3-R-1-1', '3-BR-1-1') //mover centros
    moverStickers('3-V-1-0', '3-GD-0-1', '3-R-1-2', '3-BR-2-1') //mover esquinas
    moverStickers('3-V-1-2', '3-GD-2-1', '3-R-1-0', '3-BR-0-1') //mover esquinas
}


function r3() {
    moverStickers('3-GD-1-0', '3-GD-2-1', '3-GD-1-2', '3-GD-0-1') //mover esquinas
    moverStickers('3-GD-2-0', '3-GD-2-2', '3-GD-0-2', '3-GD-0-0') //mover aristas

    moverStickers('3-GL-1-2', '3-R-1-2', '3-BL-1-2', '3-V-1-2') //mover esquinas
    moverStickers('3-R-0-2', '3-BL-0-2', '3-V-0-2', '3-GL-0-2') //mover aristas
    moverStickers('3-BL-2-2', '3-V-2-2', '3-GL-2-2', '3-R-2-2') //mover aristas
}

function rp3() {
    moverStickers('3-GD-0-1', '3-GD-1-2', '3-GD-2-1', '3-GD-1-0') //mover esquinas
    moverStickers('3-GD-0-0', '3-GD-0-2', '3-GD-2-2', '3-GD-2-0') //mover aristas
        
    moverStickers('3-V-1-2', '3-BL-1-2', '3-R-1-2', '3-GL-1-2') //mover esquinas
    moverStickers('3-GL-0-2', '3-V-0-2', '3-BL-0-2', '3-R-0-2') //mover aristas
    moverStickers('3-V-2-2', '3-BL-2-2', '3-R-2-2', '3-GL-2-2') //mover aristas
}

function l3() {
    moverStickers('3-BR-1-0', '3-BR-2-1', '3-BR-1-2', '3-BR-0-1') //mover esquinas
    moverStickers('3-BR-2-0', '3-BR-2-2', '3-BR-0-2', '3-BR-0-0') //mover aristas

    moverStickers('3-BL-1-0', '3-R-1-0', '3-GL-1-0', '3-V-1-0') //mover esquinas
    moverStickers('3-GL-2-0', '3-V-2-0', '3-BL-2-0', '3-R-2-0') //mover aristas
    moverStickers('3-R-0-0', '3-GL-0-0', '3-V-0-0', '3-BL-0-0') //mover aristas
}

function lp3() {
    moverStickers('3-BR-0-1', '3-BR-1-2', '3-BR-2-1', '3-BR-1-0') //mover esquinas
    moverStickers('3-BR-0-0', '3-BR-0-2', '3-BR-2-2', '3-BR-2-0') //mover aristas

    moverStickers('3-V-1-0', '3-GL-1-0', '3-R-1-0', '3-BL-1-0') //mover esquinas
    moverStickers('3-R-2-0', '3-BL-2-0', '3-V-2-0', '3-GL-2-0') //mover aristas
    moverStickers('3-V-0-0', '3-GL-0-0', '3-R-0-0', '3-BL-0-0') //mover aristas
}


function u3() {
    moverStickers('3-V-1-0', '3-V-2-1', '3-V-1-2', '3-V-0-1') //mover esquinas
    moverStickers('3-V-2-0', '3-V-2-2', '3-V-0-2', '3-V-0-0') //mover aristas

    moverStickers('3-BR-0-1', '3-GL-0-1', '3-GD-0-1', '3-BL-2-1') //mover esquinas
    moverStickers('3-GL-0-0', '3-GD-0-0', '3-BL-2-2', '3-BR-0-0') //mover aristas
    moverStickers('3-BR-0-2', '3-GL-0-2', '3-GD-0-2', '3-BL-2-0') //mover aristas
}

function up3() {
    moverStickers('3-V-0-1', '3-V-1-2', '3-V-2-1', '3-V-1-0') //mover esquinas
    moverStickers('3-V-0-0', '3-V-0-2', '3-V-2-2', '3-V-2-0') //mover aristas
        
    moverStickers('3-BL-2-1', '3-GD-0-1', '3-GL-0-1', '3-BR-0-1') //mover esquinas
    moverStickers('3-BR-0-0', '3-BL-2-2', '3-GD-0-0', '3-GL-0-0') //mover aristas
    moverStickers('3-BL-2-0', '3-GD-0-2', '3-GL-0-2', '3-BR-0-2') //mover aristas 
}

function d3() {
    moverStickers('3-R-0-1', '3-R-1-0', '3-R-2-1', '3-R-1-2') //mover esquinas
    moverStickers('3-R-0-0', '3-R-2-0', '3-R-2-2', '3-R-0-2') //mover aristas

    moverStickers('3-GL-2-1', '3-BR-2-1', '3-BL-0-1', '3-GD-2-1') //mover esquinas
    moverStickers('3-BR-2-2', '3-BL-0-0', '3-GD-2-2', '3-GL-2-2') //mover aristas
    moverStickers('3-GL-2-0', '3-BR-2-0', '3-BL-0-2', '3-GD-2-0') //mover aristas
}

function dp3() {
    moverStickers('3-R-1-2', '3-R-2-1', '3-R-1-0', '3-R-0-1') //mover esquinas
    moverStickers('3-R-0-2', '3-R-2-2', '3-R-2-0', '3-R-0-0') //mover aristas

    moverStickers('3-GD-2-1', '3-BL-0-1', '3-BR-2-1', '3-GL-2-1') //mover esquinas
    moverStickers('3-GL-2-2', '3-GD-2-2', '3-BL-0-0', '3-BR-2-2') //mover aristas
    moverStickers('3-GD-2-0', '3-BL-0-2', '3-BR-2-0', '3-GL-2-0') //mover aristas
}


function f3() {
    moverStickers('3-GL-1-0', '3-GL-2-1', '3-GL-1-2', '3-GL-0-1') //mover esquinas
    moverStickers('3-GL-2-0', '3-GL-2-2', '3-GL-0-2', '3-GL-0-0') //mover aristas

    moverStickers('3-BR-1-2', '3-R-0-1', '3-GD-1-0', '3-V-2-1') //mover esquinas
    moverStickers('3-R-0-0', '3-GD-2-0', '3-V-2-2', '3-BR-0-2') //mover aristas
    moverStickers('3-BR-2-2', '3-R-0-2', '3-GD-0-0', '3-V-2-0') //mover aristas
}

function fp3() {
    moverStickers('3-GL-0-1', '3-GL-1-2', '3-GL-2-1', '3-GL-1-0') //mover esquinas
    moverStickers('3-GL-0-0', '3-GL-0-2', '3-GL-2-2', '3-GL-2-0') //mover aristas

    moverStickers('3-V-2-1', '3-GD-1-0', '3-R-0-1', '3-BR-1-2') //mover esquinas
    moverStickers('3-BR-0-2', '3-V-2-2', '3-GD-2-0', '3-R-0-0') //mover aristas
    moverStickers('3-V-2-0', '3-GD-0-0', '3-R-0-2', '3-BR-2-2') //mover aristas
}


function b3() {
    moverStickers('3-BL-1-0', '3-BL-2-1', '3-BL-1-2', '3-BL-0-1') //mover esquinas
    moverStickers('3-BL-2-0', '3-BL-2-2', '3-BL-0-2', '3-BL-0-0') //mover aristas

    moverStickers('3-BR-1-0', '3-V-0-1', '3-GD-1-2', '3-R-2-1') //mover esquinas
    moverStickers('3-V-0-0', '3-GD-0-2', '3-R-2-2', '3-BR-2-0') //mover aristas
    moverStickers('3-BR-0-0', '3-V-0-2', '3-GD-2-2', '3-R-2-0') //mover aristas
}

function bp3() {
    moverStickers('3-BL-0-1', '3-BL-1-2', '3-BL-2-1', '3-BL-1-0') //mover esquinas
    moverStickers('3-BL-0-0', '3-BL-0-2', '3-BL-2-2', '3-BL-2-0') //mover aristas

    moverStickers('3-R-2-1', '3-GD-1-2', '3-V-0-1', '3-BR-1-0') //mover esquinas
    moverStickers('3-BR-2-0', '3-R-2-2', '3-GD-0-2', '3-V-0-0') //mover aristas
    moverStickers('3-R-2-0', '3-GD-2-2', '3-V-0-2', '3-BR-0-0') //mover aristas
}