const info = document.getElementById('info')

info.innerHTML = `
        <h2>Cortes</h2>
        <span>Frontal: S</span><br>
        <span>Sagital: M</span><br>
        <span>Transversal: E</span>

        <hr>

        <h2>Movimientos</h2>
        <span>Frente: F</span><br>
        <span>Izquierda: L</span><br>
        <span>Derecha: R</span><br>
        <span>Arriba: U</span><br>
        <span>Abajo: D</span><br>
        <span>Atras: B</span>

        <hr>

        <h2>Ejes 3D</h2>
        <span>X: X</span><br>
        <span>Y: Y</span><br>
        <span>Z: Z</span>

        <hr>

        <h2>Ejes 4D</h2>
        <span>X: Ctrl + X</span><br>
        <span>Y: Ctrl + Y</span><br>
        <span>Z: Ctrl + Z</span>

        <hr>

        <h4>Inversa</h4>
        <span>Shift + Tecla</span><br>`;


const cubos = document.getElementById('cubos')

for (let i = 1; i < 9; i++) {

        cubos.innerHTML += `<div id="cubo${i}"></div>`;
}