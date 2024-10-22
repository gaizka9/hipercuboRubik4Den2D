export function coordenadasHipercubo() {

    const hipercubo = new Array(8).fill(null).map(() => 
        new Array(6).fill(null).map(() => 
            new Array(9).fill(null)
        )
    );

    //CUBO 1
    hipercubo[0][0][0] = '1-W-0-0';   hipercubo[0][0][1] = '1-W-0-1';    hipercubo[0][0][2] = '1-W-0-2';   
    hipercubo[0][0][3] = '1-W-1-0';   hipercubo[0][0][4] = '1-W-1-1';    hipercubo[0][0][5] = '1-W-1-2';   
    hipercubo[0][0][6] = '1-W-2-0';   hipercubo[0][0][7] = '1-W-2-1';    hipercubo[0][0][8] = '1-W-2-2';   
        
    hipercubo[0][1][0] = '1-R-0-0';   hipercubo[0][1][1] = '1-R-0-1';    hipercubo[0][1][2] = '1-R-0-2';   
    hipercubo[0][1][3] = '1-R-1-0';   hipercubo[0][1][4] = '1-R-1-1';    hipercubo[0][1][5] = '1-R-1-2';   
    hipercubo[0][1][6] = '1-R-2-0';   hipercubo[0][1][7] = '1-R-2-1';    hipercubo[0][1][8] = '1-R-2-2';   

    hipercubo[0][2][0] = '1-G-0-0';   hipercubo[0][2][1] = '1-G-0-1';    hipercubo[0][2][2] = '1-G-0-2';   
    hipercubo[0][2][3] = '1-G-1-0';   hipercubo[0][2][4] = '1-G-1-1';    hipercubo[0][2][5] = '1-G-1-2';   
    hipercubo[0][2][6] = '1-G-2-0';   hipercubo[0][2][7] = '1-G-2-1';    hipercubo[0][2][8] = '1-G-2-2';   

    hipercubo[0][3][0] = '1-O-0-0';   hipercubo[0][3][1] = '1-O-0-1';    hipercubo[0][3][2] = '1-O-0-2';   
    hipercubo[0][3][3] = '1-O-1-0';   hipercubo[0][3][4] = '1-O-1-1';    hipercubo[0][3][5] = '1-O-1-2';   
    hipercubo[0][3][6] = '1-O-2-0';   hipercubo[0][3][7] = '1-O-2-1';    hipercubo[0][3][8] = '1-O-2-2';   

    hipercubo[0][4][0] = '1-B-0-0';   hipercubo[0][4][1] = '1-B-0-1';    hipercubo[0][4][2] = '1-B-0-2';   
    hipercubo[0][4][3] = '1-B-1-0';   hipercubo[0][4][4] = '1-B-1-1';    hipercubo[0][4][5] = '1-B-1-2';   
    hipercubo[0][4][6] = '1-B-2-0';   hipercubo[0][4][7] = '1-B-2-1';    hipercubo[0][4][8] = '1-B-2-2';   

    hipercubo[0][5][0] = '1-Y-0-0';   hipercubo[0][5][1] = '1-Y-0-1';    hipercubo[0][5][2] = '1-Y-0-2';   
    hipercubo[0][5][3] = '1-Y-1-0';   hipercubo[0][5][4] = '1-Y-1-1';    hipercubo[0][5][5] = '1-Y-1-2';   
    hipercubo[0][5][6] = '1-Y-2-0';   hipercubo[0][5][7] = '1-Y-2-1';    hipercubo[0][5][8] = '1-Y-2-2';   


    //CUBO 2
    hipercubo[1][0][0] = '2-Y-0-0';   hipercubo[1][0][1] = '2-Y-0-1';    hipercubo[1][0][2] = '2-Y-0-2';   
    hipercubo[1][0][3] = '2-Y-1-0';   hipercubo[1][0][4] = '2-Y-1-1';    hipercubo[1][0][5] = '2-Y-1-2';   
    hipercubo[1][0][6] = '2-Y-2-0';   hipercubo[1][0][7] = '2-Y-2-1';    hipercubo[1][0][8] = '2-Y-2-2';   
        
    hipercubo[1][1][0] = '2-BL-0-0';   hipercubo[1][1][1] = '2-BL-0-1';    hipercubo[1][1][2] = '2-BL-0-2';   
    hipercubo[1][1][3] = '2-BL-1-0';   hipercubo[1][1][4] = '2-BL-1-1';    hipercubo[1][1][5] = '2-BL-1-2';   
    hipercubo[1][1][6] = '2-BL-2-0';   hipercubo[1][1][7] = '2-BL-2-1';    hipercubo[1][1][8] = '2-BL-2-2';   

    hipercubo[1][2][0] = '2-PH-0-0';   hipercubo[1][2][1] = '2-PH-0-1';    hipercubo[1][2][2] = '2-PH-0-2';   
    hipercubo[1][2][3] = '2-PH-1-0';   hipercubo[1][2][4] = '2-PH-1-1';    hipercubo[1][2][5] = '2-PH-1-2';   
    hipercubo[1][2][6] = '2-PH-2-0';   hipercubo[1][2][7] = '2-PH-2-1';    hipercubo[1][2][8] = '2-PH-2-2';   

    hipercubo[1][3][0] = '2-T-0-0';   hipercubo[1][3][1] = '2-T-0-1';    hipercubo[1][3][2] = '2-T-0-2';   
    hipercubo[1][3][3] = '2-T-1-0';   hipercubo[1][3][4] = '2-T-1-1';    hipercubo[1][3][5] = '2-T-1-2';   
    hipercubo[1][3][6] = '2-T-2-0';   hipercubo[1][3][7] = '2-T-2-1';    hipercubo[1][3][8] = '2-T-2-2';   

    hipercubo[1][4][0] = '2-L-0-0';   hipercubo[1][4][1] = '2-L-0-1';    hipercubo[1][4][2] = '2-L-0-2';   
    hipercubo[1][4][3] = '2-L-1-0';   hipercubo[1][4][4] = '2-L-1-1';    hipercubo[1][4][5] = '2-L-1-2';   
    hipercubo[1][4][6] = '2-L-2-0';   hipercubo[1][4][7] = '2-L-2-1';    hipercubo[1][4][8] = '2-L-2-2';   

    hipercubo[1][5][0] = '2-C-0-0';   hipercubo[1][5][1] = '2-C-0-1';    hipercubo[1][5][2] = '2-C-0-2';   
    hipercubo[1][5][3] = '2-C-1-0';   hipercubo[1][5][4] = '2-C-1-1';    hipercubo[1][5][5] = '2-C-1-2';   
    hipercubo[1][5][6] = '2-C-2-0';   hipercubo[1][5][7] = '2-C-2-1';    hipercubo[1][5][8] = '2-C-2-2';   


    //CUBO 3
    hipercubo[2][0][0] = '3-GL-0-0';   hipercubo[2][0][1] = '3-GL-0-1';    hipercubo[2][0][2] = '3-GL-0-2';   
    hipercubo[2][0][3] = '3-GL-1-0';   hipercubo[2][0][4] = '3-GL-1-1';    hipercubo[2][0][5] = '3-GL-1-2';   
    hipercubo[2][0][6] = '3-GL-2-0';   hipercubo[2][0][7] = '3-GL-2-1';    hipercubo[2][0][8] = '3-GL-2-2';   
        
    hipercubo[2][1][0] = '3-V-0-0';   hipercubo[2][1][1] = '3-V-0-1';    hipercubo[2][1][2] = '3-V-0-2';   
    hipercubo[2][1][3] = '3-V-1-0';   hipercubo[2][1][4] = '3-V-1-1';    hipercubo[2][1][5] = '3-V-1-2';   
    hipercubo[2][1][6] = '3-V-2-0';   hipercubo[2][1][7] = '3-V-2-1';    hipercubo[2][1][8] = '3-V-2-2';   

    hipercubo[2][2][0] = '3-GD-0-0';   hipercubo[2][2][1] = '3-GD-0-1';    hipercubo[2][2][2] = '3-GD-0-2';   
    hipercubo[2][2][3] = '3-GD-1-0';   hipercubo[2][2][4] = '3-GD-1-1';    hipercubo[2][2][5] = '3-GD-1-2';   
    hipercubo[2][2][6] = '3-GD-2-0';   hipercubo[2][2][7] = '3-GD-2-1';    hipercubo[2][2][8] = '3-GD-2-2';   

    hipercubo[2][3][0] = '3-R-0-0';   hipercubo[2][3][1] = '3-R-0-1';    hipercubo[2][3][2] = '3-R-0-2';   
    hipercubo[2][3][3] = '3-R-1-0';   hipercubo[2][3][4] = '3-R-1-1';    hipercubo[2][3][5] = '3-R-1-2';   
    hipercubo[2][3][6] = '3-R-2-0';   hipercubo[2][3][7] = '3-R-2-1';    hipercubo[2][3][8] = '3-R-2-2';   

    hipercubo[2][4][0] = '3-BR-0-0';   hipercubo[2][4][1] = '3-BR-0-1';    hipercubo[2][4][2] = '3-BR-0-2';   
    hipercubo[2][4][3] = '3-BR-1-0';   hipercubo[2][4][4] = '3-BR-1-1';    hipercubo[2][4][5] = '3-BR-1-2';   
    hipercubo[2][4][6] = '3-BR-2-0';   hipercubo[2][4][7] = '3-BR-2-1';    hipercubo[2][4][8] = '3-BR-2-2';   

    hipercubo[2][5][0] = '3-BL-0-0';   hipercubo[2][5][1] = '3-BL-0-1';    hipercubo[2][5][2] = '3-BL-0-2';   
    hipercubo[2][5][3] = '3-BL-1-0';   hipercubo[2][5][4] = '3-BL-1-1';    hipercubo[2][5][5] = '3-BL-1-2';   
    hipercubo[2][5][6] = '3-BL-2-0';   hipercubo[2][5][7] = '3-BL-2-1';    hipercubo[2][5][8] = '3-BL-2-2';   


    //CUBO 4
    hipercubo[3][0][0] = '4-RD-0-0';   hipercubo[3][0][1] = '4-RD-0-1';    hipercubo[3][0][2] = '4-RD-0-2';   
    hipercubo[3][0][3] = '4-RD-1-0';   hipercubo[3][0][4] = '4-RD-1-1';    hipercubo[3][0][5] = '4-RD-1-2';   
    hipercubo[3][0][6] = '4-RD-2-0';   hipercubo[3][0][7] = '4-RD-2-1';    hipercubo[3][0][8] = '4-RD-2-2';   
        
    hipercubo[3][1][0] = '4-GL-0-0';   hipercubo[3][1][1] = '4-GL-0-1';    hipercubo[3][1][2] = '4-GL-0-2';   
    hipercubo[3][1][3] = '4-GL-1-0';   hipercubo[3][1][4] = '4-GL-1-1';    hipercubo[3][1][5] = '4-GL-1-2';   
    hipercubo[3][1][6] = '4-GL-2-0';   hipercubo[3][1][7] = '4-GL-2-1';    hipercubo[3][1][8] = '4-GL-2-2';   

    hipercubo[3][2][0] = '4-BS-0-0';   hipercubo[3][2][1] = '4-BS-0-1';    hipercubo[3][2][2] = '4-BS-0-2';   
    hipercubo[3][2][3] = '4-BS-1-0';   hipercubo[3][2][4] = '4-BS-1-1';    hipercubo[3][2][5] = '4-BS-1-2';   
    hipercubo[3][2][6] = '4-BS-2-0';   hipercubo[3][2][7] = '4-BS-2-1';    hipercubo[3][2][8] = '4-BS-2-2';   

    hipercubo[3][3][0] = '4-GO-0-0';   hipercubo[3][3][1] = '4-GO-0-1';    hipercubo[3][3][2] = '4-GO-0-2';   
    hipercubo[3][3][3] = '4-GO-1-0';   hipercubo[3][3][4] = '4-GO-1-1';    hipercubo[3][3][5] = '4-GO-1-2';   
    hipercubo[3][3][6] = '4-GO-2-0';   hipercubo[3][3][7] = '4-GO-2-1';    hipercubo[3][3][8] = '4-GO-2-2';   

    hipercubo[3][4][0] = '4-PS-0-0';   hipercubo[3][4][1] = '4-PS-0-1';    hipercubo[3][4][2] = '4-PS-0-2';   
    hipercubo[3][4][3] = '4-PS-1-0';   hipercubo[3][4][4] = '4-PS-1-1';    hipercubo[3][4][5] = '4-PS-1-2';   
    hipercubo[3][4][6] = '4-PS-2-0';   hipercubo[3][4][7] = '4-PS-2-1';    hipercubo[3][4][8] = '4-PS-2-2';   

    hipercubo[3][5][0] = '4-W-0-0';   hipercubo[3][5][1] = '4-W-0-1';    hipercubo[3][5][2] = '4-W-0-2';   
    hipercubo[3][5][3] = '4-W-1-0';   hipercubo[3][5][4] = '4-W-1-1';    hipercubo[3][5][5] = '4-W-1-2';   
    hipercubo[3][5][6] = '4-W-2-0';   hipercubo[3][5][7] = '4-W-2-1';    hipercubo[3][5][8] = '4-W-2-2';   


    //CUBO 5
    hipercubo[4][0][0] = '5-GO-0-0';   hipercubo[4][0][1] = '5-GO-0-1';    hipercubo[4][0][2] = '5-GO-0-2';   
    hipercubo[4][0][3] = '5-GO-1-0';   hipercubo[4][0][4] = '5-GO-1-1';    hipercubo[4][0][5] = '5-GO-1-2';   
    hipercubo[4][0][6] = '5-GO-2-0';   hipercubo[4][0][7] = '5-GO-2-1';    hipercubo[4][0][8] = '5-GO-2-2';   
        
    hipercubo[4][1][0] = '5-O-0-0';   hipercubo[4][1][1] = '5-O-0-1';    hipercubo[4][1][2] = '5-O-0-2';   
    hipercubo[4][1][3] = '5-O-1-0';   hipercubo[4][1][4] = '5-O-1-1';    hipercubo[4][1][5] = '5-O-1-2';   
    hipercubo[4][1][6] = '5-O-2-0';   hipercubo[4][1][7] = '5-O-2-1';    hipercubo[4][1][8] = '5-O-2-2';   

    hipercubo[4][2][0] = '5-P-0-0';   hipercubo[4][2][1] = '5-P-0-1';    hipercubo[4][2][2] = '5-P-0-2';   
    hipercubo[4][2][3] = '5-P-1-0';   hipercubo[4][2][4] = '5-P-1-1';    hipercubo[4][2][5] = '5-P-1-2';   
    hipercubo[4][2][6] = '5-P-2-0';   hipercubo[4][2][7] = '5-P-2-1';    hipercubo[4][2][8] = '5-P-2-2';   

    hipercubo[4][3][0] = '5-GM-0-0';   hipercubo[4][3][1] = '5-GM-0-1';    hipercubo[4][3][2] = '5-GM-0-2';   
    hipercubo[4][3][3] = '5-GM-1-0';   hipercubo[4][3][4] = '5-GM-1-1';    hipercubo[4][3][5] = '5-GM-1-2';   
    hipercubo[4][3][6] = '5-GM-2-0';   hipercubo[4][3][7] = '5-GM-2-1';    hipercubo[4][3][8] = '5-GM-2-2';   

    hipercubo[4][4][0] = '5-S-0-0';   hipercubo[4][4][1] = '5-S-0-1';    hipercubo[4][4][2] = '5-S-0-2';   
    hipercubo[4][4][3] = '5-S-1-0';   hipercubo[4][4][4] = '5-S-1-1';    hipercubo[4][4][5] = '5-S-1-2';   
    hipercubo[4][4][6] = '5-S-2-0';   hipercubo[4][4][7] = '5-S-2-1';    hipercubo[4][4][8] = '5-S-2-2';   

    hipercubo[4][5][0] = '5-T-0-0';   hipercubo[4][5][1] = '5-T-0-1';    hipercubo[4][5][2] = '5-T-0-2';   
    hipercubo[4][5][3] = '5-T-1-0';   hipercubo[4][5][4] = '5-T-1-1';    hipercubo[4][5][5] = '5-T-1-2';   
    hipercubo[4][5][6] = '5-T-2-0';   hipercubo[4][5][7] = '5-T-2-1';    hipercubo[4][5][8] = '5-T-2-2';   


    //CUBO 6
    hipercubo[5][0][0] = '6-BS-0-0';   hipercubo[5][0][1] = '6-BS-0-1';    hipercubo[5][0][2] = '6-BS-0-2';   
    hipercubo[5][0][3] = '6-BS-1-0';   hipercubo[5][0][4] = '6-BS-1-1';    hipercubo[5][0][5] = '6-BS-1-2';   
    hipercubo[5][0][6] = '6-BS-2-0';   hipercubo[5][0][7] = '6-BS-2-1';    hipercubo[5][0][8] = '6-BS-2-2';   
        
    hipercubo[5][1][0] = '6-GD-0-0';   hipercubo[5][1][1] = '6-GD-0-1';    hipercubo[5][1][2] = '6-GD-0-2';   
    hipercubo[5][1][3] = '6-GD-1-0';   hipercubo[5][1][4] = '6-GD-1-1';    hipercubo[5][1][5] = '6-GD-1-2';   
    hipercubo[5][1][6] = '6-GD-2-0';   hipercubo[5][1][7] = '6-GD-2-1';    hipercubo[5][1][8] = '6-GD-2-2';   

    hipercubo[5][2][0] = '6-CO-0-0';   hipercubo[5][2][1] = '6-CO-0-1';    hipercubo[5][2][2] = '6-CO-0-2';   
    hipercubo[5][2][3] = '6-CO-1-0';   hipercubo[5][2][4] = '6-CO-1-1';    hipercubo[5][2][5] = '6-CO-1-2';   
    hipercubo[5][2][6] = '6-CO-2-0';   hipercubo[5][2][7] = '6-CO-2-1';    hipercubo[5][2][8] = '6-CO-2-2';   

    hipercubo[5][3][0] = '6-P-0-0';   hipercubo[5][3][1] = '6-P-0-1';    hipercubo[5][3][2] = '6-P-0-2';   
    hipercubo[5][3][3] = '6-P-1-0';   hipercubo[5][3][4] = '6-P-1-1';    hipercubo[5][3][5] = '6-P-1-2';   
    hipercubo[5][3][6] = '6-P-2-0';   hipercubo[5][3][7] = '6-P-2-1';    hipercubo[5][3][8] = '6-P-2-2';   

    hipercubo[5][4][0] = '6-G-0-0';   hipercubo[5][4][1] = '6-G-0-1';    hipercubo[5][4][2] = '6-G-0-2';   
    hipercubo[5][4][3] = '6-G-1-0';   hipercubo[5][4][4] = '6-G-1-1';    hipercubo[5][4][5] = '6-G-1-2';   
    hipercubo[5][4][6] = '6-G-2-0';   hipercubo[5][4][7] = '6-G-2-1';    hipercubo[5][4][8] = '6-G-2-2';   

    hipercubo[5][5][0] = '6-PH-0-0';   hipercubo[5][5][1] = '6-PH-0-1';    hipercubo[5][5][2] = '6-PH-0-2';   
    hipercubo[5][5][3] = '6-PH-1-0';   hipercubo[5][5][4] = '6-PH-1-1';    hipercubo[5][5][5] = '6-PH-1-2';   
    hipercubo[5][5][6] = '6-PH-2-0';   hipercubo[5][5][7] = '6-PH-2-1';    hipercubo[5][5][8] = '6-PH-2-2';   


    //CUBO 7
    hipercubo[6][0][0] = '7-PS-0-0';   hipercubo[6][0][1] = '7-PS-0-1';    hipercubo[6][0][2] = '7-PS-0-2';   
    hipercubo[6][0][3] = '7-PS-1-0';   hipercubo[6][0][4] = '7-PS-1-1';    hipercubo[6][0][5] = '7-PS-1-2';   
    hipercubo[6][0][6] = '7-PS-2-0';   hipercubo[6][0][7] = '7-PS-2-1';    hipercubo[6][0][8] = '7-PS-2-2';   
        
    hipercubo[6][1][0] = '7-BR-0-0';   hipercubo[6][1][1] = '7-BR-0-1';    hipercubo[6][1][2] = '7-BR-0-2';   
    hipercubo[6][1][3] = '7-BR-1-0';   hipercubo[6][1][4] = '7-BR-1-1';    hipercubo[6][1][5] = '7-BR-1-2';   
    hipercubo[6][1][6] = '7-BR-2-0';   hipercubo[6][1][7] = '7-BR-2-1';    hipercubo[6][1][8] = '7-BR-2-2';   

    hipercubo[6][2][0] = '7-B-0-0';   hipercubo[6][2][1] = '7-B-0-1';    hipercubo[6][2][2] = '7-B-0-2';   
    hipercubo[6][2][3] = '7-B-1-0';   hipercubo[6][2][4] = '7-B-1-1';    hipercubo[6][2][5] = '7-B-1-2';   
    hipercubo[6][2][6] = '7-B-2-0';   hipercubo[6][2][7] = '7-B-2-1';    hipercubo[6][2][8] = '7-B-2-2';   

    hipercubo[6][3][0] = '7-S-0-0';   hipercubo[6][3][1] = '7-S-0-1';    hipercubo[6][3][2] = '7-S-0-2';   
    hipercubo[6][3][3] = '7-S-1-0';   hipercubo[6][3][4] = '7-S-1-1';    hipercubo[6][3][5] = '7-S-1-2';   
    hipercubo[6][3][6] = '7-S-2-0';   hipercubo[6][3][7] = '7-S-2-1';    hipercubo[6][3][8] = '7-S-2-2';   

    hipercubo[6][4][0] = '7-MO-0-0';   hipercubo[6][4][1] = '7-MO-0-1';    hipercubo[6][4][2] = '7-MO-0-2';   
    hipercubo[6][4][3] = '7-MO-1-0';   hipercubo[6][4][4] = '7-MO-1-1';    hipercubo[6][4][5] = '7-MO-1-2';   
    hipercubo[6][4][6] = '7-MO-2-0';   hipercubo[6][4][7] = '7-MO-2-1';    hipercubo[6][4][8] = '7-MO-2-2';   

    hipercubo[6][5][0] = '7-L-0-0';   hipercubo[6][5][1] = '7-L-0-1';    hipercubo[6][5][2] = '7-L-0-2';   
    hipercubo[6][5][3] = '7-L-1-0';   hipercubo[6][5][4] = '7-L-1-1';    hipercubo[6][5][5] = '7-L-1-2';   
    hipercubo[6][5][6] = '7-L-2-0';   hipercubo[6][5][7] = '7-L-2-1';    hipercubo[6][5][8] = '7-L-2-2';   


    //CUBO 8
    hipercubo[7][0][0] = '8-RD-0-0';   hipercubo[7][0][1] = '8-RD-0-1';    hipercubo[7][0][2] = '8-RD-0-2';   
    hipercubo[7][0][3] = '8-RD-1-0';   hipercubo[7][0][4] = '8-RD-1-1';    hipercubo[7][0][5] = '8-RD-1-2';   
    hipercubo[7][0][6] = '8-RD-2-0';   hipercubo[7][0][7] = '8-RD-2-1';    hipercubo[7][0][8] = '8-RD-2-2';   
        
    hipercubo[7][1][0] = '8-V-0-0';   hipercubo[7][1][1] = '8-V-0-1';    hipercubo[7][1][2] = '8-V-0-2';   
    hipercubo[7][1][3] = '8-V-1-0';   hipercubo[7][1][4] = '8-V-1-1';    hipercubo[7][1][5] = '8-V-1-2';   
    hipercubo[7][1][6] = '8-V-2-0';   hipercubo[7][1][7] = '8-V-2-1';    hipercubo[7][1][8] = '8-V-2-2';   

    hipercubo[7][2][0] = '8-CO-0-0';   hipercubo[7][2][1] = '8-CO-0-1';    hipercubo[7][2][2] = '8-CO-0-2';   
    hipercubo[7][2][3] = '8-CO-1-0';   hipercubo[7][2][4] = '8-CO-1-1';    hipercubo[7][2][5] = '8-CO-1-2';   
    hipercubo[7][2][6] = '8-CO-2-0';   hipercubo[7][2][7] = '8-CO-2-1';    hipercubo[7][2][8] = '8-CO-2-2';   

    hipercubo[7][3][0] = '8-GM-0-0';   hipercubo[7][3][1] = '8-GM-0-1';    hipercubo[7][3][2] = '8-GM-0-2';   
    hipercubo[7][3][3] = '8-GM-1-0';   hipercubo[7][3][4] = '8-GM-1-1';    hipercubo[7][3][5] = '8-GM-1-2';   
    hipercubo[7][3][6] = '8-GM-2-0';   hipercubo[7][3][7] = '8-GM-2-1';    hipercubo[7][3][8] = '8-GM-2-2';   

    hipercubo[7][4][0] = '8-MO-0-0';   hipercubo[7][4][1] = '8-MO-0-1';    hipercubo[7][4][2] = '8-MO-0-2';   
    hipercubo[7][4][3] = '8-MO-1-0';   hipercubo[7][4][4] = '8-MO-1-1';    hipercubo[7][4][5] = '8-MO-1-2';   
    hipercubo[7][4][6] = '8-MO-2-0';   hipercubo[7][4][7] = '8-MO-2-1';    hipercubo[7][4][8] = '8-MO-2-2';   

    hipercubo[7][5][0] = '8-C-0-0';   hipercubo[7][5][1] = '8-C-0-1';    hipercubo[7][5][2] = '8-C-0-2';   
    hipercubo[7][5][3] = '8-C-1-0';   hipercubo[7][5][4] = '8-C-1-1';    hipercubo[7][5][5] = '8-C-1-2';   
    hipercubo[7][5][6] = '8-C-2-0';   hipercubo[7][5][7] = '8-C-2-1';    hipercubo[7][5][8] = '8-C-2-2';   

    return hipercubo;
}