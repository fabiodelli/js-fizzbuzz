/*Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”

per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro?

Abbiamo usato un operatore  nei giorni scorsi che possiamo riusare in questi esercizio?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano o inglese per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
3. Facciamo attenzione all'ordine delle condizioni che usiamo

BONUS 1:
Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
Potete usare vari strumenti per farlo:
`append()` oppure
`.innerHTML`
`.insertAdjacentHTML()`
A voi la scelta

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.*/ 

//Strumenti

//cicle
//console.log
// document
// getElementById
// insertAdjacentHTML
// beforeend

//Procedimento

// ciclo per i numeri da 1 a 100
// se il numero è divisibile sia per 3 che per 5 con resto 0, stampiamo FizzBuzz
// se il numero è divisibile solo per 3 con resto 0, stampiamo Fizz
// se il numero è divisibile solo per 5 con resto 0, stampiamo Buzz
// altrimenti stampiamo il numero

// ciclo per i numeri da 1 a 100
for (let i = 1; i <= 100; i++){

// se il numero è divisibile sia per 3 che per 5 con resto 0, stampiamo FizzBuzz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

// bonus 1: aggiunta di elemento html nel container
    document.getElementById("container").insertAdjacentHTML("beforeend", "<div class='fizzbuzz fw-bold size'>FizzBuzz</div>"); 
  }
// se il numero è divisibile solo per 3 con rsto 0, stampiamo Fizz
  else if (i % 3 === 0) {
    console.log("Fizz");

// bonus 1: aggiunta di elemento html nel container
    document.getElementById("container").insertAdjacentHTML("beforeend", "<div class='fizz fw-bold size'>Fizz</div>");
  }
// se il numero è divisibile solo per 5 con resto 0, stampiamo Buzz
  else if (i % 5 === 0) {
    console.log("Buzz");

// bonus 1: aggiunta di elemento html nel container
    document.getElementById("container").insertAdjacentHTML("beforeend", "<div class='buzz fw-bold size'>Buzz</div>");    
  }
// altrimenti stampiamo il numero
  else {
    console.log(i);
// bonus 1: aggiunta di elemento html nel container
    document.getElementById("container").insertAdjacentHTML("beforeend", "<div class='number fw-bold size'>"+i+"</div>");
  } 
  
}
  
  