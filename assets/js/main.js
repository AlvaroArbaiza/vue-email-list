/*

Descrizione:
    Attraverso l'apposita API di Boolean (https://flynn.boolean.careers/exercises/api/random/mail) generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus:
    Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],
            lengthEmails: 9,
            boolean: false,
        
        };   
    },


    created(){
        this.generaEmails();
    },
    
    /* ----------------- METHODS ----------------- */
    methods: {

        // Funzione per la generazione di 10 emails con ciclo for
        generaEmails() {
            
            for (let i = 0; i < this.lengthEmails; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(  (resp) => {
                    
                    let email = (resp.data.response);
                    
                    if ( !this.emails.includes(email)){
                        
                        this.emails.push(email);
                    }
                    console.log(email);
                })
                
            }
            
            console.log(this.emails);
            

        },
    }
}).mount('#app')