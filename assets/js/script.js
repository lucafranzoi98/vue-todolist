const { createApp } = Vue

createApp({
   data() {
      return {
         todos: [
            {
               text: "Mangiare",
               done: true
            },
            {
               text: "Bere",
               done: false
            },
            {
               text: "Dormire",
               done: true
            },
            {
               text: "Camminare",
               done: false
            }
         ]
      }
   },
   methods: {
      deleteTodo(i) {
         this.todos.splice(i, 1)
      }
   }
}).mount('#app')

/* 

MILESTONE 2 Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3 Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus: 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */