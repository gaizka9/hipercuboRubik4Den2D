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

        if (event.shiftKey) { 

            ///////////////////  CENTROS  ////////////////////////
            if (event.shiftKey && (event.key === 'm' || event.key === 'M')) { 

                mp()
            }else if (event.shiftKey && (event.key === 'e' || event.key === 'E')) { 

                ep()     
            }else if (event.shiftKey && (event.key === 's' || event.key === 'S')) { 

                sp()
            ///////////////////  LADOS  ////////////////////////
            }else if (event.shiftKey && (event.key === 'r' || event.key === 'R')) { 

                rp()

            }else if (event.shiftKey && (event.key === 'l' || event.key === 'L')) { 

                lp()

            }else if (event.shiftKey && (event.key === 'u' || event.key === 'U')) { 

                up()

            }else if (event.shiftKey && (event.key === 'd' || event.key === 'D')) { 

                dp()

            }else if (event.shiftKey && (event.key === 'f' || event.key === 'F')) { 

                fp()

            }else if (event.shiftKey && (event.key === 'b' || event.key === 'B')) { 

                bp()
            }

        }else {

            ///////////////////  CENTROS  ////////////////////////
            if (event.key === 'm' || event.key === 'M') { 

                m()
            }else if (event.key === 'e' || event.key === 'E') { 

                e()
            }else if (event.key === 's' || event.key === 'S') { 

                s()
            ///////////////////  LADOS  ////////////////////////
            }else if (event.key === 'r' || event.key === 'R') { 

                r()
            }else if (event.key === 'l' || event.key === 'L') { 

                l()
            }else if (event.key === 'u' || event.key === 'U') { 

                u()
            }else if (event.key === 'd' || event.key === 'D') { 

                d()
            }else if (event.key === 'f' || event.key === 'F') { 

                f()
            }else if (event.key === 'b' || event.key === 'B') { 

                b()
            }
        }
    });

}else{
    console.log('cubo 1 Oculto ')
}

function m(){
    moverStickers('1-O-1-1', '1-W-1-1', '1-R-1-1', '1-Y-1-1') //mover centros
    moverStickers('1-O-0-1', '1-W-0-1', '1-R-0-1', '1-Y-0-1') //mover aristas
    moverStickers('1-O-2-1', '1-W-2-1', '1-R-2-1', '1-Y-2-1') //mover aristas

    espejoM()
}

function mp() {
    moverStickers('1-Y-1-1', '1-R-1-1', '1-W-1-1', '1-O-1-1') //mover centros
    moverStickers('1-Y-0-1', '1-R-0-1', '1-W-0-1', '1-O-0-1') //mover aristas
    moverStickers('1-Y-2-1', '1-R-2-1', '1-W-2-1', '1-O-2-1') //mover aristas

    espejoM()
}


function e(){
    moverStickers('1-B-1-1', '1-Y-1-1', '1-G-1-1', '1-W-1-1') //mover centros
    moverStickers('1-B-1-2', '1-Y-1-0', '1-G-1-2', '1-W-1-2') //mover aristas
    moverStickers('1-B-1-0', '1-Y-1-2', '1-G-1-0', '1-W-1-0') //mover aristas

    espejoE()
}

function ep(){
    moverStickers('1-W-1-1', '1-G-1-1', '1-Y-1-1', '1-B-1-1') //mover centros
    moverStickers('1-W-1-2', '1-G-1-2', '1-Y-1-0', '1-B-1-2') //mover aristas
    moverStickers('1-W-1-0', '1-G-1-0', '1-Y-1-2', '1-B-1-0') //mover aristas

    espejoE()
}


function s(){
    moverStickers('1-B-1-1', '1-O-1-1', '1-G-1-1', '1-R-1-1') //mover centros
    moverStickers('1-B-2-1', '1-O-1-2', '1-G-0-1', '1-R-1-0') //mover aristas
    moverStickers('1-B-0-1', '1-O-1-0', '1-G-2-1', '1-R-1-2') //mover aristas

    espejoS()
}

function sp(){
    moverStickers('1-R-1-1', '1-G-1-1', '1-O-1-1', '1-B-1-1') //mover centros
    moverStickers('1-R-1-0', '1-G-0-1', '1-O-1-2', '1-B-2-1') //mover aristas
    moverStickers('1-R-1-2', '1-G-2-1', '1-O-1-0', '1-B-0-1') //mover aristas

    espejoS()
}


function r() {
    moverStickers('1-G-1-0', '1-G-2-1', '1-G-1-2', '1-G-0-1') //mover aristas
    moverStickers('1-G-2-0', '1-G-2-2', '1-G-0-2', '1-G-0-0') //mover esquinas

    moverStickers('1-W-1-2', '1-O-1-2', '1-Y-1-2', '1-R-1-2') //mover aristas
    moverStickers('1-O-0-2', '1-Y-0-2', '1-R-0-2', '1-W-0-2') //mover esquinas
    moverStickers('1-Y-2-2', '1-R-2-2', '1-W-2-2', '1-O-2-2') //mover esquinas

    espejoR()
}

function rp() {
    moverStickers('1-G-0-1', '1-G-1-2', '1-G-2-1', '1-G-1-0') //mover aristas
    moverStickers('1-G-0-0', '1-G-0-2', '1-G-2-2', '1-G-2-0') //mover esquinas
        
    moverStickers('1-R-1-2', '1-Y-1-2', '1-O-1-2', '1-W-1-2') //mover aristas
    moverStickers('1-W-0-2', '1-R-0-2', '1-Y-0-2', '1-O-0-2') //mover esquinas
    moverStickers('1-R-2-2', '1-Y-2-2', '1-O-2-2', '1-W-2-2') //mover esquinas

    espejoR()
}

function l() {
    moverStickers('1-B-1-0', '1-B-2-1', '1-B-1-2', '1-B-0-1') //mover aristas
    moverStickers('1-B-2-0', '1-B-2-2', '1-B-0-2', '1-B-0-0') //mover esquinas

    moverStickers('1-Y-1-0', '1-O-1-0', '1-W-1-0', '1-R-1-0') //mover aristas
    moverStickers('1-W-2-0', '1-R-2-0', '1-Y-2-0', '1-O-2-0') //mover esquinas
    moverStickers('1-O-0-0', '1-W-0-0', '1-R-0-0', '1-Y-0-0') //mover esquinas

    espejoL()
}

function lp() {
    moverStickers('1-B-0-1', '1-B-1-2', '1-B-2-1', '1-B-1-0') //mover aristas
    moverStickers('1-B-0-0', '1-B-0-2', '1-B-2-2', '1-B-2-0') //mover esquinas

    moverStickers('1-R-1-0', '1-W-1-0', '1-O-1-0', '1-Y-1-0') //mover aristas
    moverStickers('1-O-2-0', '1-Y-2-0', '1-R-2-0', '1-W-2-0') //mover esquinas
    moverStickers('1-R-0-0', '1-W-0-0', '1-O-0-0', '1-Y-0-0') //mover esquinas

    espejoL()
}


function u() {
    moverStickers('1-R-1-0', '1-R-2-1', '1-R-1-2', '1-R-0-1') //mover aristas
    moverStickers('1-R-2-0', '1-R-2-2', '1-R-0-2', '1-R-0-0') //mover esquinas

    moverStickers('1-B-0-1', '1-W-0-1', '1-G-0-1', '1-Y-2-1') //mover aristas
    moverStickers('1-W-0-0', '1-G-0-0', '1-Y-2-2', '1-B-0-0') //mover esquinas
    moverStickers('1-B-0-2', '1-W-0-2', '1-G-0-2', '1-Y-2-0') //mover esquinas

    espejoU()
}

function up() {
    moverStickers('1-R-0-1', '1-R-1-2', '1-R-2-1', '1-R-1-0') //mover aristas
    moverStickers('1-R-0-0', '1-R-0-2', '1-R-2-2', '1-R-2-0') //mover esquinas
        
    moverStickers('1-Y-2-1', '1-G-0-1', '1-W-0-1', '1-B-0-1') //mover aristas
    moverStickers('1-B-0-0', '1-Y-2-2', '1-G-0-0', '1-W-0-0') //mover esquinas
    moverStickers('1-Y-2-0', '1-G-0-2', '1-W-0-2', '1-B-0-2') //mover esquinas 

    espejoU()
}

function d() {
    moverStickers('1-O-0-1', '1-O-1-0', '1-O-2-1', '1-O-1-2') //mover aristas
    moverStickers('1-O-0-0', '1-O-2-0', '1-O-2-2', '1-O-0-2') //mover esquinas

    moverStickers('1-W-2-1', '1-B-2-1', '1-Y-0-1', '1-G-2-1') //mover aristas
    moverStickers('1-B-2-2', '1-Y-0-0', '1-G-2-2', '1-W-2-2') //mover esquinas
    moverStickers('1-W-2-0', '1-B-2-0', '1-Y-0-2', '1-G-2-0') //mover esquinas

    espejoD()
}

function dp() {
    moverStickers('1-O-1-2', '1-O-2-1', '1-O-1-0', '1-O-0-1') //mover aristas
    moverStickers('1-O-0-2', '1-O-2-2', '1-O-2-0', '1-O-0-0') //mover esquinas

    moverStickers('1-G-2-1', '1-Y-0-1', '1-B-2-1', '1-W-2-1') //mover aristas
    moverStickers('1-W-2-2', '1-G-2-2', '1-Y-0-0', '1-B-2-2') //mover esquinas
    moverStickers('1-G-2-0', '1-Y-0-2', '1-B-2-0', '1-W-2-0') //mover esquinas

    espejoD()
}


function f(){
    moverStickers('1-W-1-0', '1-W-2-1', '1-W-1-2', '1-W-0-1') //mover aristas
    moverStickers('1-W-2-0', '1-W-2-2', '1-W-0-2', '1-W-0-0') //mover esquinas

    moverStickers('1-B-1-2', '1-O-0-1', '1-G-1-0', '1-R-2-1') //mover aristas
    moverStickers('1-O-0-0', '1-G-2-0', '1-R-2-2', '1-B-0-2') //mover esquinas
    moverStickers('1-B-2-2', '1-O-0-2', '1-G-0-0', '1-R-2-0') //mover esquinas

    espejoF()
}

function fp() {
    moverStickers('1-W-0-1', '1-W-1-2', '1-W-2-1', '1-W-1-0') //mover aristas
    moverStickers('1-W-0-0', '1-W-0-2', '1-W-2-2', '1-W-2-0') //mover esquinas

    moverStickers('1-R-2-1', '1-G-1-0', '1-O-0-1', '1-B-1-2') //mover aristas
    moverStickers('1-B-0-2', '1-R-2-2', '1-G-2-0', '1-O-0-0') //mover esquinas
    moverStickers('1-R-2-0', '1-G-0-0', '1-O-0-2', '1-B-2-2') //mover esquinas

    espejoF()
}


function b() {
    moverStickers('1-Y-1-0', '1-Y-2-1', '1-Y-1-2', '1-Y-0-1') //mover aristas
    moverStickers('1-Y-2-0', '1-Y-2-2', '1-Y-0-2', '1-Y-0-0') //mover esquinas

    moverStickers('1-B-1-0', '1-R-0-1', '1-G-1-2', '1-O-2-1') //mover aristas
    moverStickers('1-R-0-0', '1-G-0-2', '1-O-2-2', '1-B-2-0') //mover esquinas
    moverStickers('1-B-0-0', '1-R-0-2', '1-G-2-2', '1-O-2-0') //mover esquinas

    espejoB()
}

function bp() {
    moverStickers('1-Y-0-1', '1-Y-1-2', '1-Y-2-1', '1-Y-1-0') //mover aristas
    moverStickers('1-Y-0-0', '1-Y-0-2', '1-Y-2-2', '1-Y-2-0') //mover esquinas

    moverStickers('1-O-2-1', '1-G-1-2', '1-R-0-1', '1-B-1-0') //mover aristas
    moverStickers('1-B-2-0', '1-O-2-2', '1-G-0-2', '1-R-0-0') //mover esquinas
    moverStickers('1-O-2-0', '1-G-2-2', '1-R-0-2', '1-B-0-0') //mover esquinas

    espejoB()
}

function caraEspejo(coor1, coor2, coor3, coor4, rooc1, rooc2, rooc3, rooc4) {

        let c = [[coor1, coor2, coor3, coor4],[rooc1, rooc2, rooc3, rooc4]];

        for (let i = 0; i < c[0].length; i++) {

            var c1 = document.getElementById(c[0][i]);
            var e1 = document.getElementById(c[1][i]);

            e1.removeAttribute('data-color')
            e1.setAttribute('data-color', c1.getAttribute('data-color'));
        }
    }

function espejoM() {
    caraEspejo('1-O-1-1', '1-W-1-1', '1-R-1-1', '1-Y-1-1',      '5-O-1-1', '4-W-1-1', '3-R-1-1', '2-Y-1-1')
    caraEspejo('1-O-0-1', '1-W-0-1', '1-R-0-1', '1-Y-0-1',      '5-O-2-1', '4-W-2-1', '3-R-2-1', '2-Y-2-1')
    caraEspejo('1-O-2-1', '1-W-2-1', '1-R-2-1', '1-Y-2-1',      '5-O-0-1', '4-W-0-1', '3-R-0-1', '2-Y-0-1')
}

function espejoE() {
    caraEspejo('1-B-1-1', '1-Y-1-1', '1-G-1-1', '1-W-1-1',      '7-B-1-1', '2-Y-1-1', '6-G-1-1', '4-W-1-1')
    caraEspejo('1-B-1-0', '1-Y-1-2', '1-G-1-0', '1-W-1-0',      '7-B-1-2', '2-Y-1-2', '6-G-1-2', '4-W-1-0')
    caraEspejo('1-B-1-2', '1-Y-1-0', '1-G-1-2', '1-W-1-2',      '7-B-1-0', '2-Y-1-0', '6-G-1-0', '4-W-1-2')
}

function espejoS() {
    caraEspejo('1-B-1-1', '1-O-1-1', '1-G-1-1', '1-R-1-1',      '7-B-1-1', '5-O-1-1', '6-G-1-1', '3-R-1-1')
    caraEspejo('1-B-0-1', '1-O-1-0', '1-G-2-1', '1-R-1-2',      '7-B-0-1', '5-O-1-0', '6-G-2-1', '3-R-1-2')
    caraEspejo('1-B-2-1', '1-O-1-2', '1-G-0-1', '1-R-1-0',      '7-B-2-1', '5-O-1-2', '6-G-0-1', '3-R-1-0')
}

function espejoR() {
    caraEspejo('1-G-1-0', '1-G-2-1', '1-G-1-2', '1-G-0-1',      '6-G-1-2', '6-G-2-1', '6-G-1-0', '6-G-0-1')
    caraEspejo('1-G-2-0', '1-G-2-2', '1-G-0-2', '1-G-0-0',      '6-G-2-2', '6-G-2-0', '6-G-0-0', '6-G-0-2')

    caraEspejo('1-W-1-2', '1-O-1-2', '1-Y-1-2', '1-R-1-2',      '4-W-1-2', '5-O-1-2', '2-Y-1-2', '3-R-1-2')
    caraEspejo('1-W-0-2', '1-O-0-2', '1-Y-0-2', '1-R-0-2',      '4-W-2-2', '5-O-2-2', '2-Y-2-2', '3-R-2-2')
    caraEspejo('1-W-2-2', '1-O-2-2', '1-Y-2-2', '1-R-2-2',      '4-W-0-2', '5-O-0-2', '2-Y-0-2', '3-R-0-2')
}

function espejoL() {
    caraEspejo('1-B-1-0', '1-B-2-1', '1-B-1-2', '1-B-0-1',      '7-B-1-2', '7-B-2-1', '7-B-1-0', '7-B-0-1')
    caraEspejo('1-B-2-0', '1-B-2-2', '1-B-0-2', '1-B-0-0',      '7-B-2-2', '7-B-2-0', '7-B-0-0', '7-B-0-2')

    caraEspejo('1-Y-1-0', '1-O-1-0', '1-W-1-0', '1-R-1-0',      '2-Y-1-0', '5-O-1-0', '4-W-1-0', '3-R-1-0')
    caraEspejo('1-Y-0-0', '1-O-0-0', '1-W-0-0', '1-R-0-0',      '2-Y-2-0', '5-O-2-0', '4-W-2-0', '3-R-2-0')
    caraEspejo('1-Y-2-0', '1-O-2-0', '1-W-2-0', '1-R-2-0',      '2-Y-0-0', '5-O-0-0', '4-W-0-0', '3-R-0-0')
}

function espejoU() {
    caraEspejo('1-R-1-0', '1-R-2-1', '1-R-1-2', '1-R-0-1',      '3-R-1-0', '3-R-0-1', '3-R-1-2', '3-R-2-1')
    caraEspejo('1-R-2-0', '1-R-2-2', '1-R-0-2', '1-R-0-0',      '3-R-0-0', '3-R-0-2', '3-R-2-2', '3-R-2-0')

    caraEspejo('1-B-0-1', '1-W-0-1', '1-G-0-1', '1-Y-2-1',      '7-B-0-1', '4-W-2-1', '6-G-0-1', '2-Y-0-1')
    caraEspejo('1-B-0-0', '1-W-0-0', '1-G-0-0', '1-Y-2-2',      '7-B-0-2', '4-W-2-0', '6-G-0-2', '2-Y-0-2')
    caraEspejo('1-B-0-2', '1-W-0-2', '1-G-0-2', '1-Y-2-0',      '7-B-0-0', '4-W-2-2', '6-G-0-0', '2-Y-0-0')
}

function espejoD() {
    caraEspejo('1-O-0-1', '1-O-1-0', '1-O-2-1', '1-O-1-2',      '5-O-2-1', '5-O-1-0', '5-O-0-1', '5-O-1-2')
    caraEspejo('1-O-0-0', '1-O-2-0', '1-O-2-2', '1-O-0-2',      '5-O-2-0', '5-O-0-0', '5-O-0-2', '5-O-2-2')

    caraEspejo('1-W-2-1', '1-B-2-1', '1-Y-0-1', '1-G-2-1',      '4-W-0-1', '7-B-2-1', '2-Y-2-1', '6-G-2-1')
    caraEspejo('1-W-2-2', '1-B-2-2', '1-Y-0-0', '1-G-2-2',      '4-W-0-2', '7-B-2-0', '2-Y-2-0', '6-G-2-0')
    caraEspejo('1-W-2-0', '1-B-2-0', '1-Y-0-2', '1-G-2-0',      '4-W-0-0', '7-B-2-2', '2-Y-2-2', '6-G-2-2')
}

function espejoF() {
    caraEspejo('1-W-1-0', '1-W-2-1', '1-W-1-2', '1-W-0-1',      '4-W-1-0', '4-W-0-1', '4-W-1-2', '4-W-2-1')
    caraEspejo('1-W-2-0', '1-W-2-2', '1-W-0-2', '1-W-0-0',      '4-W-0-0', '4-W-0-2', '4-W-2-2', '4-W-2-0')

    caraEspejo('1-B-1-2', '1-O-0-1', '1-G-1-0', '1-R-2-1',      '7-B-1-0', '5-O-2-1', '6-G-1-2', '3-R-0-1')
    caraEspejo('1-B-0-2', '1-O-0-0', '1-G-2-0', '1-R-2-2',      '7-B-0-0', '5-O-2-0', '6-G-2-2', '3-R-0-2')
    caraEspejo('1-B-2-2', '1-O-0-2', '1-G-0-0', '1-R-2-0',      '7-B-2-0', '5-O-2-2', '6-G-0-2', '3-R-0-0')
}

function espejoB() {
    caraEspejo('1-Y-1-0', '1-Y-2-1', '1-Y-1-2', '1-Y-0-1',      '2-Y-1-0', '2-Y-0-1', '2-Y-1-2', '2-Y-2-1')
    caraEspejo('1-Y-2-0', '1-Y-2-2', '1-Y-0-2', '1-Y-0-0',      '2-Y-0-0', '2-Y-0-2', '2-Y-2-2', '2-Y-2-0')

    caraEspejo('1-B-1-0', '1-R-0-1', '1-G-1-2', '1-O-2-1',      '7-B-1-2', '3-R-2-1', '6-G-1-0', '5-O-0-1')
    caraEspejo('1-B-2-0', '1-R-0-0', '1-G-0-2', '1-O-2-2',      '7-B-2-2', '3-R-2-0', '6-G-0-0', '5-O-0-2')
    caraEspejo('1-B-0-0', '1-R-0-2', '1-G-2-2', '1-O-2-0',      '7-B-0-2', '3-R-2-2', '6-G-2-0', '5-O-0-0')
}