import { coordenadasHipercubo } from '../export/coordenadas.js';

const hipercubo = coordenadasHipercubo();
const h1cuboV1 = document.getElementById('cubo1');
    let h1visibilidad1 = h1cuboV1.style.visibility;

    // Si no hay visibilidad en línea, obtener el valor calculado
    if (!h1visibilidad1) {
        const h1estiloCubo1 = window.getComputedStyle(h1cuboV1);
        h1visibilidad1 = h1estiloCubo1.visibility;
    }


if (h1visibilidad1 === "visible") {
    console.log('Hiper cubo 1 Visible')

    document.addEventListener('keydown', function(event) {
        var estiker = estikers(hipercubo);
        var color;

        if (event.shiftKey && event.ctrlKey && (event.key === 'x' || event.key === 'X')) { 
            color = borrarColor(hipercubo);
           
            //Cubo 1
            moverCubo(estiker, color, 0, 5);

            //Cubo 2
            estiker[1][0][0].setAttribute('data-color', color[1][2][0]);    estiker[1][0][1].setAttribute('data-color', color[1][2][1]);    estiker[1][0][2].setAttribute('data-color', color[1][2][2]);
            estiker[1][0][3].setAttribute('data-color', color[1][2][3]);    estiker[1][0][4].setAttribute('data-color', color[1][2][4]);    estiker[1][0][5].setAttribute('data-color', color[1][2][5]);
            estiker[1][0][6].setAttribute('data-color', color[1][2][6]);    estiker[1][0][7].setAttribute('data-color', color[1][2][7]);    estiker[1][0][8].setAttribute('data-color', color[1][2][8]);

            estiker[1][1][0].setAttribute('data-color', color[1][1][6]);    estiker[1][1][1].setAttribute('data-color', color[1][1][3]);    estiker[1][1][2].setAttribute('data-color', color[1][1][0]);
            estiker[1][1][3].setAttribute('data-color', color[1][1][7]);    estiker[1][1][4].setAttribute('data-color', color[1][1][4]);    estiker[1][1][5].setAttribute('data-color', color[1][1][1]);
            estiker[1][1][6].setAttribute('data-color', color[1][1][8]);    estiker[1][1][7].setAttribute('data-color', color[1][1][5]);    estiker[1][1][8].setAttribute('data-color', color[1][1][2]);

            estiker[1][2][0].setAttribute('data-color', color[1][5][8]);    estiker[1][2][1].setAttribute('data-color', color[1][5][7]);    estiker[1][2][2].setAttribute('data-color', color[1][5][6]);
            estiker[1][2][3].setAttribute('data-color', color[1][5][5]);    estiker[1][2][4].setAttribute('data-color', color[1][5][4]);    estiker[1][2][5].setAttribute('data-color', color[1][5][3]);
            estiker[1][2][6].setAttribute('data-color', color[1][5][2]);    estiker[1][2][7].setAttribute('data-color', color[1][5][1]);    estiker[1][2][8].setAttribute('data-color', color[1][5][0]);

            estiker[1][3][0].setAttribute('data-color', color[1][3][2]);    estiker[1][3][1].setAttribute('data-color', color[1][3][5]);    estiker[1][3][2].setAttribute('data-color', color[1][3][8]);
            estiker[1][3][3].setAttribute('data-color', color[1][3][1]);    estiker[1][3][4].setAttribute('data-color', color[1][3][4]);    estiker[1][3][5].setAttribute('data-color', color[1][3][7]);
            estiker[1][3][6].setAttribute('data-color', color[1][3][0]);    estiker[1][3][7].setAttribute('data-color', color[1][3][3]);    estiker[1][3][8].setAttribute('data-color', color[1][3][6]);

            estiker[1][4][0].setAttribute('data-color', color[1][0][0]);    estiker[1][4][1].setAttribute('data-color', color[1][0][1]);    estiker[1][4][2].setAttribute('data-color', color[1][0][2]);
            estiker[1][4][3].setAttribute('data-color', color[1][0][3]);    estiker[1][4][4].setAttribute('data-color', color[1][0][4]);    estiker[1][4][5].setAttribute('data-color', color[1][0][5]);
            estiker[1][4][6].setAttribute('data-color', color[1][0][6]);    estiker[1][4][7].setAttribute('data-color', color[1][0][7]);    estiker[1][4][8].setAttribute('data-color', color[1][0][8]);

            estiker[1][5][0].setAttribute('data-color', color[1][4][8]);    estiker[1][5][1].setAttribute('data-color', color[1][4][7]);    estiker[1][5][2].setAttribute('data-color', color[1][4][6]);
            estiker[1][5][3].setAttribute('data-color', color[1][4][5]);    estiker[1][5][4].setAttribute('data-color', color[1][4][4]);    estiker[1][5][5].setAttribute('data-color', color[1][4][3]);
            estiker[1][5][6].setAttribute('data-color', color[1][4][2]);    estiker[1][5][7].setAttribute('data-color', color[1][4][1]);    estiker[1][5][8].setAttribute('data-color', color[1][4][0]);

            //Cubo 3
            estiker[2][0][0].setAttribute('data-color', color[2][0][6]);    estiker[2][0][1].setAttribute('data-color', color[2][0][3]);    estiker[2][0][2].setAttribute('data-color', color[2][0][0]);
            estiker[2][0][3].setAttribute('data-color', color[2][0][7]);    estiker[2][0][4].setAttribute('data-color', color[2][0][4]);    estiker[2][0][5].setAttribute('data-color', color[2][0][1]);
            estiker[2][0][6].setAttribute('data-color', color[2][0][8]);    estiker[2][0][7].setAttribute('data-color', color[2][0][5]);    estiker[2][0][8].setAttribute('data-color', color[2][0][2]);

            estiker[2][1][0].setAttribute('data-color', color[2][4][6]);    estiker[2][1][1].setAttribute('data-color', color[2][4][3]);    estiker[2][1][2].setAttribute('data-color', color[2][4][0]);
            estiker[2][1][3].setAttribute('data-color', color[2][4][7]);    estiker[2][1][4].setAttribute('data-color', color[2][4][4]);    estiker[2][1][5].setAttribute('data-color', color[2][4][1]);
            estiker[2][1][6].setAttribute('data-color', color[2][4][8]);    estiker[2][1][7].setAttribute('data-color', color[2][4][5]);    estiker[2][1][8].setAttribute('data-color', color[2][4][2]);

            estiker[2][2][0].setAttribute('data-color', color[2][1][6]);    estiker[2][2][1].setAttribute('data-color', color[2][1][3]);    estiker[2][2][2].setAttribute('data-color', color[2][1][0]);
            estiker[2][2][3].setAttribute('data-color', color[2][1][7]);    estiker[2][2][4].setAttribute('data-color', color[2][1][4]);    estiker[2][2][5].setAttribute('data-color', color[2][1][1]);
            estiker[2][2][6].setAttribute('data-color', color[2][1][8]);    estiker[2][2][7].setAttribute('data-color', color[2][1][5]);    estiker[2][2][8].setAttribute('data-color', color[2][1][2]);

            estiker[2][3][0].setAttribute('data-color', color[2][2][6]);    estiker[2][3][1].setAttribute('data-color', color[2][2][3]);    estiker[2][3][2].setAttribute('data-color', color[2][2][0]);
            estiker[2][3][3].setAttribute('data-color', color[2][2][7]);    estiker[2][3][4].setAttribute('data-color', color[2][2][4]);    estiker[2][3][5].setAttribute('data-color', color[2][2][1]);
            estiker[2][3][6].setAttribute('data-color', color[2][2][8]);    estiker[2][3][7].setAttribute('data-color', color[2][2][5]);    estiker[2][3][8].setAttribute('data-color', color[2][2][2]);

            estiker[2][4][0].setAttribute('data-color', color[2][3][6]);    estiker[2][4][1].setAttribute('data-color', color[2][3][3]);    estiker[2][4][2].setAttribute('data-color', color[2][3][0]);
            estiker[2][4][3].setAttribute('data-color', color[2][3][7]);    estiker[2][4][4].setAttribute('data-color', color[2][3][4]);    estiker[2][4][5].setAttribute('data-color', color[2][3][1]);
            estiker[2][4][6].setAttribute('data-color', color[2][3][8]);    estiker[2][4][7].setAttribute('data-color', color[2][3][5]);    estiker[2][4][8].setAttribute('data-color', color[2][3][2]);

            estiker[2][5][0].setAttribute('data-color', color[2][5][2]);    estiker[2][5][1].setAttribute('data-color', color[2][5][5]);    estiker[2][5][2].setAttribute('data-color', color[2][5][8]);
            estiker[2][5][3].setAttribute('data-color', color[2][5][1]);    estiker[2][5][4].setAttribute('data-color', color[2][5][4]);    estiker[2][5][5].setAttribute('data-color', color[2][5][7]);
            estiker[2][5][6].setAttribute('data-color', color[2][5][0]);    estiker[2][5][7].setAttribute('data-color', color[2][5][3]);    estiker[2][5][8].setAttribute('data-color', color[2][5][6]);

            //Cubo 4
            estiker[3][0][0].setAttribute('data-color', color[3][4][0]);    estiker[3][0][1].setAttribute('data-color', color[3][4][1]);    estiker[3][0][2].setAttribute('data-color', color[3][4][2]);
            estiker[3][0][3].setAttribute('data-color', color[3][4][3]);    estiker[3][0][4].setAttribute('data-color', color[3][4][4]);    estiker[3][0][5].setAttribute('data-color', color[3][4][5]);
            estiker[3][0][6].setAttribute('data-color', color[3][4][6]);    estiker[3][0][7].setAttribute('data-color', color[3][4][7]);    estiker[3][0][8].setAttribute('data-color', color[3][4][8]);

            estiker[3][1][0].setAttribute('data-color', color[3][1][2]);    estiker[3][1][1].setAttribute('data-color', color[3][1][5]);    estiker[3][1][2].setAttribute('data-color', color[3][1][8]);
            estiker[3][1][3].setAttribute('data-color', color[3][1][1]);    estiker[3][1][4].setAttribute('data-color', color[3][1][4]);    estiker[3][1][5].setAttribute('data-color', color[3][1][7]);
            estiker[3][1][6].setAttribute('data-color', color[3][1][0]);    estiker[3][1][7].setAttribute('data-color', color[3][1][3]);    estiker[3][1][8].setAttribute('data-color', color[3][1][6]);

            estiker[3][2][0].setAttribute('data-color', color[3][0][0]);    estiker[3][2][1].setAttribute('data-color', color[3][0][1]);    estiker[3][2][2].setAttribute('data-color', color[3][0][2]);
            estiker[3][2][3].setAttribute('data-color', color[3][0][3]);    estiker[3][2][4].setAttribute('data-color', color[3][0][4]);    estiker[3][2][5].setAttribute('data-color', color[3][0][5]);
            estiker[3][2][6].setAttribute('data-color', color[3][0][6]);    estiker[3][2][7].setAttribute('data-color', color[3][0][7]);    estiker[3][2][8].setAttribute('data-color', color[3][0][8]);

            estiker[3][3][0].setAttribute('data-color', color[3][3][6]);    estiker[3][3][1].setAttribute('data-color', color[3][3][3]);    estiker[3][3][2].setAttribute('data-color', color[3][3][0]);
            estiker[3][3][3].setAttribute('data-color', color[3][3][7]);    estiker[3][3][4].setAttribute('data-color', color[3][3][4]);    estiker[3][3][5].setAttribute('data-color', color[3][3][1]);
            estiker[3][3][6].setAttribute('data-color', color[3][3][8]);    estiker[3][3][7].setAttribute('data-color', color[3][3][5]);    estiker[3][3][8].setAttribute('data-color', color[3][3][2]);

            estiker[3][4][0].setAttribute('data-color', color[3][5][8]);    estiker[3][4][1].setAttribute('data-color', color[3][5][7]);    estiker[3][4][2].setAttribute('data-color', color[3][5][6]);
            estiker[3][4][3].setAttribute('data-color', color[3][5][5]);    estiker[3][4][4].setAttribute('data-color', color[3][5][4]);    estiker[3][4][5].setAttribute('data-color', color[3][5][3]);
            estiker[3][4][6].setAttribute('data-color', color[3][5][2]);    estiker[3][4][7].setAttribute('data-color', color[3][5][1]);    estiker[3][4][8].setAttribute('data-color', color[3][5][0]);

            estiker[3][5][0].setAttribute('data-color', color[3][2][8]);    estiker[3][5][1].setAttribute('data-color', color[3][2][7]);    estiker[3][5][2].setAttribute('data-color', color[3][2][6]);
            estiker[3][5][3].setAttribute('data-color', color[3][2][5]);    estiker[3][5][4].setAttribute('data-color', color[3][2][4]);    estiker[3][5][5].setAttribute('data-color', color[3][2][3]);
            estiker[3][5][6].setAttribute('data-color', color[3][2][2]);    estiker[3][5][7].setAttribute('data-color', color[3][2][1]);    estiker[3][5][8].setAttribute('data-color', color[3][2][0]);

            //Cubo 5
            estiker[4][0][0].setAttribute('data-color', color[4][0][2]);    estiker[4][0][1].setAttribute('data-color', color[4][0][5]);    estiker[4][0][2].setAttribute('data-color', color[4][0][8]);
            estiker[4][0][3].setAttribute('data-color', color[4][0][1]);    estiker[4][0][4].setAttribute('data-color', color[4][0][4]);    estiker[4][0][5].setAttribute('data-color', color[4][0][7]);
            estiker[4][0][6].setAttribute('data-color', color[4][0][0]);    estiker[4][0][7].setAttribute('data-color', color[4][0][3]);    estiker[4][0][8].setAttribute('data-color', color[4][0][6]);

            estiker[4][1][0].setAttribute('data-color', color[4][2][2]);    estiker[4][1][1].setAttribute('data-color', color[4][2][5]);    estiker[4][1][2].setAttribute('data-color', color[4][2][8]);
            estiker[4][1][3].setAttribute('data-color', color[4][2][1]);    estiker[4][1][4].setAttribute('data-color', color[4][2][4]);    estiker[4][1][5].setAttribute('data-color', color[4][2][7]);
            estiker[4][1][6].setAttribute('data-color', color[4][2][0]);    estiker[4][1][7].setAttribute('data-color', color[4][2][3]);    estiker[4][1][8].setAttribute('data-color', color[4][2][6]);

            estiker[4][2][0].setAttribute('data-color', color[4][3][2]);    estiker[4][2][1].setAttribute('data-color', color[4][3][5]);    estiker[4][2][2].setAttribute('data-color', color[4][3][8]);
            estiker[4][2][3].setAttribute('data-color', color[4][3][1]);    estiker[4][2][4].setAttribute('data-color', color[4][3][4]);    estiker[4][2][5].setAttribute('data-color', color[4][3][7]);
            estiker[4][2][6].setAttribute('data-color', color[4][3][0]);    estiker[4][2][7].setAttribute('data-color', color[4][3][3]);    estiker[4][2][8].setAttribute('data-color', color[4][3][6]);

            estiker[4][3][0].setAttribute('data-color', color[4][4][2]);    estiker[4][3][1].setAttribute('data-color', color[4][4][5]);    estiker[4][3][2].setAttribute('data-color', color[4][4][8]);
            estiker[4][3][3].setAttribute('data-color', color[4][4][1]);    estiker[4][3][4].setAttribute('data-color', color[4][4][4]);    estiker[4][3][5].setAttribute('data-color', color[4][4][7]);
            estiker[4][3][6].setAttribute('data-color', color[4][4][0]);    estiker[4][3][7].setAttribute('data-color', color[4][4][3]);    estiker[4][3][8].setAttribute('data-color', color[4][4][6]);

            estiker[4][4][0].setAttribute('data-color', color[4][1][2]);    estiker[4][4][1].setAttribute('data-color', color[4][1][5]);    estiker[4][4][2].setAttribute('data-color', color[4][1][8]);
            estiker[4][4][3].setAttribute('data-color', color[4][1][1]);    estiker[4][4][4].setAttribute('data-color', color[4][1][4]);    estiker[4][4][5].setAttribute('data-color', color[4][1][7]);
            estiker[4][4][6].setAttribute('data-color', color[4][1][0]);    estiker[4][4][7].setAttribute('data-color', color[4][1][3]);    estiker[4][4][8].setAttribute('data-color', color[4][1][6]);

            estiker[4][5][0].setAttribute('data-color', color[4][5][6]);    estiker[4][5][1].setAttribute('data-color', color[4][5][3]);    estiker[4][5][2].setAttribute('data-color', color[4][5][0]);
            estiker[4][5][3].setAttribute('data-color', color[4][5][7]);    estiker[4][5][4].setAttribute('data-color', color[4][5][4]);    estiker[4][5][5].setAttribute('data-color', color[4][5][1]);
            estiker[4][5][6].setAttribute('data-color', color[4][5][8]);    estiker[4][5][7].setAttribute('data-color', color[4][5][5]);    estiker[4][5][8].setAttribute('data-color', color[4][5][2]);

            //Cubo 6
            estiker[5][0][0].setAttribute('data-color', color[7][0][2]);    estiker[5][0][1].setAttribute('data-color', color[7][0][1]);    estiker[5][0][2].setAttribute('data-color', color[7][0][0]);
            estiker[5][0][3].setAttribute('data-color', color[7][0][5]);    estiker[5][0][4].setAttribute('data-color', color[7][0][4]);    estiker[5][0][5].setAttribute('data-color', color[7][0][3]);
            estiker[5][0][6].setAttribute('data-color', color[7][0][8]);    estiker[5][0][7].setAttribute('data-color', color[7][0][7]);    estiker[5][0][8].setAttribute('data-color', color[7][0][6]);

            estiker[5][1][0].setAttribute('data-color', color[7][1][2]);    estiker[5][1][1].setAttribute('data-color', color[7][1][1]);    estiker[5][1][2].setAttribute('data-color', color[7][1][0]);
            estiker[5][1][3].setAttribute('data-color', color[7][1][5]);    estiker[5][1][4].setAttribute('data-color', color[7][1][4]);    estiker[5][1][5].setAttribute('data-color', color[7][1][3]);
            estiker[5][1][6].setAttribute('data-color', color[7][1][8]);    estiker[5][1][7].setAttribute('data-color', color[7][1][7]);    estiker[5][1][8].setAttribute('data-color', color[7][1][6]);

            estiker[5][2][0].setAttribute('data-color', color[7][4][2]);    estiker[5][2][1].setAttribute('data-color', color[7][4][1]);    estiker[5][2][2].setAttribute('data-color', color[7][4][0]);
            estiker[5][2][3].setAttribute('data-color', color[7][4][5]);    estiker[5][2][4].setAttribute('data-color', color[7][4][4]);    estiker[5][2][5].setAttribute('data-color', color[7][4][3]);
            estiker[5][2][6].setAttribute('data-color', color[7][4][8]);    estiker[5][2][7].setAttribute('data-color', color[7][4][7]);    estiker[5][2][8].setAttribute('data-color', color[7][4][6]);
        
            estiker[5][3][0].setAttribute('data-color', color[7][3][2]);    estiker[5][3][1].setAttribute('data-color', color[7][3][1]);    estiker[5][3][2].setAttribute('data-color', color[7][3][0]);
            estiker[5][3][3].setAttribute('data-color', color[7][3][5]);    estiker[5][3][4].setAttribute('data-color', color[7][3][4]);    estiker[5][3][5].setAttribute('data-color', color[7][3][3]);
            estiker[5][3][6].setAttribute('data-color', color[7][3][8]);    estiker[5][3][7].setAttribute('data-color', color[7][3][7]);    estiker[5][3][8].setAttribute('data-color', color[7][3][6]);

            estiker[5][4][0].setAttribute('data-color', color[7][2][2]);    estiker[5][4][1].setAttribute('data-color', color[7][2][1]);    estiker[5][4][2].setAttribute('data-color', color[7][2][0]);
            estiker[5][4][3].setAttribute('data-color', color[7][2][5]);    estiker[5][4][4].setAttribute('data-color', color[7][2][4]);    estiker[5][4][5].setAttribute('data-color', color[7][2][3]);
            estiker[5][4][6].setAttribute('data-color', color[7][2][8]);    estiker[5][4][7].setAttribute('data-color', color[7][2][7]);    estiker[5][4][8].setAttribute('data-color', color[7][2][6]);

            estiker[5][5][0].setAttribute('data-color', color[7][5][2]);    estiker[5][5][1].setAttribute('data-color', color[7][5][1]);    estiker[5][5][2].setAttribute('data-color', color[7][5][0]);
            estiker[5][5][3].setAttribute('data-color', color[7][5][5]);    estiker[5][5][4].setAttribute('data-color', color[7][5][4]);    estiker[5][5][5].setAttribute('data-color', color[7][5][3]);
            estiker[5][5][6].setAttribute('data-color', color[7][5][8]);    estiker[5][5][7].setAttribute('data-color', color[7][5][7]);    estiker[5][5][8].setAttribute('data-color', color[7][5][6]);

            //Cubo 7
            moverCubo(estiker, color, 6, 0);

            //Cubo 8
            estiker[7][0][0].setAttribute('data-color', color[6][0][2]);    estiker[7][0][1].setAttribute('data-color', color[6][0][1]);    estiker[7][0][2].setAttribute('data-color', color[6][0][0]);
            estiker[7][0][3].setAttribute('data-color', color[6][0][5]);    estiker[7][0][4].setAttribute('data-color', color[6][0][4]);    estiker[7][0][5].setAttribute('data-color', color[6][0][3]);
            estiker[7][0][6].setAttribute('data-color', color[6][0][8]);    estiker[7][0][7].setAttribute('data-color', color[6][0][7]);    estiker[7][0][8].setAttribute('data-color', color[6][0][6]);

            estiker[7][1][0].setAttribute('data-color', color[6][1][2]);    estiker[7][1][1].setAttribute('data-color', color[6][1][1]);    estiker[7][1][2].setAttribute('data-color', color[6][1][0]);
            estiker[7][1][3].setAttribute('data-color', color[6][1][5]);    estiker[7][1][4].setAttribute('data-color', color[6][1][4]);    estiker[7][1][5].setAttribute('data-color', color[6][1][3]);
            estiker[7][1][6].setAttribute('data-color', color[6][1][8]);    estiker[7][1][7].setAttribute('data-color', color[6][1][7]);    estiker[7][1][8].setAttribute('data-color', color[6][1][6]);

            estiker[7][2][0].setAttribute('data-color', color[6][4][2]);    estiker[7][2][1].setAttribute('data-color', color[6][4][1]);    estiker[7][2][2].setAttribute('data-color', color[6][4][0]);
            estiker[7][2][3].setAttribute('data-color', color[6][4][5]);    estiker[7][2][4].setAttribute('data-color', color[6][4][4]);    estiker[7][2][5].setAttribute('data-color', color[6][4][3]);
            estiker[7][2][6].setAttribute('data-color', color[6][4][8]);    estiker[7][2][7].setAttribute('data-color', color[6][4][7]);    estiker[7][2][8].setAttribute('data-color', color[6][4][6]);
        
            estiker[7][3][0].setAttribute('data-color', color[6][3][2]);    estiker[7][3][1].setAttribute('data-color', color[6][3][1]);    estiker[7][3][2].setAttribute('data-color', color[6][3][0]);
            estiker[7][3][3].setAttribute('data-color', color[6][3][5]);    estiker[7][3][4].setAttribute('data-color', color[6][3][4]);    estiker[7][3][5].setAttribute('data-color', color[6][3][3]);
            estiker[7][3][6].setAttribute('data-color', color[6][3][8]);    estiker[7][3][7].setAttribute('data-color', color[6][3][7]);    estiker[7][3][8].setAttribute('data-color', color[6][3][6]);

            estiker[7][4][0].setAttribute('data-color', color[6][2][2]);    estiker[7][4][1].setAttribute('data-color', color[6][2][1]);    estiker[7][4][2].setAttribute('data-color', color[6][2][0]);
            estiker[7][4][3].setAttribute('data-color', color[6][2][5]);    estiker[7][4][4].setAttribute('data-color', color[6][2][4]);    estiker[7][4][5].setAttribute('data-color', color[6][2][3]);
            estiker[7][4][6].setAttribute('data-color', color[6][2][8]);    estiker[7][4][7].setAttribute('data-color', color[6][2][7]);    estiker[7][4][8].setAttribute('data-color', color[6][2][6]);

            estiker[7][5][0].setAttribute('data-color', color[6][5][2]);    estiker[7][5][1].setAttribute('data-color', color[6][5][1]);    estiker[7][5][2].setAttribute('data-color', color[6][5][0]);
            estiker[7][5][3].setAttribute('data-color', color[6][5][5]);    estiker[7][5][4].setAttribute('data-color', color[6][5][4]);    estiker[7][5][5].setAttribute('data-color', color[6][5][3]);
            estiker[7][5][6].setAttribute('data-color', color[6][5][8]);    estiker[7][5][7].setAttribute('data-color', color[6][5][7]);    estiker[7][5][8].setAttribute('data-color', color[6][5][6]);

        }else if (event.ctrlKey && (event.key === 'x' || event.key === 'X')) { 
            color = borrarColor(hipercubo);

            //Cubo 1
            moverCubo(estiker, color, 0, 6);

            //Cubo 2
            estiker[1][0][0].setAttribute('data-color', color[1][4][0]);    estiker[1][0][1].setAttribute('data-color', color[1][4][1]);    estiker[1][0][2].setAttribute('data-color', color[1][4][2]);
            estiker[1][0][3].setAttribute('data-color', color[1][4][3]);    estiker[1][0][4].setAttribute('data-color', color[1][4][4]);    estiker[1][0][5].setAttribute('data-color', color[1][4][5]);
            estiker[1][0][6].setAttribute('data-color', color[1][4][6]);    estiker[1][0][7].setAttribute('data-color', color[1][4][7]);    estiker[1][0][8].setAttribute('data-color', color[1][4][8]);

            estiker[1][1][0].setAttribute('data-color', color[1][1][2]);    estiker[1][1][1].setAttribute('data-color', color[1][1][5]);    estiker[1][1][2].setAttribute('data-color', color[1][1][8]);
            estiker[1][1][3].setAttribute('data-color', color[1][1][1]);    estiker[1][1][4].setAttribute('data-color', color[1][1][4]);    estiker[1][1][5].setAttribute('data-color', color[1][1][7]);
            estiker[1][1][6].setAttribute('data-color', color[1][1][0]);    estiker[1][1][7].setAttribute('data-color', color[1][1][3]);    estiker[1][1][8].setAttribute('data-color', color[1][1][6]);

            estiker[1][2][0].setAttribute('data-color', color[1][0][0]);    estiker[1][2][1].setAttribute('data-color', color[1][0][1]);    estiker[1][2][2].setAttribute('data-color', color[1][0][2]);
            estiker[1][2][3].setAttribute('data-color', color[1][0][3]);    estiker[1][2][4].setAttribute('data-color', color[1][0][4]);    estiker[1][2][5].setAttribute('data-color', color[1][0][5]);
            estiker[1][2][6].setAttribute('data-color', color[1][0][6]);    estiker[1][2][7].setAttribute('data-color', color[1][0][7]);    estiker[1][2][8].setAttribute('data-color', color[1][0][8]);

            estiker[1][3][0].setAttribute('data-color', color[1][3][6]);    estiker[1][3][1].setAttribute('data-color', color[1][3][3]);    estiker[1][3][2].setAttribute('data-color', color[1][3][0]);
            estiker[1][3][3].setAttribute('data-color', color[1][3][7]);    estiker[1][3][4].setAttribute('data-color', color[1][3][4]);    estiker[1][3][5].setAttribute('data-color', color[1][3][1]);
            estiker[1][3][6].setAttribute('data-color', color[1][3][8]);    estiker[1][3][7].setAttribute('data-color', color[1][3][5]);    estiker[1][3][8].setAttribute('data-color', color[1][3][2]);
            
            estiker[1][4][0].setAttribute('data-color', color[1][5][8]);    estiker[1][4][1].setAttribute('data-color', color[1][5][7]);    estiker[1][4][2].setAttribute('data-color', color[1][5][6]);
            estiker[1][4][3].setAttribute('data-color', color[1][5][5]);    estiker[1][4][4].setAttribute('data-color', color[1][5][4]);    estiker[1][4][5].setAttribute('data-color', color[1][5][3]);
            estiker[1][4][6].setAttribute('data-color', color[1][5][2]);    estiker[1][4][7].setAttribute('data-color', color[1][5][1]);    estiker[1][4][8].setAttribute('data-color', color[1][5][0]);

            estiker[1][5][0].setAttribute('data-color', color[1][2][8]);    estiker[1][5][1].setAttribute('data-color', color[1][2][7]);    estiker[1][5][2].setAttribute('data-color', color[1][2][6]);
            estiker[1][5][3].setAttribute('data-color', color[1][2][5]);    estiker[1][5][4].setAttribute('data-color', color[1][2][4]);    estiker[1][5][5].setAttribute('data-color', color[1][2][3]);
            estiker[1][5][6].setAttribute('data-color', color[1][2][2]);    estiker[1][5][7].setAttribute('data-color', color[1][2][1]);    estiker[1][5][8].setAttribute('data-color', color[1][2][0]);
            
            //Cubo 3
            estiker[2][0][0].setAttribute('data-color', color[2][0][2]);    estiker[2][0][1].setAttribute('data-color', color[2][0][5]);    estiker[2][0][2].setAttribute('data-color', color[2][0][8]);
            estiker[2][0][3].setAttribute('data-color', color[2][0][1]);    estiker[2][0][4].setAttribute('data-color', color[2][0][4]);    estiker[2][0][5].setAttribute('data-color', color[2][0][7]);
            estiker[2][0][6].setAttribute('data-color', color[2][0][0]);    estiker[2][0][7].setAttribute('data-color', color[2][0][3]);    estiker[2][0][8].setAttribute('data-color', color[2][0][6]);

            estiker[2][1][0].setAttribute('data-color', color[2][2][2]);    estiker[2][1][1].setAttribute('data-color', color[2][2][5]);    estiker[2][1][2].setAttribute('data-color', color[2][2][8]);
            estiker[2][1][3].setAttribute('data-color', color[2][2][1]);    estiker[2][1][4].setAttribute('data-color', color[2][2][4]);    estiker[2][1][5].setAttribute('data-color', color[2][2][7]);
            estiker[2][1][6].setAttribute('data-color', color[2][2][0]);    estiker[2][1][7].setAttribute('data-color', color[2][2][3]);    estiker[2][1][8].setAttribute('data-color', color[2][2][6]);

            estiker[2][2][0].setAttribute('data-color', color[2][3][2]);    estiker[2][2][1].setAttribute('data-color', color[2][3][5]);    estiker[2][2][2].setAttribute('data-color', color[2][3][8]);
            estiker[2][2][3].setAttribute('data-color', color[2][3][1]);    estiker[2][2][4].setAttribute('data-color', color[2][3][4]);    estiker[2][2][5].setAttribute('data-color', color[2][3][7]);
            estiker[2][2][6].setAttribute('data-color', color[2][3][0]);    estiker[2][2][7].setAttribute('data-color', color[2][3][3]);    estiker[2][2][8].setAttribute('data-color', color[2][3][6]);

            estiker[2][3][0].setAttribute('data-color', color[2][4][2]);    estiker[2][3][1].setAttribute('data-color', color[2][4][5]);    estiker[2][3][2].setAttribute('data-color', color[2][4][8]);
            estiker[2][3][3].setAttribute('data-color', color[2][4][1]);    estiker[2][3][4].setAttribute('data-color', color[2][4][4]);    estiker[2][3][5].setAttribute('data-color', color[2][4][7]);
            estiker[2][3][6].setAttribute('data-color', color[2][4][0]);    estiker[2][3][7].setAttribute('data-color', color[2][4][3]);    estiker[2][3][8].setAttribute('data-color', color[2][4][6]);

            estiker[2][4][0].setAttribute('data-color', color[2][1][2]);    estiker[2][4][1].setAttribute('data-color', color[2][1][5]);    estiker[2][4][2].setAttribute('data-color', color[2][1][8]);
            estiker[2][4][3].setAttribute('data-color', color[2][1][1]);    estiker[2][4][4].setAttribute('data-color', color[2][1][4]);    estiker[2][4][5].setAttribute('data-color', color[2][1][7]);
            estiker[2][4][6].setAttribute('data-color', color[2][1][0]);    estiker[2][4][7].setAttribute('data-color', color[2][1][3]);    estiker[2][4][8].setAttribute('data-color', color[2][1][6]);

            estiker[2][5][0].setAttribute('data-color', color[2][5][6]);    estiker[2][5][1].setAttribute('data-color', color[2][5][3]);    estiker[2][5][2].setAttribute('data-color', color[2][5][0]);
            estiker[2][5][3].setAttribute('data-color', color[2][5][7]);    estiker[2][5][4].setAttribute('data-color', color[2][5][4]);    estiker[2][5][5].setAttribute('data-color', color[2][5][1]);
            estiker[2][5][6].setAttribute('data-color', color[2][5][8]);    estiker[2][5][7].setAttribute('data-color', color[2][5][5]);    estiker[2][5][8].setAttribute('data-color', color[2][5][2]);

            //Cubo 4
            estiker[3][0][0].setAttribute('data-color', color[3][2][0]);    estiker[3][0][1].setAttribute('data-color', color[3][2][1]);    estiker[3][0][2].setAttribute('data-color', color[3][2][2]);
            estiker[3][0][3].setAttribute('data-color', color[3][2][3]);    estiker[3][0][4].setAttribute('data-color', color[3][2][4]);    estiker[3][0][5].setAttribute('data-color', color[3][2][5]);
            estiker[3][0][6].setAttribute('data-color', color[3][2][6]);    estiker[3][0][7].setAttribute('data-color', color[3][2][7]);    estiker[3][0][8].setAttribute('data-color', color[3][2][8]);

            estiker[3][1][0].setAttribute('data-color', color[3][1][6]);    estiker[3][1][1].setAttribute('data-color', color[3][1][3]);    estiker[3][1][2].setAttribute('data-color', color[3][1][0]);
            estiker[3][1][3].setAttribute('data-color', color[3][1][7]);    estiker[3][1][4].setAttribute('data-color', color[3][1][4]);    estiker[3][1][5].setAttribute('data-color', color[3][1][1]);
            estiker[3][1][6].setAttribute('data-color', color[3][1][8]);    estiker[3][1][7].setAttribute('data-color', color[3][1][5]);    estiker[3][1][8].setAttribute('data-color', color[3][1][2]);

            estiker[3][2][0].setAttribute('data-color', color[3][5][8]);    estiker[3][2][1].setAttribute('data-color', color[3][5][7]);    estiker[3][2][2].setAttribute('data-color', color[3][5][6]);
            estiker[3][2][3].setAttribute('data-color', color[3][5][5]);    estiker[3][2][4].setAttribute('data-color', color[3][5][4]);    estiker[3][2][5].setAttribute('data-color', color[3][5][3]);
            estiker[3][2][6].setAttribute('data-color', color[3][5][2]);    estiker[3][2][7].setAttribute('data-color', color[3][5][1]);    estiker[3][2][8].setAttribute('data-color', color[3][5][0]);

            estiker[3][3][0].setAttribute('data-color', color[3][3][2]);    estiker[3][3][1].setAttribute('data-color', color[3][3][5]);    estiker[3][3][2].setAttribute('data-color', color[3][3][8]);
            estiker[3][3][3].setAttribute('data-color', color[3][3][1]);    estiker[3][3][4].setAttribute('data-color', color[3][3][4]);    estiker[3][3][5].setAttribute('data-color', color[3][3][7]);
            estiker[3][3][6].setAttribute('data-color', color[3][3][0]);    estiker[3][3][7].setAttribute('data-color', color[3][3][3]);    estiker[3][3][8].setAttribute('data-color', color[3][3][6]);

            estiker[3][4][0].setAttribute('data-color', color[3][0][0]);    estiker[3][4][1].setAttribute('data-color', color[3][0][1]);    estiker[3][4][2].setAttribute('data-color', color[3][0][2]);
            estiker[3][4][3].setAttribute('data-color', color[3][0][3]);    estiker[3][4][4].setAttribute('data-color', color[3][0][4]);    estiker[3][4][5].setAttribute('data-color', color[3][0][5]);
            estiker[3][4][6].setAttribute('data-color', color[3][0][6]);    estiker[3][4][7].setAttribute('data-color', color[3][0][7]);    estiker[3][4][8].setAttribute('data-color', color[3][0][8]);

            estiker[3][5][0].setAttribute('data-color', color[3][4][8]);    estiker[3][5][1].setAttribute('data-color', color[3][4][7]);    estiker[3][5][2].setAttribute('data-color', color[3][4][6]);
            estiker[3][5][3].setAttribute('data-color', color[3][4][5]);    estiker[3][5][4].setAttribute('data-color', color[3][4][4]);    estiker[3][5][5].setAttribute('data-color', color[3][4][3]);
            estiker[3][5][6].setAttribute('data-color', color[3][4][2]);    estiker[3][5][7].setAttribute('data-color', color[3][4][1]);    estiker[3][5][8].setAttribute('data-color', color[3][4][0]);

            //Cubo 5
            estiker[4][0][0].setAttribute('data-color', color[4][0][6]);    estiker[4][0][1].setAttribute('data-color', color[4][0][3]);    estiker[4][0][2].setAttribute('data-color', color[4][0][0]);
            estiker[4][0][3].setAttribute('data-color', color[4][0][7]);    estiker[4][0][4].setAttribute('data-color', color[4][0][4]);    estiker[4][0][5].setAttribute('data-color', color[4][0][1]);
            estiker[4][0][6].setAttribute('data-color', color[4][0][8]);    estiker[4][0][7].setAttribute('data-color', color[4][0][5]);    estiker[4][0][8].setAttribute('data-color', color[4][0][2]);

            estiker[4][1][0].setAttribute('data-color', color[4][4][6]);    estiker[4][1][1].setAttribute('data-color', color[4][4][3]);    estiker[4][1][2].setAttribute('data-color', color[4][4][0]);
            estiker[4][1][3].setAttribute('data-color', color[4][4][7]);    estiker[4][1][4].setAttribute('data-color', color[4][4][4]);    estiker[4][1][5].setAttribute('data-color', color[4][4][1]);
            estiker[4][1][6].setAttribute('data-color', color[4][4][8]);    estiker[4][1][7].setAttribute('data-color', color[4][4][5]);    estiker[4][1][8].setAttribute('data-color', color[4][4][2]);

            estiker[4][2][0].setAttribute('data-color', color[4][1][6]);    estiker[4][2][1].setAttribute('data-color', color[4][1][3]);    estiker[4][2][2].setAttribute('data-color', color[4][1][0]);
            estiker[4][2][3].setAttribute('data-color', color[4][1][7]);    estiker[4][2][4].setAttribute('data-color', color[4][1][4]);    estiker[4][2][5].setAttribute('data-color', color[4][1][1]);
            estiker[4][2][6].setAttribute('data-color', color[4][1][8]);    estiker[4][2][7].setAttribute('data-color', color[4][1][5]);    estiker[4][2][8].setAttribute('data-color', color[4][1][2]);

            estiker[4][3][0].setAttribute('data-color', color[4][2][6]);    estiker[4][3][1].setAttribute('data-color', color[4][2][3]);    estiker[4][3][2].setAttribute('data-color', color[4][2][0]);
            estiker[4][3][3].setAttribute('data-color', color[4][2][7]);    estiker[4][3][4].setAttribute('data-color', color[4][2][4]);    estiker[4][3][5].setAttribute('data-color', color[4][2][1]);
            estiker[4][3][6].setAttribute('data-color', color[4][2][8]);    estiker[4][3][7].setAttribute('data-color', color[4][2][5]);    estiker[4][3][8].setAttribute('data-color', color[4][2][2]);

            estiker[4][4][0].setAttribute('data-color', color[4][3][6]);    estiker[4][4][1].setAttribute('data-color', color[4][3][3]);    estiker[4][4][2].setAttribute('data-color', color[4][3][0]);
            estiker[4][4][3].setAttribute('data-color', color[4][3][7]);    estiker[4][4][4].setAttribute('data-color', color[4][3][4]);    estiker[4][4][5].setAttribute('data-color', color[4][3][1]);
            estiker[4][4][6].setAttribute('data-color', color[4][3][8]);    estiker[4][4][7].setAttribute('data-color', color[4][3][5]);    estiker[4][4][8].setAttribute('data-color', color[4][3][2]);

            estiker[4][5][0].setAttribute('data-color', color[4][5][2]);    estiker[4][5][1].setAttribute('data-color', color[4][5][5]);    estiker[4][5][2].setAttribute('data-color', color[4][5][8]);
            estiker[4][5][3].setAttribute('data-color', color[4][5][1]);    estiker[4][5][4].setAttribute('data-color', color[4][5][4]);    estiker[4][5][5].setAttribute('data-color', color[4][5][7]);
            estiker[4][5][6].setAttribute('data-color', color[4][5][0]);    estiker[4][5][7].setAttribute('data-color', color[4][5][3]);    estiker[4][5][8].setAttribute('data-color', color[4][5][6]);

            //Cubo 6
            moverCubo(estiker, color, 5, 0);

            //Cubo 7 
            estiker[6][0][0].setAttribute('data-color', color[7][0][2]);    estiker[6][0][1].setAttribute('data-color', color[7][0][1]);    estiker[6][0][2].setAttribute('data-color', color[7][0][0]);
            estiker[6][0][3].setAttribute('data-color', color[7][0][5]);    estiker[6][0][4].setAttribute('data-color', color[7][0][4]);    estiker[6][0][5].setAttribute('data-color', color[7][0][3]);
            estiker[6][0][6].setAttribute('data-color', color[7][0][8]);    estiker[6][0][7].setAttribute('data-color', color[7][0][7]);    estiker[6][0][8].setAttribute('data-color', color[7][0][6]);

            estiker[6][1][0].setAttribute('data-color', color[7][1][2]);    estiker[6][1][1].setAttribute('data-color', color[7][1][1]);    estiker[6][1][2].setAttribute('data-color', color[7][1][0]);
            estiker[6][1][3].setAttribute('data-color', color[7][1][5]);    estiker[6][1][4].setAttribute('data-color', color[7][1][4]);    estiker[6][1][5].setAttribute('data-color', color[7][1][3]);
            estiker[6][1][6].setAttribute('data-color', color[7][1][8]);    estiker[6][1][7].setAttribute('data-color', color[7][1][7]);    estiker[6][1][8].setAttribute('data-color', color[7][1][6]);

            estiker[6][2][0].setAttribute('data-color', color[7][4][2]);    estiker[6][2][1].setAttribute('data-color', color[7][4][1]);    estiker[6][2][2].setAttribute('data-color', color[7][4][0]);
            estiker[6][2][3].setAttribute('data-color', color[7][4][5]);    estiker[6][2][4].setAttribute('data-color', color[7][4][4]);    estiker[6][2][5].setAttribute('data-color', color[7][4][3]);
            estiker[6][2][6].setAttribute('data-color', color[7][4][8]);    estiker[6][2][7].setAttribute('data-color', color[7][4][7]);    estiker[6][2][8].setAttribute('data-color', color[7][4][6]);

            estiker[6][3][0].setAttribute('data-color', color[7][3][2]);    estiker[6][3][1].setAttribute('data-color', color[7][3][1]);    estiker[6][3][2].setAttribute('data-color', color[7][3][0]);
            estiker[6][3][3].setAttribute('data-color', color[7][3][5]);    estiker[6][3][4].setAttribute('data-color', color[7][3][4]);    estiker[6][3][5].setAttribute('data-color', color[7][3][3]);
            estiker[6][3][6].setAttribute('data-color', color[7][3][8]);    estiker[6][3][7].setAttribute('data-color', color[7][3][7]);    estiker[6][3][8].setAttribute('data-color', color[7][3][6]);

            estiker[6][4][0].setAttribute('data-color', color[7][2][2]);    estiker[6][4][1].setAttribute('data-color', color[7][2][1]);    estiker[6][4][2].setAttribute('data-color', color[7][2][0]);
            estiker[6][4][3].setAttribute('data-color', color[7][2][5]);    estiker[6][4][4].setAttribute('data-color', color[7][2][4]);    estiker[6][4][5].setAttribute('data-color', color[7][2][3]);
            estiker[6][4][6].setAttribute('data-color', color[7][2][8]);    estiker[6][4][7].setAttribute('data-color', color[7][2][7]);    estiker[6][4][8].setAttribute('data-color', color[7][2][6]);

            estiker[6][5][0].setAttribute('data-color', color[7][5][2]);    estiker[6][5][1].setAttribute('data-color', color[7][5][1]);    estiker[6][5][2].setAttribute('data-color', color[7][5][0]);
            estiker[6][5][3].setAttribute('data-color', color[7][5][5]);    estiker[6][5][4].setAttribute('data-color', color[7][5][4]);    estiker[6][5][5].setAttribute('data-color', color[7][5][3]);
            estiker[6][5][6].setAttribute('data-color', color[7][5][8]);    estiker[6][5][7].setAttribute('data-color', color[7][5][7]);    estiker[6][5][8].setAttribute('data-color', color[7][5][6]);

            //Cubo 8
            estiker[7][0][0].setAttribute('data-color', color[5][0][2]);    estiker[7][0][1].setAttribute('data-color', color[5][0][1]);    estiker[7][0][2].setAttribute('data-color', color[5][0][0]);
            estiker[7][0][3].setAttribute('data-color', color[5][0][5]);    estiker[7][0][4].setAttribute('data-color', color[5][0][4]);    estiker[7][0][5].setAttribute('data-color', color[5][0][3]);
            estiker[7][0][6].setAttribute('data-color', color[5][0][8]);    estiker[7][0][7].setAttribute('data-color', color[5][0][7]);    estiker[7][0][8].setAttribute('data-color', color[5][0][6]);

            estiker[7][1][0].setAttribute('data-color', color[5][1][2]);    estiker[7][1][1].setAttribute('data-color', color[5][1][1]);    estiker[7][1][2].setAttribute('data-color', color[5][1][0]);
            estiker[7][1][3].setAttribute('data-color', color[5][1][5]);    estiker[7][1][4].setAttribute('data-color', color[5][1][4]);    estiker[7][1][5].setAttribute('data-color', color[5][1][3]);
            estiker[7][1][6].setAttribute('data-color', color[5][1][8]);    estiker[7][1][7].setAttribute('data-color', color[5][1][7]);    estiker[7][1][8].setAttribute('data-color', color[5][1][6]);

            estiker[7][2][0].setAttribute('data-color', color[5][4][2]);    estiker[7][2][1].setAttribute('data-color', color[5][4][1]);    estiker[7][2][2].setAttribute('data-color', color[5][4][0]);
            estiker[7][2][3].setAttribute('data-color', color[5][4][5]);    estiker[7][2][4].setAttribute('data-color', color[5][4][4]);    estiker[7][2][5].setAttribute('data-color', color[5][4][3]);
            estiker[7][2][6].setAttribute('data-color', color[5][4][8]);    estiker[7][2][7].setAttribute('data-color', color[5][4][7]);    estiker[7][2][8].setAttribute('data-color', color[5][4][6]);

            estiker[7][3][0].setAttribute('data-color', color[5][3][2]);    estiker[7][3][1].setAttribute('data-color', color[5][3][1]);    estiker[7][3][2].setAttribute('data-color', color[5][3][0]);
            estiker[7][3][3].setAttribute('data-color', color[5][3][5]);    estiker[7][3][4].setAttribute('data-color', color[5][3][4]);    estiker[7][3][5].setAttribute('data-color', color[5][3][3]);
            estiker[7][3][6].setAttribute('data-color', color[5][3][8]);    estiker[7][3][7].setAttribute('data-color', color[5][3][7]);    estiker[7][3][8].setAttribute('data-color', color[5][3][6]);

            estiker[7][4][0].setAttribute('data-color', color[5][2][2]);    estiker[7][4][1].setAttribute('data-color', color[5][2][1]);    estiker[7][4][2].setAttribute('data-color', color[5][2][0]);
            estiker[7][4][3].setAttribute('data-color', color[5][2][5]);    estiker[7][4][4].setAttribute('data-color', color[5][2][4]);    estiker[7][4][5].setAttribute('data-color', color[5][2][3]);
            estiker[7][4][6].setAttribute('data-color', color[5][2][8]);    estiker[7][4][7].setAttribute('data-color', color[5][2][7]);    estiker[7][4][8].setAttribute('data-color', color[5][2][6]);

            estiker[7][5][0].setAttribute('data-color', color[5][5][2]);    estiker[7][5][1].setAttribute('data-color', color[5][5][1]);    estiker[7][5][2].setAttribute('data-color', color[5][5][0]);
            estiker[7][5][3].setAttribute('data-color', color[5][5][5]);    estiker[7][5][4].setAttribute('data-color', color[5][5][4]);    estiker[7][5][5].setAttribute('data-color', color[5][5][3]);
            estiker[7][5][6].setAttribute('data-color', color[5][5][8]);    estiker[7][5][7].setAttribute('data-color', color[5][5][7]);    estiker[7][5][8].setAttribute('data-color', color[5][5][6]);
        }


        if (event.shiftKey && event.ctrlKey && (event.key === 'y' || event.key === 'Y')) { 
            
            color = borrarColor(hipercubo);
           
            //Cubo 1
            moverCubo(estiker, color, 0, 2);

            //Cubo 2
            estiker[1][0][0].setAttribute('data-color', color[1][1][0]);    estiker[1][0][1].setAttribute('data-color', color[1][1][1]);    estiker[1][0][2].setAttribute('data-color', color[1][1][2]);
            estiker[1][0][3].setAttribute('data-color', color[1][1][3]);    estiker[1][0][4].setAttribute('data-color', color[1][1][4]);    estiker[1][0][5].setAttribute('data-color', color[1][1][5]);
            estiker[1][0][6].setAttribute('data-color', color[1][1][6]);    estiker[1][0][7].setAttribute('data-color', color[1][1][7]);    estiker[1][0][8].setAttribute('data-color', color[1][1][8]);

            estiker[1][1][0].setAttribute('data-color', color[1][5][0]);    estiker[1][1][1].setAttribute('data-color', color[1][5][1]);    estiker[1][1][2].setAttribute('data-color', color[1][5][2]);
            estiker[1][1][3].setAttribute('data-color', color[1][5][3]);    estiker[1][1][4].setAttribute('data-color', color[1][5][4]);    estiker[1][1][5].setAttribute('data-color', color[1][5][5]);
            estiker[1][1][6].setAttribute('data-color', color[1][5][6]);    estiker[1][1][7].setAttribute('data-color', color[1][5][7]);    estiker[1][1][8].setAttribute('data-color', color[1][5][8]);

            estiker[1][2][0].setAttribute('data-color', color[1][2][2]);    estiker[1][2][1].setAttribute('data-color', color[1][2][5]);    estiker[1][2][2].setAttribute('data-color', color[1][2][8]);
            estiker[1][2][3].setAttribute('data-color', color[1][2][1]);    estiker[1][2][4].setAttribute('data-color', color[1][2][4]);    estiker[1][2][5].setAttribute('data-color', color[1][2][7]);
            estiker[1][2][6].setAttribute('data-color', color[1][2][0]);    estiker[1][2][7].setAttribute('data-color', color[1][2][3]);    estiker[1][2][8].setAttribute('data-color', color[1][2][6]);
            
            estiker[1][3][0].setAttribute('data-color', color[1][0][0]);    estiker[1][3][1].setAttribute('data-color', color[1][0][1]);    estiker[1][3][2].setAttribute('data-color', color[1][0][2]);
            estiker[1][3][3].setAttribute('data-color', color[1][0][3]);    estiker[1][3][4].setAttribute('data-color', color[1][0][4]);    estiker[1][3][5].setAttribute('data-color', color[1][0][5]);
            estiker[1][3][6].setAttribute('data-color', color[1][0][6]);    estiker[1][3][7].setAttribute('data-color', color[1][0][7]);    estiker[1][3][8].setAttribute('data-color', color[1][0][8]);

            estiker[1][4][0].setAttribute('data-color', color[1][4][6]);    estiker[1][4][1].setAttribute('data-color', color[1][4][3]);    estiker[1][4][2].setAttribute('data-color', color[1][4][0]);
            estiker[1][4][3].setAttribute('data-color', color[1][4][7]);    estiker[1][4][4].setAttribute('data-color', color[1][4][4]);    estiker[1][4][5].setAttribute('data-color', color[1][4][1]);
            estiker[1][4][6].setAttribute('data-color', color[1][4][8]);    estiker[1][4][7].setAttribute('data-color', color[1][4][5]);    estiker[1][4][8].setAttribute('data-color', color[1][4][2]);

            estiker[1][5][0].setAttribute('data-color', color[1][3][0]);    estiker[1][5][1].setAttribute('data-color', color[1][3][1]);    estiker[1][5][2].setAttribute('data-color', color[1][3][2]);
            estiker[1][5][3].setAttribute('data-color', color[1][3][3]);    estiker[1][5][4].setAttribute('data-color', color[1][3][4]);    estiker[1][5][5].setAttribute('data-color', color[1][3][5]);
            estiker[1][5][6].setAttribute('data-color', color[1][3][6]);    estiker[1][5][7].setAttribute('data-color', color[1][3][7]);    estiker[1][5][8].setAttribute('data-color', color[1][3][8]);

            //Cubo 3
            estiker[2][0][0].setAttribute('data-color', color[7][0][6]);    estiker[2][0][1].setAttribute('data-color', color[7][0][7]);    estiker[2][0][2].setAttribute('data-color', color[7][0][8]);
            estiker[2][0][3].setAttribute('data-color', color[7][0][3]);    estiker[2][0][4].setAttribute('data-color', color[7][0][4]);    estiker[2][0][5].setAttribute('data-color', color[7][0][5]);
            estiker[2][0][6].setAttribute('data-color', color[7][0][0]);    estiker[2][0][7].setAttribute('data-color', color[7][0][1]);    estiker[2][0][8].setAttribute('data-color', color[7][0][2]);

            estiker[2][1][0].setAttribute('data-color', color[7][3][6]);    estiker[2][1][1].setAttribute('data-color', color[7][3][7]);    estiker[2][1][2].setAttribute('data-color', color[7][3][8]);
            estiker[2][1][3].setAttribute('data-color', color[7][3][3]);    estiker[2][1][4].setAttribute('data-color', color[7][3][4]);    estiker[2][1][5].setAttribute('data-color', color[7][3][5]);
            estiker[2][1][6].setAttribute('data-color', color[7][3][0]);    estiker[2][1][7].setAttribute('data-color', color[7][3][1]);    estiker[2][1][8].setAttribute('data-color', color[7][3][2]);

            estiker[2][2][0].setAttribute('data-color', color[7][2][6]);    estiker[2][2][1].setAttribute('data-color', color[7][2][7]);    estiker[2][2][2].setAttribute('data-color', color[7][2][8]);
            estiker[2][2][3].setAttribute('data-color', color[7][2][3]);    estiker[2][2][4].setAttribute('data-color', color[7][2][4]);    estiker[2][2][5].setAttribute('data-color', color[7][2][5]);
            estiker[2][2][6].setAttribute('data-color', color[7][2][0]);    estiker[2][2][7].setAttribute('data-color', color[7][2][1]);    estiker[2][2][8].setAttribute('data-color', color[7][2][2]);

            estiker[2][3][0].setAttribute('data-color', color[7][1][6]);    estiker[2][3][1].setAttribute('data-color', color[7][1][7]);    estiker[2][3][2].setAttribute('data-color', color[7][1][8]);
            estiker[2][3][3].setAttribute('data-color', color[7][1][3]);    estiker[2][3][4].setAttribute('data-color', color[7][1][4]);    estiker[2][3][5].setAttribute('data-color', color[7][1][5]);
            estiker[2][3][6].setAttribute('data-color', color[7][1][0]);    estiker[2][3][7].setAttribute('data-color', color[7][1][1]);    estiker[2][3][8].setAttribute('data-color', color[7][1][2]);

            estiker[2][4][0].setAttribute('data-color', color[7][4][6]);    estiker[2][4][1].setAttribute('data-color', color[7][4][7]);    estiker[2][4][2].setAttribute('data-color', color[7][4][8]);
            estiker[2][4][3].setAttribute('data-color', color[7][4][3]);    estiker[2][4][4].setAttribute('data-color', color[7][4][4]);    estiker[2][4][5].setAttribute('data-color', color[7][4][5]);
            estiker[2][4][6].setAttribute('data-color', color[7][4][0]);    estiker[2][4][7].setAttribute('data-color', color[7][4][1]);    estiker[2][4][8].setAttribute('data-color', color[7][4][2]);

            estiker[2][5][0].setAttribute('data-color', color[7][5][6]);    estiker[2][5][1].setAttribute('data-color', color[7][5][7]);    estiker[2][5][2].setAttribute('data-color', color[7][5][8]);
            estiker[2][5][3].setAttribute('data-color', color[7][5][3]);    estiker[2][5][4].setAttribute('data-color', color[7][5][4]);    estiker[2][5][5].setAttribute('data-color', color[7][5][5]);
            estiker[2][5][6].setAttribute('data-color', color[7][5][0]);    estiker[2][5][7].setAttribute('data-color', color[7][5][1]);    estiker[2][5][8].setAttribute('data-color', color[7][5][2]);

            //Cubo 4
            estiker[3][0][0].setAttribute('data-color', color[3][3][0]);    estiker[3][0][1].setAttribute('data-color', color[3][3][1]);    estiker[3][0][2].setAttribute('data-color', color[3][3][2]);
            estiker[3][0][3].setAttribute('data-color', color[3][3][3]);    estiker[3][0][4].setAttribute('data-color', color[3][3][4]);    estiker[3][0][5].setAttribute('data-color', color[3][3][5]);
            estiker[3][0][6].setAttribute('data-color', color[3][3][6]);    estiker[3][0][7].setAttribute('data-color', color[3][3][7]);    estiker[3][0][8].setAttribute('data-color', color[3][3][8]);

            estiker[3][1][0].setAttribute('data-color', color[3][0][0]);    estiker[3][1][1].setAttribute('data-color', color[3][0][1]);    estiker[3][1][2].setAttribute('data-color', color[3][0][2]);
            estiker[3][1][3].setAttribute('data-color', color[3][0][3]);    estiker[3][1][4].setAttribute('data-color', color[3][0][4]);    estiker[3][1][5].setAttribute('data-color', color[3][0][5]);
            estiker[3][1][6].setAttribute('data-color', color[3][0][6]);    estiker[3][1][7].setAttribute('data-color', color[3][0][7]);    estiker[3][1][8].setAttribute('data-color', color[3][0][8]);

            estiker[3][2][0].setAttribute('data-color', color[3][2][6]);    estiker[3][2][1].setAttribute('data-color', color[3][2][3]);    estiker[3][2][2].setAttribute('data-color', color[3][2][0]);
            estiker[3][2][3].setAttribute('data-color', color[3][2][7]);    estiker[3][2][4].setAttribute('data-color', color[3][2][4]);    estiker[3][2][5].setAttribute('data-color', color[3][2][1]);
            estiker[3][2][6].setAttribute('data-color', color[3][2][8]);    estiker[3][2][7].setAttribute('data-color', color[3][2][5]);    estiker[3][2][8].setAttribute('data-color', color[3][2][2]);

            estiker[3][3][0].setAttribute('data-color', color[3][5][0]);    estiker[3][3][1].setAttribute('data-color', color[3][5][1]);    estiker[3][3][2].setAttribute('data-color', color[3][5][2]);
            estiker[3][3][3].setAttribute('data-color', color[3][5][3]);    estiker[3][3][4].setAttribute('data-color', color[3][5][4]);    estiker[3][3][5].setAttribute('data-color', color[3][5][5]);
            estiker[3][3][6].setAttribute('data-color', color[3][5][6]);    estiker[3][3][7].setAttribute('data-color', color[3][5][7]);    estiker[3][3][8].setAttribute('data-color', color[3][5][8]);

            estiker[3][4][0].setAttribute('data-color', color[3][4][2]);    estiker[3][4][1].setAttribute('data-color', color[3][4][5]);    estiker[3][4][2].setAttribute('data-color', color[3][4][8]);
            estiker[3][4][3].setAttribute('data-color', color[3][4][1]);    estiker[3][4][4].setAttribute('data-color', color[3][4][4]);    estiker[3][4][5].setAttribute('data-color', color[3][4][7]);
            estiker[3][4][6].setAttribute('data-color', color[3][4][0]);    estiker[3][4][7].setAttribute('data-color', color[3][4][3]);    estiker[3][4][8].setAttribute('data-color', color[3][4][6]);

            estiker[3][5][0].setAttribute('data-color', color[3][1][0]);    estiker[3][5][1].setAttribute('data-color', color[3][1][1]);    estiker[3][5][2].setAttribute('data-color', color[3][1][2]);
            estiker[3][5][3].setAttribute('data-color', color[3][1][3]);    estiker[3][5][4].setAttribute('data-color', color[3][1][4]);    estiker[3][5][5].setAttribute('data-color', color[3][1][5]);
            estiker[3][5][6].setAttribute('data-color', color[3][1][6]);    estiker[3][5][7].setAttribute('data-color', color[3][1][7]);    estiker[3][5][8].setAttribute('data-color', color[3][1][8]);
            
            //Cubo 5
            moverCubo(estiker, color, 4, 0);

            //Cubo 6
            estiker[5][0][0].setAttribute('data-color', color[5][0][2]);    estiker[5][0][1].setAttribute('data-color', color[5][0][5]);    estiker[5][0][2].setAttribute('data-color', color[5][0][8]);
            estiker[5][0][3].setAttribute('data-color', color[5][0][1]);    estiker[5][0][4].setAttribute('data-color', color[5][0][4]);    estiker[5][0][5].setAttribute('data-color', color[5][0][7]);
            estiker[5][0][6].setAttribute('data-color', color[5][0][0]);    estiker[5][0][7].setAttribute('data-color', color[5][0][3]);    estiker[5][0][8].setAttribute('data-color', color[5][0][6]);

            estiker[5][1][0].setAttribute('data-color', color[5][2][2]);    estiker[5][1][1].setAttribute('data-color', color[5][2][5]);    estiker[5][1][2].setAttribute('data-color', color[5][2][8]);
            estiker[5][1][3].setAttribute('data-color', color[5][2][1]);    estiker[5][1][4].setAttribute('data-color', color[5][2][4]);    estiker[5][1][5].setAttribute('data-color', color[5][2][7]);
            estiker[5][1][6].setAttribute('data-color', color[5][2][0]);    estiker[5][1][7].setAttribute('data-color', color[5][2][3]);    estiker[5][1][8].setAttribute('data-color', color[5][2][6]);

            estiker[5][2][0].setAttribute('data-color', color[5][3][2]);    estiker[5][2][1].setAttribute('data-color', color[5][3][5]);    estiker[5][2][2].setAttribute('data-color', color[5][3][8]);
            estiker[5][2][3].setAttribute('data-color', color[5][3][1]);    estiker[5][2][4].setAttribute('data-color', color[5][3][4]);    estiker[5][2][5].setAttribute('data-color', color[5][3][7]);
            estiker[5][2][6].setAttribute('data-color', color[5][3][0]);    estiker[5][2][7].setAttribute('data-color', color[5][3][3]);    estiker[5][2][8].setAttribute('data-color', color[5][3][6]);

            estiker[5][3][0].setAttribute('data-color', color[5][4][2]);    estiker[5][3][1].setAttribute('data-color', color[5][4][5]);    estiker[5][3][2].setAttribute('data-color', color[5][4][8]);
            estiker[5][3][3].setAttribute('data-color', color[5][4][1]);    estiker[5][3][4].setAttribute('data-color', color[5][4][4]);    estiker[5][3][5].setAttribute('data-color', color[5][4][7]);
            estiker[5][3][6].setAttribute('data-color', color[5][4][0]);    estiker[5][3][7].setAttribute('data-color', color[5][4][3]);    estiker[5][3][8].setAttribute('data-color', color[5][4][6]);

            estiker[5][4][0].setAttribute('data-color', color[5][1][2]);    estiker[5][4][1].setAttribute('data-color', color[5][1][5]);    estiker[5][4][2].setAttribute('data-color', color[5][1][8]);
            estiker[5][4][3].setAttribute('data-color', color[5][1][1]);    estiker[5][4][4].setAttribute('data-color', color[5][1][4]);    estiker[5][4][5].setAttribute('data-color', color[5][1][7]);
            estiker[5][4][6].setAttribute('data-color', color[5][1][0]);    estiker[5][4][7].setAttribute('data-color', color[5][1][3]);    estiker[5][4][8].setAttribute('data-color', color[5][1][6]);

            estiker[5][5][0].setAttribute('data-color', color[5][5][6]);    estiker[5][5][1].setAttribute('data-color', color[5][5][3]);    estiker[5][5][2].setAttribute('data-color', color[5][5][0]);
            estiker[5][5][3].setAttribute('data-color', color[5][5][7]);    estiker[5][5][4].setAttribute('data-color', color[5][5][4]);    estiker[5][5][5].setAttribute('data-color', color[5][5][1]);
            estiker[5][5][6].setAttribute('data-color', color[5][5][8]);    estiker[5][5][7].setAttribute('data-color', color[5][5][5]);    estiker[5][5][8].setAttribute('data-color', color[5][5][2]);

            //Cubo 7
            estiker[6][0][0].setAttribute('data-color', color[6][0][6]);    estiker[6][0][1].setAttribute('data-color', color[6][0][3]);    estiker[6][0][2].setAttribute('data-color', color[6][0][0]);
            estiker[6][0][3].setAttribute('data-color', color[6][0][7]);    estiker[6][0][4].setAttribute('data-color', color[6][0][4]);    estiker[6][0][5].setAttribute('data-color', color[6][0][1]);
            estiker[6][0][6].setAttribute('data-color', color[6][0][8]);    estiker[6][0][7].setAttribute('data-color', color[6][0][5]);    estiker[6][0][8].setAttribute('data-color', color[6][0][2]);

            estiker[6][1][0].setAttribute('data-color', color[6][4][6]);    estiker[6][1][1].setAttribute('data-color', color[6][4][3]);    estiker[6][1][2].setAttribute('data-color', color[6][4][0]);
            estiker[6][1][3].setAttribute('data-color', color[6][4][7]);    estiker[6][1][4].setAttribute('data-color', color[6][4][4]);    estiker[6][1][5].setAttribute('data-color', color[6][4][1]);
            estiker[6][1][6].setAttribute('data-color', color[6][4][8]);    estiker[6][1][7].setAttribute('data-color', color[6][4][5]);    estiker[6][1][8].setAttribute('data-color', color[6][4][2]);

            estiker[6][2][0].setAttribute('data-color', color[6][1][6]);    estiker[6][2][1].setAttribute('data-color', color[6][1][3]);    estiker[6][2][2].setAttribute('data-color', color[6][1][0]);
            estiker[6][2][3].setAttribute('data-color', color[6][1][7]);    estiker[6][2][4].setAttribute('data-color', color[6][1][4]);    estiker[6][2][5].setAttribute('data-color', color[6][1][1]);
            estiker[6][2][6].setAttribute('data-color', color[6][1][8]);    estiker[6][2][7].setAttribute('data-color', color[6][1][5]);    estiker[6][2][8].setAttribute('data-color', color[6][1][2]);

            estiker[6][3][0].setAttribute('data-color', color[6][2][6]);    estiker[6][3][1].setAttribute('data-color', color[6][2][3]);    estiker[6][3][2].setAttribute('data-color', color[6][2][0]);
            estiker[6][3][3].setAttribute('data-color', color[6][2][7]);    estiker[6][3][4].setAttribute('data-color', color[6][2][4]);    estiker[6][3][5].setAttribute('data-color', color[6][2][1]);
            estiker[6][3][6].setAttribute('data-color', color[6][2][8]);    estiker[6][3][7].setAttribute('data-color', color[6][2][5]);    estiker[6][3][8].setAttribute('data-color', color[6][2][2]);

            estiker[6][4][0].setAttribute('data-color', color[6][3][6]);    estiker[6][4][1].setAttribute('data-color', color[6][3][3]);    estiker[6][4][2].setAttribute('data-color', color[6][3][0]);
            estiker[6][4][3].setAttribute('data-color', color[6][3][7]);    estiker[6][4][4].setAttribute('data-color', color[6][3][4]);    estiker[6][4][5].setAttribute('data-color', color[6][3][1]);
            estiker[6][4][6].setAttribute('data-color', color[6][3][8]);    estiker[6][4][7].setAttribute('data-color', color[6][3][5]);    estiker[6][4][8].setAttribute('data-color', color[6][3][2]);

            estiker[6][5][0].setAttribute('data-color', color[6][5][2]);    estiker[6][5][1].setAttribute('data-color', color[6][5][5]);    estiker[6][5][2].setAttribute('data-color', color[6][5][8]);
            estiker[6][5][3].setAttribute('data-color', color[6][5][1]);    estiker[6][5][4].setAttribute('data-color', color[6][5][4]);    estiker[6][5][5].setAttribute('data-color', color[6][5][7]);
            estiker[6][5][6].setAttribute('data-color', color[6][5][0]);    estiker[6][5][7].setAttribute('data-color', color[6][5][3]);    estiker[6][5][8].setAttribute('data-color', color[6][5][6]);

            //Cubo 8
            estiker[7][0][0].setAttribute('data-color', color[4][0][6]);    estiker[7][0][1].setAttribute('data-color', color[4][0][7]);    estiker[7][0][2].setAttribute('data-color', color[4][0][8]);
            estiker[7][0][3].setAttribute('data-color', color[4][0][3]);    estiker[7][0][4].setAttribute('data-color', color[4][0][4]);    estiker[7][0][5].setAttribute('data-color', color[4][0][5]);
            estiker[7][0][6].setAttribute('data-color', color[4][0][0]);    estiker[7][0][7].setAttribute('data-color', color[4][0][1]);    estiker[7][0][8].setAttribute('data-color', color[4][0][2]);

            estiker[7][1][0].setAttribute('data-color', color[4][3][6]);    estiker[7][1][1].setAttribute('data-color', color[4][3][7]);    estiker[7][1][2].setAttribute('data-color', color[4][3][8]);
            estiker[7][1][3].setAttribute('data-color', color[4][3][3]);    estiker[7][1][4].setAttribute('data-color', color[4][3][4]);    estiker[7][1][5].setAttribute('data-color', color[4][3][5]);
            estiker[7][1][6].setAttribute('data-color', color[4][3][0]);    estiker[7][1][7].setAttribute('data-color', color[4][3][1]);    estiker[7][1][8].setAttribute('data-color', color[4][3][2]);

            estiker[7][2][0].setAttribute('data-color', color[4][2][6]);    estiker[7][2][1].setAttribute('data-color', color[4][2][7]);    estiker[7][2][2].setAttribute('data-color', color[4][2][8]);
            estiker[7][2][3].setAttribute('data-color', color[4][2][3]);    estiker[7][2][4].setAttribute('data-color', color[4][2][4]);    estiker[7][2][5].setAttribute('data-color', color[4][2][5]);
            estiker[7][2][6].setAttribute('data-color', color[4][2][0]);    estiker[7][2][7].setAttribute('data-color', color[4][2][1]);    estiker[7][2][8].setAttribute('data-color', color[4][2][2]);

            estiker[7][3][0].setAttribute('data-color', color[4][1][6]);    estiker[7][3][1].setAttribute('data-color', color[4][1][7]);    estiker[7][3][2].setAttribute('data-color', color[4][1][8]);
            estiker[7][3][3].setAttribute('data-color', color[4][1][3]);    estiker[7][3][4].setAttribute('data-color', color[4][1][4]);    estiker[7][3][5].setAttribute('data-color', color[4][1][5]);
            estiker[7][3][6].setAttribute('data-color', color[4][1][0]);    estiker[7][3][7].setAttribute('data-color', color[4][1][1]);    estiker[7][3][8].setAttribute('data-color', color[4][1][2]);

            estiker[7][4][0].setAttribute('data-color', color[4][4][6]);    estiker[7][4][1].setAttribute('data-color', color[4][4][7]);    estiker[7][4][2].setAttribute('data-color', color[4][4][8]);
            estiker[7][4][3].setAttribute('data-color', color[4][4][3]);    estiker[7][4][4].setAttribute('data-color', color[4][4][4]);    estiker[7][4][5].setAttribute('data-color', color[4][4][5]);
            estiker[7][4][6].setAttribute('data-color', color[4][4][0]);    estiker[7][4][7].setAttribute('data-color', color[4][4][1]);    estiker[7][4][8].setAttribute('data-color', color[4][4][2]);

            estiker[7][5][0].setAttribute('data-color', color[4][5][6]);    estiker[7][5][1].setAttribute('data-color', color[4][5][7]);    estiker[7][5][2].setAttribute('data-color', color[4][5][8]);
            estiker[7][5][3].setAttribute('data-color', color[4][5][3]);    estiker[7][5][4].setAttribute('data-color', color[4][5][4]);    estiker[7][5][5].setAttribute('data-color', color[4][5][5]);
            estiker[7][5][6].setAttribute('data-color', color[4][5][0]);    estiker[7][5][7].setAttribute('data-color', color[4][5][1]);    estiker[7][5][8].setAttribute('data-color', color[4][5][2]);

        }else if (event.ctrlKey && (event.key === 'y' || event.key === 'Y')) { 
            
            color = borrarColor(hipercubo);

            //Cubo 1
            moverCubo(estiker, color, 0, 4);

            //Cubo 2
            estiker[1][0][0].setAttribute('data-color', color[1][3][0]);    estiker[1][0][1].setAttribute('data-color', color[1][3][1]);    estiker[1][0][2].setAttribute('data-color', color[1][3][2]);
            estiker[1][0][3].setAttribute('data-color', color[1][3][3]);    estiker[1][0][4].setAttribute('data-color', color[1][3][4]);    estiker[1][0][5].setAttribute('data-color', color[1][3][5]);
            estiker[1][0][6].setAttribute('data-color', color[1][3][6]);    estiker[1][0][7].setAttribute('data-color', color[1][3][7]);    estiker[1][0][8].setAttribute('data-color', color[1][3][8]);

            estiker[1][1][0].setAttribute('data-color', color[1][0][0]);    estiker[1][1][1].setAttribute('data-color', color[1][0][1]);    estiker[1][1][2].setAttribute('data-color', color[1][0][2]);
            estiker[1][1][3].setAttribute('data-color', color[1][0][3]);    estiker[1][1][4].setAttribute('data-color', color[1][0][4]);    estiker[1][1][5].setAttribute('data-color', color[1][0][5]);
            estiker[1][1][6].setAttribute('data-color', color[1][0][6]);    estiker[1][1][7].setAttribute('data-color', color[1][0][7]);    estiker[1][1][8].setAttribute('data-color', color[1][0][8]);

            estiker[1][2][0].setAttribute('data-color', color[1][2][6]);    estiker[1][2][1].setAttribute('data-color', color[1][2][3]);    estiker[1][2][2].setAttribute('data-color', color[1][2][0]);
            estiker[1][2][3].setAttribute('data-color', color[1][2][7]);    estiker[1][2][4].setAttribute('data-color', color[1][2][4]);    estiker[1][2][5].setAttribute('data-color', color[1][2][1]);
            estiker[1][2][6].setAttribute('data-color', color[1][2][8]);    estiker[1][2][7].setAttribute('data-color', color[1][2][5]);    estiker[1][2][8].setAttribute('data-color', color[1][2][2]);

            estiker[1][3][0].setAttribute('data-color', color[1][5][0]);    estiker[1][3][1].setAttribute('data-color', color[1][5][1]);    estiker[1][3][2].setAttribute('data-color', color[1][5][2]);
            estiker[1][3][3].setAttribute('data-color', color[1][5][3]);    estiker[1][3][4].setAttribute('data-color', color[1][5][4]);    estiker[1][3][5].setAttribute('data-color', color[1][5][5]);
            estiker[1][3][6].setAttribute('data-color', color[1][5][6]);    estiker[1][3][7].setAttribute('data-color', color[1][5][7]);    estiker[1][3][8].setAttribute('data-color', color[1][5][8]);

            estiker[1][4][0].setAttribute('data-color', color[1][4][2]);    estiker[1][4][1].setAttribute('data-color', color[1][4][5]);    estiker[1][4][2].setAttribute('data-color', color[1][4][8]);
            estiker[1][4][3].setAttribute('data-color', color[1][4][1]);    estiker[1][4][4].setAttribute('data-color', color[1][4][4]);    estiker[1][4][5].setAttribute('data-color', color[1][4][7]);
            estiker[1][4][6].setAttribute('data-color', color[1][4][0]);    estiker[1][4][7].setAttribute('data-color', color[1][4][3]);    estiker[1][4][8].setAttribute('data-color', color[1][4][6]);

            estiker[1][5][0].setAttribute('data-color', color[1][1][0]);    estiker[1][5][1].setAttribute('data-color', color[1][1][1]);    estiker[1][5][2].setAttribute('data-color', color[1][1][2]);
            estiker[1][5][3].setAttribute('data-color', color[1][1][3]);    estiker[1][5][4].setAttribute('data-color', color[1][1][4]);    estiker[1][5][5].setAttribute('data-color', color[1][1][5]);
            estiker[1][5][6].setAttribute('data-color', color[1][1][6]);    estiker[1][5][7].setAttribute('data-color', color[1][1][7]);    estiker[1][5][8].setAttribute('data-color', color[1][1][8]);

            //Cubo 3
            moverCubo(estiker, color, 2, 0);

            //Cubo 4
            estiker[3][0][0].setAttribute('data-color', color[3][1][0]);    estiker[3][0][1].setAttribute('data-color', color[3][1][1]);    estiker[3][0][2].setAttribute('data-color', color[3][1][2]);
            estiker[3][0][3].setAttribute('data-color', color[3][1][3]);    estiker[3][0][4].setAttribute('data-color', color[3][1][4]);    estiker[3][0][5].setAttribute('data-color', color[3][1][5]);
            estiker[3][0][6].setAttribute('data-color', color[3][1][6]);    estiker[3][0][7].setAttribute('data-color', color[3][1][7]);    estiker[3][0][8].setAttribute('data-color', color[3][1][8]);

            estiker[3][1][0].setAttribute('data-color', color[3][5][0]);    estiker[3][1][1].setAttribute('data-color', color[3][5][1]);    estiker[3][1][2].setAttribute('data-color', color[3][5][2]);
            estiker[3][1][3].setAttribute('data-color', color[3][5][3]);    estiker[3][1][4].setAttribute('data-color', color[3][5][4]);    estiker[3][1][5].setAttribute('data-color', color[3][5][5]);
            estiker[3][1][6].setAttribute('data-color', color[3][5][6]);    estiker[3][1][7].setAttribute('data-color', color[3][5][7]);    estiker[3][1][8].setAttribute('data-color', color[3][5][8]);

            estiker[3][2][0].setAttribute('data-color', color[3][2][2]);    estiker[3][2][1].setAttribute('data-color', color[3][2][5]);    estiker[3][2][2].setAttribute('data-color', color[3][2][8]);
            estiker[3][2][3].setAttribute('data-color', color[3][2][1]);    estiker[3][2][4].setAttribute('data-color', color[3][2][4]);    estiker[3][2][5].setAttribute('data-color', color[3][2][7]);
            estiker[3][2][6].setAttribute('data-color', color[3][2][0]);    estiker[3][2][7].setAttribute('data-color', color[3][2][3]);    estiker[3][2][8].setAttribute('data-color', color[3][2][6]);

            estiker[3][3][0].setAttribute('data-color', color[3][0][0]);    estiker[3][3][1].setAttribute('data-color', color[3][0][1]);    estiker[3][3][2].setAttribute('data-color', color[3][0][2]);
            estiker[3][3][3].setAttribute('data-color', color[3][0][3]);    estiker[3][3][4].setAttribute('data-color', color[3][0][4]);    estiker[3][3][5].setAttribute('data-color', color[3][0][5]);
            estiker[3][3][6].setAttribute('data-color', color[3][0][6]);    estiker[3][3][7].setAttribute('data-color', color[3][0][7]);    estiker[3][3][8].setAttribute('data-color', color[3][0][8]);

            estiker[3][4][0].setAttribute('data-color', color[3][4][6]);    estiker[3][4][1].setAttribute('data-color', color[3][4][3]);    estiker[3][4][2].setAttribute('data-color', color[3][4][0]);
            estiker[3][4][3].setAttribute('data-color', color[3][4][7]);    estiker[3][4][4].setAttribute('data-color', color[3][4][4]);    estiker[3][4][5].setAttribute('data-color', color[3][4][1]);
            estiker[3][4][6].setAttribute('data-color', color[3][4][8]);    estiker[3][4][7].setAttribute('data-color', color[3][4][5]);    estiker[3][4][8].setAttribute('data-color', color[3][4][2]);

            estiker[3][5][0].setAttribute('data-color', color[3][3][0]);    estiker[3][5][1].setAttribute('data-color', color[3][3][1]);    estiker[3][5][2].setAttribute('data-color', color[3][3][2]);
            estiker[3][5][3].setAttribute('data-color', color[3][3][3]);    estiker[3][5][4].setAttribute('data-color', color[3][3][4]);    estiker[3][5][5].setAttribute('data-color', color[3][3][5]);
            estiker[3][5][6].setAttribute('data-color', color[3][3][6]);    estiker[3][5][7].setAttribute('data-color', color[3][3][7]);    estiker[3][5][8].setAttribute('data-color', color[3][3][8]);

            //Cubo 5
            estiker[4][0][0].setAttribute('data-color', color[7][0][6]);    estiker[4][0][1].setAttribute('data-color', color[7][0][7]);    estiker[4][0][2].setAttribute('data-color', color[7][0][8]);
            estiker[4][0][3].setAttribute('data-color', color[7][0][3]);    estiker[4][0][4].setAttribute('data-color', color[7][0][4]);    estiker[4][0][5].setAttribute('data-color', color[7][0][5]);
            estiker[4][0][6].setAttribute('data-color', color[7][0][0]);    estiker[4][0][7].setAttribute('data-color', color[7][0][1]);    estiker[4][0][8].setAttribute('data-color', color[7][0][2]);

            estiker[4][1][0].setAttribute('data-color', color[7][3][6]);    estiker[4][1][1].setAttribute('data-color', color[7][3][7]);    estiker[4][1][2].setAttribute('data-color', color[7][3][8]);
            estiker[4][1][3].setAttribute('data-color', color[7][3][3]);    estiker[4][1][4].setAttribute('data-color', color[7][3][4]);    estiker[4][1][5].setAttribute('data-color', color[7][3][5]);
            estiker[4][1][6].setAttribute('data-color', color[7][3][0]);    estiker[4][1][7].setAttribute('data-color', color[7][3][1]);    estiker[4][1][8].setAttribute('data-color', color[7][3][2]);

            estiker[4][2][0].setAttribute('data-color', color[7][2][6]);    estiker[4][2][1].setAttribute('data-color', color[7][2][7]);    estiker[4][2][2].setAttribute('data-color', color[7][2][8]);
            estiker[4][2][3].setAttribute('data-color', color[7][2][3]);    estiker[4][2][4].setAttribute('data-color', color[7][2][4]);    estiker[4][2][5].setAttribute('data-color', color[7][2][5]);
            estiker[4][2][6].setAttribute('data-color', color[7][2][0]);    estiker[4][2][7].setAttribute('data-color', color[7][2][1]);    estiker[4][2][8].setAttribute('data-color', color[7][2][2]);

            estiker[4][3][0].setAttribute('data-color', color[7][1][6]);    estiker[4][3][1].setAttribute('data-color', color[7][1][7]);    estiker[4][3][2].setAttribute('data-color', color[7][1][8]);
            estiker[4][3][3].setAttribute('data-color', color[7][1][3]);    estiker[4][3][4].setAttribute('data-color', color[7][1][4]);    estiker[4][3][5].setAttribute('data-color', color[7][1][5]);
            estiker[4][3][6].setAttribute('data-color', color[7][1][0]);    estiker[4][3][7].setAttribute('data-color', color[7][1][1]);    estiker[4][3][8].setAttribute('data-color', color[7][1][2]);

            estiker[4][4][0].setAttribute('data-color', color[7][4][6]);    estiker[4][4][1].setAttribute('data-color', color[7][4][7]);    estiker[4][4][2].setAttribute('data-color', color[7][4][8]);
            estiker[4][4][3].setAttribute('data-color', color[7][4][3]);    estiker[4][4][4].setAttribute('data-color', color[7][4][4]);    estiker[4][4][5].setAttribute('data-color', color[7][4][5]);
            estiker[4][4][6].setAttribute('data-color', color[7][4][0]);    estiker[4][4][7].setAttribute('data-color', color[7][4][1]);    estiker[4][4][8].setAttribute('data-color', color[7][4][2]);

            estiker[4][5][0].setAttribute('data-color', color[7][5][6]);    estiker[4][5][1].setAttribute('data-color', color[7][5][7]);    estiker[4][5][2].setAttribute('data-color', color[7][5][8]);
            estiker[4][5][3].setAttribute('data-color', color[7][5][3]);    estiker[4][5][4].setAttribute('data-color', color[7][5][4]);    estiker[4][5][5].setAttribute('data-color', color[7][5][5]);
            estiker[4][5][6].setAttribute('data-color', color[7][5][0]);    estiker[4][5][7].setAttribute('data-color', color[7][5][1]);    estiker[4][5][8].setAttribute('data-color', color[7][5][2]);

            //Cubo 6
            estiker[5][0][0].setAttribute('data-color', color[5][0][6]);    estiker[5][0][1].setAttribute('data-color', color[5][0][3]);    estiker[5][0][2].setAttribute('data-color', color[5][0][0]);
            estiker[5][0][3].setAttribute('data-color', color[5][0][7]);    estiker[5][0][4].setAttribute('data-color', color[5][0][4]);    estiker[5][0][5].setAttribute('data-color', color[5][0][1]);
            estiker[5][0][6].setAttribute('data-color', color[5][0][8]);    estiker[5][0][7].setAttribute('data-color', color[5][0][5]);    estiker[5][0][8].setAttribute('data-color', color[5][0][2]);

            estiker[5][1][0].setAttribute('data-color', color[5][4][6]);    estiker[5][1][1].setAttribute('data-color', color[5][4][3]);    estiker[5][1][2].setAttribute('data-color', color[5][4][0]);
            estiker[5][1][3].setAttribute('data-color', color[5][4][7]);    estiker[5][1][4].setAttribute('data-color', color[5][4][4]);    estiker[5][1][5].setAttribute('data-color', color[5][4][1]);
            estiker[5][1][6].setAttribute('data-color', color[5][4][8]);    estiker[5][1][7].setAttribute('data-color', color[5][4][5]);    estiker[5][1][8].setAttribute('data-color', color[5][4][2]);

            estiker[5][2][0].setAttribute('data-color', color[5][1][6]);    estiker[5][2][1].setAttribute('data-color', color[5][1][3]);    estiker[5][2][2].setAttribute('data-color', color[5][1][0]);
            estiker[5][2][3].setAttribute('data-color', color[5][1][7]);    estiker[5][2][4].setAttribute('data-color', color[5][1][4]);    estiker[5][2][5].setAttribute('data-color', color[5][1][1]);
            estiker[5][2][6].setAttribute('data-color', color[5][1][8]);    estiker[5][2][7].setAttribute('data-color', color[5][1][5]);    estiker[5][2][8].setAttribute('data-color', color[5][1][2]);

            estiker[5][3][0].setAttribute('data-color', color[5][2][6]);    estiker[5][3][1].setAttribute('data-color', color[5][2][3]);    estiker[5][3][2].setAttribute('data-color', color[5][2][0]);
            estiker[5][3][3].setAttribute('data-color', color[5][2][7]);    estiker[5][3][4].setAttribute('data-color', color[5][2][4]);    estiker[5][3][5].setAttribute('data-color', color[5][2][1]);
            estiker[5][3][6].setAttribute('data-color', color[5][2][8]);    estiker[5][3][7].setAttribute('data-color', color[5][2][5]);    estiker[5][3][8].setAttribute('data-color', color[5][2][2]);

            estiker[5][4][0].setAttribute('data-color', color[5][3][6]);    estiker[5][4][1].setAttribute('data-color', color[5][3][3]);    estiker[5][4][2].setAttribute('data-color', color[5][3][0]);
            estiker[5][4][3].setAttribute('data-color', color[5][3][7]);    estiker[5][4][4].setAttribute('data-color', color[5][3][4]);    estiker[5][4][5].setAttribute('data-color', color[5][3][1]);
            estiker[5][4][6].setAttribute('data-color', color[5][3][8]);    estiker[5][4][7].setAttribute('data-color', color[5][3][5]);    estiker[5][4][8].setAttribute('data-color', color[5][3][2]);

            estiker[5][5][0].setAttribute('data-color', color[5][5][2]);    estiker[5][5][1].setAttribute('data-color', color[5][5][5]);    estiker[5][5][2].setAttribute('data-color', color[5][5][8]);
            estiker[5][5][3].setAttribute('data-color', color[5][5][1]);    estiker[5][5][4].setAttribute('data-color', color[5][5][4]);    estiker[5][5][5].setAttribute('data-color', color[5][5][7]);
            estiker[5][5][6].setAttribute('data-color', color[5][5][0]);    estiker[5][5][7].setAttribute('data-color', color[5][5][3]);    estiker[5][5][8].setAttribute('data-color', color[5][5][6]);

            //Cubo 7
            estiker[6][0][0].setAttribute('data-color', color[6][0][2]);    estiker[6][0][1].setAttribute('data-color', color[6][0][5]);    estiker[6][0][2].setAttribute('data-color', color[6][0][8]);
            estiker[6][0][3].setAttribute('data-color', color[6][0][1]);    estiker[6][0][4].setAttribute('data-color', color[6][0][4]);    estiker[6][0][5].setAttribute('data-color', color[6][0][7]);
            estiker[6][0][6].setAttribute('data-color', color[6][0][0]);    estiker[6][0][7].setAttribute('data-color', color[6][0][3]);    estiker[6][0][8].setAttribute('data-color', color[6][0][6]);

            estiker[6][1][0].setAttribute('data-color', color[6][2][2]);    estiker[6][1][1].setAttribute('data-color', color[6][2][5]);    estiker[6][1][2].setAttribute('data-color', color[6][2][8]);
            estiker[6][1][3].setAttribute('data-color', color[6][2][1]);    estiker[6][1][4].setAttribute('data-color', color[6][2][4]);    estiker[6][1][5].setAttribute('data-color', color[6][2][7]);
            estiker[6][1][6].setAttribute('data-color', color[6][2][0]);    estiker[6][1][7].setAttribute('data-color', color[6][2][3]);    estiker[6][1][8].setAttribute('data-color', color[6][2][6]);

            estiker[6][2][0].setAttribute('data-color', color[6][3][2]);    estiker[6][2][1].setAttribute('data-color', color[6][3][5]);    estiker[6][2][2].setAttribute('data-color', color[6][3][8]);
            estiker[6][2][3].setAttribute('data-color', color[6][3][1]);    estiker[6][2][4].setAttribute('data-color', color[6][3][4]);    estiker[6][2][5].setAttribute('data-color', color[6][3][7]);
            estiker[6][2][6].setAttribute('data-color', color[6][3][0]);    estiker[6][2][7].setAttribute('data-color', color[6][3][3]);    estiker[6][2][8].setAttribute('data-color', color[6][3][6]);

            estiker[6][3][0].setAttribute('data-color', color[6][4][2]);    estiker[6][3][1].setAttribute('data-color', color[6][4][5]);    estiker[6][3][2].setAttribute('data-color', color[6][4][8]);
            estiker[6][3][3].setAttribute('data-color', color[6][4][1]);    estiker[6][3][4].setAttribute('data-color', color[6][4][4]);    estiker[6][3][5].setAttribute('data-color', color[6][4][7]);
            estiker[6][3][6].setAttribute('data-color', color[6][4][0]);    estiker[6][3][7].setAttribute('data-color', color[6][4][3]);    estiker[6][3][8].setAttribute('data-color', color[6][4][6]);

            estiker[6][4][0].setAttribute('data-color', color[6][1][2]);    estiker[6][4][1].setAttribute('data-color', color[6][1][5]);    estiker[6][4][2].setAttribute('data-color', color[6][1][8]);
            estiker[6][4][3].setAttribute('data-color', color[6][1][1]);    estiker[6][4][4].setAttribute('data-color', color[6][1][4]);    estiker[6][4][5].setAttribute('data-color', color[6][1][7]);
            estiker[6][4][6].setAttribute('data-color', color[6][1][0]);    estiker[6][4][7].setAttribute('data-color', color[6][1][3]);    estiker[6][4][8].setAttribute('data-color', color[6][1][6]);

            estiker[6][5][0].setAttribute('data-color', color[6][5][6]);    estiker[6][5][1].setAttribute('data-color', color[6][5][3]);    estiker[6][5][2].setAttribute('data-color', color[6][5][0]);
            estiker[6][5][3].setAttribute('data-color', color[6][5][7]);    estiker[6][5][4].setAttribute('data-color', color[6][5][4]);    estiker[6][5][5].setAttribute('data-color', color[6][5][1]);
            estiker[6][5][6].setAttribute('data-color', color[6][5][8]);    estiker[6][5][7].setAttribute('data-color', color[6][5][5]);    estiker[6][5][8].setAttribute('data-color', color[6][5][2]);

            //Cubo 8
            estiker[7][0][0].setAttribute('data-color', color[2][0][6]);    estiker[7][0][1].setAttribute('data-color', color[2][0][7]);    estiker[7][0][2].setAttribute('data-color', color[2][0][8]);
            estiker[7][0][3].setAttribute('data-color', color[2][0][3]);    estiker[7][0][4].setAttribute('data-color', color[2][0][4]);    estiker[7][0][5].setAttribute('data-color', color[2][0][5]);
            estiker[7][0][6].setAttribute('data-color', color[2][0][0]);    estiker[7][0][7].setAttribute('data-color', color[2][0][1]);    estiker[7][0][8].setAttribute('data-color', color[2][0][2]);

            estiker[7][1][0].setAttribute('data-color', color[2][3][6]);    estiker[7][1][1].setAttribute('data-color', color[2][3][7]);    estiker[7][1][2].setAttribute('data-color', color[2][3][8]);
            estiker[7][1][3].setAttribute('data-color', color[2][3][3]);    estiker[7][1][4].setAttribute('data-color', color[2][3][4]);    estiker[7][1][5].setAttribute('data-color', color[2][3][5]);
            estiker[7][1][6].setAttribute('data-color', color[2][3][0]);    estiker[7][1][7].setAttribute('data-color', color[2][3][1]);    estiker[7][1][8].setAttribute('data-color', color[2][3][2]);

            estiker[7][2][0].setAttribute('data-color', color[2][2][6]);    estiker[7][2][1].setAttribute('data-color', color[2][2][7]);    estiker[7][2][2].setAttribute('data-color', color[2][2][8]);
            estiker[7][2][3].setAttribute('data-color', color[2][2][3]);    estiker[7][2][4].setAttribute('data-color', color[2][2][4]);    estiker[7][2][5].setAttribute('data-color', color[2][2][5]);
            estiker[7][2][6].setAttribute('data-color', color[2][2][0]);    estiker[7][2][7].setAttribute('data-color', color[2][2][1]);    estiker[7][2][8].setAttribute('data-color', color[2][2][2]);

            estiker[7][3][0].setAttribute('data-color', color[2][1][6]);    estiker[7][3][1].setAttribute('data-color', color[2][1][7]);    estiker[7][3][2].setAttribute('data-color', color[2][1][8]);
            estiker[7][3][3].setAttribute('data-color', color[2][1][3]);    estiker[7][3][4].setAttribute('data-color', color[2][1][4]);    estiker[7][3][5].setAttribute('data-color', color[2][1][5]);
            estiker[7][3][6].setAttribute('data-color', color[2][1][0]);    estiker[7][3][7].setAttribute('data-color', color[2][1][1]);    estiker[7][3][8].setAttribute('data-color', color[2][1][2]);

            estiker[7][4][0].setAttribute('data-color', color[2][4][6]);    estiker[7][4][1].setAttribute('data-color', color[2][4][7]);    estiker[7][4][2].setAttribute('data-color', color[2][4][8]);
            estiker[7][4][3].setAttribute('data-color', color[2][4][3]);    estiker[7][4][4].setAttribute('data-color', color[2][4][4]);    estiker[7][4][5].setAttribute('data-color', color[2][4][5]);
            estiker[7][4][6].setAttribute('data-color', color[2][4][0]);    estiker[7][4][7].setAttribute('data-color', color[2][4][1]);    estiker[7][4][8].setAttribute('data-color', color[2][4][2]);

            estiker[7][5][0].setAttribute('data-color', color[2][5][6]);    estiker[7][5][1].setAttribute('data-color', color[2][5][7]);    estiker[7][5][2].setAttribute('data-color', color[2][5][8]);
            estiker[7][5][3].setAttribute('data-color', color[2][5][3]);    estiker[7][5][4].setAttribute('data-color', color[2][5][4]);    estiker[7][5][5].setAttribute('data-color', color[2][5][5]);
            estiker[7][5][6].setAttribute('data-color', color[2][5][0]);    estiker[7][5][7].setAttribute('data-color', color[2][5][1]);    estiker[7][5][8].setAttribute('data-color', color[2][5][2]);
        
        }


        if (event.shiftKey && event.ctrlKey && (event.key === 'z' || event.key === 'Z')) { 
    
            color = borrarColor(hipercubo);

            //Cubo 1
            moverCubo(estiker, color, 0, 3);

            //Cubo 2
            moverCubo(estiker, color, 1, 0);
           

        }else if (event.ctrlKey && (event.key === 'z' || event.key === 'Z')) { 
        
            color = borrarColor(hipercubo);

            //Cubo 1
            moverCubo(estiker, color, 0, 1);

            //Cubo 4
            moverCubo(estiker, color, 3, 0);

        }
    });

}else{
    console.log('Hiper cubo 1 Oculto')
}


function borrarColor(hipercubo) {

    const color = new Array(8).fill(null).map(() => 
        new Array(6).fill(null).map(() => 
            new Array(9).fill(null)
        )
    );

    for (let i = 0; i < hipercubo.length; i++) {

        for (let j = 0; j < hipercubo[0].length; j++) {

            for (let k = 0; k < hipercubo[0][0].length; k++) {

                let coor = document.getElementById(hipercubo[i][j][k]);

                color[i][j][k] = coor.getAttribute('data-color')
                coor.removeAttribute('data-color')
            }
        }
    }

    return color;
}

function estikers(hipercubo) {

    const estiker = new Array(8).fill(null).map(() => 
        new Array(6).fill(null).map(() => 
            new Array(9).fill(null)
        )
    );

    for (let i = 0; i < hipercubo.length; i++) {

        for (let j = 0; j < hipercubo[0].length; j++) {

            for (let k = 0; k < hipercubo[0][0].length; k++) {

                estiker[i][j][k] = document.getElementById(hipercubo[i][j][k]);
            }
        }
    }

    return estiker;
}

function moverCubo(estiker, color, a, b){
    for (let i = 0; i <  estiker[0].length; i++) {
        for (let j = 0; j <  estiker[0][0].length; j++) {
            estiker[a][i][j].setAttribute('data-color', color[b][i][j]); 
        }         
    }
}