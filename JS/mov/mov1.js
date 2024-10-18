const cuboV1 = document.getElementById('cubo1');
    let visibilidad1 = cuboV1.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!visibilidad1) {
        const estiloCubo1 = window.getComputedStyle(cuboV1);
        visibilidad1 = estiloCubo1.visibility;
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


if (visibilidad1 === "visible") {
    console.log('cubo 1 Visible ')
    document.addEventListener('keydown', function(event) {

        ///////////////////  CENTROS  ////////////////////////

        if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

            mp1()

        }else if (event.key === 'm' || event.key === 'M') { 

            m1()
        }

        if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

            ep1()

        }else if (event.key === 'e' || event.key === 'E') { 

            e1()
        }

        if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

            sp1()

        }else if (event.key === 's' || event.key === 'S') { 

            s1()
        }

        ///////////////////  LADOS  ////////////////////////

        if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

            rp1()

        }else if (event.key === 'r' || event.key === 'R') { 

            r1()
        }

        if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

            lp1()

        }else if (event.key === 'l' || event.key === 'L') { 

            l1()
        }

        if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

            up1()

        }else if (event.key === 'u' || event.key === 'U') { 

            u1()
        }

        if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

            dp1()

        }else if (event.key === 'd' || event.key === 'D') { 

            d1()
        }

        if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

            fp1()

        }else if (event.key === 'f' || event.key === 'F') { 

            f1()
        }

        if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

            bp1()
            
        }else if (event.key === 'b' || event.key === 'B') { 

            b1()
        }

        ///////////////////  ORIENTACION  ////////////////////////

        if ((event.shiftKey && event.ctrlKey && (event.key === 'x' || event.key === 'X')) || (event.ctrlKey && (event.key === 'x' || event.key === 'X'))) {

            console.log("hiper eje X")

        }else if (event.shiftKey && (event.key === 'x' || event.key === 'X')) { 

            m1(); rp1(); l1();

        }else if (event.key === 'x' || event.key === 'X') { 
            
            mp1(); r1(); lp1();
        }

        if (event.shiftKey && (event.key === 'y' || event.key === 'Y')) { 
            
            e1(); up1(); d1();

        }else if (event.key === 'y' || event.key === 'Y') { 
            
            ep1(); u1(); dp1();
        }

        if (event.shiftKey && (event.key === 'z' || event.key === 'Z')) { 
            
            sp1(); fp1(); b1();
            
        }else if (event.key === 'z' || event.key === 'Z') { 
            
            s1(); f1(); bp1();
        }
    });

}else{
    console.log('cubo 1 Oculto ')
}

function m1(){
    moverStickers('1-O-1-1', '1-W-1-1', '1-R-1-1', '1-Y-1-1') //mover centros
    moverStickers('1-O-0-1', '1-W-0-1', '1-R-0-1', '1-Y-0-1') //mover esquinas
    moverStickers('1-O-2-1', '1-W-2-1', '1-R-2-1', '1-Y-2-1') //mover esquinas
}

function mp1() {
    moverStickers('1-Y-1-1', '1-R-1-1', '1-W-1-1', '1-O-1-1') //mover centros
    moverStickers('1-Y-0-1', '1-R-0-1', '1-W-0-1', '1-O-0-1') //mover esquinas
    moverStickers('1-Y-2-1', '1-R-2-1', '1-W-2-1', '1-O-2-1') //mover esquinas
}


function e1(){
    moverStickers('1-B-1-1', '1-Y-1-1', '1-G-1-1', '1-W-1-1') //mover centros
    moverStickers('1-B-1-2', '1-Y-1-0', '1-G-1-2', '1-W-1-2') //mover esquinas
    moverStickers('1-B-1-0', '1-Y-1-2', '1-G-1-0', '1-W-1-0') //mover esquinas
}

function ep1(){
    moverStickers('1-W-1-1', '1-G-1-1', '1-Y-1-1', '1-B-1-1') //mover centros
    moverStickers('1-W-1-2', '1-G-1-2', '1-Y-1-0', '1-B-1-2') //mover esquinas
    moverStickers('1-W-1-0', '1-G-1-0', '1-Y-1-2', '1-B-1-0') //mover esquinas
}


function s1(){
    moverStickers('1-B-1-1', '1-O-1-1', '1-G-1-1', '1-R-1-1') //mover centros
    moverStickers('1-B-2-1', '1-O-1-2', '1-G-0-1', '1-R-1-0') //mover esquinas
    moverStickers('1-B-0-1', '1-O-1-0', '1-G-2-1', '1-R-1-2') //mover esquinas
}

function sp1(){
    moverStickers('1-R-1-1', '1-G-1-1', '1-O-1-1', '1-B-1-1') //mover centros
    moverStickers('1-R-1-0', '1-G-0-1', '1-O-1-2', '1-B-2-1') //mover esquinas
    moverStickers('1-R-1-2', '1-G-2-1', '1-O-1-0', '1-B-0-1') //mover esquinas
}


function r1() {
    moverStickers('1-G-1-0', '1-G-2-1', '1-G-1-2', '1-G-0-1') //mover esquinas
    moverStickers('1-G-2-0', '1-G-2-2', '1-G-0-2', '1-G-0-0') //mover aristas

    moverStickers('1-W-1-2', '1-O-1-2', '1-Y-1-2', '1-R-1-2') //mover esquinas
    moverStickers('1-O-0-2', '1-Y-0-2', '1-R-0-2', '1-W-0-2') //mover aristas
    moverStickers('1-Y-2-2', '1-R-2-2', '1-W-2-2', '1-O-2-2') //mover aristas
}

function rp1() {
    moverStickers('1-G-0-1', '1-G-1-2', '1-G-2-1', '1-G-1-0') //mover esquinas
    moverStickers('1-G-0-0', '1-G-0-2', '1-G-2-2', '1-G-2-0') //mover aristas
        
    moverStickers('1-R-1-2', '1-Y-1-2', '1-O-1-2', '1-W-1-2') //mover esquinas
    moverStickers('1-W-0-2', '1-R-0-2', '1-Y-0-2', '1-O-0-2') //mover aristas
    moverStickers('1-R-2-2', '1-Y-2-2', '1-O-2-2', '1-W-2-2') //mover aristas
}

function l1() {
    moverStickers('1-B-1-0', '1-B-2-1', '1-B-1-2', '1-B-0-1') //mover esquinas
    moverStickers('1-B-2-0', '1-B-2-2', '1-B-0-2', '1-B-0-0') //mover aristas

    moverStickers('1-Y-1-0', '1-O-1-0', '1-W-1-0', '1-R-1-0') //mover esquinas
    moverStickers('1-W-2-0', '1-R-2-0', '1-Y-2-0', '1-O-2-0') //mover aristas
    moverStickers('1-O-0-0', '1-W-0-0', '1-R-0-0', '1-Y-0-0') //mover aristas
}

function lp1() {
    moverStickers('1-B-0-1', '1-B-1-2', '1-B-2-1', '1-B-1-0') //mover esquinas
    moverStickers('1-B-0-0', '1-B-0-2', '1-B-2-2', '1-B-2-0') //mover aristas

    moverStickers('1-R-1-0', '1-W-1-0', '1-O-1-0', '1-Y-1-0') //mover esquinas
    moverStickers('1-O-2-0', '1-Y-2-0', '1-R-2-0', '1-W-2-0') //mover aristas
    moverStickers('1-R-0-0', '1-W-0-0', '1-O-0-0', '1-Y-0-0') //mover aristas
}


function u1() {
    moverStickers('1-R-1-0', '1-R-2-1', '1-R-1-2', '1-R-0-1') //mover esquinas
    moverStickers('1-R-2-0', '1-R-2-2', '1-R-0-2', '1-R-0-0') //mover aristas

    moverStickers('1-B-0-1', '1-W-0-1', '1-G-0-1', '1-Y-2-1') //mover esquinas
    moverStickers('1-W-0-0', '1-G-0-0', '1-Y-2-2', '1-B-0-0') //mover aristas
    moverStickers('1-B-0-2', '1-W-0-2', '1-G-0-2', '1-Y-2-0') //mover aristas
}

function up1() {
    moverStickers('1-R-0-1', '1-R-1-2', '1-R-2-1', '1-R-1-0') //mover esquinas
    moverStickers('1-R-0-0', '1-R-0-2', '1-R-2-2', '1-R-2-0') //mover aristas
        
    moverStickers('1-Y-2-1', '1-G-0-1', '1-W-0-1', '1-B-0-1') //mover esquinas
    moverStickers('1-B-0-0', '1-Y-2-2', '1-G-0-0', '1-W-0-0') //mover aristas
    moverStickers('1-Y-2-0', '1-G-0-2', '1-W-0-2', '1-B-0-2') //mover aristas 
}

function d1() {
    moverStickers('1-O-0-1', '1-O-1-0', '1-O-2-1', '1-O-1-2') //mover esquinas
    moverStickers('1-O-0-0', '1-O-2-0', '1-O-2-2', '1-O-0-2') //mover aristas

    moverStickers('1-W-2-1', '1-B-2-1', '1-Y-0-1', '1-G-2-1') //mover esquinas
    moverStickers('1-B-2-2', '1-Y-0-0', '1-G-2-2', '1-W-2-2') //mover aristas
    moverStickers('1-W-2-0', '1-B-2-0', '1-Y-0-2', '1-G-2-0') //mover aristas
}

function dp1() {
    moverStickers('1-O-1-2', '1-O-2-1', '1-O-1-0', '1-O-0-1') //mover esquinas
    moverStickers('1-O-0-2', '1-O-2-2', '1-O-2-0', '1-O-0-0') //mover aristas

    moverStickers('1-G-2-1', '1-Y-0-1', '1-B-2-1', '1-W-2-1') //mover esquinas
    moverStickers('1-W-2-2', '1-G-2-2', '1-Y-0-0', '1-B-2-2') //mover aristas
    moverStickers('1-G-2-0', '1-Y-0-2', '1-B-2-0', '1-W-2-0') //mover aristas
}


function f1(){
    moverStickers('1-W-1-0', '1-W-2-1', '1-W-1-2', '1-W-0-1') //mover esquinas
    moverStickers('1-W-2-0', '1-W-2-2', '1-W-0-2', '1-W-0-0') //mover aristas

    moverStickers('1-B-1-2', '1-O-0-1', '1-G-1-0', '1-R-2-1') //mover esquinas
    moverStickers('1-O-0-0', '1-G-2-0', '1-R-2-2', '1-B-0-2') //mover aristas
    moverStickers('1-B-2-2', '1-O-0-2', '1-G-0-0', '1-R-2-0') //mover aristas
}

function fp1() {
    moverStickers('1-W-0-1', '1-W-1-2', '1-W-2-1', '1-W-1-0') //mover esquinas
    moverStickers('1-W-0-0', '1-W-0-2', '1-W-2-2', '1-W-2-0') //mover aristas

    moverStickers('1-R-2-1', '1-G-1-0', '1-O-0-1', '1-B-1-2') //mover esquinas
    moverStickers('1-B-0-2', '1-R-2-2', '1-G-2-0', '1-O-0-0') //mover aristas
    moverStickers('1-R-2-0', '1-G-0-0', '1-O-0-2', '1-B-2-2') //mover aristas
}


function b1() {
    moverStickers('1-Y-1-0', '1-Y-2-1', '1-Y-1-2', '1-Y-0-1') //mover esquinas
    moverStickers('1-Y-2-0', '1-Y-2-2', '1-Y-0-2', '1-Y-0-0') //mover aristas

    moverStickers('1-B-1-0', '1-R-0-1', '1-G-1-2', '1-O-2-1') //mover esquinas
    moverStickers('1-R-0-0', '1-G-0-2', '1-O-2-2', '1-B-2-0') //mover aristas
    moverStickers('1-B-0-0', '1-R-0-2', '1-G-2-2', '1-O-2-0') //mover aristas
}

function bp1() {
    moverStickers('1-Y-0-1', '1-Y-1-2', '1-Y-2-1', '1-Y-1-0') //mover esquinas
    moverStickers('1-Y-0-0', '1-Y-0-2', '1-Y-2-2', '1-Y-2-0') //mover aristas

    moverStickers('1-O-2-1', '1-G-1-2', '1-R-0-1', '1-B-1-0') //mover esquinas
    moverStickers('1-B-2-0', '1-O-2-2', '1-G-0-2', '1-R-0-0') //mover aristas
    moverStickers('1-O-2-0', '1-G-2-2', '1-R-0-2', '1-B-0-0') //mover aristas
}