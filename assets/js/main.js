
/*  L'utente clicca su un bottone

    -seleziono elemento della dom
    -aggiungo l'addeventlistener con la funzione anonima 
    
    -tutto quello che scrivo nella funzione sarà generato dopo il click */
    const buttonEl=document.querySelector('button');
    buttonEl.addEventListener('click', function(){
        //il bottone genererà una griglia di gioco quadrata.
        //sleziono l'elemento container della dom
        //utilizzo il ciclo for
        //aggiungo i 100 div con classe square
        const containerEl= document.querySelector('.container');
        for(i=1; i<=100; i++){
            const squareEl = `<div class="square">${i}</div> `;
            containerEl.insertAdjacentHTML('beforeend', squareEl);
            console.log(containerEl);
        }


    })

//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. 