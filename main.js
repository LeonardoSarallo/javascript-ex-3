// Chiedi all’utente il cognome, inseriscilo in un
// array con altri cognomi e stampa la lista
// ordinata alfabeticamente. Scrivi a che
// posizione della lista il nuovo utente si trova

//Lista cognomi
var surnamelist = ['rossi', 'bianchi', 'verdi', 'gialli', 'marroni']
console.log(surnamelist);
//ottengo cognome
var mailutente = prompt('Inserisci il tuo cognome');
//inserisco il cognome utente nella lista dei cognomi
surnamelist.push(mailutente)
//stampo la lista in ordine alfabetico
surnamelist.sort();
console.log(surnamelist);

// for (var i = 0; surnamelist.length; i++)
var surnamecheck = false;
var container = 0;

while (!surnamecheck && container < surnamelist.length)
{
    if (mailutente == surnamelist[container]) {
      surnamecheck = true;
    }
    container++;
}
console.log(surnamecheck);
var position = surnamelist.indexOf()
