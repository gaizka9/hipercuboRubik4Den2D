export function coordenadasHipercubo() {

    const hipercubo = new Array(8).fill(null).map(() => 
        new Array(6).fill(null).map(() => 
            new Array(9).fill(null)
        )
    );


    const colores = [
        ['W', 'R', 'G', 'O', 'B', 'Y'],
        ['Y', 'BL', 'PH', 'T', 'L', 'C'],
        ['GL', 'V', 'GD', 'R', 'BR', 'BL'],
        ['RD', 'GL', 'BS', 'GO', 'PS', 'W'],
        ['GO', 'O', 'P', 'GM', 'S', 'T'],
        ['BS', 'GD', 'CO', 'P', 'G', 'PH'],
        ['PS', 'BR', 'B', 'S', 'MO', 'L'],
        ['RD', 'V', 'CO', 'GM', 'MO', 'C']
    ];
    var f, c;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {

            f = 0;
            c = 0;
            for (let k = 0; k < 9; k++) {

                if (c > 2) {
                    
                    f++
                    c = 0
                }
                
                hipercubo[i][j][k] = `${i+1}-${colores[i][j]}-${f}-${c}`;

                c++
            }
        }
    }

    return hipercubo;
}