
/*  L'utente clicca su un bottone

    -seleziono elemento della dom
    -aggiungo l'addeventlistener con la funzione anonima 
    
    -tutto quello che scrivo nella funzione sarà generato dopo il click */
    function select(maxSquare) {
        
        const buttonEl=document.querySelector('button');
        buttonEl.addEventListener('click', function buttonSquare (){
            /* il bottone genererà una griglia di gioco quadrata.
            -seleziono l'elemento container della dom
            -utilizzo il ciclo for
            -aggiungo i 100 div con classe square */
            
            const containerEl= document.querySelector('.container');
            for(i=1; i<=maxSquare; i++){
                //Ogni cella ha un numero progressivo, da 1 a 100 "${i}".
                const squareEl = document.createElement('div');
                squareEl.className='square';
                squareEl.innerText=(i);
                containerEl.insertAdjacentElement('beforeend', squareEl);
                
                
                
                /* Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
                -seleziono la squareEl e aggiungo addeventlistener
                -con il this aggiungo la classe */
                
                squareEl.addEventListener('click', function(){
                    this.classList.toggle('active')
                    console.log(this.innerText)
                })
            }
            
            /*  return selectElement  */
        }, {once:true });
    }
    function selectedDifficulty(){
        const selectElement = document.getElementById('select_difficulty')
        /* console.log(selectElement.value) */
        if (selectElement.value==='easy') {
            select(100)
           /*  const squareEl = document.querySelectorAll('.square')
            console.log(squareEl)
            squareEl.classList.remove('square')  */
        } else if(selectElement.value==='medium'){
            select(81)
       }  else if (selectElement.value==='hard'){
            select(49)
       }

    }
    
   /*  select(100) */


    /* select(100) */
        /* console.log('ciao') */
    /* 
    } else if(select==="hard"){
        select(49)
    }
     */
   /*  function select() {
        const selectElement = document.getElementById('select_difficulty').value
        console.log(selectElement)
        
        if (selectElement==='medium') {
        for(i=1; i<=81; i++){
            const squareEl = document.createElement('div');
            squareEl.className='square';
            squareEl.innerText=(i);
            containerEl.insertAdjacentElement('beforeend', squareEl);
        }
    }
} */


/* const cento= buttonSquare(100) */
    /* Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */