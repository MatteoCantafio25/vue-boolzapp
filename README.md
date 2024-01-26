# ESERCIZIO VUE BOOLZAPP

- Controllo se ho collegato vue tramite la console
- Faccio il destructuring del metodo Createapp da vue
+ Creo l'app
    - Do il nome all'applicazione 
    + Uso la funzione `data()` per farmi restituire l'oggetto
        - Creo l'oggetto
        - Prendo gli elementi nella page data
        - Imposto che il current id parte da 1 
        - Imposto che active parte falso 
        - Imposto che il testo cercato parte vuoto
        - Imposto che il testo del nuovo messaggio parte vuoto

+ Computed
    + Ricavo il contatto corrente
        - Uso la funzione `find` per reagire in contacts e capire se il current id è uguale all'id del contatto singolo
    + Ricavo la chat corrente
        - Tramite il contatto corrente entro nell'array di oggetti messages così da avere solo i messaggi di quel contatto
    + Creo una funzione che mi dia un array con i contatti filtrati
        - Creo una costante cha ha come valore il testo cercato tutto minscolo
        - Creo un array filtrato con soli elementi che hanno in comune le lettere dell'elemento cercato tramite la funzione `filter`
    + Ricavo l'ultimo messaggio
        - Ricavo il numero dell'indice dell'ultimo elemento nei messaggi del contatto corrente

+ Methods
    + Creo una funzione per prendere l'url dell'avatar, lo destrutturo e lo metto come parametro, così che non si debba scrivere ad esempio `contact.avatar` ma solo `contact `
        - Creo con i backtick la stringa con la parte dinamica avatar
    + Tramite un parametro formatto la data(parametro) a mio piacimento
        - Creo la costante date, funzione `new Date()` e come parametro il parametro che verrà dato nella nostra funzione
        - Ricavo le informazioni che mi servono
        - Creo il formato
        - Restituisco il formato creato
    + Creo una funzione per determinare se il contatto corrente è attivo o meno
        - Faccio diventare il `currentId` l'id che mi verrà passato come parametro
        - Ciclo l'array contacts la funzione `forEach` e dico che se l'id dato dal parametro è uguale all'id del contatto corrente allora il contatto avrà `active = true` invece se l'id è diverso `activer = false`
    + Creo una funzione per aggiungere il messaggio (per non scrivere più volte lo stesso blocco di codice)
        + Creo un vero e proprio oggetto che verrà inserito nell'array
            - Imposto che l'id deve essere la data al millisecondo così da non avere mai id uguali
            - Formatto la nuova data come voglio tramite la funzione
            - `status`e `text` vengono impostati tramite i parametri della funzione

        - Inserisco il nuovo messaggio nell'array della chat corrente
    + Creo una funzione per mandare un messaggio
        - Se non c'è niente contenuto nel `newMessageText` non mandare nulla
        - Uso la funzione `addMessage` e metto i parametri che voglio
        - Svuoto il campo
        + Imposto che dopo 1 secondo debba arrivare da parte del contatto un messaggio con scritto "ok"
            - Uso la funzione `addMessage` e metto i parametri che voglio
+ Monto l'applicazione nell'elemento selezionato tra parentesi `#root`

        

