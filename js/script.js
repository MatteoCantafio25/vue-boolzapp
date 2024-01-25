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
            // PREDO GLI ELEMENTI NELLA PAGE DATA
            user,
            contacts,
            currentId: 1,
            active: false,
        }
    },

    computed: {
        currentContact() {
            return this.contacts.find((contact) => {
                if (this.currentId === contact.id) return contact
            })
        },
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
    }
})

// MONTO L'APPLICAZIONE NELL'ELEMENTO SELEZIONATO TRA PARENTESI
app.mount("#root");