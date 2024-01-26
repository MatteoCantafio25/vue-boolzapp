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
        },

        lastMessage() {
            return this.currentContact.messages.length - 1;
        },
    },

    methods: {
        getAvatarUrl({ avatar }) {
            return `img/avatar${avatar}.jpg`
        },

        getFormattedDate(dateString) {
            const date = new Date(dateString);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            let format = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`

            return format

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

        addMessage(status, text) {
            const newMessage = {
                id: new Date().getTime(),
                date: this.getFormattedDate(new Date().toISOString()),
                status,
                text,
            }
            this.currentChat.push(newMessage);
        },

        sendMessage() {
            if (!this.newMessageText) return

            this.addMessage("sent", this.newMessageText)
            this.newMessageText = "";

            setTimeout(() => {
                this.addMessage("received", "ok")
            }, 1000);
        }
    }
})

// MONTO L'APPLICAZIONE NELL'ELEMENTO SELEZIONATO TRA PARENTESI
app.mount("#root");