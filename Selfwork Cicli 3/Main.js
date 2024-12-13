// Dichiarazione Variabili
let num = parseInt(prompt("Inserire un numero"));


// Istruzioni per distribuire le bevande
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
        num = parseInt(prompt("Numero non valido\nInserire un numero"));
        
}
