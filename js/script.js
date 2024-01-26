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
            currentId: 1,
            active: false,
            searchText: "",
            newMessageText: "",
        }
    },

    computed: {
        currentContact() {
            return this.contacts.find(contact => this.currentId === contact.id);
        },

        currentChat() {
            return this.currentContact.messages;
        },

        filteredContacts() {
            const searchTerm = this.searchText.toLowerCase();

            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchTerm)
            );
        }
    },

    methods: {
        getAvatarUrl({ avatar }) {
            return `img/avatar${avatar}.jpg`
        },

        isActive(id) {
            this.currentId = id;
            this.contacts.forEach(contact => {
                if (id === contact.id) {
                    contact.active = true
                } else {
                    contact.active = false
                }
            });
        },

        sendMessage() {
            if (!this.newMessageText) return
            const newMessage = {
                id: new Date().getTime(),
                date: new Date().toLocaleDateString(),
                status: "sent",
                text: this.newMessageText,
            }

            this.currentChat.push(newMessage);

            this.newMessageText = "";
        }
    }
})

// MONTO L'APPLICAZIONE NELL'ELEMENTO SELEZIONATO TRA PARENTESI
app.mount("#root");