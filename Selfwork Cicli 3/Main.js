// Dichiarazione Variabili
let num;


// Istruzioni per distribuire le bevande
do {
    num = parseInt(prompt("Inserire un numero per la bevanda -- 1: acqua, 2: coca cola, 3: birra"));

    switch (true) {

        case num == 1:
            console.log("E' stata selezionata l'acqua");
            break;

        case num == 2:
            console.log("E' stata selezionata coca cola");
            break;

        case num == 3:
            console.log("E' stata selezionata birra");
            break;

        default:
            console.log("Numero non valido");
        
    }

} while (num != 1 && num != 2 && num != 3);
    