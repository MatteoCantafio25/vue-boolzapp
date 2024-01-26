// CONTROLLO SE HO COLLEGATO VUE TRAMITE CONSOLE
console.log("Vue ok", Vue);

// FACCIO IL DESTRUCTURING DEL METODO CREATEAPP DA VUE
const { createApp } = Vue;

const app = createApp({
    // DO IL NOME ALL'APPLICAZIONE
    name: "Vue Boolzapp",
    // USO LA FUNZIONE (DATA) PER FARMI RESTITUIRE L'OGGETTO
    data() {
        // CREO L'OGGETTO
        return {
            // PRENDO GLI ELEMENTI NELLA PAGE DATA
            user,
            contacts,
            // IMPOSTO CHE IL CURRENT ID PARTE DA 1
            currentId: 1,
            // IMPOSTO CHE ACTIVE PARTE FALSO
            active: false,
            // IMPOSTO CHE IL TESTO CERCATO PARTE VUOTO
            searchText: "",
            // IMPOSTO CHE IL TESTO DEL NUOVO MESSAGGIO PARTE VUOTO
            newMessageText: "",
        }
    },


    // COMPUTED

    computed: {

        // RICAVO IL CONTATTO CORRENTE
        currentContact() {
            // USO LA FUNZIONE FIND PER GIRARE IN CONTACTS E CAPIRE SE IL CURRENT ID E' UGUALE ALL'ID DEL CONTATTO SINGOLO
            return this.contacts.find(contact => this.currentId === contact.id);
        },

        // RICAVO LA CHAT CORRENTE
        currentChat() {
            // TRAMITE IL CONTATTO CORRENTE ENTRO NELL'ARRAY DI OGGETTI MESSAGES COSI' DA AVERE SOLO I MESSAGGI DI QUEL CONTATTO
            return this.currentContact.messages;
        },

        // CREO UNA FUNZIONE CHE MI DIA UN ARRAY CON I CONTATTI FILTRATI
        filteredContacts() {
            // CREO UNA COSTANTE CHE HA COME VALORE IL TESTO CERCATO TUTTO MINUSCOLO
            const searchTerm = this.searchText.toLowerCase();

            // CREO UN ARRAY FILTRATO CON SOLI ELEMENTI CHE HANNO IN COMUNE LE LETTERE DELL'ELEMENTO CERCATO TRAMITE LA FUNZIONE FILTER
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchTerm)
            );
        },

        // RICAVO L'ULTIMO MESSAGGIO
        lastMessage() {
            // RICAVO IL NUMERO DELL'INDICE DELL'ULTIMO ELEMENTO NEI MESSAGGI DEL CONTATTO CORRENTE
            return this.currentContact.messages.length - 1;
        },
    },


    // METODI
    methods: {
        // CREO UNA FUNZIONE PER PRENDERE L'URL DELL'AVATAR
        // DESTRUTTURO AVATAR E LO METTO COME PARAMETRO, COSI' CHE NON SI DEBBA SCRIVERE ES.CONTACT.AVATAR MA SOLO CONTACT
        getAvatarUrl({ avatar }) {
            // CREO CON I BACKTICK LA STRINGA CON LA PARTE DINAMICA AVATAR
            return `img/avatar${avatar}.jpg`
        },

        // TRAMITE UN PARAMETRO FORMATTO LA DATA(PARAMETRO) A MIO PIACIMENTO
        getFormattedDate(dateString) {
            // CREO UNA COSTANTE DATE, FUNZIONE NEW DATE E COME PARAMETRO IL PARAMETRO CHE VERRA' DATO NELLA NOSTRA FUNZIONE
            const date = new Date(dateString);

            // RICAVO LE INFORMAZIONI CHE MI SERVONO
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            // CREO IL FORMATO
            let format = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`

            // RESTITUISCO IL FORMATO CREATO
            return format

        },

        // CREO UNA FUNZIONE PER DETERMINARE SE IL CONTATTO CORRENTE E' ATTIVO O MENO
        isActive(id) {
            // FACCIO DIVENTARE IL CURRENT ID L'ID CHE MI VERRA' PASSATO COME PARAMETRO
            this.currentId = id;
            // CICLO L'ARRAY CONTACTS CON LA FUNZIONE FOREACH E DICO CHE SE L'ID DATO DAL PARAMETRO E' UGUALE ALL'ID DELL'CONTATTO CORRENTE ALLORA IL CONTATTO AVRA' ACTIVE TRUE INVECE SE L'ID E' DIVERSO ACTIVE SARA' FALSO
            this.contacts.forEach(contact => {
                if (id === contact.id) {
                    contact.active = true
                } else {
                    contact.active = false
                }
            });
        },


        // CREO UNA FUNZIONE PER AGGIUNGERE IL MESSAGGIO (PER NON SCRIVERE PIU' VOLTE LO STESSO BLOCCO DI CODICE)
        addMessage(status, text) {
            // CREO UN VERO E PROPRIO OGGETTO CHE VERRA' INSERITO NELL'ARRAY
            const newMessage = {
                // IMPOSTO CHE L'ID DEVE ESSERE LA DATA AL MILLISECONDO COSI' DA NON AVERE MAI ID UGUALI
                id: new Date().getTime(),
                // FORMATTO LA NUOVA DATA COME VOGLIO TRAMITE LA FUNZIONE
                date: this.getFormattedDate(new Date().toISOString()),
                // STATUS E TEXT VENGONO IMPOSTATI TRAMITE I PARAMETRI DELLA FUNZIONE
                status,
                text,
            }
            // INSERISCO IL NUOVO MESSAGGIO NELL'ARRAY DELLA CHAT CORRENTE
            this.currentChat.push(newMessage);
        },

        // CREO UNA FUNZIONE PER MANDARE UN MESSAGGIO
        sendMessage() {
            // SE NON C'E' CONTENUTO NEL NUOVO MESSAGGIO NON MANDARE NULLA
            if (!this.newMessageText) return

            // USO LA FUNZIONE ADDMESSAGE E METTO I PARAMETRI CHE VOGLIO
            this.addMessage("sent", this.newMessageText)

            // SVUOTO IL CAMPO
            this.newMessageText = "";

            // IMPOSTO CHE DOPO 1 SECONDO DEBBA ARRIVARE DA PARTE DEL CONTATTO UN MESSAGGIO CON SCRITTO "OK"
            setTimeout(() => {
                // USO LA FUNZIONE ADDMESSAGE E METTO I PARAMETRI CHE VOGLIO
                this.addMessage("received", "ok")
            }, 1000);
        }
    }
})

// MONTO L'APPLICAZIONE NELL'ELEMENTO SELEZIONATO TRA PARENTESI
app.mount("#root");