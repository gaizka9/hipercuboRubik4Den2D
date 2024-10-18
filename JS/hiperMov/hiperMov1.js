const h1cuboV1 = document.getElementById('cubo1');
    let h1visibilidad1 = h1cuboV1.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!h1visibilidad1) {
        const h1estiloCubo1 = window.getComputedStyle(h1cuboV1);
        h1visibilidad1 = h1estiloCubo1.visibility;
    }


if (h1visibilidad1 === "visible") {
    console.log('Hiper cubo 1 Visible')

    var c1, c2, c3, c4, c5, c6, c7, c8, c9;

    document.addEventListener('keydown', function(event) {

        if (event.shiftKey && event.ctrlKey && (event.key === 'x' || event.key === 'X')) { 
            
            cubo1.style.visibility = "hidden";
            cubo6.style.visibility = "visible";

        }else if (event.ctrlKey && (event.key === 'x' || event.key === 'X')) { 
            
            cubo1.style.visibility = "hidden";
            cubo7.style.visibility = "visible"; 

            carasIntercambio('6-G-0-0','6-G-0-1','6-G-0-2', '6-G-1-0','6-G-1-1','6-G-1-2', '6-G-2-0','6-G-2-1','6-G-2-2',
                             '6-CO-0-0', '6-CO-0-1','6-CO-0-2', '6-CO-1-0', '6-CO-1-1','6-CO-1-2', '6-CO-2-0', '6-CO-2-1','6-CO-2-2');
            caraInvertida('6-BS-0-0','6-BS-0-1','6-BS-0-2', '6-BS-1-0','6-BS-1-1','6-BS-1-2', '6-BS-2-0','6-BS-2-1','6-BS-2-2',);
            caraInvertida('6-GD-0-0','6-GD-0-1','6-GD-0-2', '6-GD-1-0','6-GD-1-1','6-GD-1-2', '6-GD-2-0','6-GD-2-1','6-GD-2-2',);
            caraInvertida('6-PH-0-0','6-PH-0-1','6-PH-0-2', '6-PH-1-0','6-PH-1-1','6-PH-1-2', '6-PH-2-0','6-PH-2-1','6-PH-2-2',);
            caraInvertida('6-P-0-0','6-P-0-1','6-P-0-2', '6-P-1-0','6-P-1-1','6-P-1-2', '6-P-2-0','6-P-2-1','6-P-2-2',);

            carasIntercambio('8-MO-0-0','8-MO-0-1','8-MO-0-2', '8-MO-1-0','8-MO-1-1','8-MO-1-2', '8-MO-2-0','8-MO-2-1','8-MO-2-2',
                             '8-CO-0-0', '8-CO-0-1','8-CO-0-2', '8-CO-1-0', '8-CO-1-1','8-CO-1-2', '8-CO-2-0', '8-CO-2-1','8-CO-2-2');
            caraInvertida('8-RD-0-0','8-RD-0-1','8-RD-0-2', '8-RD-1-0','8-RD-1-1','8-RD-1-2', '8-RD-2-0','8-RD-2-1','8-RD-2-2',);
            caraInvertida('8-V-0-0','8-V-0-1','8-V-0-2', '8-V-1-0','8-V-1-1','8-V-1-2', '8-V-2-0','8-V-2-1','8-V-2-2',);
            caraInvertida('8-C-0-0','8-C-0-1','8-C-0-2', '8-C-1-0','8-C-1-1','8-C-1-2', '8-C-2-0','8-C-2-1','8-C-2-2',);
            caraInvertida('8-GM-0-0','8-GM-0-1','8-GM-0-2', '8-GM-1-0','8-GM-1-1','8-GM-1-2', '8-GM-2-0','8-GM-2-1','8-GM-2-2',);
        }
    });

}else{
    console.log('Hiper cubo 1 Oculto')
}


function carasIntercambio(co11, co12, co13, co14, co15, co16, co17, co18, co19, co21, co22, co23, co24, co25, co26, co27, co28, co29) {
    let aux = [], aux2 = [];

        const c11 = document.getElementById(co11);  aux[0] = c11.getAttribute('data-color');    c11.removeAttribute('data-color');  
        const c12 = document.getElementById(co12);  aux[1] = c12.getAttribute('data-color');    c12.removeAttribute('data-color');  
        const c13 = document.getElementById(co13);  aux[2] = c13.getAttribute('data-color');    c13.removeAttribute('data-color');  
        const c14 = document.getElementById(co14);  aux[3] = c14.getAttribute('data-color');    c14.removeAttribute('data-color');  
        const c15 = document.getElementById(co15);  aux[4] = c15.getAttribute('data-color');    c15.removeAttribute('data-color');  
        const c16 = document.getElementById(co16);  aux[5] = c16.getAttribute('data-color');    c16.removeAttribute('data-color');  
        const c17 = document.getElementById(co17);  aux[6] = c17.getAttribute('data-color');    c17.removeAttribute('data-color');  
        const c18 = document.getElementById(co18);  aux[7] = c18.getAttribute('data-color');    c18.removeAttribute('data-color');  
        const c19 = document.getElementById(co19);  aux[8] = c19.getAttribute('data-color');    c19.removeAttribute('data-color');  

        const c21 = document.getElementById(co21);  aux2[0] = c21.getAttribute('data-color');    c21.removeAttribute('data-color');  
        const c22 = document.getElementById(co22);  aux2[1] = c22.getAttribute('data-color');    c22.removeAttribute('data-color');  
        const c23 = document.getElementById(co23);  aux2[2] = c23.getAttribute('data-color');    c23.removeAttribute('data-color');  
        const c24 = document.getElementById(co24);  aux2[3] = c24.getAttribute('data-color');    c24.removeAttribute('data-color');  
        const c25 = document.getElementById(co25);  aux2[4] = c25.getAttribute('data-color');    c25.removeAttribute('data-color');  
        const c26 = document.getElementById(co26);  aux2[5] = c26.getAttribute('data-color');    c26.removeAttribute('data-color');  
        const c27 = document.getElementById(co27);  aux2[6] = c27.getAttribute('data-color');    c27.removeAttribute('data-color');  
        const c28 = document.getElementById(co28);  aux2[7] = c28.getAttribute('data-color');    c28.removeAttribute('data-color'); 
        const c29 = document.getElementById(co29);  aux2[8] = c29.getAttribute('data-color');    c29.removeAttribute('data-color'); 

        c11.setAttribute('data-color', aux2[2]);    c21.setAttribute('data-color', aux[2]);
        c12.setAttribute('data-color', aux2[1]);    c22.setAttribute('data-color', aux[1]);
        c13.setAttribute('data-color', aux2[0]);    c23.setAttribute('data-color', aux[0]);
        c14.setAttribute('data-color', aux2[5]);    c24.setAttribute('data-color', aux[5]);
        c15.setAttribute('data-color', aux2[4]);    c25.setAttribute('data-color', aux[4]);
        c16.setAttribute('data-color', aux2[3]);    c26.setAttribute('data-color', aux[3]);
        c17.setAttribute('data-color', aux2[8]);    c27.setAttribute('data-color', aux[8]);
        c18.setAttribute('data-color', aux2[7]);    c28.setAttribute('data-color', aux[7]);
        c19.setAttribute('data-color', aux2[6]);    c29.setAttribute('data-color', aux[6]);
}

function caraInvertida(coor1, coor2, coor3, coor4, coor5, coor6, coor7, coor8, coor9) {

    let aux = []

        const c1 = document.getElementById(coor1);
        const c2 = document.getElementById(coor2);
        const c3 = document.getElementById(coor3);
        const c4 = document.getElementById(coor4);
        const c5 = document.getElementById(coor5);
        const c6 = document.getElementById(coor6);
        const c7 = document.getElementById(coor7);
        const c8 = document.getElementById(coor8);
        const c9 = document.getElementById(coor9);

        aux[0] = c1.getAttribute('data-color');    c1.removeAttribute('data-color');
        aux[1] = c2.getAttribute('data-color');    c2.removeAttribute('data-color');
        aux[2] = c3.getAttribute('data-color');    c3.removeAttribute('data-color');
        aux[3] = c4.getAttribute('data-color');    c4.removeAttribute('data-color');
        aux[4] = c5.getAttribute('data-color');    c5.removeAttribute('data-color');
        aux[5] = c6.getAttribute('data-color');    c6.removeAttribute('data-color');
        aux[6] = c7.getAttribute('data-color');    c7.removeAttribute('data-color');
        aux[7] = c8.getAttribute('data-color');    c8.removeAttribute('data-color');
        aux[8] = c9.getAttribute('data-color');    c9.removeAttribute('data-color');

        c1.setAttribute('data-color', aux[2]);
        c2.setAttribute('data-color', aux[1]);
        c3.setAttribute('data-color', aux[0]);
        c4.setAttribute('data-color', aux[5]);
        c5.setAttribute('data-color', aux[4]);
        c6.setAttribute('data-color', aux[3]);
        c7.setAttribute('data-color', aux[8]);
        c8.setAttribute('data-color', aux[7]);
        c9.setAttribute('data-color', aux[6]);

}