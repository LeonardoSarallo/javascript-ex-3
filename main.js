// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente. Scrivi a che
// posizione della lista il nuovo utente si trova

//Lista cognomi
var surnamelist = ['rossi', 'bianchi', 'verdi', 'gialli', 'marroni']
console.log(surnamelist);
//ottengo cognome
var surname = prompt('Inserisci il tuo cognome');
//inserisco il cognome utente nella lista dei cognomi
surnamelist.push(surname)
//stampo la lista in ordine alfabetico
surnamelist.sort();
console.log(surnamelist);
var surnamecheck = false;
var container = 0;
while (!surnamecheck && container < surnamelist.length)
{
    if (surname == surnamelist[container]) {
      surnamecheck = true;
    }
    container++;
}
console.log(surnamecheck);
//stampo a video l'ordine alfabetico del cognome dell'utente
var position = surnamelist.indexOf(surname);
console.log(position);
document.getElementById('orderposition').innerHTML = 'La tua posizione in base all\'ordine alfabetico è: ' + position;
