const { createApp } = Vue

createApp({
   data() {
      return {
         todo: "",
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
      },
      addTodo(text){
         this.todos.push({text, "done": false});
      }

   }
}).mount('#app')

/* 
Bonus: 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */