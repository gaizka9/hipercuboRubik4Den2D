const cubo1 = document.getElementById('cubo1');
const cubo2 = document.getElementById('cubo2');
const cubo3 = document.getElementById('cubo3');
const cubo4 = document.getElementById('cubo4');
const cubo5 = document.getElementById('cubo5');
const cubo6 = document.getElementById('cubo6');
const cubo7 = document.getElementById('cubo7');
const cubo8 = document.getElementById('cubo8');

// Función para crear una tabla 3x3 
function crearTabla(cara, className, num) {
    const tabla = document.createElement('table');
    tabla.classList.add(className);  // Añadir la clase 
    for (let i = 0; i < 3; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const celda = document.createElement('td');
            celda.setAttribute('id', `${num}-${cara}-${i}-${j}`);  // Añadir una id
            celda.setAttribute('data-color', cara);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

// Añadir las tablas en sus respectivas posiciones y clases
// cubo 1
cubo1.appendChild(crearTabla("Y", 'table-yellow', 1));  
cubo1.appendChild(crearTabla("R", 'table-red', 1));     
cubo1.appendChild(crearTabla("B", 'table-blue', 1));   
cubo1.appendChild(crearTabla("W", 'table-white', 1));   
cubo1.appendChild(crearTabla("G", 'table-green', 1));   
cubo1.appendChild(crearTabla("O", 'table-orange', 1));  



// cubo 2
cubo2.appendChild(crearTabla("C", 'table-cian', 2));  
cubo2.appendChild(crearTabla("BL", 'table-black', 2));     
cubo2.appendChild(crearTabla("L", 'table-lima', 2));   
cubo2.appendChild(crearTabla("Y", 'table-yellow', 2));   
cubo2.appendChild(crearTabla("PH", 'table-pink-hard', 2));   
cubo2.appendChild(crearTabla("T", 'table-turkesa', 2)); 



// cubo 3
cubo3.appendChild(crearTabla("BL", 'table-black', 3));  
cubo3.appendChild(crearTabla("V", 'table-violet', 3));     
cubo3.appendChild(crearTabla("BR", 'table-brown', 3));   
cubo3.appendChild(crearTabla("GL", 'table-grey-light', 3));   
cubo3.appendChild(crearTabla("GD", 'table-grey-dark', 3));   
cubo3.appendChild(crearTabla("R", 'table-red', 3)); 



// cubo 4
cubo4.appendChild(crearTabla("W", 'table-white', 4));  
cubo4.appendChild(crearTabla("GL", 'table-grei-light', 4));     
cubo4.appendChild(crearTabla("PS", 'table-pistacho', 4));   
cubo4.appendChild(crearTabla("RD", 'table-red-dark', 4));   
cubo4.appendChild(crearTabla("BS", 'table-blue-sea', 4));   
cubo4.appendChild(crearTabla("GO", 'table-gold', 4)); 


// cubo 5
cubo5.appendChild(crearTabla("T", 'table-turkesa', 5));  
cubo5.appendChild(crearTabla("O", 'table-orange', 5));     
cubo5.appendChild(crearTabla("S", 'table-silver', 5));   
cubo5.appendChild(crearTabla("GO", 'table-gold', 5));   
cubo5.appendChild(crearTabla("P", 'table-pink', 5));   
cubo5.appendChild(crearTabla("GM", 'table-green-menta', 5)); 


// cubo 6
cubo6.appendChild(crearTabla("PH", 'table-pink-hard', 6));  
cubo6.appendChild(crearTabla("GD", 'table-grey-dark', 6));     
cubo6.appendChild(crearTabla("G", 'table-green', 6));   
cubo6.appendChild(crearTabla("BS", 'table-blue-sea', 6));   
cubo6.appendChild(crearTabla("CO", 'table-coral', 6));   
cubo6.appendChild(crearTabla("P", 'table-pink', 6)); 


// cubo 7
cubo7.appendChild(crearTabla("L", 'table-lima', 7));  
cubo7.appendChild(crearTabla("BR", 'table-brown', 7));     
cubo7.appendChild(crearTabla("MO", 'table-morado', 7));   
cubo7.appendChild(crearTabla("PS", 'table-pistacho', 7));   
cubo7.appendChild(crearTabla("B", 'table-blue', 7));   
cubo7.appendChild(crearTabla("S", 'table-silver', 7));


// cubo 8
cubo8.appendChild(crearTabla("C", 'table-cian', 8));  
cubo8.appendChild(crearTabla("V", 'table-violet', 8));     
cubo8.appendChild(crearTabla("MO", 'table-morado', 8));   
cubo8.appendChild(crearTabla("RD", 'table-red-dark', 8));   
cubo8.appendChild(crearTabla("CO", 'table-coral', 8));   
cubo8.appendChild(crearTabla("GM", 'table-green-menta', 8));


const celdas = document.querySelectorAll('td');

celdas.forEach(celda => {
    celda.addEventListener('click', function() {
        console.log(`Coordenadas: ${this.id}`);
    });
});


//cubo1.style.visibility = "hidden";
cubo2.style.visibility = "hidden";
cubo3.style.visibility = "hidden";
cubo4.style.visibility = "hidden";
cubo5.style.visibility = "hidden";
cubo6.style.visibility = "hidden";
cubo7.style.visibility = "hidden";
cubo8.style.visibility = "hidden";